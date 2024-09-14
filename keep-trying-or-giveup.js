function retry(count, callback){
    return async function(...args){
    let attempts = 0

    while(attempts <= count){
        try{
            return await callback(...args)
        } catch(error){
            attempts++
            if(attempts > count){
                throw new Error('timeout')            }
        }
    }
}
}
function timeout(delay, callback) {
    return async function (...args) {
      // Create a promise that rejects after the specified delay
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('timeout')), delay)
      );
  
      // Race between the timeout promise and the callback promise
      return Promise.race([
        timeoutPromise,
        callback(...args)
      ]);
    };
  }
  