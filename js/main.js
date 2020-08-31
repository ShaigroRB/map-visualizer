const BM_DEFAULT_GRID_SIZE = 128;

function readSingleFile(e) {
    const file = e.target.files[0];
    if (!file) {
        return;
    }
    const reader = new FileReader();
    reader.onload = function (e) {
        const contents = e.target.result.split('\n');
        displayContents(contents);
        clearChart();
        drawChart(contents[3], 1000, 400);
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
    var objlist = []
    const obj = JSON.parse(data)
    for (const item in obj) {
        if (item.startsWith('OBJ') && obj[item]['ObjIsTile'] === '1') {
            objlist.push(obj[item])
        }
    }

    const max_x = d3.max(objlist, d => {
        return +d['X']
    })
    const min_x = d3.min(objlist, d => {
        return +d['X']
    })
    const max_y = d3.max(objlist, d => {
        return +d['Y']
    })
    const min_y = d3.min(objlist, d => {
        return +d['Y']
    })

    const boxWidth = width * BM_DEFAULT_GRID_SIZE / (max_x - min_x)
    const boxHeight = height * BM_DEFAULT_GRID_SIZE / (max_y - min_y)

    var xScale = d3.scaleLinear()
        .domain([min_x, max_x])
        .range([0, width])
    var yScale = d3.scaleLinear()
        .domain([min_y, max_y])
        .range([0, height])

    var svg = d3.select("#map-viewer").append("svg")
        .attr("width", width)
        .attr("height", height)

    svg.selectAll("rect")
        .data(objlist)
        .enter()
        .append("rect")
        .style("fill", "steelblue")
        .attr("x", item => xScale(item['X']))
        .attr("width", boxWidth)
        .attr("y", item => yScale(item['Y']))
        .attr("height", boxHeight)
}
