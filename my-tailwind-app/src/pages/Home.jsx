import { useEffect, useState } from 'react'
import { createEmployee, deleteEmployee, getEmployees, updateEmployee } from '../api'
import EmployeeForm from '../components/EmployeeForm'
import EmployeeTable from '../components/EmployeeTable'
import Footer from '../components/Footer'
import LandingPage from '../components/LandingPage'
import Navbar from '../components/Navbar'

const emptyEmployee = { name: '', email: '', department: 'Engineering', role: '', status: 'Active' }
const demoEmployees = [{ id: 'e1', name: 'Aarav Sharma', email: 'aarav@company.com', department: 'Engineering', role: 'Frontend Developer', status: 'Active', password: 'admin123', accessRole: 'admin' }, { id: 'e2', name: 'Priya Patel', email: 'priya@company.com', department: 'People', role: 'HR Manager', status: 'Active', password: 'employee123', accessRole: 'employee' }]

const normalizeEmployee = (employee) => ({
  ...employee,
  password: employee.password ?? 'employee123',
  accessRole: employee.accessRole ?? 'employee',
})

function Home() {
  const [page, setPage] = useState('login')
  const [session, setSession] = useState(null)
  const [employees, setEmployees] = useState(demoEmployees)
  const [authForm, setAuthForm] = useState({ name: '', email: '', password: '', role: 'employee' })
  const [employeeForm, setEmployeeForm] = useState(emptyEmployee)
  const [editingId, setEditingId] = useState(null)
  const [query, setQuery] = useState('')
  const [notice, setNotice] = useState('')
  const [apiOnline, setApiOnline] = useState(true)
  const [view, setView] = useState('dashboard')

  useEffect(() => {
    const load = async () => {
      try {
        const result = await getEmployees()
        const loadedEmployees = result.data.length ? result.data.map(normalizeEmployee) : demoEmployees
        setEmployees(loadedEmployees)
      } catch {
        setApiOnline(false)
      }
    }
    const timer = setTimeout(load, 0)
    return () => clearTimeout(timer)
  }, [])

  const changeAuth = (field, value) => setAuthForm({ ...authForm, [field]: value })
  const changeEmployee = (field, value) => setEmployeeForm({ ...employeeForm, [field]: value })

  const submitAuth = async (event) => {
    event.preventDefault()
    const email = authForm.email.trim().toLowerCase()

    if (page === 'register') {
      if (employees.some((employee) => employee.email.toLowerCase() === email)) {
        setNotice('An employee account already exists with this email.')
        return
      }

      const employee = {
        id: crypto.randomUUID(),
        name: authForm.name.trim(),
        email,
        password: authForm.password,
        accessRole: authForm.role,
        department: 'Not assigned',
        role: 'Employee',
        status: 'Active',
      }

      try {
        if (apiOnline) await createEmployee(employee)
        setEmployees([...employees, employee])
        setAuthForm({ name: '', email: '', password: '', role: 'employee' })
        setPage('login')
        setNotice('Registration complete. Please sign in.')
      } catch {
        setNotice('Could not register. Start the API with npm run server.')
      }
      return
    }

    const account = employees.find((employee) => employee.email.toLowerCase() === email && employee.password === authForm.password)
    if (!account) {
      setNotice('Incorrect email or password. Register an employee account first.')
      return
    }

    setSession(account)
    setNotice('')
  }

  const submitEmployee = async (event) => {
    event.preventDefault()
    const record = { ...employeeForm, name: employeeForm.name.trim(), email: employeeForm.email.trim() }
    const newEmployee = { ...record, id: crypto.randomUUID() }
    const next = editingId
      ? employees.map((item) => (item.id === editingId ? { ...record, id: editingId } : item))
      : [...employees, newEmployee]

    try {
      if (apiOnline) {
        if (editingId) await updateEmployee(editingId, record)
        else await createEmployee(newEmployee)
      }
      setNotice(editingId ? 'Employee details updated.' : 'Employee added successfully.')
    } catch {
      setApiOnline(false)
      setNotice('Saved only for this session. Start the API to persist changes.')
    }

    setEmployees(next)
    setEmployeeForm(emptyEmployee)
    setEditingId(null)
    setView('employee-form')
  }

  const deleteEmployeeRecord = async (employee) => {
    if (!window.confirm(`Remove ${employee.name} from the directory?`)) return
    try {
      if (apiOnline) await deleteEmployee(employee.id)
    } catch {
      setApiOnline(false)
    }
    setEmployees(employees.filter((item) => item.id !== employee.id))
    setNotice('Employee removed.')
  }

  const openAddEmployee = () => {
    setEmployeeForm(emptyEmployee)
    setEditingId(null)
    setView('employee-form')
    setNotice('')
  }

  const openEditEmployee = (employee) => {
    setEmployeeForm(employee)
    setEditingId(employee.id)
    setView('employee-form')
    setNotice('')
  }

  const goToDashboard = () => {
    setView('dashboard')
    setEditingId(null)
    setEmployeeForm(emptyEmployee)
    setNotice('')
  }

  if (!session) {
    return <LandingPage page={page} form={authForm} notice={notice} onChange={changeAuth} onSubmit={submitAuth} onPageChange={(next) => { setPage(next); setNotice('') }} />
  }

  const admin = session.accessRole === 'admin'
  const visible = employees.filter((item) => `${item.name} ${item.email} ${item.department} ${item.role}`.toLowerCase().includes(query.toLowerCase()))
  const activeCount = employees.filter((item) => item.status === 'Active').length

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(129,140,248,0.12),_transparent_35%),linear-gradient(135deg,_#f8fafc_0%,_#eef2ff_100%)] text-slate-900">
      <Navbar
        user={session}
        onSignOut={() => {
          setSession(null)
          setView('dashboard')
        }}
        onGoDashboard={goToDashboard}
        onAddEmployee={openAddEmployee}
      />

      <main className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-8 sm:px-6 lg:px-8 lg:py-10">
        <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white/90 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.25)]">
          <div className="bg-gradient-to-r from-indigo-700 via-violet-700 to-sky-600 px-6 py-8 text-white sm:px-8 lg:px-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-indigo-100">Employee management hub</p>
                <h1 className="mt-2 text-3xl font-black sm:text-4xl">Welcome back, {session.name.split(' ')[0]}.</h1>
                <p className="mt-3 max-w-2xl text-sm text-indigo-100 sm:text-base">Track departments, manage onboarding, and keep your organization moving with a polished employee directory.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button onClick={goToDashboard} className="rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur">View directory</button>
                {admin && <button onClick={openAddEmployee} className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-indigo-700 shadow-sm">Add new employee</button>}
              </div>
            </div>
          </div>

          <div className="grid gap-4 border-t border-slate-200 bg-slate-50/80 p-6 sm:grid-cols-3 sm:p-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-slate-500">Total employees</p>
              <p className="mt-2 text-2xl font-black text-slate-900">{employees.length}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-slate-500">Active staff</p>
              <p className="mt-2 text-2xl font-black text-emerald-600">{activeCount}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-slate-500">Access level</p>
              <p className="mt-2 text-2xl font-black text-indigo-600">{admin ? 'Admin' : 'Employee'}</p>
            </div>
          </div>
        </section>

        {!apiOnline && <p className="rounded-2xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">Start <span className="font-bold">npm run server</span> to save changes.</p>}

        {notice && <p className="rounded-2xl bg-indigo-50 p-3 text-sm font-medium text-indigo-700">{notice}</p>}

        {view === 'employee-form' ? (
          <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.20)] sm:p-8">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-indigo-600">Employee profile</p>
                <h2 className="mt-2 text-2xl font-black text-slate-900">{editingId ? 'Edit employee details' : 'Create a new employee profile'}</h2>
              </div>
              <button onClick={goToDashboard} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-600">← Back to directory</button>
            </div>
            <EmployeeForm
              form={employeeForm}
              editingId={editingId}
              onChange={changeEmployee}
              onSubmit={submitEmployee}
              onCancel={goToDashboard}
            />
          </section>
        ) : (
          <EmployeeTable
            employees={visible}
            query={query}
            admin={admin}
            onSearch={setQuery}
            onEdit={openEditEmployee}
            onDelete={deleteEmployeeRecord}
          />
        )}
      </main>

      <Footer />
    </div>
  )
}

export default Home
