async function getJson(path, params){
    let formatpar = ""
    for (const [k, v] of Object.entries(params)) {
        formatpar += `${k}=${v}&`.replaceAll(" ", "+")
    }
    let url  = `${path}?${formatpar.slice(0, -1)}`

    return await fetch(url).then(response => {
        if(!response.ok) throw new Error(response.statusText)
            return response.json()
    
    }).then(json => {
        if(json["data"])return json["data"]
        if(json["error"]) throw new Error(json["error"])
    })
    }
