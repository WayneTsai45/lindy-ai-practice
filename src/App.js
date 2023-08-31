import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const defaultFormFields = {
  name: '',
  email: '',
  message: ''
};

function App() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, message } = formFields;

  const handleSubmit = async(event) =>{
    event.preventDefault();
    try{
      const response = await fetch('/api/submit', {
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formFields)
      });
      if(response.ok){
        const responseData = await response.json();
        console.log(responseData);
      }else{
        alert('Form submission failed.');
      }
    }catch(error){
      console.error(error);
    }

  }

  const handleChange = (event) =>{
    const{name,value} = event.target;
    setFormFields({...formFields, [name]: value})
  }

  return (
    <div className='App'>
      <h1>Contact Us</h1>
      <div className='inputContainer'>
        <label>Name</label>
        <input className='nameBox' type='text' required onChange={handleChange} name='name' value={name} />
      </div>
      <div className='inputContainer'>
        <label>Email</label>
        <input className='emailBox' type='email' required onChange={handleChange} name='email' value={email} />
      </div>
      <div className='inputContainer'>
        <label>Message</label>
        <input className='messageBox' type='text' required onChange={handleChange} name='message' value={message} />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
