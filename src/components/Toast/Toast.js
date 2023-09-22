import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';


const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon
};


function Toast({radioValue: Variant = '', setShowToast, children}) {
  const Icon = Variant ? ICONS_BY_VARIANT[Variant] : ICONS_BY_VARIANT['notice'];
  return (
    <div className={`${styles.toast} ${styles[Variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        {children}
      </p>
      <button className={styles.closeButton}>
        <X size={24} onClick={() => {setShowToast(false)}} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
