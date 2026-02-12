import { Button } from "../ui/button"

type Props = {
  title: string
  description: string
}

export default function Hero({ title, description }: Props) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <Button>Get Started</Button>
    </div>
  )
}