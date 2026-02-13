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
    <svg viewBox="0 0 60 24" fill="none" className="w-6 h-5 md:w-8 md:h-5 shrink-0">
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
              className="text-sm md:text-base text-green-800 hover:text-green-600 transition-colors px-2 py-1 rounded hover:bg-green-50"
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
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-green-800">
            Energo Food
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-center max-w-2xl mt-2">
            Проект по установке вендинговых аппаратов. Торговое предложение для
            инвесторов — привлечение инвестиций.
          </p>
          <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-2 md:gap-2 max-w-3xl mx-auto mt-4 md:mt-10">
            <div className="flex flex-col items-center text-center p-3 md:p-4 bg-linear-to-b from-green-50 to-green-100 border-2 border-green-600 rounded-xl shadow-md w-full md:w-auto md:min-w-[120px] shrink-0">
              <div className="flex items-center justify-center w-9 h-9 md:w-11 md:h-11 rounded-full bg-green-600 text-white mb-1 md:mb-2">
                <Factory size={24} strokeWidth={1.8} className="md:w-7 md:h-7 shrink-0" />
              </div>
              <div className="font-bold text-green-800 text-xs sm:text-sm md:text-base">Цех</div>
              <div className="text-gray-600 text-[10px] sm:text-xs md:text-sm mt-0.5">Производит продукцию</div>
            </div>
            <div className="flex items-center justify-center text-green-600 rotate-90 md:rotate-0 shrink-0">
              {arrowSvg}
            </div>
            <div className="flex flex-col items-center text-center p-3 md:p-4 bg-linear-to-b from-green-50 to-green-100 border-2 border-green-600 rounded-xl shadow-md w-full md:w-auto md:min-w-[120px] shrink-0">
              <div className="flex items-center justify-center w-9 h-9 md:w-11 md:h-11 rounded-full bg-green-600 text-white mb-1 md:mb-2">
                <Truck size={24} strokeWidth={1.8} className="md:w-7 md:h-7 shrink-0" />
              </div>
              <div className="font-bold text-green-800 text-xs sm:text-sm md:text-base">Торговый отдел</div>
              <div className="text-gray-600 text-[10px] sm:text-xs md:text-sm mt-0.5">Доставка, контроль, договоры</div>
            </div>
            <div className="flex items-center justify-center text-green-600 rotate-90 md:rotate-0 shrink-0">
              {arrowSvg}
            </div>
            <div className="flex flex-col items-center text-center p-3 md:p-4 bg-linear-to-b from-green-50 to-green-100 border-2 border-green-600 rounded-xl shadow-md w-full md:w-auto md:min-w-[120px] shrink-0">
              <div className="flex items-center justify-center w-9 h-9 md:w-11 md:h-11 rounded-full bg-green-600 text-white mb-1 md:mb-2">
                <Package size={24} strokeWidth={1.8} className="md:w-7 md:h-7 shrink-0" />
              </div>
              <div className="font-bold text-green-800 text-xs sm:text-sm md:text-base">Вендинговый аппарат</div>
              <div className="text-gray-600 text-[10px] sm:text-xs md:text-sm mt-0.5">Продаёт продукцию</div>
            </div>
          </div>
        </section>

        {/* 2 Система работы */}
        <section id="system" className="px-4 py-16 md:py-24 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-green-800">
            Система работы
          </h2>
          <p className="text-sm sm:text-base mb-4 md:mb-8">Цех производит, заработок на поставках</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 text-left max-w-4xl mx-auto">
            <div>
              <h3 className="text-base sm:text-lg md:text-xl mb-4 text-green-800">2.1 Сырники — поставка 150 бат</h3>
              <ul className="text-xs sm:text-sm md:text-base space-y-2 text-gray-700">
                <li>Цех отдаёт часть из прибыли торговому отделу</li>
                <li>Торговый отдел зарабатывает с поставок и обслуживания</li>
              </ul>
            </div>
            <div>
              <h3 className="text-base sm:text-lg md:text-xl mb-4 text-green-800">2.2 Аппарат</h3>
              <ul className="text-xs sm:text-sm md:text-base space-y-2 text-gray-700">
                <li>Зарабатывает с % (накрутка)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3 Экономика */}
        <section id="economics" className="px-4 py-16 md:py-24 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-green-800">
            Экономика
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 mt-6 md:mt-12">
            <div className="border-2 border-green-600 rounded-lg p-4 md:p-6 bg-green-50 text-center max-w-sm w-full">
              <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-600 text-white mx-auto mb-2">
                <PackageCheck size={24} strokeWidth={1.8} className="md:w-7 md:h-7 shrink-0" />
              </div>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">Поставка</p>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600">150 бат</p>
              <p className="text-xs sm:text-sm md:text-base mt-1">Сырники</p>
            </div>
            <span className="text-green-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl rotate-90 md:rotate-0 shrink-0">
              →
            </span>
            <div className="border-2 border-green-600 rounded-lg p-4 md:p-6 bg-green-50 text-center max-w-sm w-full">
              <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-600 text-white mx-auto mb-2">
                <ShoppingCart size={24} strokeWidth={1.8} className="md:w-7 md:h-7 shrink-0" />
              </div>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">Реализация</p>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600">200 бат</p>
            </div>
          </div>
        </section>

        {/* 4 Затраты */}
        <section id="costs" className="px-4 py-16 md:py-24 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-green-800">
            Затраты / Что нужно для реализации?
          </h2>
          <ul className="text-left mt-6 md:mt-12 space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
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
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-green-800">
            Свяжитесь с нами
          </h2>
          <p className="text-sm sm:text-base mb-4 md:mb-8">Для обсуждения инвестиций и партнёрства</p>
          <div className="flex justify-center items-center gap-2 md:gap-4">
            {siteConfig.messengers.telegram && (
              <a
                href={siteConfig.messengers.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full hover:scale-110 transition-transform text-green-600 hover:text-green-700"
              >
                <img src={telegramIcon} alt="Telegram" className="w-6 h-6 md:w-8 md:h-8" />
              </a>
            )}
            {siteConfig.messengers.whatsapp && (
              <a
                href={siteConfig.messengers.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full hover:scale-110 transition-transform text-green-600 hover:text-green-700"
              >
                <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6 md:w-8 md:h-8" />
              </a>
            )}
            {siteConfig.messengers.viber && (
              <a
                href={siteConfig.messengers.viber}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Viber"
                className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full hover:scale-110 transition-transform text-green-600 hover:text-green-700"
              >
                <img src={viberIcon} alt="Viber" className="w-6 h-6 md:w-8 md:h-8" />
              </a>
            )}
          </div>
          <p className="mt-6 md:mt-8 text-xs sm:text-sm text-gray-600">
            Telegram · WhatsApp · Viber
          </p>
        </section>
      </main>
    </div>
  );
}
