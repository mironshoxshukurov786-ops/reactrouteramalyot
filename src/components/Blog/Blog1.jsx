import React, { useState } from 'react';
import { FileText, PlayCircle, Mic, ChevronDown, Search } from 'lucide-react';

const BlogFilterBar = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [category, setCategory] = useState('all themes');

  const tabs = [
    { name: 'All', icon: null },
    { name: 'Articles', icon: <FileText size={18} /> },
    { name: 'Videos', icon: <PlayCircle size={18} /> },
    { name: 'Podcasts', icon: <Mic size={18} /> },
  ];

  return (
    
    <div className="flex flex-wrap items-center justify-between w-full gap-4 p-4 bg-white font-sans text-slate-600">
      
      {/* Left Side: Content Type Tabs */}
      <div className="flex items-center gap-6">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex items-center gap-2 px-4 py-2 transition-all duration-200 border rounded-md font-medium
              ${activeTab === tab.name 
                ? 'border-red-500 text-red-500 ring-1 ring-red-500' 
                : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
          >
            {tab.icon}
            <span>{tab.name}</span>
          </button>
        ))}
      </div>

      {/* Right Side: Category & Search */}
      <div className="flex items-center gap-4 grow justify-end">
        
        {/* Dropdown Selector */}
        <div className="flex items-center gap-3">
          <span className="font-bold text-slate-800 whitespace-nowrap">Blog category</span>
          <div className="relative group">
            <select 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="appearance-none bg-white border border-slate-200 rounded px-4 py-2 pr-10 focus:outline-none focus:border-slate-400 cursor-pointer text-slate-500"
            >
              <option value="all themes">all themes</option>
              <option value="tech">Technology</option>
              <option value="lifestyle">Lifestyle</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" size={16} />
          </div>
        </div>

        {/* Search Input */}
        <div className="relative max-w-xs w-full">
          <input
            type="text"
            placeholder="Search blog..."
            className="w-full border border-slate-200 rounded px-4 py-2 pr-10 focus:outline-none focus:border-slate-400 placeholder:text-slate-300"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
        </div>
      </div>
    </div>
  );
};

export default BlogFilterBar;
  