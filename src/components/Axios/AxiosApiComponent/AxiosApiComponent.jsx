import React, { useEffect, useState } from 'react'
import axios from 'axios'

import ToastNotification from '../ReusableComponent/ToastNotifcation'

// MODEL: User (Schema)

const AxiosApiComponent = () => {
    const [userData, setUserData] = useState([]);
    const [singleUser, setSingleUser] = useState(null);
    const [toastMessage, setToastMessage] = useState('');
  
    // Function to handle success messages
    const handleSuccess = (message) => {
      setToastMessage(message);
      setTimeout(() => setToastMessage(''), 3000); // Hide after 3 seconds
    };
  
    // GET: Fetch all users
    const handleGetUsers = () => {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          setUserData(response.data);
          handleSuccess('Fetched all users successfully!');
        })
        .catch(error => console.error('GET Error:', error));
    };
  
    // GET: Fetch single user by ID
    const handleGetUserById = (id) => {
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
          setSingleUser(response.data);
          handleSuccess(`Fetched user with ID ${id} successfully!`);
        })
        .catch(error => console.error('GET Error:', error));
    };
  
    // POST: Create a new user
    const handleCreateUser = () => {
      const newUser = {
        name: 'New User',
        email: 'newuser@example.com',
        username: 'newuser',
      };
      axios.post('https://jsonplaceholder.typicode.com/users', newUser)
        .then(response => {
          console.log('POST Response:', response);
          handleSuccess('User created successfully!');
        })
        .catch(error => console.error('POST Error:', error));
    };
  
    // PUT: Update an existing user by replacing data (user ID: 1 as an example)
    const handleUpdateUser = (id) => {
      const updatedUser = {
        name: 'Updated User',
        email: 'updateduser@example.com',
        username: 'updateduser',
      };
      axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updatedUser)
        .then(response => {
          console.log('PUT Response:', response);
          handleSuccess(`User with ID ${id} updated successfully!`);
        })
        .catch(error => console.error('PUT Error:', error));
    };
  
    // PATCH: Update specific fields of a user (user ID: 1 as an example)
    const handlePatchUser = (id) => {
      const patchedData = {
        email: 'patcheduser@example.com'
      };
      axios.patch(`https://jsonplaceholder.typicode.com/users/${id}`, patchedData)
        .then(response => {
          console.log('PATCH Response:', response);
          handleSuccess(`User with ID ${id} partially updated successfully!`);
        })
        .catch(error => console.error('PATCH Error:', error));
    };
  
    // DELETE: Delete a user by ID (user ID: 1 as an example)
    const handleDeleteUser = (id) => {
      axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
          console.log('DELETE Response:', response);
          handleSuccess(`User with ID ${id} deleted successfully!`);
        })
        .catch(error => console.error('DELETE Error:', error));
    };
  
    return (
      <div>
        <h2>Axios CRUD Example</h2>
        {toastMessage && <ToastNotification message={toastMessage} />} {/* Toast notification for feedback */}
        
        {/* Buttons for CRUD operations */}
        <div style={{ marginBottom: '20px' }}>
          <button onClick={handleGetUsers}>GET All Users</button>
          <button onClick={() => handleGetUserById(1)}>GET User by ID</button>
          <button onClick={handleCreateUser}>POST Create User</button>
          <button onClick={() => handleUpdateUser(1)}>PUT Update User</button>
          <button onClick={() => handlePatchUser(1)}>PATCH User (Partial Update)</button>
          <button onClick={() => handleDeleteUser(1)}>DELETE User</button>
        </div>
  
        {/* Display users list */}
        {userData.length > 0 && (
          <ul>
            {userData.map(user => (
              <li key={user.id}>{user.name} - {user.email}</li>
            ))}
          </ul>
        )}
  
        {/* Display single user */}
        {singleUser && (
          <div>
            <h3>Fetched User</h3>
            <p>ID: {singleUser.id}</p>
            <p>Name: {singleUser.name}</p>
            <p>Email: {singleUser.email}</p>
            <p>Username: {singleUser.username}</p>
          </div>
        )}
      </div>
    );
  };

export default AxiosApiComponent


