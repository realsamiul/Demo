import { useState } from 'react'
import { Upload, Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import type { DedupMatch } from '../types'

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8000'

export default function DedupScreen() {
  const [csvText, setCsvText] = useState('')
  const [loading, setLoading] = useState(false)
  const [matches, setMatches] = useState<DedupMatch[]>([])
  const [error, setError] = useState<string | null>(null)

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      const text = event.target?.result as string
      setCsvText(text)
      setError(null)
      setMatches([])
    }
    reader.readAsText(file)
  }

  const handleAnalyze = async () => {
    if (!csvText.trim()) {
      setError('Please upload a CSV file')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`${API_BASE}/api/dedup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ csv_data: csvText }),
      })

      if (!response.ok) {
        const err = await response.json()
        throw new Error(err.detail || 'Deduplication failed')
      }

      const data = await response.json()
      setMatches(data.data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
      setMatches([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="space-y-6">
        {/* Upload Section */}
        <div className="bg-[#0a0a0b] border border-[#333] rounded-lg p-8">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#1a1a1b] flex items-center justify-center">
              <Upload className="w-8 h-8 text-blue-400" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium text-[#fcfcfd]">Upload CSV Data</h3>
              <p className="text-sm text-[#707785] mt-1">
                Columns: name, phone. Format: CSV with header row.
              </p>
            </div>

            <input
              type="file"
              accept=".csv"
              onChange={handleUpload}
              className="hidden"
              id="csv-input"
            />

            <label
              htmlFor="csv-input"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-colors"
            >
              Choose File
            </label>

            {csvText && (
              <div className="text-sm text-[#707785]">
                Loaded: <span className="text-[#fcfcfd]">{csvText.split('\n').length - 1} records</span>
              </div>
            )}
          </div>

          {csvText && (
            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="w-full mt-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 disabled:bg-gray-600 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                'Find Duplicates'
              )}
            </button>
          )}
        </div>

        {/* CSV Preview */}
        {csvText && !matches.length && !loading && (
          <div className="bg-[#0a0a0b] border border-[#333] rounded-lg p-4">
            <p className="text-xs text-[#707785] uppercase tracking-wider mb-3 font-medium">
              CSV Preview
            </p>
            <pre className="bg-[#1a1a1b] p-4 rounded-lg text-xs text-[#fcfcfd] overflow-x-auto max-h-48 overflow-y-auto scrollable">
              {csvText.split('\n').slice(0, 10).join('\n')}
              {csvText.split('\n').length > 10 && '\n...'}
            </pre>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-900/20 border border-red-800 rounded-lg p-4 flex gap-3">
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-red-200 font-medium">Analysis failed</p>
              <p className="text-red-300 text-sm mt-1">{error}</p>
            </div>
          </div>
        )}

        {/* Results */}
        {matches.length > 0 && (
          <div className="bg-[#0a0a0b] border border-[#333] rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-medium text-[#fcfcfd]">
                {matches.length} Potential Duplicate{matches.length !== 1 ? 's' : ''} Found
              </h3>
            </div>

            <div className="space-y-3 max-h-96 overflow-y-auto scrollable">
              {matches.map((match, idx) => (
                <div
                  key={idx}
                  className="bg-[#1a1a1b] rounded-lg p-4 border-l-4 border-yellow-600"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="text-[#fcfcfd] font-medium">
                        {match.name_1} ↔ {match.name_2}
                      </p>
                      <p className="text-xs text-[#707785] mt-1">
                        Rec #{match.record_1_id} vs #{match.record_2_id}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        match.confidence === 'High'
                          ? 'bg-red-900/30 text-red-300'
                          : match.confidence === 'Medium'
                            ? 'bg-yellow-900/30 text-yellow-300'
                            : 'bg-blue-900/30 text-blue-300'
                      }`}
                    >
                      {match.confidence}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-[#707785] text-xs">Phone 1</p>
                      <p className="text-[#fcfcfd] font-mono">{match.phone_1}</p>
                    </div>
                    <div>
                      <p className="text-[#707785] text-xs">Phone 2</p>
                      <p className="text-[#fcfcfd] font-mono">{match.phone_2}</p>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-[#333]">
                    <p className="text-xs text-[#707785]">
                      Name similarity: <span className="text-[#fcfcfd]">{(match.name_sim * 100).toFixed(0)}%</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                const csv = [
                  'record_1_id,record_2_id,name_1,name_2,phone_1,phone_2,confidence',
                  ...matches.map(
                    (m) =>
                      `${m.record_1_id},${m.record_2_id},"${m.name_1}","${m.name_2}",${m.phone_1},${m.phone_2},${m.confidence}`
                  ),
                ].join('\n')

                const blob = new Blob([csv], { type: 'text/csv' })
                const url = URL.createObjectURL(blob)
                const a = document.createElement('a')
                a.href = url
                a.download = `duplicates_${Date.now()}.csv`
                a.click()
              }}
              className="w-full py-2 bg-[#1a1a1b] text-blue-400 rounded-lg hover:bg-[#2a2a2b] transition-colors"
            >
              Download Results
            </button>
          </div>
        )}

        {/* No results */}
        {!loading && matches.length === 0 && csvText && !error && (
          <div className="bg-[#0a0a0b] border border-[#333] rounded-lg p-6 text-center">
            <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
            <p className="text-[#fcfcfd] font-medium">No duplicates detected</p>
            <p className="text-sm text-[#707785] mt-1">Your data appears to be unique.</p>
          </div>
        )}
      </div>
    </div>
  )
}
