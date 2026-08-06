function AuthForm({ page, form, notice, onChange, onSubmit, onPageChange, variant = 'default' }) {
  const register = page === 'register'
  const isCard = variant === 'card'

  return (
    <main className={isCard ? 'w-full rounded-[1.5rem] bg-white p-0' : 'min-h-screen bg-slate-950 px-4 py-8 text-slate-900 sm:grid sm:place-items-center'}>
      <section className={isCard ? 'w-full overflow-hidden rounded-[1.5rem] bg-white' : 'grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-2'}>
        {!isCard && (
          <div className="hidden bg-indigo-700 p-12 text-white lg:block">
            <p className="text-xl font-black">EM Empower</p>
            <h1 className="mt-28 text-5xl font-black">Employee management, made simple.</h1>
          </div>
        )}

        <div className={isCard ? 'p-6 sm:p-8' : 'p-7 sm:p-12'}>
          <p className="text-sm font-bold uppercase tracking-[.15em] text-indigo-600">{register ? 'Create account' : 'Welcome back'}</p>
          <h1 className="mt-2 text-3xl font-black">{register ? 'Join the employee portal' : 'Sign in to your workspace'}</h1>
          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            {register && (
              <>
                <Input label="Full name" autoComplete="name" value={form.name} onChange={(value) => onChange('name', value)} />
                <label className="block text-sm font-semibold">
                  Account type
                  <select value={form.role} onChange={(event) => onChange('role', event.target.value)} className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3">
                    <option value="employee">Employee — view-only access</option>
                    <option value="admin">Admin — full access</option>
                  </select>
                </label>
              </>
            )}
            <Input label="Email address" type="email" autoComplete="email" value={form.email} onChange={(value) => onChange('email', value)} />
            <Input label="Password" type="password" autoComplete={register ? 'new-password' : 'current-password'} value={form.password} onChange={(value) => onChange('password', value)} />
            <button className="w-full rounded-xl bg-indigo-600 py-3.5 font-bold text-white">{register ? 'Create account' : 'Sign in'}</button>
          </form>
          {notice && <p className="mt-4 rounded-xl bg-indigo-50 p-3 text-sm text-indigo-700">{notice}</p>}
          <p className="mt-6 text-center text-sm text-slate-500">
            {register ? 'Already registered?' : "Don't have an account?"}{' '}
            <button onClick={() => onPageChange(register ? 'login' : 'register')} className="font-bold text-indigo-600">
              {register ? 'Sign in' : 'Register now'}
            </button>
          </p>
        </div>
      </section>
    </main>
  )
}

export function Input({ label, value, onChange, type = 'text', autoComplete }) {
  return (
    <label className="block text-sm font-semibold">
      {label}
      <input required type={type} autoComplete={autoComplete} value={value} onChange={(event) => onChange(event.target.value)} className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-indigo-500" />
    </label>
  )
}

export default AuthForm
