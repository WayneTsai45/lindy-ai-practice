import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import FormInput from './formInput';
const defaultFormFields = {
  name: '',
  email: '',
  message: '',
};
function App() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formFields),
      });
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
      } else {
        alert('Form submission failed.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='App'>
      <h1>Contact Us</h1>
      <FormInput formFields={formFields} setFormFields={setFormFields} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
