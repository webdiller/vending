import { Factory, Truck, Package, Instagram, Mail } from "lucide-react";
import { siteConfig } from "../config";
import whatsappIcon from "../assets/icons/whatsapp-3.svg";

const SECTIONS = [
  { id: "hero", label: "О проекте" },
  { id: "how-it-works", label: "Как работает?" },
  { id: "what-we-offer", label: "Что мы предлагаем?" },
  { id: "profit-distribution", label: "Прибыль вкладчика" },
  { id: "contacts", label: "Контакты" },
] as const;

export default function Presentation() {
  const arrowSvg = (
    <svg viewBox="0 0 60 24" fill="none" className="w-4 h-3 540w:w-5 540w:h-4 sm:w-10 sm:h-7 md:w-12 md:h-8 lg:w-14 lg:h-9 shrink-0">
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <nav className="max-w-4xl mx-auto px-4 py-3 flex flex-wrap items-center justify-center gap-2 md:gap-4">
          {SECTIONS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-base md:text-lg text-gray-900 hover:text-gray-600 transition-colors px-2 py-1 rounded hover:bg-gray-100 font-medium"
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            <img width={1280} height={392} src="./logo.jpeg" alt="Energo food group"/>
          </h2>
          <div className="text-base text-balance space-y-4 sm:text-lg md:text-xl text-center max-w-6xl mt-2">
            <p>Выгодное коммерческое предложение для партнеров. Проект по установке вендинговых аппаратов.</p>
            <p>Компания Energo Food Group занимается производством продуктов питания и торговлей. Мы поставляем продукты питания в кафе, рестораны, отели, сауны, магазины и другие заведения в Королевстве Таиланд.</p>
            <p>Нашей компанией была разработана производственно-торговая система, которая обогащает своих вкладчиков.</p>
          </div>
          <div className="flex flex-col 540w:flex-row items-center justify-center gap-3 540w:gap-2 md:gap-4 max-w-4xl mx-auto mt-6 md:mt-12 540w:flex-nowrap">
            <div className="flex flex-col items-center text-center p-4 540w:p-2 540w:min-w-0 md:p-6 bg-linear-to-b from-gray-100 to-gray-200 border-2 border-gray-900 rounded-xl shadow-md w-full 540w:flex-1 540w:max-w-[140px] md:flex-none md:max-w-none md:w-auto md:min-w-[160px] shrink-0">
              <div className="flex items-center justify-center w-12 h-12 540w:w-9 540w:h-9 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gray-900 text-white mb-2 540w:mb-1 md:mb-3">
                <Factory size={32} strokeWidth={1.8} className="w-7 h-7 540w:w-5 540w:h-5 sm:w-8 sm:h-8 md:w-9 md:h-9 shrink-0" />
              </div>
              <div className="font-bold text-gray-900 text-sm 540w:text-xs sm:text-base md:text-lg">Цех</div>
              <div className="text-gray-600 text-xs 540w:text-[10px] sm:text-sm md:text-base mt-1 540w:mt-0.5">Производит продукцию</div>
            </div>
            <div className="flex items-center justify-center text-gray-900 rotate-90 540w:rotate-0 shrink-0">
              {arrowSvg}
            </div>
            <div className="flex flex-col items-center text-center p-4 540w:p-2 540w:min-w-0 md:p-6 bg-linear-to-b from-gray-100 to-gray-200 border-2 border-gray-900 rounded-xl shadow-md w-full 540w:flex-1 540w:max-w-[140px] md:flex-none md:max-w-none md:w-auto md:min-w-[160px] shrink-0">
              <div className="flex items-center justify-center w-12 h-12 540w:w-9 540w:h-9 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gray-900 text-white mb-2 540w:mb-1 md:mb-3">
                <Truck size={32} strokeWidth={1.8} className="w-7 h-7 540w:w-5 540w:h-5 sm:w-8 sm:h-8 md:w-9 md:h-9 shrink-0" />
              </div>
              <div className="font-bold text-gray-900 text-sm 540w:text-xs sm:text-base md:text-lg">Торговый отдел</div>
              <div className="text-gray-600 text-xs 540w:text-[10px] sm:text-sm md:text-base mt-1 540w:mt-0.5">Доставка, контроль, договоры</div>
            </div>
            <div className="flex items-center justify-center text-gray-900 rotate-90 540w:rotate-0 shrink-0">
              {arrowSvg}
            </div>
            <div className="flex flex-col items-center text-center p-4 540w:p-2 540w:min-w-0 md:p-6 bg-linear-to-b from-gray-100 to-gray-200 border-2 border-gray-900 rounded-xl shadow-md w-full 540w:flex-1 540w:max-w-[140px] md:flex-none md:max-w-none md:w-auto md:min-w-[160px] shrink-0">
              <div className="flex items-center justify-center w-12 h-12 540w:w-9 540w:h-9 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gray-900 text-white mb-2 540w:mb-1 md:mb-3">
                <Package size={32} strokeWidth={1.8} className="w-7 h-7 540w:w-5 540w:h-5 sm:w-8 sm:h-8 md:w-9 md:h-9 shrink-0" />
              </div>
              <div className="font-bold text-gray-900 text-sm 540w:text-xs sm:text-base md:text-lg leading-tight">Вендинговый аппарат / торговая точка</div>
              <div className="text-gray-600 text-xs 540w:text-[10px] sm:text-sm md:text-base mt-1 540w:mt-0.5">Продаёт продукцию</div>
            </div>
          </div>
        </section>

        {/* 2 Как работает? */}
        <section id="how-it-works" className="px-4 py-16 md:py-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-8 md:mb-12">
            Как работает?
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-base sm:text-lg md:text-xl text-gray-700">
            <p>
              Цех производит готовые замороженные продукты. Передает продукты в торговый отдел. Торговый отдел обеспечивает нашими продуктами вендинговые аппараты. Строго контролирует своевременность и качество.
            </p>
            <p>
              Наша команда Шеф поваров разрабатывает блюда и регулярно вводит новинки на торговые точки.
            </p>
            <p>
              Мы даем людям ресторанное качество по доступным ценам в удобных местах.
            </p>
          </div>
        </section>

        {/* 3 Что мы предлагаем? */}
        <section id="what-we-offer" className="px-4 py-16 md:py-24 bg-gray-50">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-8 md:mb-12">
            Что мы предлагаем?
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-base sm:text-lg md:text-xl text-gray-700">
            <p>
              Человек большую часть своей жизни тратит на тяжелый труд, чтобы себя кормить. В таком режиме некогда заниматься собой, нет времени и возможности увидеть мир или даже встретить любовь после 40.
            </p>
            <p>
              Люди не верят в чей-то стабильный и прибыльный бизнес, так как на каждом углу тебя хотят одурачить. Для многих купить дешевую квартиру за 3 млн. бат не подходит: доход в размере 15.000 бат и не стабильный. Сегодня сдается, завтра — простаивает.
            </p>
            <p>
              Мы предлагаем решение: вложив в торговую точку от 380.000 бат вы получаете стабильный доход от 15.000 бат в месяц.
            </p>
            <p>
              Представьте: у вас 10 или 15 таких торговых точек и вам нет 40 или далеко за 40. Наша система стабильная, крепкая, гибкая, а главное — прибыльная и важная.
            </p>
          </div>
        </section>

        {/* 4 Как распределяется прибыль вкладчика? */}
        <section id="profit-distribution" className="px-4 py-16 md:py-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-8 md:mb-12">
            Как распределяется прибыль вкладчика?
          </h2>
          <div className="max-w-3xl mx-auto space-y-8 text-base sm:text-lg md:text-xl text-gray-700">
            <ul className="space-y-4 list-disc pl-6">
              <li>Цех производит продукты питания по себестоимости в вендинговый аппарат (в ежемесячном отчете все расчеты себестоимости будут указаны)</li>
              <li>50% от прибыли получает вкладчик</li>
              <li>Приблизительная средняя общая прибыль: от 30.000 бат в месяц</li>
            </ul>
            <p>Средняя стоимость товара: 200 бат.</p>
            <p>Порог, при котором мы устанавливаем торговую точку: от 120 жильцов, подходящих под наши вкусовые критерии.</p>
            <p>От 10 чеков в день.</p>
            <p>
              В среднем чеке, как правило, несколько покупок. Округляем средний чек до 300 бат. В среднем затраты на продукт составляют 30%, 70% остаются прибылью. Вендинговый аппарат работает круглосуточно и бесперебойно каждый день.
            </p>
            <div className="space-y-4 font-medium">
              <p className="text-gray-900">Считаем:</p>
              <p>10×300 = 3000 бат</p>
              <p>3000 − 30% = 2100 бат</p>
              <p>2100 × 30 (дней) = 63000 бат прибыль</p>
              <p>Вычитаем аренду 5000–7000 бат</p>
              <p>Вычитаем обслуживание 3000 бат</p>
              <p className="text-gray-900 pt-2">Получаем:</p>
              <p>63000 − 5000 − 3000 = 55.000 (50% вкладчику)</p>
              <p className="text-gray-900 font-bold">При такой модели вкладчик получает 27.500 бат в месяц</p>
            </div>
          </div>
        </section>

        {/* 5 Контакты */}
        <section id="contacts" className="px-4 py-16 md:py-24 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Свяжитесь с нами
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-10">Для обсуждения инвестиций и партнёрства</p>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 md:gap-8 text-base sm:text-lg md:text-xl">
            <a
              href={siteConfig.contacts.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors"
            >
              <img src={whatsappIcon} alt="" className="w-6 h-6 md:w-7 md:h-7" />
              WhatsApp: {siteConfig.contacts.whatsapp}
            </a>
            <a
              href={siteConfig.contacts.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors"
            >
              <Instagram size={24} strokeWidth={1.8} className="shrink-0" />
              Instagram: {siteConfig.contacts.instagram}
            </a>
            <a
              href={siteConfig.contacts.emailLink}
              className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors"
            >
              <Mail size={24} strokeWidth={1.8} className="shrink-0" />
              Email: {siteConfig.contacts.email}
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 border-t border-gray-200 px-4 py-8 md:py-10">
        <div className="max-w-2xl mx-auto text-center text-sm sm:text-base text-gray-700 space-y-1">
          <p className="font-semibold text-gray-900">{siteConfig.company.name}</p>
          <p>Tax ID: {siteConfig.company.taxId}</p>
          <p>{siteConfig.company.address}</p>
        </div>
      </footer>
    </div>
  );
}
