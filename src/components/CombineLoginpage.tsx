import React from 'react';
import { RunnerBanner } from './Runner';
import LoginForm from './LoginForm';

interface CombineLoginPageProps {
  onLoginSuccess: () => void;
}

const CombineLoginpage: React.FC<CombineLoginPageProps> = ({ onLoginSuccess }) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#27d779] to-[#16323e] p-4 sm:p-6">
     
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[940px] md:min-h-[560px] rounded-xl shadow-[0_25px_50px_rgba(0,0,0,0.3)] overflow-hidden bg-white">
        
     
        <div className="flex w-full h-full">
          <RunnerBanner />
        </div>

        
        <div className="flex w-full h-full">
          <LoginForm onLoginSuccess={onLoginSuccess} />
        </div>

      </div>
    </div>
  );
};

export default CombineLoginpage;
