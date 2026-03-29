import { useState } from 'react'
import { motion } from 'framer-motion'
import { Save, User, Map, Database, BellRing } from 'lucide-react'
import { Button } from './ui/Button'
import toast from 'react-hot-toast'

export function Settings() {
  const [activeSegment, setActiveSegment] = useState('Profile')

  const handleSave = () => {
    toast.success('Settings updated successfully', { id: 'save', style: { background: '#1e293b', color: '#fff' } })
  }

  return (
    <div className="h-full flex gap-8">
      
      {/* Sidebar Navigation */}
      <div className="w-64 flex flex-col gap-2 shrink-0 h-full overflow-y-auto">
         {['Profile', 'GIS Map Defaults', 'API Integration', 'Notifications', 'Theme & UI'].map((seg) => (
            <button
               key={seg}
               onClick={() => setActiveSegment(seg)}
               className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all flex items-center gap-3 ${
                  activeSegment === seg 
                     ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' 
                     : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-100 border border-transparent'
               }`}
            >
               {seg === 'Profile' && <User className="w-4 h-4" />}
               {seg === 'GIS Map Defaults' && <Map className="w-4 h-4" />}
               {seg === 'API Integration' && <Database className="w-4 h-4" />}
               {seg === 'Notifications' && <BellRing className="w-4 h-4" />}
               {seg === 'Theme & UI' && <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow shadow-blue-500/50" />}
               {seg}
            </button>
         ))}
      </div>

      {/* Main Settings Area */}
      <div className="flex-1 bg-slate-900/50 border border-white/10 rounded-xl overflow-hidden glass-morphism shadow-xl flex flex-col justify-between overflow-y-auto custom-scrollbar">
         
         <div className="p-8 space-y-8">
            <h2 className="text-2xl font-bold border-b border-white/10 pb-4">{activeSegment} Configuration</h2>

            {activeSegment === 'GIS Map Defaults' && (
               <div className="space-y-6">
                  <div>
                     <label className="block text-sm font-bold text-slate-400 mb-2">Default Coordinates (Lat,Lng)</label>
                     <input type="text" defaultValue="31.5204, 74.3587" className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 font-mono text-white focus:outline-none focus:border-blue-500" />
                     <p className="text-xs text-slate-500 mt-2">Sets the initial center for all route mapping visualizations.</p>
                  </div>
                  <div>
                     <label className="block text-sm font-bold text-slate-400 mb-2">Default Map Layer</label>
                     <select className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500">
                        <option>Dark Mode Streets</option>
                        <option>Esri Satellite</option>
                        <option>OpenStreetMap</option>
                     </select>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-800/50 border border-white/5 rounded-lg">
                     <div>
                        <p className="font-bold text-white">Auto-Snap to Routes</p>
                        <p className="text-xs text-slate-400 mt-1">Snaps nodes to known optical pathways when drawing new lines</p>
                     </div>
                     <div className="w-12 h-6 rounded-full bg-blue-600 relative cursor-pointer border-2 border-slate-900">
                        <div className="absolute right-0 top-0 w-6 h-6 bg-white rounded-full shadow border transition-all" />
                     </div>
                  </div>
               </div>
            )}

            {activeSegment === 'Profile' && (
               <div className="space-y-6">
                  <div className="flex items-center gap-6">
                     <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-500 to-blue-500 flex items-center justify-center shadow-lg border-4 border-slate-900 shadow-blue-500/20">
                        <User className="w-10 h-10 text-white" />
                     </div>
                     <Button variant="outline" size="sm">Upload Avatar</Button>
                  </div>
                  <div className="grid grid-cols-2 gap-6 pt-4">
                     <div>
                        <label className="block text-sm font-bold text-slate-400 mb-2">Display Name</label>
                        <input type="text" defaultValue="Enterprise Admin" className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500" />
                     </div>
                     <div>
                        <label className="block text-sm font-bold text-slate-400 mb-2">Designation</label>
                        <input type="text" defaultValue="Manager O&M" className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-slate-500 focus:outline-none" readOnly />
                     </div>
                  </div>
               </div>
            )}

            {activeSegment === 'API Integration' && (
               <div className="space-y-6">
                  <div>
                     <label className="block text-sm font-bold text-slate-400 mb-2">Google Maps API Key</label>
                     <input type="password" defaultValue="AIzaSyA..." className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 font-mono text-white focus:outline-none focus:border-blue-500" />
                  </div>
                  <div>
                     <label className="block text-sm font-bold text-slate-400 mb-2">Huawei iMaster NCE Endpoint</label>
                     <input type="text" defaultValue="https://nce.internal.fiberizer.net/api/v1/" className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 font-mono text-white focus:outline-none focus:border-blue-500" />
                     <p className="text-xs text-amber-500 mt-2 font-bold">Requires VPN connection</p>
                  </div>
               </div>
            )}

            {['Notifications', 'Theme & UI'].includes(activeSegment) && (
               <div className="flex flex-col items-center justify-center py-12 opacity-50">
                  <p className="text-slate-400">Settings available soon</p>
               </div>
            )}
         </div>

         <div className="p-6 border-t border-white/10 bg-slate-950/50 flex justify-end gap-4 shrink-0 mt-auto">
            <Button variant="ghost">Discard</Button>
            <Button onClick={handleSave} className="flex gap-2">
               <Save className="w-4 h-4" /> Save Preferences
            </Button>
         </div>

      </div>
    </div>
  )
}
