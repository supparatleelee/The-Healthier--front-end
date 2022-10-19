import { toast } from 'react-toastify';

function toastDisplaySuccess(displayWord) {
  toast(`Success ${displayWord}`, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
}

export default toastDisplaySuccess;
