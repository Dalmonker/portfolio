"use client";

import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MainSection1 } from "@/components/sections/MainSection1";

import imageTwo from "../../../../public/img/work/kronaBank/img2.webp";
import imageThree from "../../../../public/img/work/kronaBank/img3.webp";
import imageFour from "../../../../public/img/work/kronaBank/1.png";
import imageFive from "../../../../public/img/work/kronaBank/img5.webp";
import imageSix from "../../../../public/img/work/kronaBank/2.png";

import phone1Image from "../../../../public/img/work/kronaBank/phone1.webp";
import phone2Image from "../../../../public/img/work/kronaBank/phone2.webp";
import phone3Image from "../../../../public/img/work/kronaBank/phone3.webp";
import phone4Image from "../../../../public/img/work/kronaBank/phone4.webp";
import phone5Image from "../../../../public/img/work/kronaBank/phone5.webp";
import phone6Image from "../../../../public/img/work/kronaBank/phone6.webp";
import phone7Image from "../../../../public/img/work/kronaBank/phone7.webp";
import phone8Image from "../../../../public/img/work/kronaBank/phone8.webp";
import phone9Image from "../../../../public/img/work/kronaBank/phone9.webp";
import phone10Image from "../../../../public/img/work/kronaBank/phone10.webp";

import alexImage from "../../../../public/img/work/kronaBank/alex.webp";
import MainBgImage from "../../../../public/img/work/kronaBank/dashboard.webp";

