import { PieChart } from "lucide-react";

export function ProjectionsScreen() {
  return (
    <div className="relative w-full h-full flex flex-col bg-[#020203] px-6 overflow-y-auto no-scrollbar">

      <div className="pt-12 pb-8 flex justify-center">
        <PieChart className="w-5 h-5 text-green-400" />
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-light text-[#fcfcfd] tracking-tight mb-1">Processing Impact</h2>
        <h1 className="text-4xl font-light text-[#fcfcfd] tracking-tight mb-4">98% Accurate</h1>
        <p className="text-[10px] text-[#707785] tracking-widest uppercase flex items-center gap-1">
          Across 2M+ Records <span className="w-3 h-3 rounded-full border border-gray-600 flex items-center justify-center text-[8px]">✓</span>
        </p>
      </div>

      {/* Impact Stats */}
      <div className="flex-1 flex flex-col justify-end min-h-[200px] mb-8 relative">
        <div className="space-y-4 mb-8">
          {[
            { label: "Manual Dedup Time", before: "3-4 weeks", after: "&lt;30 min" },
            { label: "Cost Reduction", before: "$50K/cycle", after: "$2K/cycle" },
            { label: "Data Quality", before: "72%", after: "98%+" },
            { label: "False Positives", before: "8-12%", after: "&lt;2%" }
          ].map((metric, i) => (
            <div key={i} className="bg-[#0a0a0b] border border-[#333] rounded-lg p-4">
              <p className="text-xs text-[#707785] uppercase tracking-wider mb-3">{metric.label}</p>
              <div className="flex justify-between items-end">
                <span className="text-sm line-through text-[#707785]">{metric.before}</span>
                <span className="text-lg font-light text-green-400">{metric.after}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="flex justify-between items-center text-[10px] text-gray-500 font-medium tracking-widest mt-4 border-t border-gray-800 pt-4">
          <span>Manual Process</span>
          <span>Kalopathor</span>
        </div>
      </div>

      {/* Summary */}
      <p className="text-[#707785] text-sm leading-relaxed pb-16">
        Kalopathor automates the entire data cleaning pipeline for humanitarian procurement. From form OCR to duplicate detection, every step is auditable and exportable for compliance.
      </p>

      {/* Footer CTA */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center z-20">
        <p className="text-xs text-blue-400">Ready to deploy? Contact samkarim@kalopathor.com</p>
      </div>
    </div>
  );
}
