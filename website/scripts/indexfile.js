function createNewMap(){
    let ort = document.getElementById("Ort").value
    let response = get("./api?newMapForLocation=" + ort)
    document.getElementById("createMapForm").remove()
    document.getElementById("createMap").appendChild(stringToEl(
        `
        <div>
            <p>Ort: ${ort}</p>
            <p>Key: ${response}</p>
            <span>Link: <a href="${location.origin + "/map?key=" + response}">${location.origin + "/map?key=" + response}</a></span>
        </div>
        `
    ))
}