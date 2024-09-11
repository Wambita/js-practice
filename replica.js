//replica that allows you to deep assign the values of 
//all properties from one or more objects to a target object.

function replica(target, ...args) {
    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }
  
    function isObject(item) {
      return (item && typeof item === 'object' && !Array.isArray(item));
    }
  
    function deepMerge(target, arg) {
      for (const key in arg) {
        if (Object.prototype.hasOwnProperty.call(arg, key)) {
          if (isObject(target[key]) && isObject(arg[key])) {
            deepMerge(target[key], arg[key]);
          } else {
            target[key] = arg[key];
          }
        }
      }
      return target;
    }
  
    for (const arg of args) {
      if (arg != null) {
        deepMerge(target, arg);
      }
    }
  
    return target;
}