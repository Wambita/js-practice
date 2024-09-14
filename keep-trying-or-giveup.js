function timeout(delay, callback) {
    return async function (...args) {
      // Create a race between the callback and a timeout promise
      return new Promise((resolve, reject) => {
        // Set a timeout to reject the promise if the callback takes too long
        const timeoutId = setTimeout(() => {
          reject(new Error('timeout'));
        }, delay);
  
        // Execute the async callback
        callback(...args)
          .then((result) => {
            clearTimeout(timeoutId); // Clear timeout if callback resolves
            resolve(result);
          })
          .catch((error) => {
            clearTimeout(timeoutId); // Clear timeout if callback throws an error
            reject(error);
          });
      });
    };
  }