var currentMapData = {}

async function api(request){
    params = request.query

    if ("newMapForLocation" in params){
        return await createNewMap(params["newMapForLocation"])
    }

    if ("getMapDataFromKey" in params) {
        return await getMapData(params["getMapDataFromKey"])
    }
    
    return "THIS API CALL IS INVALID"
}

async function createNewMap(ort){    
    // generates new Keys untill a new one is found 
    let randomKey;
    do {
        randomKey = (Math.random() + 1).toString(36).substring(7);
    } while (randomKey in currentMapData)

    currentMapData[randomKey] = {"ort": ort, "data": {}}

    console.log(currentMapData)

    return randomKey
}

async function getMapData(key){
    if (key in currentMapData){
        return currentMapData[key]
    }
    return {"ort": "there is no map"}
}

async function addMapData(request){
    
}

module.exports = api;