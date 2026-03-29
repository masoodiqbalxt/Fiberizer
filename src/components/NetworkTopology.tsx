import ReactFlow, { 
  Background, 
  Controls, 
  MiniMap, 
  Node as FlowNode, 
  Edge as FlowEdge,
  Handle,
  Position,
  BackgroundVariant
} from 'reactflow'
import 'reactflow/dist/style.css'
import { Server, Share2, Activity, GitBranchPlus } from 'lucide-react'

// Custom Node for the Fiber OLT/Splitter
const CustomNode = ({ data }: any) => {
  const Icon = data.icon || Activity
  return (
    <div className="px-4 py-2 shadow-xl rounded-xl bg-slate-900 border border-white/10 glass-morphism min-w-[150px]">
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg ${data.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs font-bold text-slate-100 uppercase tracking-wider">{data.label}</p>
          <p className="text-[10px] text-slate-500">{data.id}</p>
        </div>
      </div>
      <Handle type="target" position={Position.Top} className="w-2 h-2 !bg-blue-500 border-none" />
      <Handle type="source" position={Position.Bottom} className="w-2 h-2 !bg-blue-500 border-none" />
    </div>
  )
}

const nodeTypes = {
  custom: CustomNode,
}

const initialNodes: FlowNode[] = [
  { 
    id: 'u2000-root', 
    type: 'custom', 
    position: { x: 400, y: 0 }, 
    data: { label: 'U2000 NMS Server', id: '124.29.245.126', icon: Server, status: 'Active' } 
  },
  { 
    id: 'region-lhr', 
    type: 'custom', 
    position: { x: 400, y: 150 }, 
    data: { label: 'Lahore Region', id: 'LHR', icon: Activity, status: 'Active' } 
  },
  { 
    id: 'olt-alkabir', 
    type: 'custom', 
    position: { x: 0, y: 300 }, 
    data: { label: 'AL KABIR LHR', id: 'MA5800-X17', icon: GitBranchPlus, status: 'Active' } 
  },
  { 
    id: 'olt-batapur', 
    type: 'custom', 
    position: { x: 200, y: 300 }, 
    data: { label: 'BATAPUR2 LHR', id: 'MA5800-X17', icon: GitBranchPlus, status: 'Active' } 
  },
  { 
    id: 'olt-cantt', 
    type: 'custom', 
    position: { x: 400, y: 300 }, 
    data: { label: 'CANTT LHR', id: 'MA5800-X17', icon: GitBranchPlus, status: 'Active' } 
  },
  { 
    id: 'olt-dha', 
    type: 'custom', 
    position: { x: 600, y: 300 }, 
    data: { label: 'DHA LHR', id: 'MA5800-X17', icon: GitBranchPlus, status: 'Active' } 
  },
  { 
    id: 'olt-gulberg', 
    type: 'custom', 
    position: { x: 800, y: 300 }, 
    data: { label: 'GULBERG LHR', id: 'MA5800-X17', icon: GitBranchPlus, status: 'Active' } 
  },
]

const initialEdges: FlowEdge[] = [
  { id: 'e-root-lhr', source: 'u2000-root', target: 'region-lhr', animated: true, style: { stroke: '#818cf8', strokeWidth: 3 } },
  { id: 'e-lhr-alkabir', source: 'region-lhr', target: 'olt-alkabir', animated: true, style: { stroke: '#3b82f6', strokeWidth: 2 } },
  { id: 'e-lhr-batapur', source: 'region-lhr', target: 'olt-batapur', animated: true, style: { stroke: '#3b82f6', strokeWidth: 2 } },
  { id: 'e-lhr-cantt', source: 'region-lhr', target: 'olt-cantt', animated: true, style: { stroke: '#3b82f6', strokeWidth: 2 } },
  { id: 'e-lhr-dha', source: 'region-lhr', target: 'olt-dha', animated: true, style: { stroke: '#3b82f6', strokeWidth: 2 } },
  { id: 'e-lhr-gulberg', source: 'region-lhr', target: 'olt-gulberg', animated: true, style: { stroke: '#3b82f6', strokeWidth: 2 } },
]

export function NetworkTopology() {
  return (
    <div className="h-[500px] w-full bg-slate-950/40 rounded-2xl border border-white/10 glass-morphism overflow-hidden shadow-2xl relative">
       <div className="absolute top-4 left-6 z-50">
          <h3 className="text-xl font-extrabold text-slate-100 flex items-center gap-2">
             <Activity className="w-5 h-5 text-blue-500 animate-pulse" />
             Live Topology Diagram
          </h3>
       </div>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        nodeTypes={nodeTypes}
        fitView
        onInit={(instance) => instance.fitView()}
      >
        <Background color="#334155" variant={BackgroundVariant.Dots} />
        <Controls className="!bg-slate-900 !border-white/10 !fill-white" />
        <MiniMap 
          className="!bg-slate-900/50 !rounded-lg border border-white/10" 
          nodeColor="#1e293b"
          maskColor="rgba(15, 23, 42, 0.4)"
        />
      </ReactFlow>
    </div>
  )
}
