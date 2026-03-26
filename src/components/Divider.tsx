import React from 'react';

const Divider: React.FC = () => {
  return (
    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-white/10 to-transparent relative overflow-hidden opacity-70">
      <div className="absolute top-0 bottom-0 w-[40%] bg-gradient-to-r from-transparent via-primary/70 to-transparent blur-[1px] animate-divider-flow"></div>
    </div>
  );
};

export default Divider;