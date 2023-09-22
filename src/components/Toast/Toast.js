import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
} from 'react-feather';



import styles from './Toast.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon
};

function Toast() {
  const {toast} = React.useContext(ToastContext);
  const Icon = toast.radioValue ? ICONS_BY_VARIANT[toast.radioValue] : ICONS_BY_VARIANT['notice'];

  return (
    <div className={`${styles.toast} ${styles[toast.radioValue]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        {toast.message}
      </p>
    </div>
  );
}

export default Toast;
