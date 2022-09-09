var currentMapData = {}

async function api(request){
    params = request.query

    if ("newMapForLocation" in params){
        return await createNewMap(params)
    }
    
    return "THIS API CALL IS INVALID"
}

async function createNewMap(params){
    let ort = params["newMapForLocation"]
    
    // generates new Keys untill a new one is found 
    let randomKey;
    do {
        randomKey = (Math.random() + 1).toString(36).substring(7);
    } while (randomKey in currentMapData)

    return randomKey
}

module.exports = api;