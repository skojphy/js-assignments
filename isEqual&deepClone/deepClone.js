const deepClone = object => {
  const clonedObject = {};
  const clonedArray = [];
  let cloned;

  if (object === null || typeof object !== 'object') {
    cloned = object;
    console.log('A', cloned, typeof cloned);
  } else if (Array.isArray(object)) {
    object.forEach((element, index) => {
      clonedArray[index] = deepClone(element);
    });
    cloned = clonedArray;
    console.log('B', cloned, typeof cloned);
  } else {
    Object.entries(object).forEach(element => {
      clonedObject[element[0]] = deepClone(element[1]);
    });
    cloned = clonedObject;
    console.log('C', cloned, typeof cloned);
  }

  return cloned;
};

export default deepClone;
