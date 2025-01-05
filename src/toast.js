export function showToast(type, message, options = {}) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerText = message;
  
    if (options.action) {
      const actionBtn = document.createElement('button');
      actionBtn.innerText = options.action.text || 'Action';
      actionBtn.onclick = options.action.onClick;
      toast.appendChild(actionBtn);
    }
  
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, options.duration || 3000);
  }
  