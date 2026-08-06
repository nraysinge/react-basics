import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="text-xl font-black tracking-tight text-slate-900">Empower<span className="text-indigo-600">HR</span></a>
        <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
          <a className="transition hover:text-indigo-600" href="#dashboard">Dashboard</a>
          <a className="transition hover:text-indigo-600" href="#about">About</a>
          <a className="transition hover:text-indigo-600" href="#contact">Contact</a>
          <a className="transition hover:text-indigo-600" href="#auth">Login / Signup</a>
        </div>
        <a href="#auth" className="hidden rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 sm:block">Get started</a>
        <button type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-xl md:hidden">
          {menuOpen ? '×' : '☰'}
        </button>
      </nav>
      {menuOpen && (
        <div className="mx-5 mb-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-lg md:hidden">
          <div className="flex flex-col gap-4 text-sm font-semibold">
            <a href="#dashboard" onClick={() => setMenuOpen(false)}>Dashboard</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <a href="#auth" onClick={() => setMenuOpen(false)} className="rounded-full bg-indigo-600 px-5 py-3 text-center font-semibold text-white">Login / Signup</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
