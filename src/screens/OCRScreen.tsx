import { useState } from 'react'
import { Upload, Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import type { FormExtraction, BeneficiaryRecord } from '../types'

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8000'

export default function OCRScreen() {
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<FormExtraction | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      setError(null)
      setResult(null)
    }
  }

  const handleUpload = async () => {
    if (!file) return

    setLoading(true)
    setError(null)

    try {
      const reader = new FileReader()
      reader.onload = async (event) => {
        const base64 = (event.target?.result as string).split(',')[1]

        const response = await fetch(`${API_BASE}/api/extract`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            image_base64: base64,
            mime_type: file.type,
          }),
        })

        if (!response.ok) {
          const err = await response.json()
          throw new Error(err.detail || 'Extraction failed')
        }

        const data = await response.json()
        setResult(data.data)
      }
      reader.readAsDataURL(file)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
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
              <h3 className="text-lg font-medium text-[#fcfcfd]">Upload Form Image</h3>
              <p className="text-sm text-[#707785] mt-1">
                PNG, JPG, or PDF. Max 10MB.
              </p>
            </div>

            <input
              type="file"
              accept="image/*,.pdf"
              onChange={handleFileChange}
              className="hidden"
              id="file-input"
            />

            <label
              htmlFor="file-input"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-colors"
            >
              Choose File
            </label>

            {file && (
              <div className="text-sm text-[#707785]">
                Selected: <span className="text-[#fcfcfd]">{file.name}</span>
              </div>
            )}
          </div>

          {file && (
            <button
              onClick={handleUpload}
              disabled={loading}
              className="w-full mt-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 disabled:bg-gray-600 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Processing...
                </>
              ) : (
                'Extract Data'
              )}
            </button>
          )}
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-900/20 border border-red-800 rounded-lg p-4 flex gap-3">
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-red-200 font-medium">Extraction failed</p>
              <p className="text-red-300 text-sm mt-1">{error}</p>
            </div>
          </div>
        )}

        {/* Result */}
        {result && (
          <div className="bg-[#0a0a0b] border border-[#333] rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-medium text-[#fcfcfd]">Extraction Complete</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#1a1a1b] rounded-lg p-4">
                <p className="text-xs text-[#707785] uppercase tracking-wider mb-1">
                  Training Date
                </p>
                <p className="text-lg font-medium text-[#fcfcfd]">
                  {result.training_date}
                </p>
              </div>
              <div className="bg-[#1a1a1b] rounded-lg p-4">
                <p className="text-xs text-[#707785] uppercase tracking-wider mb-1">
                  Location
                </p>
                <p className="text-lg font-medium text-[#fcfcfd]">
                  {result.location}
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs text-[#707785] uppercase tracking-wider mb-3 font-medium">
                Attendees ({result.records.length})
              </p>
              <div className="space-y-2 max-h-96 overflow-y-auto scrollable">
                {result.records.map((record, idx) => (
                  <div
                    key={idx}
                    className="bg-[#1a1a1b] rounded-lg p-4 flex justify-between items-start"
                  >
                    <div>
                      <p className="text-[#fcfcfd] font-medium">{record.name}</p>
                      <p className="text-sm text-[#707785] mt-1">
                        {record.phone_number}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        record.attendance_status === 'Present'
                          ? 'bg-green-900/30 text-green-300'
                          : 'bg-red-900/30 text-red-300'
                      }`}
                    >
                      {record.attendance_status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                const json = JSON.stringify(result, null, 2)
                const blob = new Blob([json], { type: 'application/json' })
                const url = URL.createObjectURL(blob)
                const a = document.createElement('a')
                a.href = url
                a.download = `extraction_${Date.now()}.json`
                a.click()
              }}
              className="w-full py-2 bg-[#1a1a1b] text-blue-400 rounded-lg hover:bg-[#2a2a2b] transition-colors"
            >
              Download JSON
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
