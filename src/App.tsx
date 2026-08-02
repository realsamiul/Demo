import { useState } from "react";
import { DashboardScreen } from "./screens/DashboardScreen";
import { GreetingScreen } from "./screens/GreetingScreen";
import { InvestAIScreen } from "./screens/InvestAIScreen";
import { ProjectionsScreen } from "./screens/ProjectionsScreen";
import { Home, FileText, PieChart, Info } from "lucide-react";

// Backend API configuration
export const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8000";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
    { component: <GreetingScreen />, label: "Intro", icon: Info },
    { component: <DashboardScreen />, label: "OCR Demo", icon: FileText },
    { component: <InvestAIScreen />, label: "Dedup", icon: Home },
    { component: <ProjectionsScreen />, label: "Impact", icon: PieChart },
  ];

  return (
    <div className="w-full h-screen bg-[#020203] flex flex-col">
      {/* Main Screen */}
      <div className="flex-1 overflow-hidden">
        {screens[currentScreen].component}
      </div>

      {/* Bottom Navigation */}
      <div className="bg-[#0a0a0b] border-t border-[#333] flex justify-around items-center h-20 px-4">
        {screens.map((screen, idx) => {
          const Icon = screen.icon;
          const isActive = idx === currentScreen;
          return (
            <button
              key={idx}
              onClick={() => setCurrentScreen(idx)}
              className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all ${
                isActive
                  ? "bg-blue-600/20 text-blue-400"
                  : "text-[#707785] hover:text-[#fcfcfd]"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium">{screen.label}</span>
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <div className="bg-[#0a0a0b] border-t border-[#333] px-4 py-2 text-center text-[10px] text-[#707785]">
        <p>Kalopathor • samkarim@kalopathor.com</p>
      </div>
    </div>
  );
}
