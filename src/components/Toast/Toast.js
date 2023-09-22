import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
} from 'react-feather';



import styles from './Toast.module.css';


const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon
};


function Toast({radioValue: Variant = '',  message}) {
  const Icon = Variant ? ICONS_BY_VARIANT[Variant] : ICONS_BY_VARIANT['notice'];
  return (
    <div className={`${styles.toast} ${styles[Variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        {message}
      </p>
    </div>
  );
}

export default Toast;
