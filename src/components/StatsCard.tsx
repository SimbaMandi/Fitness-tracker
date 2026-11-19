import React from 'react';

interface StatsCardProps {
  title: string;
  value: string | number;
  accentColor: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({ title, value, accentColor }) => (
  <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 shadow-md">
    <p className="text-slate-400 text-sm font-medium">{title}</p>
    <p className={`text-2xl font-bold mt-2 ${accentColor}`}>{value}</p>
  </div>
);