import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export const Title = ({title , component}) =>{

    return<div className="relative py-12 flex flex-col items-center justify-center font-sans">
        <div className="text-center mb-12 py-8">
            <div className="flex items-center justify-center gap-4 mb-6">
            <Sparkles className="text-teal-500 animate-pulse" size={40} />
            <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600 bg-clip-text text-transparent">
                    {title}
                </h1>
                <Sparkles className="text-emerald-500 animate-pulse" size={40} />
            </div>
            </div>
                <div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full mx-auto"></div>
            </div>
            {component}
            
        
    </div>
}