'use client';
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MainSection1 } from "@/components/sections/MainSection1";

import MainBgImage from "../../../../public/img/work/mckduck/demonstration1.webp";
import kryaCenterImage from "../../../../public/img/work/mckduck/krya-center.webp";
import kryaCenterImage2 from "../../../../public/img/work/mckduck/krya-center2.webp";
import krya1Image from "../../../../public/img/work/mckduck/krya1.webp";
import krya2Image from "../../../../public/img/work/mckduck/krya2.webp";
import phone1Top from "../../../../public/img/work/mckduck/phone1.webp";
import phone2Top from "../../../../public/img/work/mckduck/phone2.webp";
import phone1Center from "../../../../public/img/work/mckduck/phone3.webp";
import phone2Center from "../../../../public/img/work/mckduck/phone4.png";
import phone3Center from "../../../../public/img/work/mckduck/phone5.png";
import phone4Center from "../../../../public/img/work/mckduck/phone6.png";
import phone5Center from "../../../../public/img/work/mckduck/phone7.webp";
import phone1Bottom from "../../../../public/img/work/mckduck/phone8.webp";
import phone2Bottom from "../../../../public/img/work/mckduck/phone9.png";
import phone3Bottom from "../../../../public/img/work/mckduck/phone10.webp";
import kryaIpadImage from "../../../../public/img/work/mckduck/krya-ipad.webp";
import PreviewImage from "../../../../public/img/work/code-storage/preview.webp";

import { NextPageSection } from "@/components/sections/NextPageSection";
import {useLanguage} from "@/context/LanguageContext";
import viktorImage from "../../../../public/img/work/mckduck/viktor.webp";
import katyaImage from "../../../../public/img/work/mckduck/katya.webp";
import andreiImage from "../../../../public/img/work/mckduck/andrei.webp";


