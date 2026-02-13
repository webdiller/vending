import { Factory, Truck, Package, PackageCheck, ShoppingCart } from "lucide-react";
import { siteConfig } from "../config";
import telegramIcon from "../assets/icons/telegram.svg";
import whatsappIcon from "../assets/icons/whatsapp-3.svg";
import viberIcon from "../assets/icons/viber-icon.svg";

const SECTIONS = [
  { id: "hero", label: "О проекте" },
  { id: "system", label: "Система работы" },
  { id: "economics", label: "Экономика" },
  { id: "costs", label: "Затраты" },
  { id: "contacts", label: "Контакты" },
] as const;

export default function Presentation() {
  const arrowSvg = (
    <svg viewBox="0 0 60 24" fill="none" className="w-8 h-6 sm:w-10 sm:h-7 md:w-12 md:h-8 lg:w-14 lg:h-9 shrink-0">
      <path
        d="M2 12h52M48 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="text-gray-900 min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-green-100">
        <nav className="max-w-4xl mx-auto px-4 py-3 flex flex-wrap items-center justify-center gap-2 md:gap-4">
          {SECTIONS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-base md:text-lg text-green-800 hover:text-green-600 transition-colors px-2 py-1 rounded hover:bg-green-50 font-medium"
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main className="pt-16">
        {/* 1 Hero */}
        <section
          id="hero"
          className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-16 md:py-24"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-800">
            Energo Food
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-center max-w-2xl mt-2">
            Проект по установке вендинговых аппаратов. Торговое предложение для
            инвесторов — привлечение инвестиций.
          </p>
          <div className="flex flex-col xl:flex-row items-center justify-center gap-3 md:gap-4 max-w-4xl mx-auto mt-6 md:mt-12">
            <div className="flex flex-col items-center text-center p-4 md:p-6 bg-linear-to-b from-green-50 to-green-100 border-2 border-green-600 rounded-xl shadow-md w-full md:w-auto md:min-w-[160px] shrink-0">
              <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-green-600 text-white mb-2 md:mb-3">
                <Factory size={32} strokeWidth={1.8} className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 shrink-0" />
              </div>
              <div className="font-bold text-green-800 text-sm sm:text-base md:text-lg">Цех</div>
              <div className="text-gray-600 text-xs sm:text-sm md:text-base mt-1">Производит продукцию</div>
            </div>
            <div className="flex items-center justify-center text-green-600 rotate-90 xl:rotate-0 shrink-0">
              {arrowSvg}
            </div>
            <div className="flex flex-col items-center text-center p-4 md:p-6 bg-linear-to-b from-green-50 to-green-100 border-2 border-green-600 rounded-xl shadow-md w-full md:w-auto md:min-w-[160px] shrink-0">
              <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-green-600 text-white mb-2 md:mb-3">
                <Truck size={32} strokeWidth={1.8} className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 shrink-0" />
              </div>
              <div className="font-bold text-green-800 text-sm sm:text-base md:text-lg">Торговый отдел</div>
              <div className="text-gray-600 text-xs sm:text-sm md:text-base mt-1">Доставка, контроль, договоры</div>
            </div>
            <div className="flex items-center justify-center text-green-600 rotate-90 xl:rotate-0 shrink-0">
              {arrowSvg}
            </div>
            <div className="flex flex-col items-center text-center p-4 md:p-6 bg-linear-to-b from-green-50 to-green-100 border-2 border-green-600 rounded-xl shadow-md w-full md:w-auto md:min-w-[160px] shrink-0">
              <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-green-600 text-white mb-2 md:mb-3">
                <Package size={32} strokeWidth={1.8} className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 shrink-0" />
              </div>
              <div className="font-bold text-green-800 text-sm sm:text-base md:text-lg">Вендинговый аппарат</div>
              <div className="text-gray-600 text-xs sm:text-sm md:text-base mt-1">Продаёт продукцию</div>
            </div>
          </div>
        </section>

        {/* 2 Система работы */}
        <section id="system" className="px-4 py-16 md:py-24 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-800">
            Система работы
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-10">Цех производит, заработок на поставках</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 text-left max-w-4xl mx-auto">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-green-800">2.1 Сырники — поставка 150 бат</h3>
              <ul className="text-sm sm:text-base md:text-lg space-y-2 text-gray-700">
                <li>Цех отдаёт часть из прибыли торговому отделу</li>
                <li>Торговый отдел зарабатывает с поставок и обслуживания</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-green-800">2.2 Аппарат</h3>
              <ul className="text-sm sm:text-base md:text-lg space-y-2 text-gray-700">
                <li>Зарабатывает с % (накрутка)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3 Экономика */}
        <section id="economics" className="px-4 py-16 md:py-24 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-800">
            Экономика
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mt-8 md:mt-14">
            <div className="border-2 border-green-600 rounded-xl p-6 md:p-8 bg-green-50 text-center max-w-sm w-full">
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-green-600 text-white mx-auto mb-3">
                <PackageCheck size={36} strokeWidth={1.8} className="w-9 h-9 sm:w-10 sm:h-10 shrink-0" />
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">Поставка</p>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-600">150 бат</p>
              <p className="text-sm sm:text-base md:text-lg mt-1">Сырники</p>
            </div>
            <span className="text-green-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl rotate-90 xl:rotate-0 shrink-0">
              →
            </span>
            <div className="border-2 border-green-600 rounded-xl p-6 md:p-8 bg-green-50 text-center max-w-sm w-full">
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-green-600 text-white mx-auto mb-3">
                <ShoppingCart size={36} strokeWidth={1.8} className="w-9 h-9 sm:w-10 sm:h-10 shrink-0" />
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">Реализация</p>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-600">200 бат</p>
            </div>
          </div>
        </section>

        {/* 4 Затраты */}
        <section id="costs" className="px-4 py-16 md:py-24 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-800">
            Затраты / Что нужно для реализации?
          </h2>
          <ul className="text-left mt-8 md:mt-14 space-y-5 md:space-y-7 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            <li>
              <strong className="text-green-600">4.1</strong> Аппарат + микроволновка
              (подключить)
            </li>
            <li>
              <strong className="text-green-600">4.2</strong> Переделать дизайн
              аппарата под Energo Food
            </li>
            <li>
              <strong className="text-green-600">4.3</strong> Аренда (до 5000 бат /
              мес)
            </li>
            <li>
              <strong className="text-green-600">4.4</strong> Создать партнёрскую
              программу. Наша компания занимается управлением
            </li>
          </ul>
        </section>

        {/* 5 Контакты */}
        <section id="contacts" className="px-4 py-16 md:py-24 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-800">
            Свяжитесь с нами
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-10">Для обсуждения инвестиций и партнёрства</p>
          <div className="flex justify-center items-center gap-4 md:gap-6">
            {siteConfig.messengers.telegram && (
              <a
                href={siteConfig.messengers.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full hover:scale-110 transition-transform text-green-600 hover:text-green-700"
              >
                <img src={telegramIcon} alt="Telegram" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" />
              </a>
            )}
            {siteConfig.messengers.whatsapp && (
              <a
                href={siteConfig.messengers.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full hover:scale-110 transition-transform text-green-600 hover:text-green-700"
              >
                <img src={whatsappIcon} alt="WhatsApp" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" />
              </a>
            )}
            {siteConfig.messengers.viber && (
              <a
                href={siteConfig.messengers.viber}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Viber"
                className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full hover:scale-110 transition-transform text-green-600 hover:text-green-700"
              >
                <img src={viberIcon} alt="Viber" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" />
              </a>
            )}
          </div>
          <p className="mt-8 md:mt-10 text-sm sm:text-base text-gray-600">
            Telegram · WhatsApp · Viber
          </p>
        </section>
      </main>
    </div>
  );
}
