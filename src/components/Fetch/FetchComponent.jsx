import React, { useEffect, useState } from 'react'

const FetchComponent = () => {
    const [post, setPost] = useState([]);
    
    const url = 'https://jsonplaceholder.typicode.com/posts'

    useEffect(() => {
        fetch(`${url}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setPost(data);
            console.log('data is fetched');
        })
        .catch((error) => {
            console.log('Error: GET request failed', error);
        })

    }, [])

    // Method: Post
    const handleCreateUser = () => {
        const newPost = {
            userId: 101,
            id: 101,
            title: "this new title",
            body: "this is new body",
    
        }
        fetch(`${url}`,{
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: {
                'Content-type': 'application/json; chartset=UTF-8'
            }
    
        })
        .then(response => response.json())
        .then((data) =>{
            console.log(data);
            console.log('data is created');

        })
        .catch((error) => {
            console.log('Error: POST request failed', error);
        } )

    }

    // Method: Put
    const handleUpdateUser = () => {
        
        fetch(`${url}/1`, {
            method: 'PUT',
            body: JSON.stringify({
                id: 1,
                title: 'foo',
                body: 'bar',
                userId: 1,
              }),
            headers: {
                'Content-type': 'application/json; chartset=UTF-8'
            }
        })
        .then((response) => response.json())
        .then(data =>{
            console.log(data);
            console.log('data is updated');
        })
        .catch((error) => {
            console.log('Error: PUT request failed', error);
        })
    }
    
    const handleUpdateSingleUser = () => {
       
        fetch(`${url}/1`, {
            method: 'PATCH',
            body: JSON.stringify({
                title: 'Title is Updated.'
            }),
            headers: {
                'Content-type': 'application/json; chartset=UTF-8'
            }
        })
        .then((response) => response.json())
        .then(data => {
            console.log(data);
            console.log('single data is updated');
        })
        .catch((error) => {
            console.log('Error: PATCH request failed', error);
        })
    }

    const handleDeleteUser = async () => {
        await fetch(`${url}/1`, {
            method: 'DELETE'
        })
        .then((response) => response.json())
        .then(data => {
            console.log(data);
            console.log('data is deleted');
        })
        .catch((error) => {
            console.log('Error: DELETE request failed', error);
        })
    }


  return (
    <>
    
    <div>
        <h1>Fetch Component</h1>
        {post.slice(0,4).map((item) => {
            return <div key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
            </div>
        })}
    </div>

    <div className="">
       <h2>Create user using fetch post</h2> 
        <button onClick={handleCreateUser}>Create User</button>
    </div>

    <div className="">
        <h2>Updating The Data of Post using PUT</h2>
        <button onClick={handleUpdateUser}>Update</button>
    </div>

    <div>
        <h2>Update Single User </h2>
        <button onClick={handleUpdateSingleUser}>
            Update Single User
        </button>
    </div>

    <div>
        <h2>DELETE User: </h2>
        <button onClick={handleDeleteUser}>
            Delete User
        </button>
    </div>
</>
  )
}

export default FetchComponent