import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import toast, { Toaster } from 'react-hot-toast'
import { 
  BarChart3, 
  Map as MapIcon, 
  Database, 
  Settings, 
  Bell, 
  Search, 
  ChevronRight, 
  Layers, 
  Zap, 
  Network,
  Menu,
  X,
  User,
  AlertTriangle,
  Wrench,
  Archive,
  Sun,
  Moon
} from 'lucide-react'
import { FiberHero3D } from './components/FiberHero3D'
import { MapComponent } from './components/MapContainer'
import { AssetTable } from './components/AssetTable'
import { FiberPathCalculator } from './components/FiberPathCalculator'
import { NetworkTopology } from './components/NetworkTopology'
import { ManualDataEntry } from './components/ManualDataEntry'
import { ComplaintsForm } from './components/ComplaintsForm'
import { ToolboxInventory } from './components/ToolboxInventory'
import { ComplaintHistory } from './components/ComplaintHistory'
import { Optimization } from './components/Optimization'
import { Settings as SettingsTab } from './components/Settings'
import { Button } from './components/ui/Button'

export default function App() {
  const [activeTab, setActiveTab] = useState('Dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [theme, setTheme] = useState('dark')

  const tabs = [
    { name: 'Dashboard', icon: BarChart3 },
    { name: 'GIS Mapping', icon: MapIcon },
    { name: 'Network Topology', icon: Network },
    { name: 'Complaints', icon: AlertTriangle },
    { name: 'Complaint History', icon: Archive },
    { name: 'Asset Management', icon: Database },
    { name: 'Toolbox Inventory', icon: Wrench },
    { name: 'Optimization', icon: Zap },
    { name: 'Settings', icon: Settings },
  ]

  return (
    <div className={`flex h-screen w-full overflow-hidden font-sans premium-gradient relative transition-colors duration-500 ${theme === 'light' ? 'light-mode bg-slate-50 text-slate-900' : 'bg-slate-950 text-slate-50'}`}>
      <div className="cyber-grid" />
      <div className="tech-scanline" />
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[1999] md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`${sidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full w-64 md:translate-x-0 md:w-20'} absolute md:relative h-full transition-all duration-300 glass-morphism border-r border-white/5 flex flex-col z-[2000]`}
      >
        <div className="p-4 md:p-6 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
            <Zap className="w-5 h-5 text-white animate-pulse" />
          </div>
          {sidebarOpen && (
            <h1 
               className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 nav-logo cursor-pointer hover:opacity-80 transition-opacity"
               onClick={() => window.location.reload()}
               title="Reload Dashboard"
            >
               Fiberizer
            </h1>
          )}
        </div>

        <nav className="flex-1 px-3 space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${
                activeTab === tab.name 
                ? 'bg-blue-600 shadow-lg shadow-blue-500/20 text-white' 
                : 'text-slate-500 hover:bg-slate-800/50 hover:text-slate-100'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {sidebarOpen && <span className="text-sm font-medium">{tab.name}</span>}
              {activeTab === tab.name && sidebarOpen && (
                <motion.div layoutId="activeTabGlow" className="ml-auto">
                   <ChevronRight className="w-4 h-4 text-white/50" />
                </motion.div>
              )}
            </button>
          ))}
        </nav>

        <div className="p-3 border-t border-white/5">
           <div className={`flex items-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-white/5 ${!sidebarOpen && 'justify-center'}`}>
              <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold ring-2 ring-indigo-500/20 shadow-lg">
                 <User className="w-5 h-5" />
              </div>
              {sidebarOpen && (
                <div className="flex-1 overflow-hidden">
                  <p className="text-xs font-bold truncate">Enterprise Admin</p>
                  <p className="text-[10px] text-slate-500 truncate">Tier: Fiber Elite</p>
                </div>
              )}
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* Header */}
        <header className="h-20 px-4 md:px-8 flex items-center justify-between z-10 glass-morphism border-b border-white/5 shrink-0">
           <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="text-slate-400 hover:text-white"
              >
                {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
              <h2 className="text-xl md:text-2xl font-extrabold tracking-tight truncate max-w-[140px] sm:max-w-none">{activeTab}</h2>
           </div>
           
           <div className="flex items-center gap-6">
              <div className="hidden md:flex relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                <input 
                  placeholder="Global Search..."
                  className="bg-slate-900/50 border border-white/10 rounded-full pl-9 pr-6 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 w-64 transition-all"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      toast.success(`Searching for "${e.currentTarget.value}"...`)
                    }
                  }}
                />
              </div>
              <div className="flex items-center gap-2">
                 <button 
                  onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-full hover:bg-slate-800 transition-colors text-slate-400 group relative z-50"
                  title="Toggle Tech Theme"
                 >
                    {theme === 'dark' ? <Sun className="w-5 h-5 group-hover:text-amber-400 transition-colors" /> : <Moon className="w-5 h-5 group-hover:text-blue-500 transition-colors" />}
                 </button>
                 <button 
                  onClick={() => toast('No new notifications', { icon: '🔔', style: { borderRadius: '10px', background: '#1e293b', color: '#fff' }})}
                  className="relative p-2 rounded-full hover:bg-slate-800 transition-colors"
                 >
                    <Bell className="w-5 h-5 text-slate-400" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full ring-2 ring-slate-900" />
                 </button>
                 <button 
                  onClick={() => toast('Layer settings opened', { icon: '🗺️', style: { borderRadius: '10px', background: '#1e293b', color: '#fff' }})}
                  className="p-2 rounded-full hover:bg-slate-800 transition-colors text-slate-400"
                 >
                    <Layers className="w-5 h-5" />
                 </button>
              </div>
           </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto w-full p-4 md:p-8 space-y-6 md:space-y-8 scroll-smooth">
          <AnimatePresence mode="wait">
            {activeTab === 'Dashboard' && (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 relative group cursor-pointer group rounded-2xl overflow-hidden glass-morphism border border-white/10 shadow-2xl">
                     <div className="absolute top-8 left-8 z-20 max-w-md pointer-events-none">
                        <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20 mb-3 inline-block">High-Performance GIS</span>
                        <h3 className="text-4xl font-extrabold text-white mb-4 leading-tight">Visualizing Global Connectivity</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">Real-time monitoring and deployment analysis for enterprise fiber networks with sub-meter accuracy.</p>
                        <div className="flex gap-3 pointer-events-auto">
                           <Button size="lg" className="rounded-full shadow-2xl" onClick={() => setActiveTab('GIS Mapping')}>Deploy Route</Button>
                           <Button variant="ghost" className="text-white hover:bg-white/5 rounded-full border border-white/10 lg:inline-flex hidden" onClick={() => toast.success('Fiberizer documentation opened!', { style: { borderRadius: '10px', background: '#1e293b', color: '#fff' }})}>Learn More</Button>
                        </div>
                     </div>
                     <FiberHero3D />
                  </div>
                  
                  <div className="flex flex-col gap-8 h-full">
                     <FiberPathCalculator />
                     <ManualDataEntry />
                  </div>
                </div>

                {/* Dashboard Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                   {[
                     { label: 'Network Health', value: '98.4%', trend: '+0.2%', color: 'text-emerald-400' },
                     { label: 'Active Fibers', value: '1,422', trend: '+12', color: 'text-blue-400' },
                     { label: 'Ongoing Faults', value: '7', trend: '-2', color: 'text-rose-400' },
                     { label: 'Client Nodes', value: '45,803', trend: '+124', color: 'text-indigo-400' },
                   ].map((stat, i) => (
                     <div key={i} className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 glass-morphism hover:border-white/10 transition-colors shadow-lg">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{stat.label}</p>
                        <div className="flex items-end justify-between">
                           <p className={`text-2xl font-extrabold ${stat.color} glow-text`}>{stat.value}</p>
                           <span className={`text-[10px] font-bold ${stat.trend.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>{stat.trend}</span>
                        </div>
                     </div>
                   ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-4">
                     <div className="flex items-center justify-between">
                        <h3 className="text-xl font-extrabold">Live GIS Monitor</h3>
                        <Button variant="ghost" size="sm" className="text-xs" onClick={() => setActiveTab('GIS Mapping')}>Expand Map</Button>
                     </div>
                     <MapComponent />
                   </div>
                   <div className="space-y-4">
                     <div className="flex items-center justify-between">
                        <h3 className="text-xl font-extrabold">Network Topology</h3>
                        <Button variant="ghost" size="sm" className="text-xs" onClick={() => setActiveTab('Network Topology')}>Live Status</Button>
                     </div>
                     <NetworkTopology />
                   </div>
                </div>

                <AssetTable />
              </motion.div>
            )}

            {activeTab === 'GIS Mapping' && (
              <motion.div
                key="gis"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between mb-8">
                   <div>
                      <h3 className="text-3xl font-extrabold tracking-tight">GIS Route Visualization</h3>
                      <p className="text-slate-400 mt-1">Real-time GPS plotting and path optimization with sub-meter accuracy.</p>
                   </div>
                   <div className="flex gap-3">
                      <Button variant="outline" onClick={() => toast.loading('Importing KML file...', { duration: 2000, style: { background: '#1e293b', color: '#fff' } })}>Import KML</Button>
                      <Button onClick={() => toast.success('New survey instance created', { style: { background: '#1e293b', color: '#fff' } })}>New Survey</Button>
                   </div>
                </div>
                <div className="h-[calc(100vh-250px)]">
                  <MapComponent />
                </div>
              </motion.div>
            )}

            {activeTab === 'Network Topology' && (
              <motion.div
                key="topology"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between mb-8">
                   <div>
                      <h3 className="text-3xl font-extrabold tracking-tight">Active Topology</h3>
                      <p className="text-slate-400 mt-1">Hierarchical visualization of OLTs, splitters, and client endpoints.</p>
                   </div>
                   <div className="flex gap-3 flex-wrap">
                      <Button variant="outline" size="sm" onClick={() => toast.success('Layout recalculated automatically', { style: { background: '#1e293b', color: '#fff' } })}>Auto Layout</Button>
                      <Button variant="outline" size="sm" onClick={() => toast.success('Topology exported as SVG', { style: { background: '#1e293b', color: '#fff' } })}>Export SVG</Button>
                      <Button size="sm" onClick={() => toast.loading('Pinging network nodes...', { duration: 2000, style: { background: '#1e293b', color: '#fff' } })}>Refresh Links</Button>
                   </div>
                </div>
                <div className="h-[calc(100vh-250px)]">
                  <NetworkTopology />
                </div>
              </motion.div>
            )}

            {activeTab === 'Asset Management' && (
              <motion.div
                key="assets"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <AssetTable />
              </motion.div>
            )}

            {activeTab === 'Complaints' && (
              <motion.div
                key="complaints"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="h-[calc(100vh-120px)]"
              >
                <ComplaintsForm />
              </motion.div>
            )}

            {activeTab === 'Complaint History' && (
              <motion.div
                key="history"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="h-[calc(100vh-120px)]"
              >
                <ComplaintHistory />
              </motion.div>
            )}

            {activeTab === 'Toolbox Inventory' && (
              <motion.div
                key="toolbox"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="h-[calc(100vh-120px)]"
              >
                <ToolboxInventory />
              </motion.div>
            )}
            
            {activeTab === 'Optimization' && (
              <motion.div
                key="optimization"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="h-[calc(100vh-120px)]"
              >
                <Optimization />
              </motion.div>
            )}

            {activeTab === 'Settings' && (
              <motion.div
                key="settings"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="h-[calc(100vh-120px)]"
              >
                <SettingsTab />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
      <Toaster position="bottom-right" />
    </div>
  )
}
