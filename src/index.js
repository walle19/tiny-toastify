import './styles.css';
import { showToast } from './toast';

const toast = {
  success: (message) => showToast('success', message),
  error: (message) => showToast('error', message),
  info: (message) => showToast('info', message),
  warning: (message) => showToast('warning', message),
  show: (options) => showToast(options.type || 'info', options.message, options),
};

export default toast;
