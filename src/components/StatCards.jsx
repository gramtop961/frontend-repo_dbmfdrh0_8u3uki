import React from 'react';
import { Users, Calendar, ClipboardCheck, Wallet } from 'lucide-react';

const StatCards = () => {
  const stats = [
    {
      label: 'Attendance Today',
      value: '92%',
      change: '+3.2%',
      icon: Users,
      accent: 'from-emerald-500/20 to-emerald-500/0',
      glow: 'shadow-[0_0_24px_0_rgba(16,185,129,0.35)]',
    },
    {
      label: 'Classes Running',
      value: '18',
      change: '+2',
      icon: Calendar,
      accent: 'from-sky-500/20 to-sky-500/0',
      glow: 'shadow-[0_0_24px_0_rgba(14,165,233,0.35)]',
    },
    {
      label: 'Duties Assigned',
      value: '27',
      change: '+5',
      icon: ClipboardCheck,
      accent: 'from-violet-500/20 to-violet-500/0',
      glow: 'shadow-[0_0_24px_0_rgba(139,92,246,0.35)]',
    },
    {
      label: 'Cash Balance',
      value: '$4,320',
      change: '+$240',
      icon: Wallet,
      accent: 'from-amber-500/20 to-amber-500/0',
      glow: 'shadow-[0_0_24px_0_rgba(245,158,11,0.35)]',
    },
  ];

  return (
    <section className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map(({ label, value, change, icon: Icon, accent, glow }) => (
        <div
          key={label}
          className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur ${glow}`}
        >
          <div className={`pointer-events-none absolute -inset-px bg-gradient-to-br ${accent}`} />
          <div className="relative flex items-start justify-between">
            <div>
              <p className="text-xs text-white/60">{label}</p>
              <div className="mt-2 flex items-end gap-2">
                <h3 className="text-2xl font-semibold text-white">{value}</h3>
                <span className="text-xs text-emerald-300">{change}</span>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/30 p-2 text-white/70">
              <Icon size={18} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default StatCards;
