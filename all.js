// all that works like Promise.all but with objects (instead of arrays).

async function all(promises){
    if(!promises) return {}
        let obj = new Object
        let err 
        for(const [k,v] of Object.entries(promises)){
            if(typeof v != 'object'){
                obj[k] = v
                continue
            }
            await value.then(res => obj[k] = res).catch((error) => err = error)
        }
            if(err) throw err
            return obj
}

//Promise.all = undefined