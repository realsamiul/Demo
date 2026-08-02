import { ChevronDown } from "lucide-react";

export function InvestAIScreen() {
  return (
    <div className="w-full h-full flex flex-col bg-[#020203] overflow-y-auto no-scrollbar pb-8 relative">
      {/* Header Card */}
      <div className="bg-gradient-to-b from-[#1a3a52] to-[#0f2438] rounded-b-[40px] p-8 pt-16 text-[#fcfcfd]">
        <p className="text-xs font-medium mb-1 opacity-70 tracking-widest">Duplicate Detection</p>
        <h1 className="text-3xl font-normal mb-4 tracking-tight">Vendor Deduplication</h1>
        <p className="text-[13px] leading-relaxed opacity-80 font-light">
          Soundex-based phonetic matching with Jaro-Winkler similarity scoring. Catches name variations, transliteration inconsistencies, and phone number matches.
        </p>
      </div>

      {/* Duplicates Found */}
      <div className="px-8 flex flex-col gap-6 mt-8">
        <p className="text-xs font-medium tracking-widest text-[#707785] uppercase">Potential Duplicates Found: 3</p>

        {[
          { name1: "Rahim", name2: "Raheem", phone: "01712345678", confidence: "High", sim: "94%" },
          { name1: "Fatima Khan", name2: "Fatiama Kahn", phone: "01798765432", confidence: "Medium", sim: "87%" },
          { name1: "Karim", name2: "Kareem", phone: "01654321987", confidence: "High", sim: "92%" }
        ].map((dup, i) => (
          <div key={i} className="flex flex-col border-b border-gray-800 pb-4">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm text-[#fcfcfd]">{dup.name1} ↔ {dup.name2}</p>
              <span className={`text-xs px-2 py-1 rounded-full ${
                dup.confidence === "High" ? "bg-red-900/30 text-red-300" : "bg-yellow-900/30 text-yellow-300"
              }`}>
                {dup.confidence}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-xs text-[#707785]">{dup.phone}</p>
              <p className="text-xs text-blue-400">Match: {dup.sim}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="px-6 mt-8">
        <p className="text-sm text-[#fcfcfd] mb-4">Processing Stats</p>
        <div className="flex justify-between items-center text-[#fcfcfd] border-b border-gray-800 pb-4">
          <p className="text-sm">Records Analyzed</p>
          <p className="text-sm font-medium">2,847</p>
        </div>
        <div className="flex justify-between items-center text-[#fcfcfd] border-b border-gray-800 pb-4 mt-3">
          <p className="text-sm">Processing Time</p>
          <p className="text-sm font-medium">&lt;3.2 seconds</p>
        </div>
      </div>
    </div>
  );
}
