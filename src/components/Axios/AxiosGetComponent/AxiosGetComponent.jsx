import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../ReusableComponent/LoadingSpinner';
import ToastNotification from '../ReusableComponent/ToastNotifcation';

const AxiosGetComponent = () => {

  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toastMessage, setToastMessage] = useState('');
  useEffect(() => {
    
      // show loading spinner and toast message.
      setLoading(true);
      setToastMessage('Fetching data from the API...');

      // Fetch data from the API
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        console.log(response);
        setUserData(response.data);
        setLoading(false);
        setToastMessage('Data fetched successfully');
        setTimeout (() => setToastMessage(''), 3000)
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
        setToastMessage('Failed to fetch data');
        setTimeout (() => setToastMessage(''), 3000)
      })
      
 
  
    
  }, [])
  
  return (
    <div>
      {/* Show the loader if the data is fetch */}
      {loading && <LoadingSpinner />}
      {/* Show the toast message */}
      {toastMessage && <ToastNotification message={toastMessage} />}
      <ul style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0',
        
      }}>
        {userData.map(item => {
          return <li key={item.id} style={{
            listStyle: 'none',
            border: '1px solid #FFFFFF',
            padding: '10px',
            margin: '10px',
            borderRadius: '5px',
            
          }}>
            <h2>{item.id}. {item.name}</h2>
            <p>email: {item.email}</p>
            <p>username: {item.username}</p>
            <p>website: {item.website}</p>
            <ul>
                {Object.entries(item.address).map(([key, value]) => { 
                  // Skip the geo object because it's another nested object
                  if (key === 'geo') return null;

                  // Return the key-value pairs of the address object
                  return <li key={key}>{key}: {value}</li>;
                })}
              </ul>

              {/* Displaying coordinates from the geo object */}
              <p>Coordinates: Lat - {item.address.geo.lat}, Lng - {item.address.geo.lng}</p>
            </li>
        })}
      </ul>

    </div>
  )
}

export default AxiosGetComponent