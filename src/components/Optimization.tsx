import { useState } from 'react'
import { motion } from 'framer-motion'
import { Activity, Zap, Server, ShieldCheck, ArrowUpRight, TrendingUp } from 'lucide-react'
import { Button } from './ui/Button'
import toast from 'react-hot-toast'

export function Optimization() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleAnalyze = () => {
    setIsAnalyzing(true)
    toast.loading('Analyzing network paths...', { id: 'analyze', style: { background: '#1e293b', color: '#fff' } })
    setTimeout(() => {
      setIsAnalyzing(false)
      toast.success('Route optimization complete! 3 redundant paths found.', { id: 'analyze', style: { background: '#1e293b', color: '#fff' } })
    }, 2500)
  }

  return (
    <div className="h-full flex flex-col gap-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between bg-slate-900/50 border border-white/10 rounded-xl p-6 glass-morphism shrink-0">
         <div>
            <h2 className="text-2xl font-extrabold text-white flex items-center gap-3">
               <div className="p-2 bg-indigo-500/20 text-indigo-400 rounded-lg">
                  <Activity className="w-6 h-6" />
               </div>
               AI Network Optimization
            </h2>
            <p className="text-slate-400 mt-2 text-sm max-w-xl">
               Leverage intelligent algorithms to find suboptimal optical fiber routes, reduce signal degradation, and discover redundant infrastructure paths to improve total throughput.
            </p>
         </div>
         <Button 
            size="lg" 
            onClick={handleAnalyze} 
            disabled={isAnalyzing}
            className="whitespace-nowrap bg-indigo-600 hover:bg-indigo-700 shadow-indigo-500/30"
         >
            {isAnalyzing ? 'Running Diagnostics...' : 'Run Global Analysis'}
         </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 shrink-0">
          <div className="bg-slate-900/40 border border-white/5 rounded-xl p-6 glass-morphism relative overflow-hidden group">
             <ArrowUpRight className="absolute right-4 top-4 text-emerald-400/20 w-16 h-16 group-hover:scale-110 transition-transform" />
             <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Average Latency</p>
             <p className="text-3xl font-extrabold text-emerald-400">14.2 <span className="text-sm">ms</span></p>
             <p className="text-xs text-emerald-500 mt-2 flex items-center gap-1"><TrendingUp className="w-3 h-3" /> Improved by 2.1%</p>
          </div>
          <div className="bg-slate-900/40 border border-white/5 rounded-xl p-6 glass-morphism relative overflow-hidden group">
             <Zap className="absolute right-4 top-4 text-amber-400/10 w-16 h-16 group-hover:scale-110 transition-transform" />
             <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Total Loss Budget</p>
             <p className="text-3xl font-extrabold text-amber-400">24.5 <span className="text-sm">dB/km</span></p>
             <p className="text-xs text-slate-400 mt-2">Across all active segments</p>
          </div>
          <div className="bg-slate-900/40 border border-white/5 rounded-xl p-6 glass-morphism relative overflow-hidden group">
             <ShieldCheck className="absolute right-4 top-4 text-blue-400/20 w-16 h-16 group-hover:scale-110 transition-transform" />
             <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Redundancy Score</p>
             <p className="text-3xl font-extrabold text-blue-400">92<span className="text-sm">%</span></p>
             <p className="text-xs text-slate-400 mt-2">Highly resilient network</p>
          </div>
      </div>

      {/* Opportunities List */}
      <div className="bg-slate-900/50 border border-white/10 rounded-xl overflow-hidden glass-morphism flex-1 flex flex-col min-h-[300px]">
          <div className="p-4 border-b border-white/5 bg-slate-950/50">
             <h3 className="font-bold text-slate-200">Recommended Actions</h3>
          </div>
          <div className="p-6 space-y-4 overflow-y-auto custom-scrollbar">
             {[
               { title: 'Re-splice OLT_HUAWEI_JOHARTOWN_LHR', desc: 'Splicing loss is high (0.4dB vs standard 0.1dB). Resplicing can save 1.2dB total along the trunk.', priority: 'High', type: 'Maintenance' },
               { title: 'Redundant Path: DHA Phase 6 to Phase 8', desc: 'Traffic can be load-balanced over the newly laid 72-core cable via the southern ring.', priority: 'Medium', type: 'Routing' },
               { title: 'Upgrade Splitter at Cantt Central', desc: 'Current 1:64 splitter is showing signs of degradation. Suggest swapping to new equipment.', priority: 'Low', type: 'Hardware' }
             ].map((action, i) => (
                <div key={i} className="flex flex-col md:flex-row justify-between gap-4 p-4 rounded-xl border border-white/5 hover:bg-slate-800/30 transition-colors">
                   <div className="flex gap-4 items-start">
                      <div className="p-2 bg-slate-800 rounded-lg shrink-0">
                         <Server className="w-5 h-5 text-indigo-400" />
                      </div>
                      <div>
                         <h4 className="font-bold text-slate-200">{action.title}</h4>
                         <p className="text-sm text-slate-400 mt-1">{action.desc}</p>
                         <div className="flex gap-2 mt-3">
                            <span className="text-[10px] uppercase font-bold px-2 py-1 rounded-full border border-indigo-500/30 text-indigo-400">{action.type}</span>
                            <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded-full border ${
                               action.priority === 'High' ? 'border-rose-500/30 text-rose-400' : 'border-amber-500/30 text-amber-400'
                            }`}>{action.priority} Priority</span>
                         </div>
                      </div>
                   </div>
                   <Button variant="outline" size="sm" className="hidden md:flex self-center whitespace-nowrap">Create Ticket</Button>
                </div>
             ))}
          </div>
      </div>

    </div>
  )
}
