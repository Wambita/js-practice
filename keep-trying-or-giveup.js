function retry(count, callback){
    return async function(...args){
   
    return new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
            reject(new Error('timeout'))
    }, delay)
    // Execute the async callback
    callback(...args)
    .then((result) => {
      clearTimeout(timeoutId); // Clear timeout if callback resolves
      resolve(result);
    })
    .catch((error) => {
      clearTimeout(timeoutId); // Clear timeout if callback throws an error
      reject(error);
    })
})
}
}