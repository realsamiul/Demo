import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

interface IntroScreenProps {
  onStart: () => void
}

export default function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-[#020203] via-[#0a0a0b] to-[#1a1a1b] overflow-y-auto">
      {/* Hero */}
      <div className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-blue-900/30 border border-blue-600/50 rounded-full mb-6">
              <p className="text-blue-300 text-xs font-medium tracking-widest uppercase">
                UN Global Marketplace
              </p>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-[#fcfcfd] mb-6 leading-tight">
            Data Cleaning at Scale
          </h1>

          <p className="text-lg text-[#707785] mb-8 leading-relaxed">
            Duplicate vendor detection • Form data extraction • Quality assurance for humanitarian procurement
          </p>

          <div className="grid grid-cols-3 gap-4 mb-12 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-[#0a0a0b]/50 border border-[#333] rounded-lg p-4"
            >
              <p className="text-2xl font-light text-blue-400">98%</p>
              <p className="text-xs text-[#707785] mt-2">Accuracy</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-[#0a0a0b]/50 border border-[#333] rounded-lg p-4"
            >
              <p className="text-2xl font-light text-blue-400">&lt;2s</p>
              <p className="text-xs text-[#707785] mt-2">Per Record</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-[#0a0a0b]/50 border border-[#333] rounded-lg p-4"
            >
              <p className="text-2xl font-light text-blue-400">2M+</p>
              <p className="text-xs text-[#707785] mt-2">Records</p>
            </motion.div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onStart}
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Start Demo
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>

      {/* Problem Statement */}
      <div className="px-6 py-20 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-3xl font-light text-[#fcfcfd] mb-4">The Problem</h2>
            <ul className="space-y-3">
              {[
                'Duplicate vendor records across regions',
                'Illegible handwritten forms',
                'Inconsistent data entry (Bengali/English)',
                'Manual deduplication takes weeks',
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-[#707785]">
                  <span className="text-red-400 mt-1">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-3xl font-light text-[#fcfcfd] mb-4">Our Solution</h2>
            <ul className="space-y-3">
              {[
                'AI-powered form OCR (Gemini 2.0 Flash)',
                'Soundex-based name matching for Bengali',
                'Real-time duplicate detection',
                'Audit trail + JSON exports',
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-[#707785]">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 py-12 max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-[#707785] text-sm"
        >
          👇 Scroll down or click Start to explore both capabilities
        </motion.p>
      </div>
    </div>
  )
}
