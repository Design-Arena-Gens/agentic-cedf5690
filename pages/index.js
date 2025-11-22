import { useState } from 'react'
import BarGraph from '../components/BarGraph'

export default function Home() {
  const [data, setData] = useState([
    { label: 'January', value: 65, color: '#FF6B6B' },
    { label: 'February', value: 85, color: '#4ECDC4' },
    { label: 'March', value: 45, color: '#45B7D1' },
    { label: 'April', value: 92, color: '#FFA07A' },
    { label: 'May', value: 78, color: '#98D8C8' },
    { label: 'June', value: 88, color: '#F7DC6F' }
  ])

  const handleRandomize = () => {
    setData(data.map(item => ({
      ...item,
      value: Math.floor(Math.random() * 100) + 10
    })))
  }

  return (
    <div className="container">
      <div className="header">
        <h1>📊 Beautiful Bar Graph</h1>
        <p>Interactive data visualization with smooth animations</p>
      </div>

      <BarGraph data={data} />

      <button className="randomize-btn" onClick={handleRandomize}>
        🎲 Randomize Data
      </button>

      <div className="stats">
        <div className="stat-card">
          <span className="stat-label">Maximum</span>
          <span className="stat-value">{Math.max(...data.map(d => d.value))}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Average</span>
          <span className="stat-value">
            {Math.round(data.reduce((sum, d) => sum + d.value, 0) / data.length)}
          </span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Minimum</span>
          <span className="stat-value">{Math.min(...data.map(d => d.value))}</span>
        </div>
      </div>
    </div>
  )
}
