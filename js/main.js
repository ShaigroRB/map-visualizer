let mapObjList = [];
let currFileContents = [];
let mapData = "";

const detailsMapContainer = document.getElementsByClassName("row-container")[0];
const mapViewer = document.getElementById("map-viewer");

function changeContainerFlexDirection() {
    const isRowContainer = detailsMapContainer.className === "row-container";
    detailsMapContainer.className = isRowContainer ? "column-container" : "row-container";
    document.getElementById("btn-details").innerText = isRowContainer ? "Reduced width" : "Full width";

    mapObjList = getMapObjectsList(mapData)
    redrawChart(mapObjList, mapViewer, 630);
}

function readSingleFile(e) {
    const file = e.target.files[0];
    if (!file) {
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        currFileContents = e.target.result.split('\n');
        mapData = currFileContents[3];
        mapObjList = getMapObjectsList(mapData);

        displayContents(currFileContents);
        redrawChart(mapObjList, mapViewer, 630);
    };
    reader.readAsText(file);
}

function displayContents(lines) {
    let element = document.getElementById('pre-file-content');
    let text = "";
    for (const line in lines) {
        if (line >= 3) {
            // pretty print the json objects
            text += JSON.stringify(JSON.parse(lines[line]), null, 2); + '\n';
        } else {
            text += lines[line] + '\n';
        }
    }
    element.textContent = text;
}

document.getElementById('file-input')
    .addEventListener('change', readSingleFile, false);

/**
 */


}