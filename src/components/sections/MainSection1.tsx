import { ReactNode } from "react";
import MainTitleList from "../MainTitleList";
import { Svg } from "../Svg";

type Props = {
  title: ReactNode;
  table: { title: string; value: string }[];
  arrow?: boolean;
};

export function MainSection1({ title, table, arrow = false }: Props) {
  return (
    <section className="container pb-[50px] pt-[160px] lg:pt-[280px] lg:pb-[120px] md:pt-[122px] md:pb-[70px]">
      <div className="mb-[30px] lg:mb-[52px]">
        <div className="flex justify-between">
          <h1 className="flex font-semibold text-[40px] md:text-[70px] text-[#404040] whitespace-pre-line uppercase">
            {title}
          </h1>

          {arrow && (
            <div className="hidden lg:block">
              <Svg
                className="+rotate-90 text-[#2E4EEC] mt-[20px] ${arrow ? 'hidden lg:block' : 'hidden'}`"
                size={30}
                iconId="icon-arrow-tennis"
              />
            </div>

          )}
        </div>

      </div>
      <div className="flex items-center justify-between xl:mt-[60px]">
        <MainTitleList items={table} />
      </div>
    </section>
  );
}
