import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

import Toast  from '../Toast';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {

  const [message, setMessage] = React.useState('');
  const [radioValue, setRadioValue] = React.useState('');
  const[showToast, setShowToast] = React.useState(false);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {showToast && (<Toast radioValue={radioValue} setShowToast={setShowToast}>{message}</Toast>)}

      <form
        onSubmit={(event) => {
          event.preventDefault();
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
            <textarea id="message" className={styles.messageInput} value={message}  onChange={(event) => setMessage(event.target.value)} />
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
                checked={radioValue === variant}
                onChange={(event) => setRadioValue(event.target.value)}
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
