import { useState } from 'react'
import { Calculator, Zap, Info, ShieldAlert } from 'lucide-react'
import { Button } from './ui/Button'

export function FiberPathCalculator() {
  const [length, setLength] = useState(5.0)
  const [splices, setSplices] = useState(3)
  const [connectors, setConnectors] = useState(2)
  const [wavelength, setWavelength] = useState<'1310' | '1550'>('1550')

  // Standard attenuation factors (dB/km)
  const ATTENUATION = {
    '1310': 0.35,
    '1550': 0.22,
  }
  
  // Standard loss per splice (dB)
  const SPLICE_LOSS = 0.1
  // Standard loss per connector (dB)
  const CONNECTOR_LOSS = 0.5
  // Safety margin (dB)
  const SAFETY_MARGIN = 3.0

  const calculateLoss = () => {
    const fiberLoss = length * ATTENUATION[wavelength]
    const spliceLossTotal = splices * SPLICE_LOSS
    const connectorLossTotal = connectors * CONNECTOR_LOSS
    const totalLoss = fiberLoss + spliceLossTotal + connectorLossTotal + SAFETY_MARGIN
    return totalLoss.toFixed(2)
  }

  const loss = calculateLoss()

  return (
    <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6 glass-morphism shadow-xl h-full flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-600/20 rounded-lg">
          <Calculator className="w-5 h-5 text-blue-400" />
        </div>
        <h3 className="text-xl font-bold text-slate-100">Optical Link Loss Budget</h3>
      </div>
      
      <div className="space-y-6">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-slate-400">Route Length (km)</label>
          <input
            type="number"
            step="0.1"
            className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-2.5 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-mono"
            value={length}
            onChange={(e) => setLength(parseFloat(e.target.value) || 0)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-400">Splice Count</label>
            <input
              type="number"
              className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-2.5 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-mono"
              value={splices}
              onChange={(e) => setSplices(parseInt(e.target.value) || 0)}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-400">Connector Count</label>
            <input
              type="number"
              className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-2.5 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-mono"
              value={connectors}
              onChange={(e) => setConnectors(parseInt(e.target.value) || 0)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-slate-400">Wavelength (nm)</label>
          <div className="flex bg-slate-950/50 p-1 rounded-lg border border-white/10 gap-1">
             <Button
              variant={wavelength === '1310' ? 'secondary' : 'ghost'}
              className={`flex-1 rounded-md text-xs py-1.5 ${wavelength === '1310' ? 'bg-slate-800' : ''}`}
              onClick={() => setWavelength('1310')}
            >
              1310 nm
            </Button>
            <Button
              variant={wavelength === '1550' ? 'secondary' : 'ghost'}
              className={`flex-1 rounded-md text-xs py-1.5 ${wavelength === '1550' ? 'bg-slate-800' : ''}`}
              onClick={() => setWavelength('1550')}
            >
              1550 nm
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-8">
        <div className="bg-blue-600/10 border border-blue-500/30 rounded-xl p-5 mb-4 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:scale-110 transition-transform">
             <Zap className="w-12 h-12 text-blue-400" />
          </div>
          <p className="text-xs text-blue-400 uppercase font-bold tracking-widest mb-1">Total Estimated Loss</p>
          <p className="text-4xl font-extrabold text-blue-100 glow-text">{loss} <span className="text-xl font-medium">dB</span></p>
          <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
             <ShieldAlert className="w-4 h-4 text-amber-500" />
             <span>Includes 3.0 dB safety margin</span>
          </div>
        </div>
        
        <div className="flex gap-4 p-4 rounded-xl bg-slate-800/20 border border-white/5">
           <div className="flex-1 text-center">
             <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Attenuation</p>
             <p className="text-sm font-mono text-slate-200">{(length * ATTENUATION[wavelength]).toFixed(2)} dB</p>
           </div>
           <div className="w-px bg-white/5 h-8 my-auto" />
           <div className="flex-1 text-center">
             <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Splices</p>
             <p className="text-sm font-mono text-slate-200">{(splices * SPLICE_LOSS).toFixed(2)} dB</p>
           </div>
           <div className="w-px bg-white/5 h-8 my-auto" />
           <div className="flex-1 text-center">
             <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Connectors</p>
             <p className="text-sm font-mono text-slate-200">{(connectors * CONNECTOR_LOSS).toFixed(2)} dB</p>
           </div>
        </div>
      </div>
    </div>
  )
}
