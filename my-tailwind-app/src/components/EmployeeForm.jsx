import { Input } from './AuthForm'

function EmployeeForm({ form, editingId, onChange, onSubmit, onCancel }) {
  return <section id="employee-form" className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
    <div className="mb-5 flex items-center justify-between"><div>
      <h2 className="text-xl font-black">{editingId ? 'Edit employee' : 'Add employee'}</h2>
      <p className="text-sm text-slate-500">Create and update employee records.</p>
    </div>{editingId && <button onClick={onCancel} className="text-sm font-bold text-indigo-600">Cancel edit</button>}</div>
    <form onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2 xl:grid-cols-5"><Input label="Full name" value={form.name} onChange={(value) => onChange('name', value)} />
      <Input label="Email" type="email" value={form.email} onChange={(value) => onChange('email', value)} />
      <Select label="Department" value={form.department} options={['Engineering', 'People', 'Sales', 'Marketing', 'Finance', 'Operations']} onChange={(value) => onChange('department', value)} />
      <Input label="Job title" value={form.role} onChange={(value) => onChange('role', value)} />
      <div className="flex items-end gap-2"><select aria-label="Status" value={form.status} onChange={(event) => onChange('status', event.target.value)} className="min-w-0 flex-1 rounded-xl border border-slate-200 px-3 py-3 text-sm outline-none focus:border-indigo-500">
        <option>Active</option>
        <option>On leave</option>
        <option>Inactive</option></select><button className="rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white hover:bg-indigo-700">{editingId ? 'Save' : 'Add'}</button>
      </div>
    </form>
  </section>
}
function Select({ label, value, onChange, options }) { return <label className="block text-sm font-semibold">{label}<select value={value} onChange={(event) => onChange(event.target.value)} className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-indigo-500">{options.map((option) => <option key={option}>{option}</option>)}</select></label> }
export default EmployeeForm
