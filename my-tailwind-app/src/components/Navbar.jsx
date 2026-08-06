import { useState } from 'react'

function Navbar({ user, onSignOut, onGoDashboard, onAddEmployee }) {
  const [open, setOpen] = useState(false)
  const admin = user.accessRole === 'admin'

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <button onClick={onGoDashboard} className="flex items-center gap-3 text-left">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-sm font-black text-white shadow-lg">EM</span>
          <span>
            <span className="block text-lg font-black tracking-tight text-slate-900">Empower HR</span>
            <span className="block text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Employee portal</span>
          </span>
        </button>

        <div className="hidden items-center gap-6 md:flex">
          <button onClick={onGoDashboard} className="text-sm font-semibold text-slate-600 transition hover:text-indigo-600">Dashboard</button>
          {admin && <button onClick={onAddEmployee} className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700">Add employee</button>}
          <Actions user={user} onSignOut={onSignOut} />
        </div>

        <button onClick={() => setOpen(!open)} className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-bold text-slate-700 md:hidden">
          {open ? 'Close' : 'Menu'}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            <button onClick={() => { onGoDashboard(); setOpen(false) }} className="text-left text-sm font-semibold text-slate-600">Dashboard</button>
            {admin && <button onClick={() => { onAddEmployee(); setOpen(false) }} className="rounded-full bg-indigo-600 px-4 py-2 text-left text-sm font-semibold text-white">Add employee</button>}
            <Actions user={user} onSignOut={onSignOut} compact />
          </div>
        </div>
      )}
    </header>
  )
}

function Actions({ user, onSignOut, compact = false }) {
  return (
    <div className={`flex items-center gap-3 ${compact ? 'flex-col items-start' : ''}`}>
      <div className={`${compact ? 'text-left' : 'text-right'}`}>
        <p className="text-sm font-bold text-slate-900">{user.name}</p>
        <p className="text-xs capitalize text-slate-500">{user.accessRole || 'employee'} access</p>
      </div>
      <button onClick={onSignOut} className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-600">
        Sign out
      </button>
    </div>
  )
}

export default Navbar
