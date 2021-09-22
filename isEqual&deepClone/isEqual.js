const isEqual = (...args) => {
  let result = true;

  if (args.length < 2) {
    throw new Error(
      `isEqual requires at least 2 argument, but only ${args.length} were passed`
    );
  }

  const [object1, object2] = [args[0], args[1]];
  const [typeOfObject1, typeOfObject2] = [
    Object.prototype.toString.call(object1),
    Object.prototype.toString.call(object2)
  ];

  if (typeOfObject1 !== typeOfObject2) {
    result = false;
  } else if (typeOfObject1 === '[object Object]') {
    if (Object.entries(object1).length !== Object.entries(object2).length) {
      result = false;
    } else {
      result = Object.keys(object1).every(element =>
        isEqual(object1[element], object2[element])
      );
    }
  } else if (typeOfObject1 === '[object Array]') {
    if (object1.length !== object2.length) {
      result = false;
    } else {
      result = object1.every((element, index) =>
        isEqual(object1[index], object2[index])
      );
    }
  } else {
    result = Object.is(object1, object2);
  }
  return result;
};

export default isEqual;
