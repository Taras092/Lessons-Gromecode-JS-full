const getUsersBlogs = async (userName) => {
  try {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    if (!response.ok) {
      return null;
    }
    const { blog } = await response.json();
    return blog;
  } catch (err) {
    throw new Error("Failed to fetch user");
  }
};

const asyncUsers = (...users) => {
  const promises = users.map((el) => getUsersBlogs(el));
  return Promise.all(promises);
};

asyncUsers("facebook", "twitter", "linkedin").then((result) =>
  console.log(result)
);

// user.map(el => getUserBlogs(el))
// user.reduce((acc, el) => acc.push(getUserBlogs(el)), [])

// const getUserBlogs1 = async (userName) => {
//   const arr = [];
//   for (let i = 0; i < userName.length; i += 1) {
//     try {
//       const response = await fetch(
//         `https://api.github.com/users/${userName[i]}`
//       );
//       const { blog } = await response.json();
//       arr.push(blog);
//     } catch (err) {
//       throw new Error("Failed to fetch user");
//     }
//   }
//   return arr;
// };

// getUserBlogs1(["facebook", "twitter", "linkedin"]).then((result) =>
//   console.log(result)
// );
