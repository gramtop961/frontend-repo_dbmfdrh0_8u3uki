import React, { useState } from 'react';

const Card = ({ title, children }) => (
  <div className="relative rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
    <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-white/10 to-transparent" />
    <div className="relative">
      <h3 className="text-sm font-medium text-white">{title}</h3>
      <div className="mt-3">{children}</div>
    </div>
  </div>
);

const ManagementGrid = ({ className = '' }) => {
  const [attendanceMarked, setAttendanceMarked] = useState(false);
  const [subject, setSubject] = useState('');
  const [duty, setDuty] = useState('');
  const [cash, setCash] = useState('');
  const [message, setMessage] = useState('');

  return (
    <section className={className}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Card title="Quick Attendance">
          <div className="flex items-center gap-3">
            <button
              onClick={() => { setAttendanceMarked(true); setMessage('Attendance marked for 7A.'); }}
              className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300 hover:bg-emerald-500/20"
            >
              Mark Present
            </button>
            <button
              onClick={() => { setAttendanceMarked(false); setMessage('Attendance cleared.'); }}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10"
            >
              Reset
            </button>
          </div>
          <p className="mt-3 text-xs text-white/60">
            Status: {attendanceMarked ? <span className="text-emerald-300">Recorded</span> : 'Pending'}
          </p>
        </Card>

        <Card title="Subjects">
          <div className="flex items-center gap-2">
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Add subject (e.g., Chemistry)"
              className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-white/20"
            />
            <button
              onClick={() => { if (subject.trim()) { setMessage(`Subject added: ${subject.trim()}`); setSubject(''); } }}
              className="rounded-lg border border-sky-500/40 bg-sky-500/10 px-3 py-2 text-sky-300 hover:bg-sky-500/20"
            >
              Add
            </button>
          </div>
        </Card>

        <Card title="Duty Roster">
          <div className="flex items-center gap-2">
            <input
              value={duty}
              onChange={(e) => setDuty(e.target.value)}
              placeholder="Assign duty (e.g., Hall Monitor)"
              className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-white/20"
            />
            <button
              onClick={() => { if (duty.trim()) { setMessage(`Duty assigned: ${duty.trim()}`); setDuty(''); } }}
              className="rounded-lg border border-violet-500/40 bg-violet-500/10 px-3 py-2 text-violet-300 hover:bg-violet-500/20"
            >
              Assign
            </button>
          </div>
        </Card>

        <Card title="Cash Register">
          <div className="flex items-center gap-2">
            <input
              value={cash}
              onChange={(e) => setCash(e.target.value)}
              placeholder="Record amount (e.g., 25)"
              type="number"
              className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-white/20"
            />
            <button
              onClick={() => { if (cash) { setMessage(`Cash recorded: $${Number(cash).toFixed(2)}`); setCash(''); } }}
              className="rounded-lg border border-amber-500/40 bg-amber-500/10 px-3 py-2 text-amber-300 hover:bg-amber-500/20"
            >
              Save
            </button>
          </div>
        </Card>
      </div>

      {message && (
        <div className="mt-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/80">
          {message}
        </div>
      )}
    </section>
  );
};

export default ManagementGrid;
