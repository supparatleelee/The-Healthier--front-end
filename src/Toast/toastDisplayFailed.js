import { toast } from 'react-toastify';

function toastDisplayFailed(displayWord) {
  toast(`Failed : ${displayWord}`, {
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

export default toastDisplayFailed;
