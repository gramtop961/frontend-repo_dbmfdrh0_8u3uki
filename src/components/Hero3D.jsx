import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero3D = () => {
  return (
    <section className="relative h-[420px] w-full rounded-2xl overflow-hidden border border-white/10 bg-black">
      <Spline
        scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />

      {/* Top gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70" />

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="px-6 sm:px-10 md:px-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_2px_rgba(16,185,129,0.75)]" />
            Live school control center
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Futuristic Class Management Dashboard
          </h1>
          <p className="mt-3 max-w-2xl text-white/70">
            Monitor attendance, schedules, duties, subjects, and cash flow in one sleek interface.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="group relative overflow-hidden rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-5 py-2.5 text-sm text-emerald-300 backdrop-blur transition hover:bg-emerald-500/20">
              <span className="relative z-10">Quick Sync</span>
              <span className="pointer-events-none absolute inset-0 opacity-0 blur-xl transition group-hover:opacity-100 bg-emerald-400/30" />
            </button>
            <button className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white/80 backdrop-blur transition hover:bg-white/10">
              View Reports
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
