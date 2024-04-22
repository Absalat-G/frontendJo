export const loginValidation = (values) => {
    let errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  
    if (!values.email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailPattern.test(values.email)) {
      errors.email = 'Invalid email format';
    }
  
    if (!values.password.trim()) {
      errors.password = 'Password is required';
    } else if (!passwordPattern.test(values.password)) {
      errors.password = 'Password must be at least 8 characters long and contain at least one digit, one lowercase letter, and one uppercase letter';
    }
  
    return errors;
  };
  