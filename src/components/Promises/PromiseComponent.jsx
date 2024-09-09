import React from 'react'

const PromiseComponent = () => {

    // CASE 1: Promise with resolve and reject

   const promise = new Promise((reslove, reject) => {
        const request = true;
        if(request){
            reslove('Data if fetched successfully');
        }else{
            reject('Data is not fetched');
        }
    }) 
    promise.then((data) => {
        console.log(data)
    }).catch((error) => {
        console.log(error);
    })

    

    // CASE 2: A single promise handles one asynchronous operation. It resolves or rejects based on the outcome of that operation.

   
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error)); 

    

    // CASE 3: Chaining Promises, chaining multiple asychronous operations that depends on the result of the previous operation. { .the() } block return a new promise. 

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(user => {
        console.log(user[0]);
        return fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
    })
    .then(response => response.json())
    .then(posts => console.log(posts))
    .catch(error => console.log(error));


     // CASE 4: Promise.all() method takes an array of promises and resolves when all promises are resolved.It is useful when you need multiple asynchronous tasks to complete before moving forward.

    const fetchUser = fetch('https://jsonplaceholder.typicode.com/users');
     const fetchPost = fetch('https://jsonplaceholder.typicode.com/posts');

     Promise.all([fetchUser, fetchPost])
     .then(([users, posts]) => {
        console.log('Users:', users);
        console.log('Posts:', posts);
     }).catch(error => console.log(error));



     // CASE 5: Promise.race() resolves and reject as soon as one of the promises resolves or rejects. It is useful when you need only the fastest result of multiple promises.

const fetchSlowApi = new Promise((resolve) => {
        setTimeout(() => {
            console.log('Slow API is fetched');
        }, 3000)
     })

     const fetchFastApi = new Promise((resolve) => {
        setTimeout(() => {
            console.log('Fast API is fetched');
        }, 1000)
     })

     Promise.race([fetchSlowApi, fetchFastApi])
     .then(result => console.log(result))
     .catch(error => console.log(error));

    

     // CASE 6: Promise.any() (ES2021) resolves as soon as one of the promises resolves. igonring rejectd promises until at least on fullfills.

 const p1 = Promise.reject('Error from promise 1');
     const p2 = new Promise(
        resolve => setTimeout(() => 
            resolve('Data from Promise 2'), 2000) 
    )
    const p3 = new Promise(
        resolve => setTimeout(() => 
        resolve('Data from Promise 3'), 500)
    )

    Promise.any([p1, p2, p3])
    .then(response => console.log(response)) // Data from promise 3
    .catch(error => console.log('No promises fullfilled', error));



// Promise.allSettled() waits for all promises to settle (either resolved or rejected) and returns an array of objects that indicate the status of each promise. This is useful when you want the results of all promises regardless of whether they were successful or not.


    const promise1 = Promise.resolve('success')
    const promise2 = Promise.reject('error');
    const promise3 = new Promise(
        resolve => setTimeout(() => 
            resolve('success'), 2000)
    )

    Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));


  return (
    <div>
        <h1>Promises</h1>
        <p>Insepect to see the operations</p>
    </div>
  )
}

export default PromiseComponent