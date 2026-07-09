"use client";

import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";
import SendEmailPopup from "../popups/SendEmailPopup";
import { useState } from "react";
import Magnetic from "../logics/Magnetic";
import { Svg } from "../Svg";
import { useLanguage } from "@/context/LanguageContext";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export function ContactSection() {
  const { register, handleSubmit } = useForm<FormData>();
  const [i, setI] = useState<boolean>(false);
  const { t } = useLanguage();

  function onSubmit(data: FormData) {
    sendEmail(data);
    setI(true);
  }

  function close() {
    setI(false);
  }

  return (
    <>
      <section
        id="contact"
        className="bg-blackBg pb-[60px] pt-[60px] sm:pb-[70px] md:pb-[80px] md:pt-[80px] lg:pb-[80px] xl:pb-[120px] xl:pt-[100px] z-20"
      >
        <div className="container">
          <div className="flex flex-col justify-between md:gap-[20px] md:flex-row relative">
            <h2 className="max-w-[750px] flex-shrink-0 text-left text-[48px] font-bold uppercase leading-[120%] tracking-normal text-white sm:mb-0 md:text-[56px] xl:text-[120px]">
              {t.contact.titleBefore}
              <span className="text-blueHover">{t.contact.titleHighlight}</span>
              {t.contact.titleAfter}
            </h2>
            <div>
              <p className="font-inter mt-6 flex-grow text-[17px] font-medium leading-[120%] text-white md:mt-0 md:text-[18px] md:mt-[13px] md:max-w-[354px] lg:max-w-[450px] xl:max-w-[393px] md:text-right xl:mt-[24px] lg:max-w-[393px] lg:text-right lg:mt-[10px]">
                {t.contact.description}
              </p>
              <Svg
              iconId="icon-arrow"
              size={30}
              className="right-0 bottom-[32px] absolute +rotate-90 hidden xl:flex"
            />
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative flex flex-col justify-between gap-[40px] md:flex-row md:items-end mt-[24px] md:mt-[42px] lg:mt-[50px] xl:mt-[60px]"
          >
            <div className="flex w-full flex-col gap-[24px] md:gap-[24px] lg:w-3/4 lg:gap-[70px]">
              <div className="flex flex-col gap-[24px] md:flex-row md:gap-[20px] lg:gap-[120px]">
                <div className="font-inter flex w-full flex-col gap-[10px] text-[17px] font-medium text-white md:w-1/2 sm:text-[18px]">
                  {t.contact.name} *
                  <input
                    className="active::border-blueHover rounded border border-grayInput bg-transparent px-3 py-[7px] outline-none placeholder:text-white placeholder:opacity-0 focus:border-blueHover"
                    placeholder="John Doe"
                    type="text"
                    {...register("name", { required: true })}
                  />
                </div>
                <div className="font-inter flex w-full flex-col gap-[10px] text-[17px] font-medium text-white md:w-1/2 md:text-[18px]">
                  {t.contact.email} *
                  <input
                    className="active::border-blueHover rounded border border-grayInput bg-transparent px-3 py-[7px] outline-none placeholder:text-white placeholder:opacity-0 focus:border-blueHover"
                    placeholder="john.doe@gmail.com"
                    type="email"
                    {...register("email", { required: true })}
                  />
                </div>
              </div>
              <div className="font-inter flex flex-col gap-[10px] text-[17px] font-medium text-white md:w-1/2 md:text-[18px] md:w-[70%] lg:w-full">
                {t.contact.message} *
                <textarea
                  className="active::border-blueHover h-[162px] resize-none rounded border border-grayInput bg-transparent px-3 py-2 outline-none placeholder:text-white placeholder:opacity-0 focus:border-blueHover"
                  placeholder="We need design now!"
                  {...register("message", { required: true })}
                ></textarea>
              </div>
            </div>
            <Magnetic>
              <button
                className="font-inter mx-auto flex h-[180px] w-[180px] items-center justify-center rounded-full bg-blue text-lg font-medium text-white outline-none transition hover:bg-blueHover md:absolute md:bottom-0 md:right-0"
                type="submit"
              >
                {t.contact.submit}
              </button>
            </Magnetic>
          </form>
        </div>
      </section>
      {i && <SendEmailPopup close={close} />}
    </>
  );
}
