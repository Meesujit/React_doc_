import React from 'react'

const styles = {
    toast: {
      position: 'fixed',
      top: '20px',
      right: '20px',
      padding: '10px 20px',
      backgroundColor: '#333',
      color: '#fff',
      borderRadius: '5px',
      zIndex: 1000,
    },
  };

const ToastNotification = ({message}) => {
  return (
    <div style={styles.toast}>
        {message}
    </div>
  )
}

export default ToastNotification