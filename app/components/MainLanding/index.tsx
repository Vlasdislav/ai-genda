"use client";

import Button from "../Button";
import TableAdaptive from "../TableAdaptive";
import TableDesktop from "../TableDesktop";
import "./style.css";
import { useEffect, useState } from "react";

export default function MainLanding() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1023);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const adaptiveElement = document.querySelector(".table-adaptive");
        const desktopElement = document.querySelector(".table-desktop");

        if (isMobile && desktopElement) {
            desktopElement.classList.add("hidden");
            adaptiveElement && adaptiveElement.classList.remove("hidden");
        } else if (!isMobile && adaptiveElement) {
            adaptiveElement.classList.add("hidden");
            desktopElement && desktopElement.classList.remove("hidden");
        }
    }, [isMobile]);

    return (
        <main className="main">
            <section className="protocol container">
                <div className="protocol__content">
                    <h2 className="protocol__title">Автоматический протокол встречи</h2>
                    <p className="protocol__description">AiGenda быстро и качественно переводит речь в текст и создает автоматический протокол встречи при помощи искусственного интеллекта</p>
                    <Button text="Начать работу" />
                    <div className="protocol__badges">
                        <span className="protocol__badge"><span style={{fontSize: "22px", lineHeight: "22px"}}>98%</span><span style={{fontSize: "12px", lineHeight: "12px"}}>точность</span></span>
                        <span className="protocol__badge" style={{fontSize: "15px", lineHeight: "15px"}}><span>Лучше,</span><span>чем ChatGPT*</span></span>
                        <span className="protocol__badge"><span style={{fontFamily: "Noah, sans-serif", fontSize: "12px", lineHeight: "12px"}}>обработано</span><span style={{fontSize: "15px", lineHeight: "15px"}}>1 млн часов</span></span>
                    </div>
                </div>
                <div className="protocol__image">
                    <img src="./images/CallingApp.svg" alt="Конференция с AiGenda Bot" />
                </div>
            </section>
            <section className="pricing container" id="pricing">
                <h2 className="pricing__title">Разные тарифы для разных задач</h2>
                <p className="pricing__description">Подписка на сервис AiGenda станет выгодной инвестицией для любого бизнеса с регулярными онлайн встречами</p>
                {
                    isMobile
                        ? <TableAdaptive className="table-adaptive" /> 
                        : <TableDesktop className="table-desktop" />
                }
            </section>
        </main>
    )
}
