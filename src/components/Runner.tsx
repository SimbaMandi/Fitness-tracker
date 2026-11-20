import React from 'react';

export const RunnerBanner: React.FC = () => {
  return (
    <div className="relative w-full max-w-xl h-64 bg-white rounded-xl overflow-hidden shadow-md p-6 flex flex-col justify-center">
      <div className="relative z-10">
        <h1 className="text-3xl font-black italic tracking-tight">
          <span className="text-slate-900">FITNESS</span>
          <span className="text-green-500">TRACK</span>
        </h1>
        <p className="mt-1 text-slate-600 font-medium">
          <br />Track your progress and<br />
          achieve your fitness goals
        </p>
      </div>
    </div>
  );
};
