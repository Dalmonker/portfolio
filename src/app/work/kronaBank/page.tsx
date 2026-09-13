'use client';

import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MainSection1 } from "@/components/sections/MainSection1";

import imageTwo from "../../../../public/img/work/kronaBank/img2.webp";
import alexImage from "../../../../public/img/work/kronaBank/alex.webp";
import MainBgImage from "../../../../public/img/work/kronaBank/dashboard.webp";

import Dashboard3Image from "../../../../public/img/work/medical-dashboard/circuitMode.webp";

import circleImage from "../../../../public/img/work/medical-dashboard/circle.webp";
import darkModeImage from "../../../../public/img/work/medical-dashboard/darkMode.webp";
import laptopOne from "../../../../public/img/work/medical-dashboard/laptopOne.webp";
import laptopTwo from "../../../../public/img/work/medical-dashboard/laptopTwo.webp";
import PreviewImage from "../../../../public/img/work/project-roadmap/preview.webp";
import { NextPageSection } from "@/components/sections/NextPageSection";
import {useLanguage} from "@/context/LanguageContext";

export default function Page() {
  const { t } = useLanguage();
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <MainSection1
          title={"KronaBank Mobile Banking App"}
          table={[
            { title: "Scope", value: "End-to-end product design" },
            { title: "Industry", value: "Fintech App" },
            { title: "Year", value: "2026" },
          ]}
          arrow={true}
        />
        <section>
            <Image
              className="container flex flex-col items-center"
              sizes="100vw"
              src={MainBgImage}
              alt=""
              quality={95}
              priority

            />
        </section>

        <section className="bg-[#ffffff] pt-[60px] pb-[60px] lg:pt-[60px] lg:pb-[80px] xl:pt-[80px] xl:pb-[120px]">
            <div className="container lg:flex">
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full font-inter">

                     <li className="flex flex-col w-full">
                      <span className="text-[#C3C6CC] text-[17px] md:text-[18px] border-b border-[#E5E0DC] pb-[16px] lg:pb-[30px] mb-[16px] lg:mb-[30px]">
                        Overview
                      </span>
                        <span className="text-[#404040] font-medium text-[17px] md:text-[18px] whitespace-pre-line">
                        KronaBank is a Serbian digital bank that provides personal and business financial services through modern banking solutions focused on simplicity, accessibility, and innovation
                      </span>
                    </li>

                     <li className="flex flex-col w-full">
                      <span className="text-[#C3C6CC] text-[17px] md:text-[18px] border-b border-[#E5E0DC] pb-[16px] lg:pb-[30px] mb-[16px] lg:mb-[30px]">
                        My role
                      </span>
                        <span className="text-[#404040] font-medium text-[17px] md:text-[18px] whitespace-pre-line">
                        Product Designer (Solo) End-to-end design: research, UX architecture, UI design, prototyping, design system, and branding
                      </span>
                    </li>

                    <li className="flex flex-col w-full">
                      <span className="text-[#C3C6CC] text-[17px] md:text-[18px] border-b border-[#E5E0DC] pb-[16px] lg:pb-[30px] mb-[16px] lg:mb-[30px]">
                        Problem
                      </span>
                        <ul className="list-disc pl-5 mt-2 text-[#404040] font-medium text-[17px] md:text-[18px] space-y-1">
                            <li>Outdated, cluttered visual style</li>
                            <li>Navigation overload</li>
                            <li>Weak visual hierarchy</li>
                            <li>Poor accessibility for older users</li>
                        </ul>
                    </li>

                </ul>
            </div>
        </section>






          <section className="bg-[#ffffff] pb-[60px] md:pb-[80px] xl:pb-[120px]">
              <div className="container">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[60px]">

                      {/* ЛЕВАЯ КОЛОНКА: список этапов */}
                      <div className="flex flex-col">

                        <span className="block font-inter text-[#C3C6CC] text-[17px] md:text-[18px] border-b border-[#E5E0DC] pb-[16px] lg:pb-[30px] mb-[16px] lg:mb-[30px]">
                          Design Process
                        </span>

                          <div className="font-medium pb-[40px] mb-[40px] border-b border-[#E5E0DC]">
                              <h3 className="text-[#404040] text-[24px] md:text-[40px] uppercase mb-[20px]">
                                  1. Discovery
                              </h3>
                              <p className="font-inter text-[#404040] text-[17px] md:text-[18px] max-w-[440px]">
                                  Conducted competitor analysis, usability evaluation, and user behavior research
                              </p>
                          </div>

                          <div className="font-medium pb-[24px] mb-[24px] md:pb-[40px] md:mb-[40px] border-b border-[#E5E0DC]">
                              <h3 className="text-[#404040] text-[24px] md:text-[40px] uppercase mb-[20px]">
                                  2. Define
                              </h3>
                              <p className="font-inter text-[#404040] text-[17px] md:text-[18px] max-w-[440px]">
                                  Identified key pain points, formulated user personas, and set the design direction
                              </p>
                          </div>

                          <div className="font-medium pb-[24px] mb-[24px] md:pb-[40px] md:mb-[40px] border-b border-[#E5E0DC]">
                              <h3 className="text-[#404040] text-[24px] md:text-[40px] uppercase mb-[20px]">
                                  3. Strategy
                              </h3>
                              <p className="font-inter text-[#404040] text-[17px] md:text-[18px] max-w-[440px]">
                                  Translated research findings into product features. Built user flows, defined key steps in the app, and structured the information architecture to match real user needs
                              </p>
                          </div>

                          <div className="font-medium pb-[24px] mb-[24px] md:pb-[40px] md:mb-[40px] border-b border-[#E5E0DC]">
                              <h3 className="text-[#404040] text-[24px] md:text-[40px] uppercase mb-[20px]">
                                  4. Design
                              </h3>
                              <p className="font-inter text-[#404040] text-[17px] md:text-[18px] max-w-[440px]">
                                  Explored multiple layout concepts, navigation patterns, and visual styles. Created high-fidelity UI, and a consistent design system
                              </p>
                          </div>

                          <div className="font-medium pb-[24px] mb-[24px] md:pb-[40px] md:mb-[40px] border-b border-[#E5E0DC]">
                              <h3 className="text-[#404040] text-[24px] md:text-[40px] uppercase mb-[20px]">
                                  5. Prototype
                              </h3>
                              <p className="font-inter text-[#404040] text-[17px] md:text-[18px] max-w-[440px]">
                                  Built an interactive prototype with realistic transitions and micro-interactions
                              </p>
                          </div>

                          <div>
                              <h3 className="font-medium text-[#404040] text-[24px] md:text-[40px] uppercase mb-[20px]">
                                  6. Test & Iterate
                              </h3>
                              <p className="font-inter text-[#404040] text-[17px] md:text-[18px] max-w-[440px]">
                                  Validated the flow, gathered feedback, and refined the experience through 30+ iterations
                              </p>
                          </div>

                      </div>

                      {/* ПРАВАЯ КОЛОНКА: картинка с диаграммой */}
                      <div className="flex items-start justify-center">
                          <Image
                              src={circleImage}
                              alt="Design Process Diagram"
                              width={480}
                              height={480}
                              quality={95}
                              className="w-full max-w-[480px] h-auto"
                          />
                      </div>

                  </div>
              </div>
          </section>

          <section className="bg-[#26292E] pt-[60px] lg:pt-[80px] xl:pt-[120px] pb-[60px] lg:pb-[100px]">
              <div className="container">
                  <span className="block font-inter text-[#A5A5A5] text-[17px] md:text-[18px] border-b border-[#505256] pb-[16px] lg:pb-[30px] mb-[16px] lg:mb-[30px]">

                  User Research
                </span>


                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16 lg:mb-24 mt-8 lg:mt-12">

                      {/* Левая колонка: Описание в пунктирной рамке */}
                      <div className="lg:col-span-4">
                          <p className="text-[#E1E1E2] font-inter font-medium text-[17px] md:text-[18px] max-w-[394px]">
                              The redesign started with three-stage research: six competitors analyzed, current app usability evaluated, and real mobile banking behavior studied. This helped identify the audience's needs. Based on these insights, I defined a clear direction – simplicity, speed, and trust
                          </p>
                      </div>

                      {/* Правая колонка: Цифры */}
                      <div className="lg:col-span-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 lg:gap-4 lg:pl-10">

                          {/* 20+ */}
                          <div className="flex flex-col">
                              <span className="text-[#362EEC] text-[60px] md:text-[90px] font-bold leading-[110%]">
                                20+
                              </span>
                              <span className="text-[#8B8B8B] font-inter font-medium text-[24px] md:text-[30px] leading-[120%]">
                            Hours of<br />Research
                          </span>
                          </div>

                          {/* 30+ */}
                          <div className="flex flex-col">
                          <span className="text-[#F6F6F6] text-[60px] md:text-[90px] font-bold leading-[110%]">
                            30+
                          </span>
                              <span className="text-[#8B8B8B] font-inter font-medium text-[24px] md:text-[30px] leading-[120%]">
                            Design<br />Iterations
                          </span>
                          </div>

                          {/* 6 */}
                          <div className="flex flex-col">
                          <span className="text-[#F6F6F6] text-[60px] md:text-[90px] font-bold leading-[110%]">
                            6
                          </span>
                              <span className="text-[#8B8B8B] font-inter font-medium text-[24px] md:text-[30px] leading-[120%]">
                            Competitors<br />Analyzed
                          </span>
                          </div>
                      </div>
                  </div>

                  {/* Секция Task */}
                  <div className="mb-12 lg:mb-16">
                      <span className="block font-inter text-[#A5A5A5] text-[17px] md:text-[18px] border-b border-[#505256] pb-[16px] lg:pb-[30px] mb-[16px] lg:mb-[30px]">
                        Task
                      </span>
                      <p className="text-[#E1E1E2] font-inter font-medium text-[17px] md:text-[18px]">
                          Design a modern mobile banking experience by redesigning the existing API Bank application. The goal was to improve usability, simplify navigation, enhance the visual hierarchy, and create a more intuitive interface for everyday banking tasks while preserving users' trust in a financial product
                      </p>
                  </div>

                  <Image
                      className=""
                      sizes="100vw"
                      src={imageTwo}
                      alt=""
                      quality={95}
                      priority

                  />


              <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[80px] mt-[60px] md:mt-[80px] xl:mt-[120px]">

                  <div className="flex flex-col">


                      <div className="mb-[34px]">
                            <span className="block font-inter text-[#A5A5A5] text-[17px] md:text-[18px] border-b border-[#505256] pb-[16px] lg:pb-[30px] mb-[16px] lg:mb-[30px]">
                              User Persona
                            </span>

                          <div className="flex items-center gap-[20px] mb-[28px]">
                              <Image
                                  src={alexImage}
                                  alt="Robert Patterson"
                                  width={186}
                                  height={146}
                                  quality={95}
                                  className="object-cover bg-white shrink-0 w-[144px] h-[106px] lg:w-[184px] lg:h-[146px]"
                              />
                              <div className="flex flex-col">
                                <span className="font-inter text-[#A5A5A5] font-medium text-[17px] md:text-[18px] mb-[6px]">
                                  Alex Carter
                                </span>
                                  <span className="text-[#505256] text-[17px] md:text-[18px]">
                                  62 y.o., Entrepreneur
                                </span>
                              </div>
                          </div>

                          {/* Цитата */}
                          <p className="font-inter text-[#A5A5A5] text-[24px] md:text-[40px] italic max-w-[568px]">
                              «I don't have time to figure out your app.»
                          </p>
                      </div>

                  </div>

                  {/* ПРАВАЯ КОЛОНКА */}
                  <div className="flex flex-col gap-[40px]">

                      {/* NEED */}
                      <div>
                          <h3 className=" font-medium text-[#E1E1E2] text-[24px] md:text-[40px] uppercase mb-[20px]">
                              Need
                          </h3>
                          <ul className="font-inter list-disc pl-[20px] flex flex-col gap-[6px] text-[#E1E1E2] text-[16px]">
                              <li className="font-medium text-[17px] md:text-[18px]">A frictionless, secure banking experience that respects his time and status</li>
                              <li className="font-medium text-[17px] md:text-[18px]">Confidence that his funds and data are protected at the highest level</li>
                          </ul>
                          <div className="border-b border-[#505256] mt-[40px]" />
                      </div>

                      {/* PAIN POINTS */}
                      <div>
                          <h3 className="font-medium text-[#E1E1E2] text-[24px] md:text-[40px] uppercase mb-[20px]">
                              Pain points
                          </h3>
                          <ul className="font-inter list-disc pl-[20px] flex flex-col gap-[6px] text-[#E1E1E2] text-[16px]">
                              <li className="font-medium text-[17px] md:text-[18px]">Cluttered interfaces with too many irrelevant features and ads</li>
                              <li className="font-medium text-[17px] md:text-[18px]">Difficulty reading small text and navigating complex layouts</li>
                          </ul>
                          <div className="border-b border-[#505256] mt-[40px]" />
                      </div>

                      {/* MOTIVATIONS */}
                      <div>
                          <h3 className="font-medium text-[#E1E1E2] text-[24px] md:text-[40px] uppercase mb-[20px]">
                              Motivations
                          </h3>
                          <ul className="font-inter list-disc pl-[20px] flex flex-col gap-[6px] text-[#E1E1E2] font-medium text-[17px] md:text-[18px]">
                              <li>Maintaining control over his wealth and legacy</li>
                          </ul>
                      </div>

                  </div>
              </div>

          </div>
          </section>













          <section className="bg-[#ffffff] py-[60px] md:py-[80px] xl:py-[120px]">
              <div className="container">

                  {/* Две колонки: Solution + список решений */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[60px]">

                      {/* ЛЕВАЯ КОЛОНКА: Solution */}
                      <div className="flex flex-col">
                    <span className="block font-inter text-[#C3C6CC] text-[17px] md:text-[18px] border-b border-[#E5E0DC] pb-[16px] lg:pb-[30px] mb-[16px] lg:mb-[30px]">
                      Solution
                    </span>
                          <p className="text-[#404040] font-inter font-medium text-[17px] md:text-[18px] max-w-[420px]">
                              Focuses on three core principles:
                          </p>
                      </div>

                      {/* ПРАВАЯ КОЛОНКА: список решений */}
                      <div className="flex flex-col gap-[25px] md:gap-[40px]">

                          <div>
                              <h3 className="font-medium text-[#404040] text-[24px] md:text-[40px] uppercase mb-[20px]">
                                  Clarity over complexity
                              </h3>
                              <p className="font-inter text-[#404040] text-[17px] md:text-[18px]">
                                  Visual noise was removed, navigation was simplified, and a clear visual hierarchy was established
                              </p>
                              <div className="border-b border-[#E5E0DC] mt-[24px] md:mt-[40px]" />
                          </div>

                          <div>
                              <h3 className="font-medium text-[#404040] text-[24px] md:text-[40px] uppercase mb-[20px]">
                                  Speed at every step
                              </h3>
                              <p className="font-inter text-[#404040] text-[17px] md:text-[18px]">
                                  The new experience reduces the number of steps for routine tasks
                              </p>
                              <div className="border-b border-[#E5E0DC] mt-[24px] md:mt-[40px]" />
                          </div>

                          <div>
                              <h3 className="font-medium text-[#404040] text-[24px] md:text-[40px] uppercase mb-[20px]">
                                  Trust through design
                              </h3>
                              <p className="font-inter text-[#404040] text-[17px] md:text-[18px]">
                                  A consistent visual language, transparent transaction details, and clear confirmation flows were used to strengthen user confidence in the product
                              </p>
                              <div className="border-b border-[#E5E0DC] mt-[24px] md:mt-[40px]" />
                          </div>

                      </div>
                  </div>

              </div>
          </section>


          <section className="bg-[#F0F0F0] py-[60px] md:py-[80px] xl:py-[120px]">
              <div className="container font-inter">

                      <span className="block text-[#C3C6CC] text-[17px] md:text-[18px] border-b border-[#E5E0DC] pb-[16px] lg:pb-[30px] mb-[16px] lg:mb-[30px]">
                      Wireframes
                    </span>

                      <Image
                          src={darkModeImage}
                          alt="Wireframes"
                          width={1200}
                          height={800}
                          quality={95}
                          className="w-full max-w-[1200px] h-auto"
                      />

              </div>
          </section>

          <section className="bg-[#ffffff] pt-[60px] md:pt-[80px] xl:pt-[120px] pb-[20px] md:pb-[40px] lg:pb-[60px]">
              <div className="container font-inter">
                  <span className="block text-[#C3C6CC] text-[16px] border-b border-[#E5E0DC] pb-[16px] lg:pb-[30px] mb-[16px] lg:mb-[30px]">
                  Design
                </span>

                  <div className="flex flex-col">

                      <div className="w-full mb-[20px] lg:mb-[60px]">
                          <Image
                              src={laptopOne}
                              alt="Medicare Dashboard - Light Theme"
                              quality={95}
                              className="w-full h-auto"
                              sizes="100vw"
                          />
                      </div>

                      <div className="w-full mb-[34px]">
                          <Image
                              src={laptopTwo}
                              alt="Medicare Dashboard - Dark Theme"
                              quality={95}
                              className="w-full h-auto"
                              sizes="100vw"
                          />
                      </div>
                      <span className="font-medium block text-[#404040] text-[17px] md:text-[18px]">
                      Created the ability to switch between light and dark themes
                    </span>

                  </div>

              </div>
          </section>


        <section className=" bg-[#ffffff] pb-[60px] md:pb-[80px] xl:pb-[120px]">
          <div className="container flex flex-col items-center">
            <div>
              <Image
                className="mb-[30px]"
                src={Dashboard3Image}
                quality={95}
                sizes="100vw"
                alt=""
              />
              <div className="lg:flex">
                <p className="font-inter xl:mr-[80px] leading-[100%] text-[24px] md:text-[30px] md:mr-[20px] xl:text-[40px] lg:mb-[0px] miniSm:mb-[20px] font-medium text-[#404040]">
                    This project was developed according to all the design rules in Figma
                </p>
                <p className="font-inter text-[17px] leading-[130%] md:text-[18px] font-medium text-[#404040] max-w-[495px]">
                    The clever use of meshes and components has resulted in a dashboard that is not only visually appealing, but also intuitive for the user
                </p>
              </div>
            </div>
          </div>
        </section>


        <NextPageSection
          projectKey="roadMap"
          bgColor="#21415C"
          href="https://kwork.ru/portfolio/15773530"
          image={PreviewImage}
        />
      </main>
      <Footer />
    </>
  );
}
