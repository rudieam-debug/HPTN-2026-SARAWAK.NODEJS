import React from 'react';

const StatItem: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center gap-2 min-w-[150px]">
    <p className="text-primary text-4xl font-bold leading-tight">{value}</p>
    <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">{label}</p>
  </div>
);

const Separator: React.FC = () => (
  <div className="w-px h-16 bg-border-dark hidden md:block"></div>
);

const Stats: React.FC = () => {
  return (
    <section className="bg-background-card/50">
      <div className="max-w-[1200px] mx-auto px-6 py-14">
        <div className="flex flex-wrap gap-8 justify-center">
          <StatItem value="10K+" label="Peserta Dijangka" />
          <Separator />
          <StatItem value="50+" label="Pempamer" />
          <Separator />
          <StatItem value="20+" label="Speaker Pakar" />
          <Separator />
          <StatItem value="12" label="Bidang Teknikal" />
        </div>
      </div>
    </section>
  );
};

export default Stats;