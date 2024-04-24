import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import axios from 'axios';
import NavigationMenu from './NavigationMenu';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('https://jollofsummit-df2363f7dc94.herokuapp.com/login', credentials);
  //     console.log(response.data);
     
  //     window.location.href = '/dashboard';
  //   } catch (error) {
  //     setError('Invalid email or password');
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://jollofsummit-df2363f7dc94.herokuapp.com/login', credentials);
      const { token } = response.data; 
      localStorage.setItem('token', token); 
      history.push('/dashboard'); 
    } catch (error) {
      setError('Invalid email or password');
    }
  };
  

  return (
    <div className="flex justify-center items-center bg-black h-screen">
      
      <div className="absolute top-0 left-0 right-0 z-50">
        <NavigationMenu />
      </div>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-800 text-sm font-bold mb-2">Email</label>
          <input type="email" id="email" name="email" value={credentials.email} onChange={handleChange} className="w-full px-3 py-2 mt-1 text-gray-800 border border-slate-400 rounded-md focus:outline-none focus:ring focus:ring-indigo-500" required />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-800 text-sm font-bold mb-2">Password</label>
          <input type="password" id="password" name="password" value={credentials.password} onChange={handleChange} className="w-full px-3 py-2 mt-1 text-gray-800 border border-slate-400 rounded-md focus:outline-none focus:ring focus:ring-indigo-500" required />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button type="submit" className="w-full px-4 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600">Login</button>
        <p>Don't have an account? <Link to="/RegistrationPage" className='text-blue-600 hover:underline'>Register here</Link></p>
      </form>
  
    </div>
  );
};

export default Login;
