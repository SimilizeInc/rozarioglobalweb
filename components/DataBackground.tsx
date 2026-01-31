import React from 'react';
import { AreaChart, Area, ResponsiveContainer, YAxis } from 'recharts';

const data = Array.from({ length: 50 }, (_, i) => ({
  name: i,
  value: Math.sin(i * 0.2) * 20 + Math.random() * 30 + 50,
  value2: Math.cos(i * 0.3) * 15 + Math.random() * 20 + 30
}));

const DataBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
       <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/> {/* Amber-500 */}
              <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
            </linearGradient>
             <linearGradient id="colorValue2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffffff" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <YAxis hide domain={[0, 100]} />
          <Area 
            type="monotone" 
            dataKey="value" 
            stroke="#f59e0b" 
            fillOpacity={1} 
            fill="url(#colorValue)" 
            strokeWidth={1}
            isAnimationActive={true}
            animationDuration={3000}
          />
           <Area 
            type="monotone" 
            dataKey="value2" 
            stroke="#ffffff" 
            fillOpacity={1} 
            fill="url(#colorValue2)" 
            strokeWidth={1}
             isAnimationActive={true}
            animationDuration={4000}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DataBackground;