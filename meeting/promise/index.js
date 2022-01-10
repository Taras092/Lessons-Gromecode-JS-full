// input: obj
// output: underfined

const saveUser = userData => {
  // input: url
  // output: promise
const httppromise = fetch("https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

    // input: callback
      // --- input: promise result
      // --- output: Random
    // otput: promise
  httppromise.then(response =>  response.json())
  .then(res => console.log(res))
};


const user = {
  email: "test@gmail.com",
  userName: "Taras",
  password: "ttttttttt",
};

saveUser(user);