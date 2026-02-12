/**
 * Конфиг сайта. Ссылки на мессенджеры для кнопки «Записаться на консультацию».
 * Укажите полные URL (например, https://t.me/username или https://wa.me/+37368909912).
 * Пустая строка = ссылка не отображается в попапе.
 */
export const siteConfig = {
  messengers: {
    telegram: "https://t.me/+37368909912",
    whatsapp: "https://wa.me/+37368909912",
    viber: "viber://chat?number=+37368909912",
  },
} as const;
