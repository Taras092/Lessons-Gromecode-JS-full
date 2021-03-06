const successRequest = Promise.resolve({ name: "Tom" });

successRequest
    .then(function onSuccess1(data) {
       throw new Error('Error with data');
    })
    .catch(function onError1(error) {
        console.error("onError1", error.message);
    })


const failRequest = Promise.reject(new Error("Something went wrong"));

failRequest
    .catch(function onError2(error) {
        console.error("onError2", error.message);
        throw new Error('Server error');
    })
    .then(function onSuccess2(data) {
        console.log("onSuccess2", data);
    })
    .catch(function onError3(error) {
        console.error("onError3", error.message);
    });

// const successRequest = Promise.resolve({ name:'Tom' });

// successRequest
//   .then(data => {
//     console.log(data);
//     throw new Error('Unexpected error');
//   })
//   .catch(err => {
//     console.log(err.message);
//   })

// const failedRequest = Promise.reject(new Error('Fail'));

// failedRequest
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.warn(err.message);
//     throw err;
//     // return Promise.reject('err');
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.warn(err.message);
//   })

// window.addEventListener('unhandledrejection', function (err) {
//   console.log(err.reason.message);
// });


// fetch('https://api.github.com/users/github')
//     .then(response => {
//       if (response.status === 200) {
//         return response.json();
//       }
//       throw new Error('No data');
//     })
//     .then(data => console.log(data))
//     .catch(err => {
//       debugger;
//       console.log(err);
//     });