import React, { useReducer } from 'react';

const initialState = {
  username: '',
  age: '',
  bloodGroup: '',
  address: '',
  phoneNumber: '',
  email: '',
  testType: '',
};

const reducer = (state, { field, value }) => {
  return { ...state, [field]: value };
};

const FormComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data to the server or perform other actions here
    console.log('Form data: ', state);
  };

  return (
    <div className="container">
      <h2 className="py-4 mb-3 text-center">Patient sample collection form</h2>
      <form onSubmit={handleSubmit} id="sample">
        <div className="my-3">
          <label htmlFor="username">Patient name:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={state.username}
            onChange={handleChange}
          />
        </div>
        <div className="my-3">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={state.age}
            onChange={handleChange}
          />
        </div>
        <div className="my-3">
          <label htmlFor="bloodGroup">Blood Group:</label>
          <input
            type="text"
            id="bloodGroup"
            name="bloodGroup"
            value={state.bloodGroup}
            onChange={handleChange}
          />
        </div>
        <div className="my-3">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={state.address}
            onChange={handleChange}
          />
        </div>
        <div className="my-3">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={state.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="my-3">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </div>
        <div className="my-3">
          <label htmlFor="testType">Test Type:</label>
          <select
            id="testType"
            name="testType"
            value={state.testType}
            onChange={handleChange}
          >
            <option value="">Select a test type</option>
            <option value="CBC">CBC</option>
            <option value="RBC">RBC</option>
            <option value="typhoid">Typhoid</option>
            <option value="Malaria">Malaria</option>
            <option value="Dengue">Dengue</option>
            <option value="Fever">Fever</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="mt-3 rounded btn btn-primary px-4">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
