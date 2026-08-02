import { ChevronDown } from "lucide-react";
import { SlideToInvest } from "../components/SlideToInvest";

export function InvestBonusScreen() {
  return (
    <div className="w-full h-full flex flex-col bg-[#020203] overflow-y-auto no-scrollbar pb-8 relative">
      {/* Header Card */}
      <div className="bg-gradient-to-b from-[#2a364a] via-[#5b4f59] to-[#d4997e] rounded-b-[40px] p-8 pt-16 text-[#fcfcfd]">
        <p className="text-xs font-medium mb-1 opacity-70 tracking-widest">Investing your bonus</p>
        <h1 className="text-3xl font-normal mb-4 tracking-tight">Autonomous Index</h1>
        <p className="text-[13px] leading-relaxed opacity-80 font-light">
          We'll invest most of your bonus in a diversified mix of stocks, alternatives, and hedges tailored to your goals. We'll keep part in cash for flexibility.
        </p>
      </div>

      {/* Allocation List */}
      <div className="px-8 flex flex-col gap-6 mt-8">

        {[
          { title: "CORE GROWTH FOUNDATION", pct: "67%", desc: "L/S EQUITIES, COVERED CALL INCOME" },
          { title: "UNCORRELATED ALTERNATIVES", pct: "26%", desc: "CLOS, CRYPTO SLEEVE, COMMODITIES" },
          { title: "CRISIS ALPHA", pct: "4%", desc: "TAIL RISK HEDGE" },
          { title: "SMART CASH", pct: "3%", desc: "TREASURY BOX SPREAD" }
        ].map((item, i) => (
          <div key={i} className="flex flex-col border-b border-gray-800 pb-4">
            <div className="flex justify-between items-center">
              <p className="text-xs font-medium tracking-widest text-[#fcfcfd]">{item.title} &middot; {item.pct}</p>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
            <p className="text-[10px] tracking-widest text-[#707785] uppercase mt-1">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Transfer Section */}
      <div className="px-6 mt-8">
        <p className="text-sm text-[#fcfcfd] mb-4">Transfer from account</p>
        <div className="flex justify-between items-center text-[#707785] border-b border-gray-800 pb-4">
          <p className="text-sm">CHASE &middot;&middot;&middot;2248</p>
          <p className="text-sm">$75,000</p>
        </div>
      </div>

      <SlideToInvest />
    </div>
  );
}
