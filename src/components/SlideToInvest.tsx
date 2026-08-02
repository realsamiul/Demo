import { ArrowUp } from "lucide-react";
import { useState } from "react";

export function SlideToInvest() {
  return (
    <div className="flex flex-col items-center mt-12 pb-12 relative w-full flex-1 justify-end">
      <div className="w-[68px] h-[104px] bg-[#fcfcfd] rounded-[34px] flex items-start justify-center p-[6px] shadow-lg cursor-pointer">
        <div className="w-[56px] h-[56px] bg-[#fcfcfd] rounded-full flex items-center justify-center shadow-sm border border-gray-100">
          <ArrowUp className="w-5 h-5 text-black font-light stroke-[1.5]" />
        </div>
      </div>
      <p className="text-[#707785] text-[12px] mt-6 tracking-wide">Slide to Invest</p>
    </div>
  );
}
