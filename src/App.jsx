import React from 'react';
import Hero3D from './components/Hero3D';
import StatCards from './components/StatCards';
import ScheduleTable from './components/ScheduleTable';
import ManagementGrid from './components/ManagementGrid';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[#0a0b0f]">
      {/* Glow accents */}
      <div className="pointer-events-none fixed inset-0 -z-[1]">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl border border-white/10 bg-white/5" />
            <div>
              <p className="text-xs uppercase tracking-widest text-white/40">Nova School</p>
              <h2 className="-mt-0.5 text-sm font-medium text-white/80">Control Dashboard</h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80 hover:bg-white/10">Settings</button>
            <button className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-xs text-emerald-300 hover:bg-emerald-500/20">Sync</button>
          </div>
        </header>

        <Hero3D />
        <StatCards />

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <ScheduleTable className="lg:col-span-2" />
          <ManagementGrid />
        </div>

        <footer className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          Built with a dark, minimal, futuristic aesthetic.
        </footer>
      </div>
    </div>
  );
};

export default App;
