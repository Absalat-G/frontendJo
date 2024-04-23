import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavigationMenu from './NavigationMenu';

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));

    
    if (name === 'confirmPassword') {
     
      if (value === formData.password) {
        setErrors(prevErrors => ({
          ...prevErrors,
          confirmPassword: ''
        }));
      } else {
        
        setErrors(prevErrors => ({
          ...prevErrors,
          confirmPassword: 'Passwords do not match'
        }));
      }
    } else {
      
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateFormData(formData);
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);
      axios.post('https://jollofsummit-df2363f7dc94.herokuapp.com/register', formData)
        .then(res => navigate('/login'))
        .catch(err => console.log(err));
    } else {
      setErrors(validationErrors);
    }
  };

  const validateFormData = (data) => {
    let errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    

    if (!data.firstName.trim()) {
      errors.firstName = 'First Name is required';
    }

    if (!data.lastName.trim()) {
      errors.lastName = 'Last Name is required';
    }

    if (!data.username.trim()) {
      errors.username = 'Username is required';
    }

    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailPattern.test(data.email)) {
      errors.email = 'Invalid email format';
    }

    if (!data.password.trim()) {
      errors.password = 'Password is required';
    } 
    // else if (!passwordPattern.test(data.password)) {
    //   errors.password = 'Password must be at least 8 characters long and contain at least one digit, one lowercase letter, and one uppercase letter';
    // }

    if (!data.confirmPassword.trim()) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (!data.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone Number is required';
    }

    return errors;
  };

  const passwordRequirements = [
    '* Password must contain at least one digit',
    '* Password must contain at least one lowercase letter',
    '* Password must contain at least one uppercase letter',
    '* Password must contain at least one special character',
    '* Password must be at least 8 characters long'
  
  ];

  const isPasswordValid = (password) => {
    return [
        /^(?=.*\d)/.test(password),
        /^(?=.*[a-z])/.test(password),
        /^(?=.*[A-Z])/.test(password),
        /^(?=.*[@$!%*?&])/.test(password), 
        password.length >= 8
    ];
};


  return (
    <div className="relative flex flex-col bg-black items-center justify-center min-h-screen">
      <NavigationMenu />
      <div className="z-10 relative"> 
        <form className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-12 mt-24" onSubmit={handleSubmit}>
          
          <h2 className="text-3xl text-black font-bold mb-4 text-center">Register</h2>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
              <label htmlFor="firstName" className="block text-gray-900">First Name</label>
              <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-3 py-2 mt-1 text-gray-700 border border-slate-400 rounded-md focus:outline-none focus:ring focus:ring-indigo-500" />
              {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label htmlFor="lastName" className="block text-gray-900">Last Name</label>
              <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-3 py-2 mt-1 text-gray-700 border border-slate-400 rounded-md focus:outline-none focus:ring focus:ring-indigo-500" />
              {errors.lastName && <span className="text-red-500">{errors.lastName}</span>}
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-900">Username</label>
            <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="w-full px-3 py-2 mt-1 text-gray-700 border border-slate-400 rounded-md focus:outline-none focus:ring focus:ring-indigo-500" />
            {errors.username && <span className="text-red-500">{errors.username}</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-900">Phone Number</label>
            <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full px-3 py-2 mt-1 text-gray-700 border border-slate-400 rounded-md focus:outline-none focus:ring focus:ring-indigo-500" />
            {errors.phoneNumber && <span className="text-red-500">{errors.phoneNumber}</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-900">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 mt-1 text-gray-700 border border-slate-400 rounded-md focus:outline-none focus:ring focus:ring-indigo-500" />
            {errors.email && <span className="text-red-500">{errors.email}</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-900">Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="w-full px-3 py-2 mt-1 text-gray-700 border border-slate-400 rounded-md focus:outline-none focus:ring focus:ring-indigo-500" />
            <ul className="text-gray-500">
              {passwordRequirements.map((requirement, index) => (
                <li key={index} className={isPasswordValid(formData.password)[index] ? "text-green-500" : "text-red-500"}>{requirement}</li>
              ))}
            </ul>
            {errors.password && <span className="text-red-500">{errors.password}</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-900">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full px-3 py-2 mt-1 text-gray-700 border border-slate-400 rounded-md focus:outline-none focus:ring focus:ring-indigo-500" />
            {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword}</span>}
          </div>
        
          <button type="submit" className="w-full px-4 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600">Register</button>
          <p className='text-center'>Already have an account? <Link to="/login" className='text-blue-600 hover:underline'>Login here</Link></p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