export default function Page() {
  const { t } = useLanguage();
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <MainSection1
          title={<>McDuckMist Telegram Mini App</>}
          table={[
            { title: "Scope", value: "End-to-end product design" },
            { title: "Industry", value: "GameFi" },
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
          <div className="container lg:flex font-medium">
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full font-inter">

              <li className="flex flex-col w-full">
                      <span className="text-[#C3C6CC] font-medium text-[17px] md:text-[18px] pb-[30px] border-b border-[#E5E0DC] mb-[30px]">
                        Overview
                      </span>
                <span className="text-[#404040] font-medium text-[17px] md:text-[18px] whitespace-pre-line">
                  McDuckMist is a GameFi Telegram Mini App that lets users earn MCDC tokens through farming and staking
                </span>
              </li>

              <li className="flex flex-col w-full">
                      <span className="text-[#C3C6CC] font-medium text-[17px] md:text-[18px] pb-[30px] border-b border-[#E5E0DC] mb-[30px]">
                        My role
                      </span>
                <span className="text-[#404040] font-medium text-[17px] md:text-[18px] whitespace-pre-line">
                  For a GameFi project delivered as a Telegram Mini App, I was responsible for the end-to-end UX/UI process – user research, competitor analysis, and final usability testing. I designed flows that drive fast user engagement right inside the messenger, working within Telegram WebApp API limitations and mobile-first interaction patterns                      </span>
              </li>

              <li className="flex flex-col w-full">
                      <span className="text-[#C3C6CC] font-medium text-[17px] md:text-[18px] pb-[30px] border-b border-[#E5E0DC] mb-[30px]">
                        Problem
                      </span>
                <ul className="list-disc pl-5 mt-2 text-[#404040] font-medium text-[17px] md:text-[18px] space-y-1">
                  <li>Users were skeptical of crypto games – unclear tokenomics, unclear withdrawal, fear of scams</li>
                  <li>Onboarding drop-off: crypto mechanics scared off new users before their first MCDC</li>
                  <li>Telegram platform constraints</li>
                  <li>The risk of low retention – users may not return to the app</li>
                </ul>
              </li>

            </ul>
          </div>
        </section>


        <section className="bg-[#ECF0F3] py-[60px] lg:py-[80px] xl:py-[120px]">
          <div className="container">
            {/*Viktor*/}
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[80px]">

              <div className="flex flex-col">


                <div className="mb-[34px]">
                            <span className="block font-inter text-[#C3C6CC] text-[17px] md:text-[18px] border-b border-[#C3C6CC]/25 pb-[16px] lg:pb-[30px] mb-[16px] lg:mb-[30px]">
                              User Personas
                            </span>

                  <div className="flex items-center gap-[20px] mb-[28px]">
                    <Image
                        src={viktorImage}
                        alt="Viktor"
                        width={186}
                        height={146}
                        quality={95}
                        className="object-cover bg-white shrink-0 w-[144px] h-[106px] lg:w-[184px] lg:h-[146px]"
                    />
                    <div className="flex flex-col">
                                <span className="font-inter text-[#404040] font-medium text-[17px] md:text-[18px] mb-[6px]">
                                  Viktor
                                </span>
                      <span className="text-[#C3C6CC] font-inter text-[17px] md:text-[18px]">
                                  36 y.o., highly-paid professional. Understands crypto.
                                </span>
                    </div>
                  </div>

                </div>

              </div>

              {/* ПРАВАЯ КОЛОНКА */}
              <div className="flex flex-col gap-[30px] md:gap-[40px]">

                {/* PAIN POINTS */}
                <div>
                  <h3 className=" font-medium text-[#404040] text-[24px] md:text-[40px] uppercase mb-[16px] md:mb-[20px]">
                    PAIN POINTS
                  </h3>
                  <ul className="font-inter list-disc pl-[20px] flex flex-col gap-[6px] text-[#404040] text-[16px]">
                    <li className="font-medium text-[17px] md:text-[18px]">Wasting time on the game</li>
                    <li className="font-medium text-[17px] md:text-[18px]">Risk of forgetting to log in and losing progress</li>
                  </ul>
                  <div className="border-b border-[#C3C6CC]/25 mt-[30px] md:mt-[40px]" />
                </div>

                {/* CHALLENGES */}
                <div>
                  <h3 className="font-medium text-[#404040] text-[24px] md:text-[40px] uppercase mb-[16px] md:mb-[20px]">
                    CHALLENGES
                  </h3>
                  <ul className="font-inter list-disc pl-[20px] flex flex-col gap-[6px] text-[#404040] text-[16px]">
                    <li className="font-medium text-[17px] md:text-[18px]">Farming shouldn't take much time</li>
                    <li className="font-medium text-[17px] md:text-[18px]">No need to log in frequently</li>
                  </ul>
                  <div className="border-b border-[#C3C6CC]/25 mt-[30px] md:mt-[40px]" />
                </div>

                {/* GOALS */}
                <div>
                  <h3 className="font-medium text-[#404040] text-[24px] md:text-[40px] uppercase mb-[16px] md:mb-[20px]">
                    GOALS
                  </h3>
                  <ul className="font-inter list-disc pl-[20px] flex flex-col gap-[6px] text-[#404040] font-medium text-[17px] md:text-[18px]">
                    <li>Farm as many virtual coins as possible in Telegram Web Apps</li>
                    <li>Get passive income from a promising crypto project</li>
                    <li>Stay on trend with like-minded people in Telegram chats</li>
                  </ul>
                </div>

              </div>
            </div>

            {/* БЛОК КАТИ */}
            <div className="mt-[60px] lg:mt-[80px] xl:mt-[120px] grid grid-cols-1 lg:grid-cols-2 lg:gap-[80px]">

              {/* ФОТО + ПЕРСОНА — теперь первая в DOM, на мобилке сверху */}
              <div className="flex flex-col lg:order-2">
                <div>
                  <div className="flex items-center gap-[20px] mb-[28px]">
                    <Image
                        src={katyaImage}
                        alt="Katya"
                        width={186}
                        height={146}
                        quality={95}
                        className="object-cover bg-white shrink-0 w-[144px] h-[106px] lg:w-[184px] lg:h-[146px]"
                    />
                    <div className="flex flex-col">
          <span className="font-inter text-[#404040] font-medium text-[17px] md:text-[18px] mb-[6px]">
            Katya
          </span>
                      <span className="text-[#C3C6CC] font-inter text-[17px] md:text-[18px]">
            17 y.o., schoolgirl. Loves hanging out in clubs with friends
          </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ТЕКСТ — теперь второй в DOM, на мобилке снизу */}
              <div className="flex flex-col gap-[30px] md:gap-[40px] lg:order-1">
                <div>
                  <h3 className="font-medium text-[#404040] text-[24px] md:text-[40px] uppercase mb-[16px] md:mb-[20px]">
                    Need
                  </h3>
                  <ul className="font-inter list-disc pl-[20px] flex flex-col gap-[6px] text-[#404040] text-[16px]">
                    <li className="font-medium text-[17px] md:text-[18px]">Risk of not liking the game</li>
                    <li className="font-medium text-[17px] md:text-[18px]">Risk of not enjoying the process</li>
                  </ul>
                  <div className="border-b border-[#C3C6CC]/25 mt-[30px] md:mt-[40px]" />
                </div>

                <div>
                  <h3 className="font-medium text-[#404040] text-[24px] md:text-[40px] uppercase mb-[16px] md:mb-[20px]">
                    Pain points
                  </h3>
                  <ul className="font-inter list-disc pl-[20px] flex flex-col gap-[6px] text-[#404040] text-[16px]">
                    <li className="font-medium text-[17px] md:text-[18px]">Getting satisfaction shouldn't be complicated</li>
                    <li className="font-medium text-[17px] md:text-[18px]">Need to get hooked quickly into the gameplay</li>
                  </ul>
                  <div className="border-b border-[#C3C6CC]/25 mt-[30px] md:mt-[40px]" />
                </div>

                <div>
                  <h3 className="font-medium text-[#404040] text-[24px] md:text-[40px] uppercase mb-[16px] md:mb-[20px]">
                    Motivations
                  </h3>
                  <ul className="font-inter list-disc pl-[20px] flex flex-col gap-[6px] text-[#404040] font-medium text-[17px] md:text-[18px]">
                    <li>Get immersed in an engaging arcade plot</li>
                    <li>Tap on a game for cheap dopamine</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* БЛОК АНДРЕЯ */}
            <div className="mt-[60px] lg:mt-[80px] xl:mt-[120px] grid grid-cols-1 lg:grid-cols-2 lg:gap-[80px]">

              {/* ФОТО + ПЕРСОНА — первая в DOM */}
              <div className="flex flex-col lg:order-2">
                <div>
                  <div className="flex items-center gap-[20px] mb-[28px]">
                    <Image
                        src={andreiImage}
                        alt="Andrei"
                        width={186}
                        height={146}
                        quality={95}
                        className="object-cover bg-white shrink-0 w-[144px] h-[106px] lg:w-[184px] lg:h-[146px]"
                    />
                    <div className="flex flex-col">
          <span className="font-inter text-[#404040] font-medium text-[17px] md:text-[18px] mb-[6px]">
            Andrey
          </span>
                      <span className="text-[#C3C6CC] font-inter text-[17px] md:text-[18px]">
            26 y.o., factory worker. Works morning to night, always comes home tired
          </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ТЕКСТ — второй в DOM */}
              <div className="flex flex-col gap-[30px] md:gap-[40px] lg:order-1">
                <div>
                  <h3 className="font-medium text-[#404040] text-[24px] md:text-[40px] uppercase mb-[16px] md:mb-[20px]">
                    Need
                  </h3>
                  <ul className="font-inter list-disc pl-[20px] flex flex-col gap-[6px] text-[#404040] text-[16px]">
                    <li className="font-medium text-[17px] md:text-[18px]">Fear of getting hooked and not being able to sleep</li>
                    <li className="font-medium text-[17px] md:text-[18px]">High entry barrier (can't figure out how to play)</li>
                  </ul>
                  <div className="border-b border-[#C3C6CC]/25 mt-[30px] md:mt-[40px]" />
                </div>

                <div>
                  <h3 className="font-medium text-[#404040] text-[24px] md:text-[40px] uppercase mb-[16px] md:mb-[20px]">
                    Pain points
                  </h3>
                  <ul className="font-inter list-disc pl-[20px] flex flex-col gap-[6px] text-[#404040] text-[16px]">
                    <li className="font-medium text-[17px] md:text-[18px]">Beat accumulated fatigue without extra stress</li>
                    <li className="font-medium text-[17px] md:text-[18px]">Gameplay must be interesting and engaging</li>
                  </ul>
                  <div className="border-b border-[#C3C6CC]/25 mt-[30px] md:mt-[40px]" />
                </div>

                <div>
                  <h3 className="font-medium text-[#404040] text-[24px] md:text-[40px] uppercase mb-[16px] md:mb-[20px]">
                    Motivations
                  </h3>
                  <ul className="font-inter list-disc pl-[20px] flex flex-col gap-[6px] text-[#404040] font-medium text-[17px] md:text-[18px]">
                    <li>Scroll/tap on the phone after a hard day</li>
                    <li>Find a way to rest when there's no energy for other activities</li>
                    <li>Switch attention and relax</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="font-inter mt-[60px] md:mt-[80px] lg:mt-[120px]">
                    <span className="block text-[#C3C6CC] text-[17px] md:text-[18px] border-b border-[#C3C6CC]/25 pb-[16px] lg:pb-[30px] mb-[16px] lg:mb-[30px]">
                      Objective
                    </span>
              <p className="font-medium text-[#404040] text-[17px] md:text-[18px]">
                To design an intuitive UX/UI for a Telegram Mini App that lowers the entry barrier into GameFi for Web2 users and ensures high retention through a seamless onboarding flow and engaging game mechanics within the Telegram WebApp API constraints
              </p>
            </div>

          </div>
        </section>


        <section className="bg-[#FAFCFC] pt-[60px] pb-[60px] lg:pt-[80px] lg:pb-[80px] xl:pt-[120px] xl:pb-[120px]">
          <div className=" pb-[60px] lg:pb-[80px] xl:pb-[120px]">
            <Image
                className="animate__animated opacity-0 container mckduck-center"
                data-animation="animate__fadeInUp"
                src={kryaCenterImage}
                alt=""
                quality={95}
                priority
            />
          </div>


          <div className="container center-bottom flex flex-col lg:flex-row">

            <div className="center-bottom_left flex flex-col lg:mr-[30px]">
              <p className="font-inter leading-[100%] text-[24px] md:text-[30px] xl:text-[40px] mb-[20px] font-medium text-[#404040] lg:max-w-[603px] xl:max-w-[701px]">
                {t.workPages.mckduck.titleCenter}
              </p>
              <p className="font-inter text-[17px] leading-[130%] md:text-[18px] font-medium text-[#404040] lg:max-w-[603px] xl:max-w-[701px]">
                {t.workPages.mckduck.descriptionCenter}
              </p>

              <div className="grid grid-cols-2 gap-[23px] sm:gap-[0px] lg:grid-cols-none pt-[30px] sm:pt-[35px] md:pt-[50px]">
                <div className="md:flex">
                  <div className="flex flex-col font-bold text-[60px] md:text-[90px] xl:text-[140px] md:mr-[60px] text-[#362EEC]">
                    50+
                    <span className="font-inter font-medium text-[24px] md:text-[30px] text-[#8B8B8B]">{t.workPages.mckduck.screens}</span>
                  </div>
                  <div className="flex flex-col font-bold text-[60px] md:text-[90px] xl:text-[140px] ">
                    30+
                    <span className="font-inter font-medium text-[24px] md:text-[30px] text-[#8B8B8B]">{t.workPages.mckduck.components}</span>
                  </div>


                </div>

                <div className="center-bottom_right justify-self-end lg:hidden">
                  <Image
                      className="animate__animated opacity-0 sm:w-[220px] sm:h-[456.91px] md:w-[223px] md:h-[463px]"
                      data-animation="animate__fadeInUp"
                      sizes="100vw"
                      src={kryaCenterImage2}
                      alt=""
                      quality={95}
                      priority
                  />
                </div>
              </div>
            </div>
            <div className="center-bottom_right hidden lg:flex lg:ml-auto">
              <Image
                  className="animate__animated opacity-0 lg:w-[287px] lg:h-[596px] xl:w-[390px] xl:h-[810px]"
                  data-animation="animate__fadeInUp"
                  sizes="100vw"
                  src={kryaCenterImage2}
                  alt=""
                  quality={95}
                  priority
              />
            </div>

          </div>

        </section>

        <section className="bg-[#26292E]">
          <div className="mckduck-phone__top grid grid-cols-2 md:grid-cols-3 gap-[10px] md:gap-[30px] xl:gap-[20px] container pt-[60px] lg:pt-[80px] xl:pt-[120px]">
            <Image
                className="animate__animated opacity-0"
                data-animation="animate__fadeInUp"
                src={phone1Top}
                alt=""
                quality={100}
                sizes="50vw"
                unoptimized
                priority
            />
            <Image
                className="animate__animated opacity-0"
                data-animation="animate__fadeInUp"
                src={phone2Top}
                alt=""
                quality={100}
                sizes="50vw"
                unoptimized
                priority
            />
          </div>
          <div className="mckduck-phone__center grid grid-cols-2 md:grid-cols-3 gap-x-[10px] gap-y-[40px] md:gap-x-[30px] md:gap-y-[60px] lg:gap-y-[80px] pb-[40px] md:pb-[60px] lg:pb-[80px] xl:pb-[120px]    megaXXXl::grid-cols-none       megaXXXl:flex megaXXXl:gap-x-[20px] megaXXXl:justify-center megaXXXl:overflow-hidden      pt-[40px] md:pt-[60px] lg:pt-[80px] xl:pt-[120px]">
            <Image
                className="animate__animated opacity-0 megaXXXl:-ml-[50%]"
                data-animation="animate__fadeInUp"
                src={phone1Center}
                alt=""
                quality={100}
                unoptimized
                priority

            />
            <Image
                className="animate__animated opacity-0"
                data-animation="animate__fadeInUp"
                src={phone2Center}
                alt=""
                quality={100}
                unoptimized
                priority

            />
            <Image
                className="animate__animated opacity-0"
                data-animation="animate__fadeInUp"
                src={phone3Center}
                alt=""
                quality={100}
                unoptimized
                priority

            />
            <Image
                className="animate__animated opacity-0"
                data-animation="animate__fadeInUp"
                src={phone4Center}
                alt=""
                quality={100}
                unoptimized
                priority

            />
            <div className="animate__animated opacity-0 megaXXXl:-mr-[50%] relative z-2"
                 data-animation="animate__fadeInUp"
            >
              <Image
                  src={phone5Center}
                  alt=""
                  quality={100}
                  unoptimized
                  priority
                  className="relative z-10 w-full h-full"
              />

              <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="mckduck-video absolute top-[0.5%] left-[0%] w-[100%] h-[99%] object-contain -z-10"
              >
                <source src="/img/work/mckduck/kryaVideo.webm" type="video/webm" />
              </video>
            </div>


          </div>
          <div className="mckduck-phone__bottom container grid grid-cols-2 md:grid-cols-3 gap-x-[10px] gap-y-[40px] md:gap-x-[30px] xl:gap-[20px] md:gap-y-[0px] pb-[40px] md:pb-[60px] lg:pb-[80px] xl:pb-[120px]">
            <Image
                className="animate__animated opacity-0 lg:mr-[20px]"
                data-animation="animate__fadeInUp"
                src={phone1Bottom}
                alt=""
                quality={100}
                unoptimized
                priority
            />
            <Image
                className="animate__animated opacity-0 lg:mr-[20px]"
                data-animation="animate__fadeInUp"
                src={phone2Bottom}
                alt=""
                quality={100}
                unoptimized
                priority
            />
            <Image
                className="animate__animated opacity-0  lg:mr-[20px]"
                data-animation="animate__fadeInUp"
                src={phone3Bottom}
                alt=""
                quality={100}
                unoptimized
                priority
            />

          </div>


          <div className="container grid grid-cols-1 overflow-hidden h-[15vw] md:h-[10vw] xl:h-[6vw] relative justify-end">
            <div className="relative overflow-hidden h-full w-full max-w-[50%] md:max-w-[33.33%] ml-auto">
              <Image
                  className="absolute top-0 left-0 w-full h-auto animate__animated opacity-0"
                  data-animation="animate__fadeInUp"
                  src={phone3Bottom}
                  alt=""
                  quality={100}
                  unoptimized
                  priority
                  style={{ transform: 'translateY(-75%)' }}
              />
            </div>
          </div>

        </section>

        <section className=" bg-[#F8F8F8] py-[60px] lg:py-[80px] xl:py-[120px]">
          <div className="container flex flex-col items-center">
            <div className="mb-[60px] lg:mb-[80px] xl:mb-[120px]">
              <div className="flex lg:gap-[20px] flex-col lg:flex-row items-center">
                <Image
                    className="mb-[30px] w-full"
                    src={krya1Image}
                    quality={95}
                    sizes="100vw"
                    alt=""
                />
                <Image
                    className="mb-[30px] w-full"
                    src={krya2Image}
                    quality={95}
                    sizes="100vw"
                    alt=""
                />
              </div>
              <div className="container flex flex-col mckduck lg:justify-between lg:flex-row">
                <p className="font-inter xl:mr-[80px] leading-[100%] text-[24px] md:text-[30px] md:mr-[20px] xl:text-[40px] miniSm:mb-[20px] font-medium text-[#404040] lg:max-w-[596px] text-start lg:w-[50%] mb-[20px] lg:mb-[0px]">
                  {t.workPages.mckduck.titleTwo}
                </p>
                <p className="font-inter text-[17px] leading-[130%] md:text-[18px] font-medium text-[#404040] lg:max-w-[495px] lg:w-[50%]">
                  {t.workPages.mckduck.descriptionTwo}
                </p>
              </div>
            </div>
            <div className="lg:flex lg:flex-col">
              <Image
                  className="mb-[30px]"
                  src={kryaIpadImage}
                  quality={95}
                  sizes="100vw"
                  alt=""
              />
              <span className="font-inter font-medium text-[17px] md:text-[18px] text-[#404040] lg:max-w-[448px] xl:max-w-[596px]">
                {t.workPages.mckduck.descriptionFooter}
              </span>
            </div>
          </div>
        </section>

        <NextPageSection
          projectKey="codeStorage"
          bgColor="#DFE2E8"
          href="https://snipit.ru/"
          image={PreviewImage}
        />
      </main>
      <Footer />
    </>
  );
}
