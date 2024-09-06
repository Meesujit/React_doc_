import React from 'react'

const styles = {
    loaderContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
        height: '100vh',
    },
    spinner: {
        border: '4px solid rgba(0, 0, 0, 0.1)',
        borderLeftColor: '#000',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        animation: 'spin 1s linear infinite',
    }
}

const LoadingSpinner = () => {
  return (
    <div style={styles.loaderContainer}>
        <div style={styles.spinner}>

        </div>

    </div>
  )
}

export default LoadingSpinner