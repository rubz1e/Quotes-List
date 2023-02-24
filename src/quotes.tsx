import { useEffect, useState } from "react";
import "./quotes.scss";

export function Quotes() {
  const listQuotes = [
    "Только тот, кто рискнет, может действительно выиграть",
    "Будь изменением, которое ты хочешь увидеть в мире !",
    "Доверяй себе. Ты знаешь больше, чем думаешь",
    "Чем больше ты тренируешь свою волю, тем сильнее она становится",
    "Никогда не отказывайся от мечты, просто потому, что она кажется слишком далекой",
    "Лучший способ предсказать свое будущее - создать его самому",
    "Если вы думаете, что вы не способны на что-то, то вы правы. Если вы думаете, что вы можете, вы также правы",
    "Если вы хотите добиться успеха, вам нужно удвоить свои усилия, когда другие уже остановились",
    "Вы не можете свою жизнь изменить, пока вы не изменили что-то в себе",
    "Лучший момент начать – сейчас",
  ];
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const text = document.querySelector(".quotes-title");
      if (text) {
        text.classList.add("fadeOut");
        setTimeout(() => {
          setIndex((i) => (i + 1) % listQuotes.length);
          text.classList.remove("fadeOut");
          text.classList.add("fadeIn");
          setTimeout(() => {
            text.classList.remove("fadeIn");
          }, 1000);
        }, 1000);
      }
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, [listQuotes.length]);

  return (
    <div className="quotes">
      <h1 className="quotes-title">{listQuotes[index]}</h1>
    </div>
  );
}
