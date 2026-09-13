'use client';
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MainSection1 } from "@/components/sections/MainSection1";

import MainBgImage from "../../../../public/img/work/medical-dashboard/dashboard.webp";
import Dashboard3Image from "../../../../public/img/work/medical-dashboard/circuitMode.webp";
import robertoImage from "../../../../public/img/work/medical-dashboard/roberto.webp";
import ameliaImage from "../../../../public/img/work/medical-dashboard/amilia.webp";
import medicareImage from "../../../../public/img/work/medical-dashboard/medicare.webp";
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
          title={"Dashboard for medical professionals"}
          table={[
            { title: "Scope", value: "End-to-end product design" },
            { title: "Industry", value: "HealthTech (B2B SaaS)" },
            { title: "Year", value: "2025" },
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
                        Medicare is a comprehensive digital health platform designed for medical professionals. The platform aims to digitize and streamline daily clinical operations, from patient intake and scheduling to diagnostics and treatment tracking
                      </span>
                    </li>

                     <li className="flex flex-col w-full">
                      <span className="text-[#C3C6CC] text-[17px] md:text-[18px] border-b border-[#E5E0DC] pb-[16px] lg:pb-[30px] mb-[16px] lg:mb-[30px]">
                        My role
                      </span>
                        <span className="text-[#404040] font-medium text-[17px] md:text-[18px] whitespace-pre-line">
                        As part of the B2B SaaS platform of Medicare, I was responsible for the full development cycle of the dashboard UX/UI module, a central interface for doctors. My&nbsp;responsibilities included researching, designing, visualizing complex medical data, and creating an intuitive interface with further testing
                      </span>
                    </li>

                    <li className="flex flex-col w-full">
                      <span className="text-[#C3C6CC] text-[17px] md:text-[18px] border-b border-[#E5E0DC] pb-[16px] lg:pb-[30px] mb-[16px] lg:mb-[30px]">
                        Problem
                      </span>
                        <span className="text-[#404040] font-medium text-[17px] md:text-[18px] whitespace-pre-line">
                        Information is scattered across different screens:
                      </span>
                        <ul className="list-disc pl-5 mt-2 text-[#404040] font-medium text-[17px] md:text-[18px] space-y-1">
                            <li>finding the right information is time-consuming for doctors</li>
                            <li>inefficient decision-making due to a lack of a quick, at-a-glance overview</li>
                            <li>difficulty in tracking long-term patient trends</li>
                        </ul>
                    </li>

                </ul>
            </div>
        </section>






          <section className="bg-[#ECF0F3] pt-[60px] lg:pt-[80px] xl:pt-[120px]">
              <div className="container">

                  <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[80px]">

                      <div className="flex flex-col">


                          <div className="mb-[34px]">
                            <span className="block font-inter text-[#C3C6CC] text-[17px] md:text-[18px] border-b border-[#E5E0DC] pb-[16px] lg:pb-[30px] mb-[16px] lg:mb-[30px]">
                              User Persona
                            </span>

                              <div className="flex items-center gap-[20px] mb-[28px]">
                                  <Image
                                      src={robertoImage}
                                      alt="Robert Patterson"
                                      width={186}
                                      height={146}
                                      quality={95}
                                      className="object-cover bg-white shrink-0 w-[144px] h-[106px] lg:w-[184px] lg:h-[146px]"
                                  />
                                  <div className="flex flex-col">
                                <span className="font-inter text-[#404040] font-medium text-[17px] md:text-[18px] mb-[6px]">
                                  Robert Patterson
                                </span>
                                      <span className="text-[#C3C6CC] font-inter text-[17px] md:text-[18px]">
                                  32 y.o., General practitioner
                                </span>
                                  </div>
                              </div>

                              {/* Цитата */}
                              <p className="font-inter text-[#404040] text-[24px] md:text-[40px] italic max-w-[420px]">
                                  «I waste too much time finding the data I need.»
                              </p>
                          </div>

                      </div>

                      {/* ПРАВАЯ КОЛОНКА */}
                      <div className="flex flex-col gap-[30px] md:gap-[40px]">

                          {/* NEED */}
                          <div>
                              <h3 className=" font-medium text-[#404040] text-[24px] md:text-[40px] uppercase mb-[16px] md:mb-[20px]">
                                  Need
                              </h3>
                              <ul className="font-inter list-disc pl-[20px] flex flex-col gap-[6px] text-[#404040] text-[16px]">
                                  <li className="font-medium text-[17px] md:text-[18px]">Track important practice and patient trends over time</li>
                                  <li className="font-medium text-[17px] md:text-[18px]">Make more informed, data-driven decisions quickly</li>
                              </ul>
                              <div className="border-b border-[#C3C6CC] mt-[30px] md:mt-[40px]" />
                          </div>

                          {/* PAIN POINTS */}
                          <div>
                              <h3 className="font-medium text-[#404040] text-[24px] md:text-[40px] uppercase mb-[16px] md:mb-[20px]">
                                  Pain points
                              </h3>
                              <ul className="font-inter list-disc pl-[20px] flex flex-col gap-[6px] text-[#404040] text-[16px]">
                                  <li className="font-medium text-[17px] md:text-[18px]">Health records and metrics scattered across different screens and systems</li>
                                  <li className="font-medium text-[17px] md:text-[18px]">Limited time for manual information retrieval</li>
                              </ul>
                              <div className="border-b border-[#C3C6CC] mt-[30px] md:mt-[40px]" />
                          </div>

                          {/* MOTIVATIONS */}
                          <div>
                              <h3 className="font-medium text-[#404040] text-[24px] md:text-[40px] uppercase mb-[16px] md:mb-[20px]">
                                  Motivations
                              </h3>
                              <ul className="font-inter list-disc pl-[20px] flex flex-col gap-[6px] text-[#404040] font-medium text-[17px] md:text-[18px]">
                                  <li>Wants to make fast, informed decisions</li>
                              </ul>
                          </div>

                      </div>
                  </div>

                  {/* НИЖНЯЯ ЧАСТЬ: Goals */}
                  <div className="font-inter mt-[60px] md:mt-[80px] lg:mt-[120px]">
                    <span className="block text-[#C3C6CC] text-[17px] md:text-[18px] border-b border-[#C3C6CC] pb-[16px] lg:pb-[30px] mb-[16px] lg:mb-[30px]">
                      Goals
                    </span>
                      <p className="font-medium text-[#404040] text-[17px] md:text-[18px]">
                          Give doctors one place where all data is visible at a glance – no switching, no searching
                      </p>
                  </div>

              </div>
          </section>


          <section className="bg-[#ECF0F3] py-[60px] md:py-[80px] xl:py-[120px]">
              <div className="container">

                  {/* Изображение */}
                  <div className="relative w-full aspect-[16/9] mb-[60px] md:mb-[80px] xl:mb-[120px]">
                      <Image
                          src={medicareImage}
                          fill
                          quality={95}
                          sizes="100vw"
                          alt="Medicare"
                          className="object-cover"
                      />
                  </div>

                  {/* Две колонки: Solution + список решений */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[60px]">

                      {/* ЛЕВАЯ КОЛОНКА: Solution */}
                      <div className="flex flex-col">
                    <span className="block font-inter text-[#C3C6CC] text-[17px] md:text-[18px] border-b border-[#C3C6CC] pb-[16px] lg:pb-[30px] mb-[16px] lg:mb-[30px]">
                      Solution
                    </span>
                          <p className="text-[#404040] font-inter font-medium text-[17px] md:text-[18px] max-w-[420px]">
                              Design a centralized dashboard that unifies scattered medical data into a single, clear interface
                          </p>
                      </div>

                      {/* ПРАВАЯ КОЛОНКА: список решений */}
                      <div className="flex flex-col gap-[30px] md:gap-[40px]">

                          {/* UNIFIED KPI TRACKING */}
                          <div>
                              <h3 className="font-medium text-[#404040] text-[24px] md:text-[40px] uppercase mb-[16px] md:mb-[20px]">
                                  Unified KPI Tracking
                              </h3>
                              <p className="font-inter font-medium text-[#404040] text-[17px] md:text-[18px]">
                                  Instant visibility into new patients, gender distribution, treatment status, and discharges
                              </p>
                              <div className="border-b border-[#C3C6CC] mt-[30px] md:mt-[40px]" />
                          </div>

                          {/* DYNAMIC TIME FILTERING */}
                          <div>
                              <h3 className="font-medium text-[#404040] text-[24px] md:text-[40px] uppercase mb-[16px] md:mb-[20px]">
                                  Dynamic Time Filtering
                              </h3>
                              <p className="font-inter font-medium text-[#404040] text-[17px] md:text-[18px]">
                                  A global filter that allows doctors to slice data across any timeframe seamlessly
                              </p>
                              <div className="border-b border-[#C3C6CC] mt-[30px] md:mt-[40px]" />
                          </div>

                          {/* ACTIONABLE DATA TABLES */}
                          <div>
                              <h3 className="font-medium text-[#404040] text-[24px] md:text-[40px] uppercase mb-[16px] md:mb-[20px]">
                                  Actionable Data Tables
                              </h3>
                              <p className="font-inter font-medium text-[#404040] text-[17px] md:text-[18px]">
                                  Direct access to upcoming consultations and pending medical tests for immediate workflow management
                              </p>
                              <div className="border-b border-[#C3C6CC] mt-[30px] md:mt-[40px]" />
                          </div>

                          {/* VISUAL TREND ANALYSIS */}
                          <div>
                              <h3 className="font-medium text-[#404040] text-[24px] md:text-[40px] uppercase mb-[16px] md:mb-[20px]">
                                  Visual Trend Analysis
                              </h3>
                              <p className="font-inter font-medium text-[#404040] text-[17px] md:text-[18px]">
                                  Intuitive charts that highlight diagnostic trends and patient age groups without overwhelming the user
                              </p>
                          </div>

                      </div>
                  </div>

              </div>
          </section>




          <section className="bg-[#ffffff] py-[60px] md:py-[80px] xl:py-[120px]">
              <div className="container">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[60px]">

                      {/* ЛЕВАЯ КОЛОНКА: список этапов */}
                      <div className="flex flex-col">

                        <span className="block font-inter text-[#C3C6CC] text-[17px] md:text-[18px] border-b border-[#C3C6CC] pb-[16px] lg:pb-[30px] mb-[16px] lg:mb-[30px]">
                          Design Process
                        </span>

                          {/* 1. DISCOVERY */}
                          <div className="font-medium pb-[40px] mb-[40px] border-b border-[#C3C6CC]">
                              <h3 className="text-[#404040] text-[24px] md:text-[40px] uppercase mb-[20px]">
                                  1. Discovery
                              </h3>
                              <p className="font-inter text-[#404040] text-[17px] md:text-[18px] max-w-[440px]">
                                  Understanding the business goals, user roles, and the key decisions the dashboard should support
                              </p>
                          </div>

                          {/* 2. RESEARCH */}
                          <div className="font-medium pb-[24px] mb-[24px] md:pb-[40px] md:mb-[40px] border-b border-[#C3C6CC]">
                              <h3 className="text-[#404040] text-[24px] md:text-[40px] uppercase mb-[20px]">
                                  2. Research
                              </h3>
                              <p className="font-inter text-[#404040] text-[17px] md:text-[18px] max-w-[440px]">
                                  Exploring user needs, behaviours, and challenges
                              </p>
                          </div>

                          {/* 2. ARCHITECTURE */}
                          <div className="font-medium pb-[24px] mb-[24px] md:pb-[40px] md:mb-[40px] border-b border-[#C3C6CC]">
                              <h3 className="text-[#404040] text-[24px] md:text-[40px] uppercase mb-[20px]">
                                  2. Architecture
                              </h3>
                              <p className="font-inter text-[#404040] text-[17px] md:text-[18px] max-w-[440px]">
                                  Structuring data into logical groups, prioritizing metrics, and defining the dashboard hierarchy.
                              </p>
                          </div>

                          {/* 3. STRATEGY */}
                          <div className="font-medium pb-[24px] mb-[24px] md:pb-[40px] md:mb-[40px] border-b border-[#C3C6CC]">
                              <h3 className="text-[#404040] text-[24px] md:text-[40px] uppercase mb-[20px]">
                                  3. Strategy
                              </h3>
                              <p className="font-inter text-[#404040] text-[17px] md:text-[18px] max-w-[440px]">
                                  Translating research into key features, user flows, and a focused product direction
                              </p>
                          </div>

                          {/* 4. DESIGN */}
                          <div className="font-medium pb-[24px] mb-[24px] md:pb-[40px] md:mb-[40px] border-b border-[#C3C6CC]">
                              <h3 className="text-[#404040] text-[24px] md:text-[40px] uppercase mb-[20px]">
                                  4. Design
                              </h3>
                              <p className="font-inter text-[#404040] text-[17px] md:text-[18px] max-w-[440px]">
                                  Exploring different ways to make complex health information feel simple and approachable
                              </p>
                          </div>

                          {/* 5. TESTING */}
                          <div>
                              <h3 className="font-medium text-[#404040] text-[24px] md:text-[40px] uppercase mb-[20px]">
                                  5. Testing
                              </h3>
                              <p className="font-inter text-[#404040] text-[17px] md:text-[18px] max-w-[440px]">
                                  Testing the core experience to validate interactions and information hierarchy
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



          <section className="bg-[#F0F0F0] py-[60px] md:py-[80px] xl:py-[120px]">
              <div className="container font-inter">

                      <span className="block text-[#C3C6CC] text-[17px] md:text-[18px] border-b border-[#C3C6CC] pb-[16px] lg:pb-[30px] mb-[16px] lg:mb-[30px]">
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
                  <span className="block text-[#C3C6CC] text-[16px] border-b border-[#C3C6CC] pb-[16px] lg:pb-[30px] mb-[16px] lg:mb-[30px]">
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

          <section className="bg-[#ECF0F3] py-[60px] md:py-[80px] xl:py-[120px]">
              <div className="container font-inter">

                  {/* Заголовок */}
                  <span className="block text-[#C3C6CC] text-[17px] md:text-[18px] border-b border-[#C3C6CC] pb-[16px] lg:pb-[30px] mb-[16px] lg:mb-[30px]">
                  User Feedback
                </span>

                  {/* Цитата */}
                  <blockquote className="text-[#404040] text-[24px] md:text-[40px] italic max-w-[900px] mb-[40px]">
                      «Finally, everything is in one place! The dashboard brings together all the data I need. I no longer waste time searching for information — everything is visible at a glance, and I can make fast decisions.»
                  </blockquote>

                  {/* Карточка автора */}
                  <div className="flex items-center gap-[16px]">
                      <Image
                          src={ameliaImage}
                          alt="Amelia Johnson"
                          width={186}
                          height={146}
                          quality={95}
                          className="object-cover bg-white shrink-0 w-[146px] h-[106px]  lg:w-[186px] lg:h-[146px]"
                      />
                      <div className="flex flex-col">
                        <span className="text-[#404040] text-[16px] font-medium">
                          Amelia Johnson
                        </span>
                          <span className="text-[#C3C6CC] text-[16px]">
                          36 y.o., Head of the Therapeutic Department
                        </span>
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
