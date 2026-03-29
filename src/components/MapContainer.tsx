import { useState, useCallback, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Polyline, useMapEvents, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { Button } from './ui/Button'
import { Download, Plus, Trash2, MapIcon, Satellite } from 'lucide-react'

// Fix for default marker icons in Leaflet with Vite
const DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
})
L.Marker.prototype.options.icon = DefaultIcon

interface Node {
  id: string
  lat: number
  lng: number
  type: 'node' | 'equipment'
  label?: string
}

export function MapComponent() {
  const [nodes, setNodes] = useState<Node[]>([])
  const [isDrawing, setIsDrawing] = useState(false)
  const [mapType, setMapType] = useState<'streets' | 'satellite'>('streets')

  const toggleDrawing = () => setIsDrawing(!isDrawing)
  const clearNodes = () => setNodes([])
  
  const savePath = () => {
    const jsonPath = JSON.stringify(nodes, null, 2)
    const blob = new Blob([jsonPath], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'fiber_route.json'
    a.click()
  }

  const handleMapClick = (e: any) => {
    if (!isDrawing) return
    const newNode: Node = {
      id: Math.random().toString(36).substr(2, 9),
      lat: e.latlng.lat,
      lng: e.latlng.lng,
      type: 'node'
    }
    setNodes([...nodes, newNode])
  }

  function MapClickHandler() {
    useMapEvents({
      click: handleMapClick
    })
    return null
  }

  const polylineCoords = nodes.map(n => [n.lat, n.lng] as [number, number])

  return (
    <div className="relative h-[600px] w-full rounded-2xl overflow-hidden border border-white/10 glass-morphism shadow-2xl">
      <div className="absolute top-4 right-4 z-[1000] flex flex-col gap-2">
        <div className="flex bg-slate-900/80 backdrop-blur rounded-lg p-1 border border-white/10 shadow-lg">
           <Button
            size="sm"
            variant={isDrawing ? 'primary' : 'ghost'}
            className={isDrawing ? 'bg-blue-600 text-white' : 'text-slate-400'}
            onClick={toggleDrawing}
          >
            <Plus className="w-4 h-4 mr-1" />
            {isDrawing ? 'Stop Drawing' : 'Draw Route'}
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="text-slate-400 hover:text-white"
            onClick={savePath}
            disabled={nodes.length === 0}
          >
            <Download className="w-4 h-4 mr-1" />
            Save Path
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="text-red-400 hover:text-red-300"
            onClick={clearNodes}
            disabled={nodes.length === 0}
          >
            <Trash2 className="w-4 h-4 mr-1" />
            Clear
          </Button>
        </div>
        
        <div className="flex bg-slate-900/80 backdrop-blur rounded-lg p-1 border border-white/10 shadow-lg mt-2 self-end">
           <Button
            size="sm"
            variant="ghost"
            className={mapType === 'streets' ? 'bg-slate-700 text-white' : 'text-slate-400'}
            onClick={() => setMapType('streets')}
          >
            <MapIcon className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className={mapType === 'satellite' ? 'bg-slate-700 text-white' : 'text-slate-400'}
            onClick={() => setMapType('satellite')}
          >
            <Satellite className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <MapContainer 
        center={[31.5204, 74.3587]} // Centered on Lahore, Pakistan
        zoom={12} 
        style={{ height: '100%', width: '100%' }}
        className="z-10"
      >
        <TileLayer
          url={mapType === 'satellite' 
            ? 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            : 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
          }
          attribution='&copy; OpenStreetMap contributors'
        />
        <MapClickHandler />
        {polylineCoords.length > 1 && (
          <Polyline 
            positions={polylineCoords} 
            color="#3b82f6" 
            weight={4} 
            opacity={0.8}
            dashArray="10, 10"
            className="fiber-line"
          />
        )}
        {nodes.map((node) => (
          <Marker key={node.id} position={[node.lat, node.lng]}>
            <Popup>
              <div className="text-slate-900 font-sans">
                <p className="font-bold">GPS Node</p>
                <p className="text-xs">Lat: {node.lat.toFixed(6)}</p>
                <p className="text-xs">Lng: {node.lng.toFixed(6)}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      {isDrawing && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[1000] bg-blue-600/90 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur">
          Click on the map to place fiber nodes
        </div>
      )}
    </div>
  )
}
