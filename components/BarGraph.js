import { useState } from 'react'

export default function BarGraph({ data }) {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const maxValue = Math.max(...data.map(d => d.value))

  return (
    <div className="graph-container">
      <div className="graph">
        {data.map((item, index) => {
          const heightPercent = (item.value / maxValue) * 100
          const isHovered = hoveredIndex === index

          return (
            <div
              key={index}
              className="bar-wrapper"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="bar-value-label" style={{ opacity: isHovered ? 1 : 0 }}>
                {item.value}
              </div>
              <div
                className="bar"
                style={{
                  height: `${heightPercent}%`,
                  backgroundColor: item.color,
                  transform: isHovered ? 'scaleY(1.05)' : 'scaleY(1)',
                  boxShadow: isHovered
                    ? `0 8px 30px ${item.color}66`
                    : `0 4px 15px ${item.color}33`
                }}
              >
                <div className="bar-inner" />
              </div>
              <div className="bar-label">{item.label}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
