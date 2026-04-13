'use client'

interface ProductSpecsProps {
  specs: Record<string, any>
  label?: string
}

export function ProductSpecs({ specs, label = 'Characteristics' }: ProductSpecsProps) {
  if (!specs || Object.keys(specs).length === 0) {
    return null
  }

  // Helper function to format spec values
  const formatValue = (value: any, key: string): string => {
    if (value === null || value === undefined) return '—'
    if (typeof value === 'number') {
      // Add units based on key
      if (key.includes('pressure') || key.includes('Pressure')) return `${value} кПа`
      if (key.includes('temperature') || key.includes('Temperature')) return `${value}°C`
      if (key.includes('performance') || key.includes('Performance')) return `${value} л/мин`
      if (key.includes('power') || key.includes('Power')) return `${value} Вт`
      if (key.includes('length') || key.includes('Length')) return `${value} м`
      return String(value)
    }
    return String(value)
  }

  // Translate keys to readable labels
  const getLabelForKey = (key: string): string => {
    const labelMap: Record<string, string> = {
      manufacturer: 'Manufacturer',
      maxPressure: 'Max Pressure',
      waterTemperature: 'Water Temperature',
      performance: 'Performance',
      power: 'Power',
      material: 'Material',
      length: 'Length',
      country: 'Country',
    }
    return labelMap[key] || key
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{label}</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <tbody>
            {Object.entries(specs).map(([key, value]) => (
              <tr key={key} className="border-b border-gray-200">
                <td className="py-3 px-2 font-medium text-gray-700 bg-gray-50 w-1/3">
                  {getLabelForKey(key)}
                </td>
                <td className="py-3 px-2 text-gray-900">
                  {formatValue(value, key)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
