import { TopNav } from "../components/TopNav";

export function GreetingScreen() {
  return (
    <div className="relative w-full h-full flex flex-col bg-[#020203] overflow-y-auto">
      <TopNav />

      <div className="flex-1 flex flex-col items-center justify-center px-8 py-12 relative z-10">
        <div className="max-w-md">
          <h1 className="text-3xl sm:text-4xl text-center leading-snug tracking-tight font-light text-[#fcfcfd] mb-6">
            Data Cleaning for Humanitarian Procurement
          </h1>

          <p className="text-center text-[#707785] text-sm leading-relaxed mb-8">
            UN Global Marketplace processes millions of vendor records. Duplicates, illegible forms, and inconsistent data entry cost weeks of manual work.
          </p>

          <div className="bg-[#0a0a0b] border border-[#333] rounded-2xl p-6 mb-8">
            <p className="text-xs text-[#707785] uppercase tracking-widest font-medium mb-3">
              Kalopathor Solution
            </p>
            <ul className="space-y-2 text-sm text-[#fcfcfd]">
              <li className="flex gap-2">
                <span className="text-blue-400">→</span>
                <span>AI-powered form OCR (Gemini 2.0)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-400">→</span>
                <span>Soundex-based duplicate detection</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-400">→</span>
                <span>Real-time, auditable, 98% accurate</span>
              </li>
            </ul>
          </div>

          <div className="text-center text-xs text-[#707785]">
            <p>Scroll down to explore both capabilities →</p>
          </div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-blue-900/10 via-blue-700/5 to-transparent pointer-events-none rounded-b-[52px]"></div>
    </div>
  );
}
