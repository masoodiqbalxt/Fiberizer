import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Archive, ChevronDown, CheckCircle2, MapPin, Clock, Trash2, Calendar, HardDrive, ShieldAlert, Cpu } from 'lucide-react'
import { Button } from './ui/Button'
import { ComplaintForm } from './ComplaintsForm'

interface SavedComplaint extends ComplaintForm {
  id: string
  timestamp: string
}

export function ComplaintHistory() {
  const [complaints, setComplaints] = useState<SavedComplaint[]>([])
  const [search, setSearch] = useState('')
  const [expandedId, setExpandedId] = useState<string | null>(null)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('fiberizer_complaints') || '[]')
    setComplaints(data)
  }, [])

  const deleteComplaint = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    const updated = complaints.filter(c => c.id !== id)
    setComplaints(updated)
    localStorage.setItem('fiberizer_complaints', JSON.stringify(updated))
  }

  const filtered = complaints.filter(c => 
    c.id.toLowerCase().includes(search.toLowerCase()) || 
    c.closedBy.toLowerCase().includes(search.toLowerCase()) ||
    c.date.includes(search)
  )

  return (
    <div className="bg-slate-900/50 border border-white/10 rounded-xl overflow-hidden glass-morphism shadow-xl h-full flex flex-col">
      <div className="p-6 border-b border-white/5 bg-slate-950/40">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div>
             <h2 className="text-xl font-bold flex items-center gap-2 text-slate-100">
               <Archive className="w-5 h-5 text-indigo-400" />
               Fault Log Archive
             </h2>
             <p className="text-sm text-slate-400 mt-1">Review previously submitted and closed network fault tickets.</p>
          </div>
          <div className="relative w-full md:w-64 shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search ID, author, or date..."
              className="w-full bg-slate-950/50 border border-white/10 rounded-lg pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-mono placeholder:text-slate-600 placeholder:font-sans"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-4">
         {filtered.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-slate-500 opacity-60">
               <Archive className="w-16 h-16 mb-4" />
               <p>No complaints match your search</p>
            </div>
         ) : (
            filtered.map((complaint) => {
              const isExpanded = expandedId === complaint.id
              return (
                <div key={complaint.id} className={`border ${isExpanded ? 'border-indigo-500/50 bg-slate-800/40' : 'border-white/5 bg-slate-900/40'} rounded-xl transition-all overflow-hidden`}>
                   
                   {/* Header / Summary */}
                   <div 
                     className="flex flex-col md:flex-row gap-4 justify-between items-center p-4 cursor-pointer hover:bg-white/5 transition-colors"
                     onClick={() => setExpandedId(isExpanded ? null : complaint.id)}
                   >
                     <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="p-3 bg-indigo-500/10 rounded-lg shrink-0 hidden sm:block">
                           <ShieldAlert className="w-6 h-6 text-indigo-400" />
                        </div>
                        <div>
                           <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-slate-500 font-mono tracking-widest px-2 py-0.5 rounded bg-slate-950 border border-white/5">#{complaint.id}</span>
                              <span className="font-bold text-slate-200">{complaint.faultType}</span>
                           </div>
                           <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-400">
                              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {complaint.date}</span>
                              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {complaint.time}</span>
                           </div>
                        </div>
                     </div>

                     <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                        <div className="text-right">
                           <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5">Closed By</p>
                           <p className="text-sm font-medium text-slate-300">{complaint.closedBy}</p>
                        </div>
                        <div className="flex items-center gap-2">
                           <Button variant="ghost" size="sm" className="p-2 text-rose-400 hover:text-rose-300 hover:bg-rose-500/10" onClick={(e) => deleteComplaint(complaint.id, e)}>
                              <Trash2 className="w-4 h-4" />
                           </Button>
                           <Button variant="ghost" size="sm" className="p-2">
                              <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                           </Button>
                        </div>
                     </div>
                   </div>

                   {/* Expanded Details */}
                   <AnimatePresence>
                     {isExpanded && (
                       <motion.div
                         initial={{ height: 0, opacity: 0 }}
                         animate={{ height: 'auto', opacity: 1 }}
                         exit={{ height: 0, opacity: 0 }}
                         className="border-t border-white/5 bg-slate-950/30 overflow-hidden"
                       >
                         <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                            
                            <div className="space-y-4">
                               <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5"><MapPin className="w-3 h-3" /> Team & Dispatch</h4>
                               <div className="space-y-2">
                                  <div className="flex justify-between text-sm"><span className="text-slate-400">Vehicle:</span> <span className="text-slate-200">{complaint.vehicle}</span></div>
                                  <div className="flex justify-between text-sm"><span className="text-slate-400">Team Lead:</span> <span className="text-slate-200">{complaint.teamLead || 'N/A'}</span></div>
                                  <div className="flex justify-between text-sm"><span className="text-slate-400">Manager:</span> <span className="text-slate-200">{complaint.manager || 'N/A'}</span></div>
                               </div>
                            </div>
                            
                            <div className="space-y-4">
                               <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5"><Cpu className="w-3 h-3" /> Hardware & Cable</h4>
                               <div className="space-y-2">
                                  <div className="flex justify-between text-sm"><span className="text-slate-400">Cable Repaired:</span> <span className="text-emerald-400 font-medium">{complaint.cableUsed}</span></div>
                                  <div className="flex justify-between text-sm"><span className="text-slate-400">Joint Box:</span> <span className="text-slate-200">{complaint.jointType}</span></div>
                                  <div className="flex justify-between text-sm"><span className="text-slate-400">Sleeves Used:</span> <span className="text-slate-200">{complaint.sleevesCount}</span></div>
                               </div>
                            </div>

                            <div className="space-y-4">
                               <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5"><HardDrive className="w-3 h-3" /> Tech Logs</h4>
                               <div className="space-y-2">
                                  <div className="flex justify-between text-sm"><span className="text-slate-400">Splicing Cores:</span> <span className="text-slate-200">{complaint.spliceCount}</span></div>
                                  <div className="flex justify-between text-sm"><span className="text-slate-400">Machine:</span> <span className="text-amber-400 font-medium">Fujikura {complaint.splicingMachine}</span></div>
                                  <div className="flex justify-between text-sm"><span className="text-slate-400">OTDR Used:</span> <span className="text-slate-200">{complaint.otdrUsed || 'N/A'}</span></div>
                               </div>
                            </div>

                         </div>
                       </motion.div>
                     )}
                   </AnimatePresence>

                </div>
              )
            })
         )}
      </div>
    </div>
  )
}
