import React from 'react'

interface PlaceholderImageProps {
  label: string
  ratio?: string
  className?: string
}

export const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ 
  label,
  ratio = '16/9',
  className = ''
}) => {
  // Parse the ratio
  const [widthRatio, heightRatio] = ratio.split('/').map(Number)
  const paddingBottom = heightRatio && widthRatio ? (heightRatio / widthRatio) * 100 : 56.25
  
  return (
    <div 
      className={`relative w-full overflow-hidden rounded-lg ${className}`}
      style={{ paddingBottom: `${paddingBottom}%` }}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-teal-400 to-emerald-600 text-white font-bold">
        {label}
      </div>
    </div>
  )
}