import React from 'react';

import styles from './ToastShelf.module.css';

import VisuallyHidden from "../VisuallyHidden";

import { X } from "react-feather";

function ToastShelf({ toastCollection, setToastCollection }) {

  function removeToast(index) {
    const nextToastCollection = [...toastCollection];
    nextToastCollection.splice(index, 1);
    setToastCollection(nextToastCollection);
  }

  return (
    <ol className={styles.wrapper}>
     {toastCollection.map((toast, index) => {
        return (
          <li className={styles.toastWrapper} key={Math.random()}>
            {toast}
            <button className={styles.closeButton}>
              <X size={24} color={"black"} onClick={() => removeToast(index)} />
              <VisuallyHidden>Dismiss message</VisuallyHidden>
            </button>
          </li>
        );
      })}
    </ol>
  );
}


export default React.memo(ToastShelf);
