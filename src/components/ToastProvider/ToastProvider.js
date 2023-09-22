import React from 'react';

export const ToastContext = React.createContext();


function ToastProvider({children}) {


  const [ message, setMessage ] = React.useState('');
  const [ radioValue, setRadioValue ] = React.useState('');

  const toast = {message,setMessage, radioValue, setRadioValue}

  return (
    <ToastContext.Provider
    value={toast}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
