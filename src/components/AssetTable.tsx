import { useState, useMemo } from 'react'
import { Search, Filter, MoreVertical, Edit2, Trash, AlertCircle, CheckCircle2 } from 'lucide-react'
import { Button } from './ui/Button'

interface Asset {
  id: string
  name: string
  type: 'Fiber' | 'Client' | 'Equipment'
  status: 'Active' | 'Maintenance' | 'Faulty'
  details: string
  lastUpdated: string
}

const mockAssets: Asset[] = [
  { id: '192.168.146.37', name: 'OLT_HUAWEI_AL_KABIR_LHR', type: 'Equipment', status: 'Active', details: 'MA5800-X17 Device. Loc: Shenzhen China', lastUpdated: '2026-03-29' },
  { id: '192.168.146.38', name: 'OLT_HUAWEI_BATAPUR2_LHR', type: 'Equipment', status: 'Active', details: 'MA5800-X17', lastUpdated: '2026-03-29' },
  { id: '192.168.146.39', name: 'OLT_HUAWEI_CANTT_LHR', type: 'Equipment', status: 'Active', details: 'MA5800-X17', lastUpdated: '2026-03-29' },
  { id: '192.168.146.40', name: 'OLT_HUAWEI_DHA_CORP_LHR', type: 'Equipment', status: 'Active', details: 'MA5800-X17', lastUpdated: '2026-03-29' },
  { id: '192.168.146.41', name: 'OLT_HUAWEI_DHA_LHR', type: 'Equipment', status: 'Active', details: 'MA5800-X17', lastUpdated: '2026-03-29' },
  { id: '192.168.146.42', name: 'OLT_HUAWEI_DREAMGARDEN_LHR', type: 'Equipment', status: 'Active', details: 'MA5800-X17', lastUpdated: '2026-03-29' },
  { id: '192.168.146.43', name: 'OLT_HUAWEI_GULBERG_LHR', type: 'Equipment', status: 'Active', details: 'MA5800-X17', lastUpdated: '2026-03-29' },
  { id: '192.168.146.44', name: 'OLT_HUAWEI_JALILGARDEN_LHR', type: 'Equipment', status: 'Active', details: 'MA5800-X17', lastUpdated: '2026-03-29' },
  { id: '192.168.146.45', name: 'OLT_HUAWEI_JOHARTOWN_LHR', type: 'Equipment', status: 'Active', details: 'MA5800-X17', lastUpdated: '2026-03-29' },
  { id: '192.168.146.46', name: 'OLT_HUAWEI_JOHARTOWN2_LHR', type: 'Equipment', status: 'Active', details: 'MA5800-X17', lastUpdated: '2026-03-29' },
  { id: '192.168.146.47', name: 'OLT_HUAWEI_KLP_NEW', type: 'Equipment', status: 'Active', details: 'MA5800-X17', lastUpdated: '2026-03-29' },
  { id: '192.168.146.48', name: 'OLT_HUAWEI_LAKECITY_LHR', type: 'Equipment', status: 'Active', details: 'MA5800-X17', lastUpdated: '2026-03-29' },
  { id: '192.168.146.49', name: 'OLT_HUAWEI_LMP', type: 'Equipment', status: 'Active', details: 'MA5800-X17', lastUpdated: '2026-03-29' },
  { id: '192.168.146.50', name: 'OLT_HUAWEI_MODELTOWN_LHR', type: 'Equipment', status: 'Active', details: 'MA5800-X17', lastUpdated: '2026-03-29' },
  { id: '192.168.146.51', name: 'OLT_HUAWEI_NGT_LHR', type: 'Equipment', status: 'Active', details: 'MA5800-X17', lastUpdated: '2026-03-29' },
  { id: '192.168.146.52', name: 'OLT_HUAWEI_PACKAGES_LHR', type: 'Equipment', status: 'Active', details: 'MA5800-X17', lastUpdated: '2026-03-29' },
  { id: '192.168.146.53', name: 'OLT_HUAWEI_SABZAZAR_LHR', type: 'Equipment', status: 'Active', details: 'MA5800-X17', lastUpdated: '2026-03-29' },
  { id: '192.168.146.54', name: 'OLT_HUAWEI_VALENCIA_LHR', type: 'Equipment', status: 'Active', details: 'MA5800-X17', lastUpdated: '2026-03-29' },
]

export function AssetTable() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<'All' | Asset['status']>('All')

  const filteredAssets = useMemo(() => {
    return mockAssets.filter((asset) => {
      const matchesSearch = asset.name.toLowerCase().includes(search.toLowerCase()) || asset.id.toLowerCase().includes(search.toLowerCase())
      const matchesFilter = filter === 'All' || asset.status === filter
      return matchesSearch && matchesFilter
    })
  }, [search, filter])

  const statusColors = {
    Active: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    Maintenance: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    Faulty: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
  }

  return (
    <div className="bg-slate-900/50 border border-white/10 rounded-xl overflow-hidden glass-morphism shadow-xl">
      <div className="p-4 border-b border-white/5 flex flex-col md:flex-row gap-4 items-center justify-between">
        <h2 className="text-lg font-bold flex items-center gap-2">
          Network Inventory
        </h2>
        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative flex-grow md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search assets..."
              className="w-full bg-slate-950/50 border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-slate-600"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <select
            className="bg-slate-950/50 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-slate-300"
            value={filter}
            onChange={(e) => setFilter(e.target.value as any)}
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Faulty">Faulty</option>
          </select>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-950/50 text-slate-400 text-xs uppercase tracking-wider">
              <th className="px-6 py-4 font-semibold">Asset ID & Name</th>
              <th className="px-6 py-4 font-semibold">Type</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold">Details</th>
              <th className="px-6 py-4 font-semibold">Last Updated</th>
              <th className="px-6 py-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAssets.map((asset) => (
              <tr key={asset.id} className="border-b border-white/5 hover:bg-slate-800/20 transition-colors group">
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-slate-100">{asset.name}</div>
                  <div className="text-xs text-slate-500 font-mono tracking-tight">{asset.id}</div>
                </td>
                <td className="px-6 py-4">
                   <span className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 font-medium">
                    {asset.type}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase border ${statusColors[asset.status]}`}>
                    {asset.status === 'Active' && <CheckCircle2 className="w-3 h-3" />}
                    {asset.status === 'Maintenance' && <AlertCircle className="w-3 h-3" />}
                    {asset.status === 'Faulty' && <AlertCircle className="w-3 h-3" />}
                    {asset.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-400 max-w-xs truncate">
                  {asset.details}
                </td>
                <td className="px-6 py-4 text-sm text-slate-400">
                  {asset.lastUpdated}
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-1 opacity-10 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="sm" className="p-1.5"><Edit2 className="w-4 h-4" /></Button>
                    <Button variant="ghost" size="sm" className="p-1.5 text-red-400"><Trash className="w-4 h-4" /></Button>
                    <Button variant="ghost" size="sm" className="p-1.5"><MoreVertical className="w-4 h-4" /></Button>
                  </div>
                </td>
              </tr>
            ))}
            {filteredAssets.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                  No assets found matching your search criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
