function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 px-6 py-10 text-sm text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xl font-black text-white">Empower HR</p>
          <p className="mt-2 max-w-xl text-slate-400">A modern employee directory for onboarding, tracking, and managing workforce information with confidence.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-slate-400">
          <span>© 2026 Empower HR</span>
          <span>•</span>
          <span>Secure employee records</span>
          <span>•</span>
          <span>Real-time updates</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
