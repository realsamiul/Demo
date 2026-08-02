import { TopNav } from "../components/TopNav";

export function DashboardScreen() {
  return (
    <div className="relative w-full h-full flex flex-col bg-[#020203]">
      <TopNav />

      {/* Top Section */}
      <div className="px-8 pt-4 pb-8 flex-shrink-0">
        <p className="text-[#707785] text-xs font-medium tracking-widest uppercase mb-2">Form Extracted</p>
        <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-[#fcfcfd]">
          Training Form<span className="text-xl sm:text-2xl text-gray-400"> #1247</span>
        </h1>
      </div>

      {/* Extraction Stats */}
      <div className="px-8 mb-8 flex-shrink-0">
        <div className="flex gap-3 mb-2">
          {[
            { label: "Date", value: "2025-08-01" },
            { label: "Location", value: "Dhaka" },
            { label: "Records", value: "24" }
          ].map((stat, i) => (
            <div key={i} className="flex-1 bg-[#0a0a0b] border border-[#333] rounded-lg p-3">
              <p className="text-[10px] text-[#707785] uppercase tracking-wider mb-1">{stat.label}</p>
              <p className="text-sm font-medium text-[#fcfcfd]">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Attendees List */}
      <div className="bg-[#fcfcfd] flex-1 rounded-t-[40px] px-6 pt-8 pb-24 flex flex-col gap-3 text-black relative overflow-y-auto">
        <p className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-2">Extracted Beneficiaries</p>

        {[
          { name: "রহিম আহমেদ", phone: "01712345678", status: "Present" },
          { name: "ফাতিমা খান", phone: "01798765432", status: "Present" },
          { name: "করিম সাহ", phone: "01654321987", status: "Present" },
          { name: "সালমা বেগম", phone: "01587654321", status: "Present" },
        ].map((person, i) => (
          <div key={i} className="border border-gray-200 rounded-2xl p-4 flex justify-between items-center shadow-sm">
            <div>
              <p className="text-sm font-medium text-gray-900">{person.name}</p>
              <p className="text-xs text-gray-500 mt-1 font-mono">{person.phone}</p>
            </div>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
              {person.status}
            </span>
          </div>
        ))}

        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-2">Quality Metrics</p>
          <div className="flex gap-2">
            <div className="flex-1 bg-blue-50 rounded-lg p-3">
              <p className="text-10px text-gray-600">OCR Confidence</p>
              <p className="text-lg font-semibold text-blue-600">98%</p>
            </div>
            <div className="flex-1 bg-green-50 rounded-lg p-3">
              <p className="text-10px text-gray-600">Extraction Time</p>
              <p className="text-lg font-semibold text-green-600">&lt;2s</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
