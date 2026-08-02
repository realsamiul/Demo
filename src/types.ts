export interface BeneficiaryRecord {
  name: string
  attendance_status: 'Present' | 'Absent'
  phone_number: string
}

export interface FormExtraction {
  training_date: string
  location: string
  records: BeneficiaryRecord[]
}

export interface DedupMatch {
  record_1_id: number
  record_2_id: number
  name_1: string
  name_2: string
  phone_1: string
  phone_2: string
  name_soundex: string
  name_sim: number
  confidence: 'High' | 'Medium' | 'Low'
}
