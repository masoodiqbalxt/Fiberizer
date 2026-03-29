import { useState } from 'react'
import { Plus, Save, AlignLeft, Target, Cpu, Share2 } from 'lucide-react'
import { Button } from './ui/Button'
import { useForm } from 'react-hook-form'

interface FiberDataForm {
  assetId: string
  name: string
  type: 'Fiber' | 'Client' | 'Equipment'
  status: 'Active' | 'Maintenance' | 'Faulty'
  details: string
  latitude: number
  longitude: number
}

export function ManualDataEntry() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FiberDataForm>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const onSubmit = (data: FiberDataForm) => {
    setIsSubmitting(true)
    // Here we would typically send this to an API or state store
    console.log('Submitted Data:', data)
    
    setTimeout(() => {
      setIsSubmitting(false)
      setSuccessMessage(`Asset ${data.assetId} added successfully!`)
      reset()
      setTimeout(() => setSuccessMessage(''), 3000)
    }, 800)
  }

  return (
    <div className="bg-slate-900/50 border border-white/10 rounded-xl overflow-hidden glass-morphism shadow-xl h-full flex flex-col">
       <div className="p-6 border-b border-white/5 bg-slate-950/30">
        <h2 className="text-xl font-bold flex items-center gap-2 text-slate-100">
          <AlignLeft className="w-5 h-5 text-blue-400" />
          Manual Data Entry
        </h2>
        <p className="text-sm text-slate-400 mt-1">Manually register new fibers, clients, or equipment into the system.</p>
       </div>

       <form onSubmit={handleSubmit(onSubmit)} className="p-6 flex-1 flex flex-col gap-5 overflow-y-auto custom-scrollbar">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
             {/* Asset ID & Name */}
             <div className="space-y-4">
               <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Asset ID</label>
                  <input 
                    {...register('assetId', { required: 'Asset ID is required' })}
                    placeholder="e.g. FIB-042"
                    className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-slate-600 font-mono"
                  />
                  {errors.assetId && <span className="text-rose-400 text-xs mt-1 block">{errors.assetId.message}</span>}
               </div>

               <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Asset Name</label>
                  <input 
                    {...register('name', { required: 'Name is required' })}
                    placeholder="e.g. Main Backbone Delta"
                    className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-slate-600"
                  />
                  {errors.name && <span className="text-rose-400 text-xs mt-1 block">{errors.name.message}</span>}
               </div>
             </div>

             {/* Type & Status */}
             <div className="space-y-4">
               <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Asset Type</label>
                  <div className="relative">
                    <select 
                      {...register('type')}
                      className="w-full bg-slate-950 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all appearance-none"
                    >
                      <option value="Fiber">Fiber Line</option>
                      <option value="Equipment">Equipment (OLT/Splitter)</option>
                      <option value="Client">Client Endpoint</option>
                    </select>
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                       <Cpu className="w-4 h-4" />
                    </div>
                  </div>
               </div>

               <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Current Status</label>
                  <div className="relative">
                    <select 
                      {...register('status')}
                      className="w-full bg-slate-950 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all appearance-none"
                    >
                      <option value="Active">Active / Online</option>
                      <option value="Maintenance">Under Maintenance</option>
                      <option value="Faulty">Faulty / Broken</option>
                    </select>
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                       <Target className="w-4 h-4" />
                    </div>
                  </div>
               </div>
             </div>
          </div>

          <div className="border-t border-white/5 pt-5 my-2" />

          {/* GPS Coordinates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
             <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Latitude (GPS)</label>
                <input 
                  type="number"
                  step="any"
                  {...register('latitude')}
                  placeholder="e.g. 51.5074"
                  className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-slate-600 font-mono"
                />
             </div>
             <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Longitude (GPS)</label>
                <input 
                  type="number"
                  step="any"
                  {...register('longitude')}
                  placeholder="e.g. -0.1278"
                  className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-slate-600 font-mono"
                />
             </div>
          </div>

          {/* Details/Description */}
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Technical Details & Notes</label>
            <textarea 
              {...register('details')}
              rows={3}
              placeholder="Enter strand counts, connected node IDs, or maintenance notes..."
              className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-slate-600 resize-none font-mono"
            />
          </div>

          <div className="mt-auto pt-4 flex items-center justify-between">
             <p className="text-emerald-400 text-sm font-medium h-5">{successMessage}</p>
             <div className="flex gap-3">
                <Button type="button" variant="ghost" onClick={() => reset()} disabled={isSubmitting}>Clear</Button>
                <Button type="submit" disabled={isSubmitting} className="min-w-[140px]">
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                      Saving...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                       <Save className="w-4 h-4" />
                       Save Asset
                    </span>
                  )}
                </Button>
             </div>
          </div>
       </form>
    </div>
  )
}
