const BM_DEFAULT_GRID_SIZE = 128;
let detailsMapContainer = document.getElementsByClassName("row-container")[0];
let currFileContents;

function redrawChart(height) {
    clearChart();
    const widthViewer = document.getElementById("map-viewer").clientWidth;
    drawChart(currFileContents[3], widthViewer, height);
}

function changeContainerFlexDirection() {
    const isRowContainer = detailsMapContainer.className === "row-container";
    detailsMapContainer.className = isRowContainer ? "column-container" : "row-container";
    document.getElementById("btn-details").innerText = isRowContainer ? "Reduced width" : "Full width";
    redrawChart(630);
}

function readSingleFile(e) {
    const file = e.target.files[0];
    if (!file) {
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        currFileContents = e.target.result.split('\n');
        displayContents(currFileContents);
        redrawChart(630);
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

function clearChart() {
    const mapViewer = document.getElementById("map-viewer");
    mapViewer.textContent = "";
}

function drawChart(data, width, height) {
    let mapObjList = [];
    const map = JSON.parse(data)
    for (const item in map) {
        if (item.startsWith('OBJ') && map[item]['ObjIsTile'] === '0') {
            mapObjList.push(MapObject.viewerMapObjectFromObj(map[item]))
        }
    }

    // descending because first drawn objects are hidden by later drawn objects
    MapObject.sortByDepth(mapObjList, false);

    const minMaxCoords = getMinMaxCoordinates(mapObjList);
    minMaxCoords.correctMaxXY(BM_DEFAULT_GRID_SIZE);

    const max_x = minMaxCoords.maxX;
    const max_y = minMaxCoords.maxY;
    const min_x = minMaxCoords.minX;
    const min_y = minMaxCoords.minY;

    const boxWidth = (width * BM_DEFAULT_GRID_SIZE) / (max_x - min_x)
    const boxHeight = (height * BM_DEFAULT_GRID_SIZE) / (max_y - min_y)

    var xScale = d3.scaleLinear()
        .domain([min_x, max_x])
        .range([0, width])
    var yScale = d3.scaleLinear()
        .domain([min_y, max_y])
        .range([0, height])

    var svg = d3.select("#map-viewer").append("svg")
        .attr("width", width)
        .attr("height", height)

    mapObjList.forEach(item => item.drawD3(svg, boxWidth, boxHeight, xScale, yScale));
}

/**
 * Get the min and max values for X and Y
 * @param {MapObject[]} list
 * @returns {MinMaxCoordinates} a MinMaxCoordinates object
 */
function getMinMaxCoordinates(list) {
    let currentElm = list[0];

    const result = new MinMaxCoordinates(currentElm.X, currentElm.X, currentElm.Y, currentElm.Y);

    list.forEach(elm => {
        result.compareAndSetMinX(elm.X);
        result.compareAndSetMaxX(elm.X);
        result.compareAndSetMinY(elm.Y);
        result.compareAndSetMaxY(elm.Y);
    });
    return result;
}