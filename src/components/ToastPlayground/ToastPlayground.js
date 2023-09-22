import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

import Toast from '../Toast';

import ToastShelf  from '../ToastShelf';
import { ToastContext } from '../ToastProvider/ToastProvider';




const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function createToast(message, radioValue){
  return <Toast message={message} radioValue={radioValue}></Toast>
}

function ToastPlayground() {
  const {toast} = React.useContext(ToastContext);
  const [ showToast, setShowToast ] = React.useState(false);
  const [ toastCollection , setToastCollection ] = React.useState([]);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

     
      {showToast && (<ToastShelf toastCollection={toastCollection} setToastCollection={setToastCollection}></ToastShelf>)}

      <form
        onSubmit={(event) => {
          event.preventDefault();

          const nextToastCollection = [
            ...toastCollection,
            createToast(toast.message,toast.radioValue)
          ];
          setToastCollection(nextToastCollection);

          const nextMessage = '';
          toast.setMessage(nextMessage);

          const nextRadioValue = 'notice';
          toast.setRadioValue(nextRadioValue);

          setShowToast(true);
        }}
      >
      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} value={toast.message}  onChange={(event) => toast.setMessage(event.target.value)} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
           {VARIANT_OPTIONS.map((variant,index) => {
            const varId = `varId-${variant}`;
            return ( 
            <label htmlFor={varId} key={index}>
              <input
                id={varId}
                type="radio"
                name="variant"
                value={variant}
                checked={toast.radioValue === variant}
                onChange={(event) => toast.setRadioValue(event.target.value)}
              />
              {variant}
            </label>
            );
           })}
          </div>
        </div>
       
        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
