window.addEventListener("error", function onUnhandledError (err) {
  console.error("error", err.message);
});

let userParsingResult;

try {
  const user = JSON.parse('{"name": "Tom"}');
  console.log("User data: ", user);
  userParsingResult = "success";
} catch(e) {
  userParsingResult = "error";
} finally {
  console.log(`User parsing finished with ${userParsingResult}`);
}

let productParsingResult;

try {
  const product = JSON.parse('{"name": "Tom"');
  console.log("Product data: ", product);
  productParsingResult = "success";
} catch(e) {
  productParsingResult = "error";
} finally {
  console.log(`Product parsing finished with ${productParsingResult}`);
}


///      ////
try {
  const jsonString = '{"name": "Tom"}';
  const userData = JSON.parse(jsonString);
  console.log(userData);
} catch(err) {
  console.log(err.name);
} finally {
  console.log('Some actions');
}


try {
  const jsonString = '{"name": "Tom"';
  throw new ReferenceError();
  const userData = JSON.parse(jsonString);
  console.log(userData);
} catch(err) {
  if (err instanceof SyntaxError) {
    console.log('Handeled');
  } else {
    throw err;
  }
} finally {
  console.log('Some actions');
}
