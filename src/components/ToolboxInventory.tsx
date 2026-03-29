import { useState } from 'react'
import { Plus, PackageCheck, Wrench, FileSignature, ShieldAlert, CheckCircle2 } from 'lucide-react'
import { Button } from './ui/Button'
import toast, { Toaster } from 'react-hot-toast'

interface InventoryItem {
  id: string
  name: string
  stock: number
  unit: string
  lowStockThreshold: number
}

const initialInventory: InventoryItem[] = [
  { id: 'INV-001', name: 'PVC Tape (Black)', stock: 54, unit: 'rolls', lowStockThreshold: 20 },
  { id: 'INV-002', name: 'Paper Tape', stock: 120, unit: 'rolls', lowStockThreshold: 50 },
  { id: 'INV-003', name: 'Swab Box (Alcohol)', stock: 15, unit: 'boxes', lowStockThreshold: 10 },
  { id: 'INV-004', name: '12-inch Tie', stock: 850, unit: 'pcs', lowStockThreshold: 200 },
  { id: 'INV-005', name: '6-inch Tie', stock: 1200, unit: 'pcs', lowStockThreshold: 500 },
  { id: 'INV-006', name: '4-inch Tie', stock: 2500, unit: 'pcs', lowStockThreshold: 500 },
  { id: 'INV-007', name: 'Wrapping Sheet (Heat shrink)', stock: 8, unit: 'rolls', lowStockThreshold: 15 },
]

export function ToolboxInventory() {
  const [inventory, setInventory] = useState<InventoryItem[]>(initialInventory)
  const [isIssuing, setIsIssuing] = useState<string | null>(null)

  const handleIssueItem = (id: string, amount: number) => {
    setIsIssuing(id)
    setTimeout(() => {
      setInventory(prev => prev.map(item => {
        if (item.id === id) {
          return { ...item, stock: Math.max(0, item.stock - amount) }
        }
        return item
      }))
      toast.success(`Issued ${amount} item(s) to Field Team. Authorized by Asst. Manager.`, { icon: '📝', style: { background: '#1e293b', color: '#fff' } })
      setIsIssuing(null)
    }, 600)
  }

  return (
    <div className="h-full flex flex-col gap-6">
       
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 shrink-0">
          <div className="md:col-span-2 bg-slate-900/50 border border-white/10 rounded-xl p-6 glass-morphism relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
             <div className="relative z-10 flex items-start gap-4">
                <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-xl shadow-lg border border-emerald-500/20">
                   <PackageCheck className="w-8 h-8" />
                </div>
                <div>
                   <h2 className="text-2xl font-extrabold text-white tracking-tight">Field Toolbox Logistics</h2>
                   <p className="text-slate-400 mt-1 max-w-lg text-sm">
                     Manage field consumable stock levels. All issuances are instantly authorized and logged by the <strong className="text-emerald-400 font-medium">Assistant Manager</strong>.
                   </p>
                </div>
             </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-white/10 rounded-xl p-6 glass-morphism flex flex-col justify-center gap-4">
             <div className="flex items-center gap-3">
                <FileSignature className="w-6 h-6 text-blue-400" />
                <h3 className="font-bold text-slate-200">Current Authority</h3>
             </div>
             <div className="space-y-1">
                <p className="text-sm font-medium text-white">Rana Ali</p>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Asst. Manager O&M</p>
             </div>
             <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full self-start border border-emerald-500/20">
                <CheckCircle2 className="w-3 h-3" /> Digital Sign-off Active
             </div>
          </div>
       </div>

       <div className="flex-1 overflow-y-auto custom-scrollbar bg-slate-900/40 border border-white/10 rounded-xl glass-morphism">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-slate-950/80 backdrop-blur-md z-10 border-b border-white/10 shadow-sm">
              <tr className="text-slate-400 text-xs uppercase tracking-wider">
                <th className="px-6 py-4 font-bold border-r border-white/5">Item Code</th>
                <th className="px-6 py-4 font-bold">Consumable Material</th>
                <th className="px-6 py-4 font-bold text-right">Available Stock</th>
                <th className="px-6 py-4 font-bold text-center">Health</th>
                <th className="px-6 py-4 font-bold text-right">Rapid Issue (Qty 5)</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((item) => {
                const isLow = item.stock <= item.lowStockThreshold
                return (
                  <tr key={item.id} className="border-b border-white/5 hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 text-xs font-mono text-slate-500 border-r border-white/5 w-32">{item.id}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Wrench className="w-4 h-4 text-slate-600" />
                        <span className="font-bold text-slate-200">{item.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className={`text-lg font-extrabold font-mono ${isLow ? 'text-rose-400 glow-text' : 'text-slate-100'}`}>
                        {item.stock.toLocaleString()}
                      </span>
                      <span className="text-xs text-slate-500 ml-2 uppercase tracking-wide">{item.unit}</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                       {isLow ? (
                         <span className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2.5 py-1 rounded-full">
                           <ShieldAlert className="w-3 h-3" /> Critical
                         </span>
                       ) : (
                         <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                           <CheckCircle2 className="w-3 h-3" /> Optimal
                         </span>
                       )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Button 
                        size="sm" 
                        variant={isLow ? 'danger' : 'outline'}
                        onClick={() => handleIssueItem(item.id, 5)}
                        disabled={isIssuing === item.id || item.stock < 5}
                        className="font-medium shadow-none hover:shadow-lg transition-all min-w-[120px]"
                      >
                        {isIssuing === item.id ? 'Authorizing...' : 'Issue to Team'}
                      </Button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
       </div>

    </div>
  )
}
