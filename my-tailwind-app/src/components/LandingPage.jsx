import AuthForm from './AuthForm'
import Footer from './Footer'
import Header from './Header'

function LandingPage({ page, form, notice, onChange, onSubmit, onPageChange }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.16),_transparent_35%),linear-gradient(135deg,_#f8fafc_0%,_#eef2ff_100%)] text-slate-900">
      <Header />

      <main id="top">
        <section id="dashboard" className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="rounded-[2rem] border border-slate-200 bg-white/95 p-8 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.25)] sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-indigo-600">Empower HR</p>
              <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                Modern employee management for ambitious teams.
              </h1>
              <p className="mt-5 text-lg text-slate-600">
                Centralize employee records, simplify onboarding, and give your staff a smooth experience from day one.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#auth" className="rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700">
                  Login or sign up
                </a>
                <a href="#about" className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-600">
                  Learn more
                </a>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-2xl font-black text-slate-900">120+</p>
                  <p className="mt-1 text-sm text-slate-500">Employees tracked</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-2xl font-black text-slate-900">24/7</p>
                  <p className="mt-1 text-sm text-slate-500">Accessible portal</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-2xl font-black text-slate-900">100%</p>
                  <p className="mt-1 text-sm text-slate-500">Secure records</p>
                </div>
              </div>
            </div>

            <div id="auth" className="rounded-[2rem] border border-slate-200 bg-white/95 p-3 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.25)] sm:p-4">
              <AuthForm page={page} form={form} notice={notice} onChange={onChange} onSubmit={onSubmit} onPageChange={onPageChange} variant="card" />
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-5 py-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-xl sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-indigo-600">About Empower HR</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">Built for modern companies that value people.</h2>
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-4 text-slate-600">
                <p>
                  Empower HR helps growing organizations manage employee directories, roles, departments, and account access from a single, elegant experience.
                </p>
                <p>
                  Our platform supports HR teams and employees who need fast, secure access to the information that keeps the business moving.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-500">What we offer</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    <li>• Central employee records</li>
                    <li>• Secure admin and employee access</li>
                    <li>• Friendly, modern dashboard experience</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-500">Built for</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    <li>• Small teams</li>
                    <li>• Fast-growing startups</li>
                    <li>• Distributed offices</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-xl sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-indigo-300">Contact us</p>
                <h2 className="mt-3 text-3xl font-black">Let’s make people operations simpler.</h2>
                <p className="mt-4 max-w-2xl text-slate-300">
                  Reach our team for onboarding support, product questions, or a personalized walkthrough of the platform.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <p className="text-sm font-semibold text-slate-300">Email</p>
                <p className="mt-1 text-lg font-bold">narendraraysinge@gamil.com</p>
                <p className="mt-4 text-sm font-semibold text-slate-300">Phone</p>
                <p className="mt-1 text-lg font-bold">+91 963634418</p>
                <p className="mt-4 text-sm font-semibold text-slate-300">Address</p>
                <p className="mt-1 text-lg font-bold">pune, Maharashtra, India</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default LandingPage
