'use client'

import { useState } from 'react'

interface Tab {
  id: string
  label: string
  content: string
}

interface ProductTabsProps {
  tabs: Tab[]
}

export function ProductTabs({ tabs }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '')

  if (!tabs || tabs.length === 0) {
    return null
  }

  return (
    <div className="space-y-4">
      {/* Tab List */}
      <div className="flex gap-2 border-b border-gray-200 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 font-medium whitespace-nowrap transition-colors border-b-2 -mb-[2px] ${
              activeTab === tab.id
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="space-y-3">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`space-y-3 ${activeTab === tab.id ? '' : 'hidden'}`}
          >
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              {tab.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
