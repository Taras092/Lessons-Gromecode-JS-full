const parseUser = (string) => {
  try {
    const userData = JSON.parse(string);
    return console.log(userData);
  } catch(e) {
    const result = null;
    return console.log(result);
  }
}

const str = JSON.stringify('There is string');
const string = 'taras';

parseUser(string);