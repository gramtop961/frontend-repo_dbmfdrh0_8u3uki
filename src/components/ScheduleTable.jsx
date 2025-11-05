import React from 'react';

const rows = [
  { time: '08:00 - 08:45', subject: 'Mathematics', room: 'A-201', teacher: 'Mr. Lee' },
  { time: '08:50 - 09:35', subject: 'Physics', room: 'Lab-2', teacher: 'Dr. Chen' },
  { time: '09:40 - 10:25', subject: 'English', room: 'B-104', teacher: 'Ms. Patel' },
  { time: '10:40 - 11:25', subject: 'History', room: 'A-305', teacher: 'Mr. Smith' },
  { time: '11:30 - 12:15', subject: 'Biology', room: 'Lab-1', teacher: 'Dr. Gomez' },
];

const ScheduleTable = ({ className = '' }) => {
  return (
    <section className={`relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur ${className}`}>
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-white/10 to-transparent" />
      <div className="relative p-5">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-medium text-white">Today's Schedule</h2>
          <div className="rounded-lg border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/60">GMT+0</div>
        </div>
        <div className="overflow-hidden rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead className="bg-white/5 text-white/60">
              <tr>
                <th className="px-4 py-2 text-left font-normal">Time</th>
                <th className="px-4 py-2 text-left font-normal">Subject</th>
                <th className="px-4 py-2 text-left font-normal">Room</th>
                <th className="px-4 py-2 text-left font-normal">Teacher</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {rows.map((r, i) => (
                <tr key={i} className="hover:bg-white/5">
                  <td className="px-4 py-3 text-white/80">{r.time}</td>
                  <td className="px-4 py-3 text-white">{r.subject}</td>
                  <td className="px-4 py-3 text-white/80">{r.room}</td>
                  <td className="px-4 py-3 text-white/80">{r.teacher}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ScheduleTable;