import circleImage from "../../../../public/img/work/medical-dashboard/circle.webp";
import PreviewImage from "../../../../public/img/work/mckduck/preview.webp";
import { NextPageSection } from "@/components/sections/NextPageSection";
import { useLanguage } from "@/context/LanguageContext";

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
                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-[40px] lg:gap-[80px] w-full font-inter">
                            <li className="flex flex-col w-full">
                                <span className="text-[#C3C6CC] text-[17px] md:text-[18px] border-b border-[#C3C6CC]/25 pb-[16px] lg:pb-[30px] mb-[16px] lg:mb-[30px]">
                                    Overview
                                </span>
                                <span className="text-[#404040] font-medium text-[17px] md:text-[18px] whitespace-pre-line max-w-[352px]">
                                    KronaBank is a Serbian digital bank that
                                    provides personal and business financial
                                    services through modern banking solutions
                                    focused on simplicity, accessibility, and
                                    innovation
                                </span>
                            </li>

                            <li className="flex flex-col w-full">
                                <span className="text-[#C3C6CC] text-[17px] md:text-[18px] border-b border-[#C3C6CC]/25 pb-[16px] lg:pb-[30px] mb-[16px] lg:mb-[30px]">
                                    My role
                                </span>
                                <span className="text-[#404040] font-medium text-[17px] md:text-[18px] whitespace-pre-line max-w-[352px]">
                                    Product Designer (Solo) End-to-end design:
                                    research, UX architecture, UI design,
                                    prototyping, design system, and branding
                                </span>
                            </li>

                            <li className="flex flex-col w-full">
                                <span className="text-[#C3C6CC] text-[17px] md:text-[18px] border-b border-[#C3C6CC]/25 pb-[16px] lg:pb-[30px] mb-[16px] lg:mb-[30px]">
                                    Problem
                                </span>
                                <ul className="list-disc pl-5 mt-2 text-[#404040] font-medium text-[17px] md:text-[18px] space-y-1 max-w-[352px]">
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
                                <span className="block font-inter text-[#C3C6CC] text-[17px] md:text-[18px] border-b border-[#C3C6CC]/25 pb-[16px] lg:pb-[30px] mb-[16px] lg:mb-[30px]">
                                    Design Process
                                </span>

                                <div className="font-medium pb-[40px] mb-[40px] border-b border-[#C3C6CC]/25">
                                    <h3 className="text-[#404040] text-[24px] md:text-[40px] uppercase mb-[20px]">
                                        1. Discovery
                                    </h3>
                                    <p className="font-inter text-[#404040] text-[17px] md:text-[18px] max-w-[440px]">
                                        Conducted competitor analysis, usability
                                        evaluation, and user behavior research
                                    </p>
                                </div>

                                <div className="font-medium pb-[24px] mb-[24px] md:pb-[40px] md:mb-[40px] border-b border-[#C3C6CC]/25">
                                    <h3 className="text-[#404040] text-[24px] md:text-[40px] uppercase mb-[20px]">
                                        2. Define
                                    </h3>
                                    <p className="font-inter text-[#404040] text-[17px] md:text-[18px] max-w-[440px]">
                                        Identified key pain points, formulated
                                        user personas, and set the design
                                        direction
                                    </p>
                                </div>

                                <div className="font-medium pb-[24px] mb-[24px] md:pb-[40px] md:mb-[40px] border-b border-[#C3C6CC]/25">
                                    <h3 className="text-[#404040] text-[24px] md:text-[40px] uppercase mb-[20px]">
                                        3. Strategy
                                    </h3>
                                    <p className="font-inter text-[#404040] text-[17px] md:text-[18px] max-w-[440px]">
                                        Translated research findings into
                                        product features. Built user flows,
                                        defined key steps in the app, and
                                        structured the information architecture
                                        to match real user needs
                                    </p>
                                </div>

                                <div className="font-medium pb-[24px] mb-[24px] md:pb-[40px] md:mb-[40px] border-b border-[#C3C6CC]/25">
                                    <h3 className="text-[#404040] text-[24px] md:text-[40px] uppercase mb-[20px]">
                                        4. Design
                                    </h3>
                                    <p className="font-inter text-[#404040] text-[17px] md:text-[18px] max-w-[440px]">
                                        Explored multiple layout concepts,
                                        navigation patterns, and visual styles.
                                        Created high-fidelity UI, and a
                                        consistent design system
                                    </p>
                                </div>

                                <div className="font-medium pb-[24px] mb-[24px] md:pb-[40px] md:mb-[40px] border-b border-[#C3C6CC]/25">
                                    <h3 className="text-[#404040] text-[24px] md:text-[40px] uppercase mb-[20px]">
                                        5. Prototype
                                    </h3>
                                    <p className="font-inter text-[#404040] text-[17px] md:text-[18px] max-w-[440px]">
                                        Built an interactive prototype with
                                        realistic transitions and
                                        micro-interactions
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-medium text-[#404040] text-[24px] md:text-[40px] uppercase mb-[20px]">
                                        6. Test & Iterate
                                    </h3>
                                    <p className="font-inter text-[#404040] text-[17px] md:text-[18px] max-w-[440px]">
                                        Validated the flow, gathered feedback,
                                        and refined the experience through 30+
                                        iterations
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
                        <span className="block font-inter text-[#A5A5A5] text-[17px] md:text-[18px] border-b border-[#505256] pb-[16px] lg:pb-[30px] mb-[16px] lg:mb-[36px]">
                            User Research
                        </span>

                        <div className="flex flex-col xl:flex-row pb-[60px] lg:pb-[80px] xl:pb-[120px]">
                            {/* Левая колонка: Описание в пунктирной рамке */}
                            <div className="lg:col-span-4 xl:mr-[80px] mb-[40px] md:mb-[80px] xl:mb-[0px]">
                                <p className="text-[#A5A5A5] font-inter font-medium text-[17px] md:text-[18px] xl:max-w-[352px]">
                                    The redesign started with three-stage
                                    research: six competitors analyzed, current
                                    app usability evaluated, and real mobile
                                    banking behavior studied. This helped
                                    identify the audience's needs. Based on
                                    these insights, I defined a clear direction
                                    – simplicity, speed, and trust
                                </p>
                            </div>

                            {/* Правая колонка: Цифры */}
                            <div className="flex flex-row justify-between gap-[45px] md:gap-[95px] flex-wrap">
                                {/* 20+ */}
                                <div className="flex flex-col">
                                    <span className="text-[#362EEC] text-[60px] md:text-[90px] font-bold leading-[110%] mb-[10px]">
                                        20+
                                    </span>
                                    <span className="text-[#A5A5A5] font-inter font-medium text-[20px] md:text-[30px] leading-[120%]">
                                        Hours of
                                        <br />
                                        Research
                                    </span>
                                </div>

                                {/* 30+ */}
                                <div className="flex flex-col">
                                    <span className="text-[#F6F6F6] text-[60px] md:text-[90px] font-bold leading-[110%] mb-[10px]">
                                        30+
                                    </span>
                                    <span className="text-[#A5A5A5] font-inter font-medium text-[20px] md:text-[30px] leading-[120%]">
                                        Design
                                        <br />
                                        Iterations
                                    </span>
                                </div>

                                {/* 6 */}
                                <div className="flex flex-col">
                                    <span className="text-[#F6F6F6] text-[60px] md:text-[90px] font-bold leading-[110%] mb-[10px]">
                                        6
                                    </span>
                                    <span className="text-[#A5A5A5] font-inter font-medium text-[20px] md:text-[30px] leading-[120%]">
                                        Competitors
                                        <br />
                                        Analyzed
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Секция Task */}
                        <div className="mb-[60px] md:mb-[80px] xl:mb-[120px]">
                            <span className="block font-inter text-[#A5A5A5] text-[17px] md:text-[18px] border-b border-[#505256] pb-[16px] lg:pb-[30px] mb-[16px] lg:mb-[30px]">
                                Task
                            </span>
                            <p className="text-[#A5A5A5] font-inter font-medium text-[17px] md:text-[18px]">
                                Design a modern mobile banking experience by
                                redesigning the existing API Bank application.
                                The goal was to improve usability, simplify
                                navigation, enhance the visual hierarchy, and
                                create a more intuitive interface for everyday
                                banking tasks while preserving users' trust in a
                                financial product
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
                                    <span className="block font-inter text-[#A5A5A5] text-[17px] md:text-[18px] border-b border-[#505256] pb-[16px] lg:pb-[30px] mb-[16px] lg:mb-[36px]">
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
                                        «I don't have time to figure out your
                                        app.»
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
                                    <ul className="font-inter list-disc pl-[20px] flex flex-col gap-[6px] text-[#A5A5A5] text-[16px]">
                                        <li className="font-medium text-[17px] md:text-[18px]">
                                            A frictionless, secure banking
                                            experience that respects his time
                                            and status
                                        </li>
                                        <li className="font-medium text-[17px] md:text-[18px]">
                                            Confidence that his funds and data
                                            are protected at the highest level
                                        </li>
                                    </ul>
                                    <div className="border-b border-[#505256] mt-[40px]" />
                                </div>

                                {/* PAIN POINTS */}
                                <div>
                                    <h3 className="font-medium text-[#E1E1E2] text-[24px] md:text-[40px] uppercase mb-[20px]">
                                        Pain points
                                    </h3>
                                    <ul className="font-inter list-disc pl-[20px] flex flex-col gap-[6px] text-[#A5A5A5] text-[16px]">
                                        <li className="font-medium text-[17px] md:text-[18px]">
                                            Cluttered interfaces with too many
                                            irrelevant features and ads
                                        </li>
                                        <li className="font-medium text-[17px] md:text-[18px]">
                                            Difficulty reading small text and
                                            navigating complex layouts
                                        </li>
                                    </ul>
                                    <div className="border-b border-[#505256] mt-[40px]" />
                                </div>

                                {/* MOTIVATIONS */}
                                <div>
                                    <h3 className="font-medium text-[#E1E1E2] text-[24px] md:text-[40px] uppercase mb-[20px]">
                                        Motivations
                                    </h3>
                                    <ul className="font-inter list-disc pl-[20px] flex flex-col gap-[6px] text-[#A5A5A5] font-medium text-[17px] md:text-[18px]">
                                        <li>
                                            Maintaining control over his wealth
                                            and legacy
                                        </li>
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
                                <span className="block font-inter text-[#C3C6CC] text-[17px] md:text-[18px] border-b border-[#C3C6CC]/25 pb-[16px] lg:pb-[30px] mb-[16px] lg:mb-[30px]">
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
                                    <p className="font-inter font-medium text-[#404040] text-[17px] md:text-[18px]">
                                        Visual noise was removed, navigation was
                                        simplified, and a clear visual hierarchy
                                        was established
                                    </p>
                                    <div className="border-b border-[#C3C6CC]/25 mt-[24px] md:mt-[40px]" />
                                </div>

                                <div>
                                    <h3 className="font-medium text-[#404040] text-[24px] md:text-[40px] uppercase mb-[20px]">
                                        Speed at every step
                                    </h3>
                                    <p className="font-inter font-medium text-[#404040] text-[17px] md:text-[18px]">
                                        The new experience reduces the number of
                                        steps for routine tasks
                                    </p>
                                    <div className="border-b border-[#C3C6CC]/25 mt-[24px] md:mt-[40px]" />
                                </div>

                                <div>
                                    <h3 className="font-medium text-[#404040] text-[24px] md:text-[40px] uppercase mb-[20px]">
                                        Trust through design
                                    </h3>
                                    <p className="font-inter font-medium text-[#404040] text-[17px] md:text-[18px]">
                                        A consistent visual language,
                                        transparent transaction details, and
                                        clear confirmation flows were used to
                                        strengthen user confidence in the
                                        product
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Image
                            className="mt-[60px] md:mt-[80px] xl:mt-[120px]"
                            sizes="100vw"
                            src={imageThree}
                            alt=""
                            quality={95}
                            priority
                        />
                    </div>
                </section>





                <section className="bg-[#141D26] py-[40px] md:py-[60px] xl:py-[120px]">
                    <div className="container mx-auto px-4 md:px-6">
                        {/* Заголовок App Structure */}
                        <span className="block text-[#525D68] text-[14px] md:text-[17px] lg:text-[18px] border-b border-[#4E5962] pb-[12px] lg:pb-[30px] mb-[20px] lg:mb-[30px]">
                            App Structure
                        </span>

                        <Image
                            src={imageFour}
                            alt="Wireframes"
                            width={1200}
                            height={800}
                            quality={95}
                            className="w-full max-w-[1200px] h-auto"
                        />

                        {/* Блок Grid */}
                        <div className="mb-[40px] md:mb-[60px] xl:mb-[120px] mt-[40px] md:mt-[60px]">
                            <span className="block text-[#525D68] text-[14px] md:text-[16px] border-b border-[#4E5962] pb-[12px] lg:pb-[30px] mb-[20px] lg:mb-[30px]">
                                Grid
                            </span>

                            <div className="relative mx-auto w-fit">
                                <Image
                                    src={imageSix}
                                    alt="Design"
                                    width={598}
                                    height={583}
                                    quality={95}
                                    className="block w-full max-w-[598px] h-auto"
                                />
                                <div
                                    className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
                                    style={{
                                        background:
                                            "linear-gradient(to bottom, transparent 0%, #141D26 100%)",
                                    }}
                                />
                            </div>
                        </div>

                        {/* Блок Design (Описание) */}
                        <div className="">
                            <span className="block text-[#525D68] text-[14px] md:text-[16px] border-b border-[#4E5962] pb-[12px] lg:pb-[30px] mb-[20px] lg:mb-[30px]">
                                Design
                            </span>

                            <p className="text-[#92989D] font-inter font-medium text-[15px] md:text-[17px] lg:text-[18px] max-w-[804px] leading-relaxed">
                                Design a modern mobile banking experience by
                                redesigning the existing API Bank application.
                                The goal was to improve usability, simplify
                                navigation, enhance the visual hierarchy, and
                                create a more intuitive interface for everyday
                                banking tasks while preserving users' trust in a
                                financial product
                            </p>
                        </div>

                        {/* Сетка с телефонами (Log in, Sign Up, Enter Code) */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[40px] lg:gap-[80px] mt-[40px] md:mt-[60px]">
                            <div className="flex flex-col items-center sm:items-start">
                                <div className="relative w-full max-w-[280px] sm:max-w-none aspect-[9/19]">
                                    <Image
                                        src={phone1Image}
                                        alt="01 / Log in"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span className="font-inter text-[#525D68] text-[13px] md:text-[14px]">
                                    01 / Log in
                                </span>
                            </div>

                            <div className="flex flex-col items-center sm:items-start">
                                <div className="relative w-full max-w-[280px] sm:max-w-none aspect-[9/19]">
                                    <Image
                                        src={phone2Image}
                                        alt="02 / Sign Up"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span className="font-inter text-[#525D68] text-[13px] md:text-[14px]">
                                    02 / Sign Up
                                </span>
                            </div>

                            <div className="flex flex-col items-center sm:items-start">
                                <div className="relative w-full max-w-[280px] sm:max-w-none aspect-[9/19]">
                                    <Image
                                        src={phone3Image}
                                        alt="03 / Enter Code"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span className="font-inter text-[#525D68] text-[13px] md:text-[14px]">
                                    03 / Enter Code
                                </span>
                            </div>
                        </div>

                        <div className="mt-[60px] md:mt-[80px] xl:mt-[120px] grid grid-cols-1 gap-[40px] lg:gap-[80px] md:grid-cols-3 items-center md:items-start">
                            {/* 1. Текст — слева */}
                            <div className="flex flex-col md:col-span-1 order-1">
                                <h3 className="font-medium text-[#B7BEC4] text-[24px] md:text-[30px] lg:text-[40px] uppercase mb-[10px] md:mb-[20px]">
                                    Home Page
                                </h3>
                                <p className="text-[#92989D] font-inter font-medium text-[17px] md:text-[18px] max-w-[352px]">
                                    The home screen was restructured to provide
                                    instant access to key financial data and
                                    frequent actions. By prioritizing balances,
                                    cards, and quick operations, it establishes
                                    a clear visual hierarchy, helping users
                                    manage their finances faster and with
                                    greater confidence
                                </p>
                            </div>

                            {/* 2. Телефон — по центру */}
                            <div className="flex flex-col gap-4 md:col-span-1 items-center order-2">
                                <div className="relative w-full max-w-[280px] sm:max-w-[260px] md:max-w-none aspect-[9/19]">
                                    <Image
                                        src={phone4Image}
                                        alt="Home Page Mobile App"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* 3. Пустая колонка — справа */}
                            <div className="hidden md:block md:col-span-1 order-3"></div>
                        </div>

                        <div className="mt-[40px] lg:mt-[80px] grid grid-cols-1 md:grid-cols-3 gap-[40px] lg:gap-[80px] items-center md:items-start">
                            {/* 1. Пустая колонка — слева (только desktop) */}
                            <div className="hidden md:block md:col-span-1 md:order-1"></div>

                            {/* 2. Текст — на мобильных первый, на десктопе справа */}
                            <div className="flex flex-col md:col-span-1 order-1 md:order-3">
                                <h3 className="font-medium text-[#B7BEC4] text-[24px] md:text-[30px] lg:text-[40px] uppercase mb-[10px] md:mb-[20px]">
                                    Card Management
                                </h3>
                                <p className="text-[#92989D] font-inter font-medium text-[17px] md:text-[18px]">
                                    The card management screen was redesigned to
                                    offer seamless control over both physical
                                    and virtual cards. Users can instantly
                                    freeze cards, view transaction history,
                                    manage limits, and access essential card
                                    details. The clean layout enhances
                                    usability, making it easier to oversee
                                    finances and security from a single,
                                    intuitive interface
                                </p>
                            </div>

                            {/* 3. Телефон — на мобильных второй, на десктопе в центре */}
                            <div className="flex flex-col gap-4 md:col-span-1 items-center order-2 md:order-2">
                                <div className="relative w-full max-w-[280px] sm:max-w-[260px] md:max-w-none aspect-[9/19]">
                                    <Image
                                        src={phone5Image}
                                        alt="Card Management Mobile App"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-[40px] lg:mt-[80px] grid grid-cols-1 md:grid-cols-3 gap-[40px] lg:gap-[80px] items-center md:items-start">
                            {/* 1. Текст — слева */}
                            <div className="flex flex-col md:col-span-1 order-1">
                                <h3 className="font-medium text-[#B7BEC4] text-[24px] md:text-[30px] lg:text-[40px] uppercase mb-[10px] md:mb-[20px]">
                                    Transfers Page
                                </h3>
                                <p className="text-[#92989D] font-inter font-medium text-[17px] md:text-[18px]">
                                    The transfers page was designed with
                                    efficiency in mind, allowing users to send
                                    money quickly and securely. The interface
                                    features a prominent amount input, easy
                                    contact selection, and clear confirmation
                                    steps. This streamlined flow minimizes
                                    errors and ensures a smooth experience for
                                    both domestic and international
                                    transactions
                                </p>
                            </div>

                            {/* 2. Телефон — по центру */}
                            <div className="flex flex-col gap-4 md:col-span-1 items-center order-2">
                                <div className="relative w-full max-w-[280px] sm:max-w-[260px] md:max-w-none aspect-[9/19]">
                                    <Image
                                        src={phone6Image}
                                        alt="Transfers Page Mobile App"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* 3. Пустая колонка — справа */}
                            <div className="hidden md:block md:col-span-1 order-3"></div>
                        </div>

                        <div className="mt-[40px] lg:mt-[80px] grid grid-cols-1 md:grid-cols-3 gap-[40px] lg:gap-[80px] items-center md:items-start">
                            {/* 1. Пустая колонка — слева (только desktop) */}
                            <div className="hidden md:block md:col-span-1 md:order-1"></div>

                            {/* 2. Текст — на мобильных первый, на десктопе справа */}
                            <div className="flex flex-col md:col-span-1 order-1 md:order-3">
                                <h3 className="font-medium text-[#B7BEC4] text-[24px] md:text-[30px] lg:text-[40px] uppercase mb-[10px] md:mb-[20px]">
                                    TRANSACTION ACTIVITY
                                </h3>
                                <p className="text-[#92989D] font-inter font-medium text-[17px] md:text-[18px]">
                                    Designed to make financial tracking effortless, the activity page unifies transaction history, search, filters, and spending insights into a single, cohesive experience. A clear visual hierarchy enables users to review their finances quickly and make more informed financial decisions
                                </p>
                            </div>

                            {/* 3. Телефон — на мобильных второй, на десктопе в центре */}
                            <div className="flex flex-col gap-4 md:col-span-1 items-center order-2 md:order-2">
                                <div className="relative w-full max-w-[280px] sm:max-w-[260px] md:max-w-none aspect-[9/19]">
                                    <Image
                                        src={phone7Image}
                                        alt="Card Management Mobile App"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-[40px] lg:mt-[80px] grid grid-cols-1 md:grid-cols-3 gap-[40px] lg:gap-[80px] items-center md:items-start">
                            {/* 1. Текст — слева */}
                            <div className="flex flex-col md:col-span-1 order-1">
                                <h3 className="font-medium text-[#B7BEC4] text-[24px] md:text-[30px] lg:text-[40px] uppercase mb-[10px] md:mb-[20px]">
                                    CHATS
                                </h3>
                                <p className="text-[#92989D] font-inter font-medium text-[17px] md:text-[18px]">
                                    Designed as a unified communication hub, the chats page seamlessly integrates customer support, transaction updates, and payment requests into a single experience. A clear visual hierarchy keeps users informed and connected without ever having to leave the banking app
                                </p>
                            </div>

                            {/* 2. Телефон — по центру */}
                            <div className="flex flex-col gap-4 md:col-span-1 items-center order-2">
                                <div className="relative w-full max-w-[280px] sm:max-w-[260px] md:max-w-none aspect-[9/19]">
                                    <Image
                                        src={phone8Image}
                                        alt="Transfers Page Mobile App"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* 3. Пустая колонка — справа */}
                            <div className="hidden md:block md:col-span-1 order-3"></div>
                        </div>

                        <div className="mt-[40px] lg:mt-[80px] grid grid-cols-1 md:grid-cols-3 gap-[40px] lg:gap-[80px] items-center md:items-start">
                            {/* 1. Пустая колонка — слева (только desktop) */}
                            <div className="hidden md:block md:col-span-1 md:order-1"></div>

                            {/* 2. Текст — на мобильных первый, на десктопе справа */}
                            <div className="flex flex-col md:col-span-1 order-1 md:order-3">
                                <h3 className="font-medium text-[#B7BEC4] text-[24px] md:text-[30px] lg:text-[40px] uppercase mb-[10px] md:mb-[20px]">
                                    NOTIFICATIONS
                                </h3>
                                <p className="text-[#92989D] font-inter font-medium text-[17px] md:text-[18px]">
                                    The notifications experience is designed to deliver valuable updates that go beyond everyday banking. Personalized rewards, exclusive offers, and promotional campaigns are presented in a structured, easily browsable feed, ensuring users never miss out on relevant opportunities
                                </p>
                            </div>

                            {/* 3. Телефон — на мобильных второй, на десктопе в центре */}
                            <div className="flex flex-col gap-4 md:col-span-1 items-center order-2 md:order-2">
                                <div className="relative w-full max-w-[280px] sm:max-w-[260px] md:max-w-none aspect-[9/19]">
                                    <Image
                                        src={phone9Image}
                                        alt="Card Management Mobile App"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                            <div className="mt-[40px] lg:mt-[80px] flex flex-col items-center">
                                <Image
                                    src={phone10Image}
                                    alt="Light and dark theme"
                                    width={1200}
                                    height={800}
                                    quality={95}
                                    className="block w-full max-w-[900px] h-auto"
                                />
                            </div>
                            <div className="text-[#92989D] mt-[10px] md:mt-[0px] font-inter font-medium text-[17px] md:text-[18px] max-w-[290px] self-start">
                                Created the ability to switch between light and dark themes
                            </div>

                    </div>
                </section>






                <section className="bg-[#ffffff] py-[60px] md:py-[80px] xl:py-[120px] ">
                    <div className="container">
                        {/* Секция Projected Outcomes */}
                        <div className="mb-[60px] md:mb-[80px] xl:mb-[120px]">
                            {/* Заголовок секции */}
                            <span className="block font-inter text-[#C3C6CC] text-[17px] md:text-[18px] border-b border-[#C3C6CC]/25 pb-[16px] lg:pb-[30px] mb-[16px] lg:mb-[30px]">
                                Projected Outcomes
                            </span>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-16 mt-8 lg:mt-12">
                                {/* Левая колонка: Заголовок */}
                                <div className="lg:col-span-6">
                                    <h3 className="text-[#404040] font-inter font-medium text-[32px] md:text-[40px] leading-[110%] max-w-[596px]">
                                        Designed to make banking faster,
                                        simpler, and more intuitive
                                    </h3>
                                </div>

                                {/* Правая колонка: Описание */}
                                <div className="lg:col-span-6 flex items-start">
                                    <p className="text-[#404040] font-inter font-medium text-[17px] md:text-[18px] max-w-[495px] lg:ml-auto">
                                        This redesign aims to elevate usability,
                                        streamline navigation, and enhance the
                                        overall banking experience through an
                                        intuitive interface and optimized user
                                        flows
                                    </p>
                                </div>
                            </div>

                            {/* Нижняя часть: Цифры (Метрики) */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-4 mt-8 md:mt-24">
                                {/* +45% */}
                                <div className="flex flex-col">
                                    <span className="text-[#362EEC] text-[60px] md:text-[90px] font-bold leading-[110%]">
                                        +45%
                                    </span>
                                    <span className="text-[#8B8B8B] font-inter font-medium text-[20px] md:text-[30px] leading-[120%]">
                                        Navigation clarity
                                    </span>
                                </div>

                                {/* +60% */}
                                <div className="flex flex-col">
                                    <span className="text-[#404040] text-[60px] md:text-[90px] font-bold leading-[110%]">
                                        +60%
                                    </span>
                                    <span className="text-[#8B8B8B] font-inter font-medium text-[20px] md:text-[30px] leading-[120%]">
                                        Task efficiency
                                    </span>
                                </div>

                                {/* -35% */}
                                <div className="flex flex-col">
                                    <span className="text-[#404040] text-[60px] md:text-[90px] font-bold leading-[110%]">
                                        -35%
                                    </span>
                                    <span className="text-[#8B8B8B] font-inter font-medium text-[20px] md:text-[30px] leading-[120%]">
                                        Cognitive load
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Картинка */}
                        <Image
                            className=""
                            sizes="100vw"
                            src={imageFive}
                            alt=""
                            quality={95}
                            priority
                        />
                    </div>
                </section>

                <NextPageSection
                    projectKey="Telegram Mini App"
                    bgColor="#DFE2E8"
                    href="/work/mckduck"
                    image={PreviewImage}
                />
            </main>
            <Footer />
        </>
    );
}
