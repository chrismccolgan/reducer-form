import React, { useReducer } from 'react';
import Input from './Input';

const initialForm = {
  username: {
    label: 'Username',
    value: '',
  },
  email: {
    label: 'Email',
    value: '',
  },
  password: {
    label: 'Password',
    value: '',
  },
};

const formReducer = (prevState, action) => {
  if (action.type === 'INPUT') {
    const updatedElement = { ...prevState[action.key] };
    updatedElement.value = action.value;
    return { ...prevState, [action.key]: updatedElement };
  } else {
    return;
  }
};

const Form = () => {
  const [state, dispatch] = useReducer(formReducer, initialForm);

  const handleInputChange = (event, key) => {
    dispatch({
      type: 'INPUT',
      key,
      value: event.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(state);
  };

  return (
    <>
      <form>
        {Object.keys(state).map((key) => (
          <Input
            changed={(event) => handleInputChange(event, key)}
            key={key}
            id={key}
            value={state[key].value}
            label={state[key].label}
          />
        ))}
      </form>
      <button onClick={handleSubmit}>Click</button>
    </>
  );
};

export default Form;
