/**
 * Clear a chart
 * @param {HTMLElement} mapViewer 
 */
function clearChart(mapViewer) {
    mapViewer.textContent = "";
    mapObjList = [];
}

/**
 * Redraw a chart
 * @param {string} mapObjList The list of objects in the map
 * @param {HTMLElement} mapViewer The map viewer element
 * @param {number} height Height of the chart as seen in the map viewer 
 * @param {number} BM_DEFAULT_GRID_SIZE
 */
function redrawChart(mapObjList, mapViewer, height, BM_DEFAULT_GRID_SIZE = 128) {
    clearChart(mapViewer);
    drawChart(mapViewer.id, mapObjList, mapViewer.clientWidth, height, BM_DEFAULT_GRID_SIZE);
}

/**
 * Draw a chart
 * @param {string} mapViewerId The id of the map viewer element
 * @param {string} mapObjList The list of objects in the map
 * @param {number} width 
 * @param {number} height
 * @param {number} BM_DEFAULT_GRID_SIZE
 */
function drawChart(mapViewerId, mapObjList, width, height, BM_DEFAULT_GRID_SIZE = 128) {
    const minMaxCoords = new MinMaxCoordinates(mapObjList);
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

    var svg = d3.select(`#${mapViewerId}`).append("svg")
        .attr("width", width)
        .attr("height", height)

    mapObjList.forEach(item => item.drawD3(svg, boxWidth, boxHeight, xScale, yScale));
}