"use client";
import { useState, useEffect } from "react";
import { hello } from "../hello";

const helloDisplay = [
  { number: 1, language: "English", hello: "Hello" },
  { number: 2, language: "Spanish", hello: "Hola" },
  { number: 3, language: "German", hello: "Hallo" },
  { number: 4, language: "Greek", hello: "Γεια σας" },
  { number: 5, language: "Arabic", hello: "مرحبا" },
  { number: 6, language: "Hindi", hello: "नमस्ते" },
  { number: 7, language: "Italian", hello: "Ciao" },
  { number: 8, language: "Japanese", hello: "こんにちは" },
  { number: 9, language: "Korean", hello: "안녕하세요." },
  { number: 10, language: "Russian", hello: "привет" },
  { number: 11, language: "Vietnamese", hello: "Xin chào" },
  { number: 12, language: "Chinese", hello: "您好" },
];

function Landing() {
  const [seconds, setSeconds] = useState(1);
  const [lang, setLang] = useState();

  useEffect(() => {
    const timer = setInterval(() => {
      seconds >= 12 ? setSeconds(1) : setSeconds(seconds + 1);
    }, 3000); // clearing interval
    return () => clearInterval(timer);
  });
  useEffect(() => {
    const langAb = helloDisplay.find((la) => la.number == seconds).hello;
    setLang(langAb);
  }, [seconds]);

  return (
    <div
      id="landing"
      className="flex flex-col items-center gap-9 px-8 py-28 lg:py-36 text-center"
    >
      <h1 className="text-4xl font-light">{lang}</h1>
      <h1 className="text-6xl xl:text-8xl font-semibold">Hanh Nguyen</h1>
      <h1 className="text-2xl">
        Freelance in tech development and customer service for all your business
        needs.
      </h1>
    </div>
  );
}

export default Landing;
