
const FormInput = ({formFields, setFormFields}) => {
  const labels = ['Name', 'Email', 'Message'];
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      {labels.map((label) => (
        <div key={label} className='inputContainer'>
          <label>{label}</label>
          <input
            className={`${
              label === 'Name'
                ? 'nameBox'
                : label === 'Email'
                ? 'emailBox'
                : 'messageBox'
            }`}
            type='text'
            required
            onChange={handleChange}
            name={label.toLowerCase()}
            value={formFields[label.toLowerCase()]}
          />
        </div>
      ))}
    </div>
  );
};

export default FormInput;
