import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import { Factory, Truck, Package, PackageCheck, ShoppingCart } from "lucide-react";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/white.css";
import "../reveal-theme.css";
import { siteConfig } from "../config";
import telegramIcon from "../assets/icons/telegram.svg";
import whatsappIcon from "../assets/icons/whatsapp-3.svg";
import viberIcon from "../assets/icons/viber-icon.svg";

export default function Presentation() {
  const deckDivRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<Reveal.Api | null>(null);

  useEffect(() => {
    if (!deckDivRef.current || deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current, {
      transition: "slide",
      hash: true,
      width: 1280,
      height: 720,
    });

    deckRef.current.initialize().then(() => {
      // deck ready
    });

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch {
        // ignore
      }
    };
  }, []);

  return (
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">
        {/* 1 Экран */}
        <section className="flex flex-col items-center justify-center text-center">
          <h2>Energo Food</h2>
          <p className="text-lg  text-center">
            Проект по установке вендинговых аппаратов. Торговое предложение для
            инвесторов — привлечение инвестиций.
          </p>
          <div className="diagram-flow mt-10">
            <div className="diagram-card">
              <div className="diagram-icon">
                <Factory size={28} strokeWidth={1.8} />
              </div>
              <div className="diagram-label">Цех</div>
              <div className="diagram-desc">Производит продукцию</div>
            </div>
            <div className="diagram-arrow diagram-arrow-right">
              <svg viewBox="0 0 60 24" fill="none">
                <path
                  d="M2 12h52M48 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="diagram-card">
              <div className="diagram-icon">
                <Truck size={28} strokeWidth={1.8} />
              </div>
              <div className="diagram-label">Торговый отдел</div>
              <div className="diagram-desc">Доставка, контроль, договоры</div>
            </div>
            <div className="diagram-arrow diagram-arrow-right">
              <svg viewBox="0 0 60 24" fill="none">
                <path
                  d="M2 12h52M48 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="diagram-card">
              <div className="diagram-icon">
                <Package size={28} strokeWidth={1.8} />
              </div>
              <div className="diagram-label">Вендинговый аппарат</div>
              <div className="diagram-desc">Продаёт продукцию</div>
            </div>
          </div>
        </section>

        {/* 2 Экран */}
        <section>
          <h2>Система работы</h2>
          <p className="mb-8">Цех производит, заработок на поставках</p>
          <div className="grid grid-cols-2 gap-12 text-left">
            <div>
              <h3 className="text-xl mb-4">2.1 Сырники — поставка 150 бат</h3>
              <ul className="text-base space-y-2">
                <li>Цех отдаёт часть из прибыли торговому отделу</li>
                <li>Торговый отдел зарабатывает с поставок и обслуживания</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl mb-4">2.2 Аппарат</h3>
              <ul className="text-base space-y-2">
                <li>Зарабатывает с % (накрутка)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3 Экран */}
        <section>
          <h2>Экономика</h2>
          <div className="mt-12 flex flex-row items-center justify-center gap-6">
            <div className="schema-box text-center max-w-sm">
              <div className="schema-icon mb-2">
                <PackageCheck size={28} strokeWidth={1.8} />
              </div>
              <p className="text-base text-gray-600">Поставка</p>
              <p className="text-4xl font-bold accent-green">150 бат</p>
              <p className="text-base mt-1">Сырники</p>
            </div>
            <span className="schema-arrow">→</span>
            <div className="schema-box text-center max-w-sm">
              <div className="schema-icon mb-2">
                <ShoppingCart size={28} strokeWidth={1.8} />
              </div>
              <p className="text-base text-gray-600">Реализация</p>
              <p className="text-4xl font-bold accent-green">200 бат</p>
            </div>
          </div>
        </section>

        {/* 4 Экран */}
        <section>
          <h2>Затраты / Что нужно для реализации?</h2>
          <ul className="text-left mt-12 space-y-6 text-lg">
            <li>
              <strong className="accent-green">4.1</strong> Аппарат + микроволновка
              (подключить)
            </li>
            <li>
              <strong className="accent-green">4.2</strong> Переделать дизайн
              аппарата под Energo Food
            </li>
            <li>
              <strong className="accent-green">4.3</strong> Аренда (до 5000 бат /
              мес)
            </li>
            <li>
              <strong className="accent-green">4.4</strong> Создать партнёрскую
              программу. Наша компания занимается управлением
            </li>
          </ul>
        </section>

        {/* 5 Экран — Контакты */}
        <section>
          <h2>Свяжитесь с нами</h2>
          <p className="mb-8">Для обсуждения инвестиций и партнёрства</p>
          <div className="contact-icons flex justify-center items-center gap-4">
            {siteConfig.messengers.telegram && (
              <a
                href={siteConfig.messengers.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <img src={telegramIcon} alt="Telegram" />
              </a>
            )}
            {siteConfig.messengers.whatsapp && (
              <a
                href={siteConfig.messengers.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <img src={whatsappIcon} alt="WhatsApp" />
              </a>
            )}
            {siteConfig.messengers.viber && (
              <a
                href={siteConfig.messengers.viber}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Viber"
              >
                <img src={viberIcon} alt="Viber" />
              </a>
            )}
          </div>
          <p className="mt-8 text-sm text-gray-600">
            Telegram · WhatsApp · Viber
          </p>
        </section>
      </div>
    </div>
  );
}
