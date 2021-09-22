const deepClone = object => {
  const clonedObject = {};
  const clonedArray = [];
  let cloned;

  if (object === null || typeof object !== 'object') {
    cloned = object;
  } else if (Array.isArray(object)) {
    object.forEach((element, index) => {
      clonedArray[index] = deepClone(element);
    });
    cloned = clonedArray;
  } else {
    Object.entries(object).forEach(element => {
      clonedObject[element[0]] = deepClone(element[1]);
    });
    cloned = clonedObject;
  }

  return cloned;
};

export default deepClone;
