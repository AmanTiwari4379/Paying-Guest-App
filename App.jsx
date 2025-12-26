import { useState } from 'react'
import './App.css'

function App() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [age, setAge] = useState('');
  const [prof, setProf] = useState('');
  const [rent, setRent] = useState('');
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!fname.trim()) newErrors.fname = "First name is required";

    else if (!/^[A-Za-z]+$/.test(fname)) newErrors.fname = "Only alphabet are allowed";

    if (!lname.trim() || !/^[A-Za-z]+$/.test(lname)) newErrors.lname = "Last name is required";

    if (!age || isNaN(age) || age < 18 || age > 60) newErrors.age = "Age must be between 18 and 60";

    if (!prof.trim()) newErrors.prof = "Profession must be required";

    if (!rent || isNaN(rent) || rent < 1000 || rent > 20000) newErrors.rent = "Rent must be between 1000 to 20,000";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  const showData = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const newUsers = { fname, lname, age, prof, rent };
    setUsers([...users, newUsers]);

    setFname('');
    setLname('');
    setAge('');
    setProf('');
    setRent('');
    setErrors({});
  };
  return (
    <div className='min-h-screen bg-gray-100 flex justify-center items-start p-10'>
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h1 className='text-2xl font-bold text-center mb-6'>PG System</h1>
        <form onSubmit={showData} className='space-y-4'>
          <div>
            <label className='block font-medium'>First Name: </label>
            <input type="text" value={fname} onChange={(event) => setFname(event.target.value)} className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            {errors.fname && <p className="text-red-500 text-sm">{errors.fname}</p>}
          </div>
          <div>
            <label className='block font-medium'>Last Name: </label>
            <input type="text" value={lname} onChange={(event) => setLname(event.target.value)} className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500" />
            {errors.lname && <p className="text-red-500 text-sm">{errors.lname}</p>}
          </div>
          <div>
            <label className='block font-medium'>Age: </label>
            <input type="text" value={age} onChange={(event) => setAge(event.target.value)} className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500" />
            {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
          </div>
          <div>
            <label className='block font-medium'>Profession: </label>
            <input type="text" value={prof} onChange={(event) => setProf(event.target.value)} className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500" />
            {errors.prof && <p className="text-red-500 text-sm">{errors.prof}</p>}
          </div>
          <div>
            <label className='block font-medium'>Rent: </label>
            <input type="text" value={rent} onChange={(event) => setRent(event.target.value)} className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500" />
            {errors.rent && <p className="text-red-500 text-sm">{errors.rent}</p>}
          </div>

          <button type='submit' className="w-full bg-violet-700 text-white py-2 rounded-lg hover:bg-violet-800 transition">Add</button>


        </form>
        <div className='mt-6'>
          {
            users.map((user, index) => (
              <div key={index} className='border rounded-lg p-3 mb-3'>
                <p className='font-sm'>{user.fname} {user.lname}</p>
                <p className='font-sm'>Age: {user.age}</p>
                <p className='font-sm'>Profession: {user.prof}</p>
                <p className='font-sm'>Rent: {user.rent}</p>
              </div>
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default App