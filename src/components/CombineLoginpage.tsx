import React from 'react';
import {RunnerBanner} from './Runner';
import LoginForm from './LoginForm';

const CombineLoginpage: React.FC = () => {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #27d779 0%, #16323e 100%)',
        padding: '24px',
        boxSizing: 'border-box',
      }}
    >
      {/* Unified Card with Two Equal Columns */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'stretch',
          width: '100%',
          maxWidth: '940px',
          minHeight: '560px',
          borderRadius: '12px',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
          overflow: 'hidden',
        }}
      >
        {/* Left Column Wrapper */}
        <div style={{ display: 'flex', width: '100%', height: '1000%' }}>
          <RunnerBanner />
        </div>

        {/* Right Column Wrapper */}
        <div style={{ display: 'flex', width: '100%', height: '50%' }}>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default CombineLoginpage;
