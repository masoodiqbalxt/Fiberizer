import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Button } from './ui/Button'
import { AlertTriangle, Car, Users, Calendar, Wrench, ShieldCheck, HardDrive, Share2, ClipboardSignature } from 'lucide-react'
import toast from 'react-hot-toast'

export interface ComplaintForm {
  date: string
  time: string
  vehicle: string
  faultType: 'Single Link' | 'Multiple Links'
  teamLead: string
  supervisor: string
  manager: string
  closedBy: string
  closedByDesignation: string
  cableUsed: string
  jointType: string
  spliceCount: number
  sleevesCount: number
  splicingMachine: string
  otdrUsed: string
}

const designations = [
  'Cable Tech', 'Splicer', 'Executive', 'Senior Executive', 'Operation Specialist', 
  'Assistant Manager', 'Manager', 'Senior Manager', 'General Manager'
]

const cables = ['72-Core', '36-Core', '12-Core', '6-Core', '2-Core', 'Single Core', 'None']
const joints = ['Aerial Joint', 'Madidi Joint', 'None']
const machines = ['22s', '62s', '62s+']

export function ComplaintsForm() {
  const { register, handleSubmit, reset } = useForm<ComplaintForm>()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = (data: ComplaintForm) => {
    setIsSubmitting(true)
    setTimeout(() => {
      const existing = JSON.parse(localStorage.getItem('fiberizer_complaints') || '[]')
      const newComplaint = { ...data, id: Math.random().toString(36).substr(2, 9), timestamp: new Date().toISOString() }
      localStorage.setItem('fiberizer_complaints', JSON.stringify([newComplaint, ...existing]))
      
      toast.success('Fault ticket closed and logged successfully.', { style: { background: '#1e293b', color: '#fff' } })
      setIsSubmitting(false)
      reset()
    }, 1000)
  }

  return (
    <div className="bg-slate-900/50 border border-white/10 rounded-xl overflow-hidden glass-morphism shadow-2xl h-full flex flex-col">
       <div className="p-6 border-b border-white/5 bg-slate-950/40 sticky top-0 z-10">
        <h2 className="text-2xl font-extrabold flex items-center gap-3 text-white">
          <div className="p-2 bg-rose-500/20 text-rose-400 rounded-lg">
            <AlertTriangle className="w-6 h-6" />
          </div>
          Fault & Complaints Logging
        </h2>
        <p className="text-slate-400 mt-2 text-sm max-w-2xl">
          Dispatch teams, log material usage, record splicing machine details, and officially close out customer downtime effectively.
        </p>
       </div>

       <form onSubmit={handleSubmit(onSubmit)} className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-8">
          
          {/* Section 1: Dispatch & Time */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-200 flex items-center gap-2 border-b border-white/10 pb-2">
              <Calendar className="w-5 h-5 text-blue-400" /> Date & Dispatch
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
               <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Date</label>
                  <input type="date" {...register('date')} className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/50 outline-none" required />
               </div>
               <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Time</label>
                  <input type="time" {...register('time')} className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/50 outline-none" required />
               </div>
               <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Transport Vehicle</label>
                  <div className="relative">
                    <Car className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input {...register('vehicle')} placeholder="e.g. Van 4, LEB-1234" className="w-full bg-slate-950 border border-white/10 rounded-lg pl-9 pr-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/50 outline-none" required />
                  </div>
               </div>
               <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Fault Type</label>
                  <select {...register('faultType')} className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/50 outline-none">
                    <option value="Single Link">Single Link Fault</option>
                    <option value="Multiple Links">Multiple Links (Same Cable)</option>
                  </select>
               </div>
            </div>
          </div>

          {/* Section 2: Team & Escalation */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-200 flex items-center gap-2 border-b border-white/10 pb-2">
              <Users className="w-5 h-5 text-purple-400" /> Team & Escalation Matrix
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
               <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Team Lead</label>
                  <input {...register('teamLead')} placeholder="Lead Name" className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-purple-500/50 outline-none" />
               </div>
               <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Supervisor</label>
                  <input {...register('supervisor')} placeholder="Supervisor Name" className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-purple-500/50 outline-none" />
               </div>
               <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Manager</label>
                  <input {...register('manager')} placeholder="Manager Name" className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-purple-500/50 outline-none" />
               </div>
            </div>
          </div>

          {/* Section 3: Material Used */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-200 flex items-center gap-2 border-b border-white/10 pb-2">
              <Share2 className="w-5 h-5 text-emerald-400" /> Cable & Material Usage
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
               <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Cable Repaired/Used</label>
                  <select {...register('cableUsed')} className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500/50 outline-none">
                    {cables.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
               </div>
               <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Joint Box Enclosure</label>
                  <select {...register('jointType')} className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500/50 outline-none">
                    {joints.map(j => <option key={j} value={j}>{j}</option>)}
                  </select>
               </div>
               <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Splice Count</label>
                  <input type="number" min="0" {...register('spliceCount')} placeholder="0" className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500/50 outline-none font-mono" />
               </div>
               <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Sleeves Used</label>
                  <input type="number" min="0" {...register('sleevesCount')} placeholder="0" className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500/50 outline-none font-mono" />
               </div>
            </div>
          </div>

          {/* Section 4: Machinery */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-200 flex items-center gap-2 border-b border-white/10 pb-2">
              <HardDrive className="w-5 h-5 text-amber-400" /> Machine & Testing Equipment
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
               <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Splicing Machine Model</label>
                  <select {...register('splicingMachine')} className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-amber-500/50 outline-none">
                    {machines.map(m => <option key={m} value={m}>Fujikura {m}</option>)}
                  </select>
               </div>
               <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">OTDR Used (Model/Asset ID)</label>
                  <input {...register('otdrUsed')} placeholder="e.g. EXFO MAX-720C" className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-amber-500/50 outline-none" />
               </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 mt-4" />

          {/* Section 5: Closure */}
          <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-5 space-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <h3 className="text-lg font-bold text-slate-200 flex items-center gap-2">
              <ClipboardSignature className="w-5 h-5 text-blue-400" /> Ticket Closure Authorization
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10">
               <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Closed By (Name)</label>
                  <input {...register('closedBy')} placeholder="Sign-off authority name" className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/50 outline-none" required />
               </div>
               <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Designation</label>
                  <select {...register('closedByDesignation')} className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/50 outline-none">
                    {designations.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
               </div>
            </div>
            
            <div className="flex justify-end pt-4">
              <Button type="submit" size="lg" disabled={isSubmitting} className="min-w-[200px] shadow-xl shadow-blue-500/20">
                {isSubmitting ? 'Logging Fault...' : 'Close & Save Ticket'}
              </Button>
            </div>
          </div>

       </form>
    </div>
  )
}
