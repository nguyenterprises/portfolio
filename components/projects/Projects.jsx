"use client";
import { useState } from "react";
import { FaReact, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiFramer,
  SiLeaflet,
  SiTailwindcss,
  SiSanity,
  SiMapbox,
} from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

function Projects() {
  const [keanuVid, setKeanuVid] = useState(false);
  const [hnpropVid, setHnpropVid] = useState(false);
  const [weatherVid, setWeatherVid] = useState(false);
  return (
    <div
      id="projects"
      className="px-4 py-20 w-full bg-sky-50 dark:bg-transparent"
    >
      <h1 className="text-center pb-12 text-3xl font-medium uppercase">
        Projects
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 md:gap-3 xl:gap-12 m-6">
        <div className="flex flex-col items-center gap-3">
          <h3>Graphical Map</h3>
          <a
            href="https://mapsample.nguyenterprises.work"
            alt="map_sample"
            target="_blank"
            rel="noopener noreferrer"
            className="h-[175px] w-[300px] xl:h-[225px] xl:w-[400px] bg-transparent rounded"
            onMouseEnter={() => setHnpropVid(true)}
            onMouseLeave={() => setHnpropVid(false)}
          >
            {!hnpropVid ? (
              <Image
                src="/thumbnails/hnproperties.png"
                alt="continental"
                width={400}
                height={225}
                className="rounded"
              />
            ) : (
              <video autoPlay loop muted className="rounded">
                <source src="/mp4/hnProp.webm" type="video/mp4" />
              </video>
            )}
          </a>
          <div className="flex items-center justify-between mt-2 w-full px-4">
            <div className="flex items-center gap-2">
              <span className="text-xl text-sky-500 dark:text-sky-300">
                <FaReact />
              </span>
              <span className="text-xl">
                <SiMapbox />
              </span>
              <span className="text-xl text-green-400">
                <SiLeaflet />
              </span>
              <span className="text-xl text-yellow-400">
                <IoLogoJavascript />
              </span>
              <span className="text-2xl text-blue-500 dark:text-blue-300">
                <FaCss3Alt />
              </span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/nguyenterprises/map_display"
                alt="map_sample"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-400 hover:text-blue-400 hover:underline"
              >
                Github
              </a>
              <a
                href="https://mapsample.nguyenterprises.work"
                alt="map_sample"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:text-blue-400 hover:underline"
              >
                Website
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <h3 className="">Listing Showcase</h3>
          <a
            href="https://luxsample.nguyenterprises.work"
            alt="lux_sample"
            target="_blank"
            rel="noopener noreferrer"
            className="h-[175px] w-[300px] xl:h-[225px] xl:w-[400px] bg-transparent rounded"
            onMouseEnter={() => setKeanuVid(true)}
            onMouseLeave={() => setKeanuVid(false)}
          >
            {!keanuVid ? (
              <Image
                src="/thumbnails/continental.png"
                alt="continental"
                width={400}
                height={225}
                className="rounded"
              />
            ) : (
              <video autoPlay loop muted className="rounded">
                <source src="/mp4/kreVid3.webm" type="video/mp4" />
              </video>
            )}
          </a>
          <div className="flex items-center justify-between mt-2 w-full px-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">
                <TbBrandNextjs />
              </span>
              <span className="text-xl text-sky-500 dark:text-sky-300">
                <FaReact />
              </span>
              <span className="text-2xl text-sky-500">
                <SiTailwindcss />
              </span>
              <span className="text-base text-red-500">
                <SiSanity />
              </span>
              <span>
                <SiFramer />
              </span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/nguyenterprises/real_estate"
                alt="lux_sample"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-400 hover:text-blue-400 hover:underline"
              >
                Github
              </a>
              <a
                href="https://luxsample.nguyenterprises.work"
                alt="lux_sample"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:text-blue-400 hover:underline"
              >
                Website
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <h3>Weather API</h3>
          <a
            href="https://hanh-weather-sample.netlify.app"
            alt="lux_sample"
            target="_blank"
            rel="noopener noreferrer"
            className="h-[175px] w-[300px] xl:h-[225px] xl:w-[400px] bg-transparent rounded"
            onMouseEnter={() => setWeatherVid(true)}
            onMouseLeave={() => setWeatherVid(false)}
          >
            {!weatherVid ? (
              <Image
                src="/thumbnails/weather.png"
                alt="continental"
                width={400}
                height={225}
                className="rounded"
              />
            ) : (
              <video autoPlay loop muted className="rounded">
                <source src="/mp4/weather.webm" type="video/mp4" />
              </video>
            )}
          </a>
          <div className="flex items-center justify-between mt-2 w-full px-4">
            <div className="flex items-center gap-2">
              <span className="text-xl text-sky-500 dark:text-sky-300">
                <FaReact />
              </span>
              <span className="text-xl text-yellow-400">
                <IoLogoJavascript />
              </span>
              <span className="text-2xl text-blue-500 dark:text-blue-300">
                <FaCss3Alt />
              </span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/nguyenterprises/weather_app"
                alt="lux_sample"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-400 hover:text-blue-400 hover:underline"
              >
                Github
              </a>
              <a
                href="https://hanh-weather-sample.netlify.app"
                alt="lux_sample"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:text-blue-400 hover:underline"
              >
                Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
