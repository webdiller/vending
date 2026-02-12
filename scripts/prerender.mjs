/**
 * Post-build prerender: serves dist, captures HTML with Puppeteer, overwrites dist/index.html
 * Run after `vite build` (e.g. npm run build).
 */
import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..', 'dist')
const port = 3456

const mime = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
}

const server = http.createServer((req, res) => {
  let url = req.url === '/' ? '/index.html' : req.url
  url = url.split('?')[0]
  const file = path.join(root, url)
  if (!file.startsWith(root)) {
    res.writeHead(403)
    res.end()
    return
  }
  fs.readFile(file, (err, data) => {
    if (err) {
      if (url !== '/index.html') {
        res.writeHead(404)
        res.end()
        return
      }
      fs.readFile(path.join(root, 'index.html'), (e, d) => {
        if (e) {
          res.writeHead(404)
          res.end()
          return
        }
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(d)
      })
      return
    }
    const ext = path.extname(file)
    const type = mime[ext] || 'application/octet-stream'
    res.writeHead(200, { 'Content-Type': type })
    res.end(data)
  })
})

const chromePaths = [
  process.env.PUPPETEER_EXECUTABLE_PATH,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
].filter(Boolean)

async function launchBrowser(puppeteer) {
  const isChromiumError = (msg) =>
    msg && (msg.includes('revision is not downloaded') || msg.includes('Could not find Chromium'))
  try {
    return await puppeteer.launch({ headless: 'new' })
  } catch (e) {
    if (!e.message || !isChromiumError(e.message)) throw e
    for (const exe of chromePaths) {
      if (fs.existsSync(exe)) {
        return await puppeteer.launch({ headless: 'new', executablePath: exe })
      }
    }
    console.error('Prerender: Chromium not found. Install with: npx puppeteer browsers install chrome')
    console.error('Or set PUPPETEER_EXECUTABLE_PATH to your Chrome path.')
    process.exit(1)
  }
}

server.listen(port, '127.0.0.1', async () => {
  const { default: puppeteer } = await import('puppeteer')
  const browser = await launchBrowser(puppeteer)
  const page = await browser.newPage()
  await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: 'networkidle0' })
  await new Promise((r) => setTimeout(r, 2000))
  const html = await page.content()
  await browser.close()
  server.close()

  const out = path.join(root, 'index.html')
  fs.writeFileSync(out, html, 'utf8')
  console.log('Prerender done: dist/index.html updated')
})
