
function readSingleFile(e) {
    var file = e.target.files[0];
    if (!file) {
      return;
    }
    var reader = new FileReader();
    reader.onload = function(e) {
      var contents = e.target.result;
      displayContents(contents);
      drawChart(contents.split('\n')[3])
    };
    reader.readAsText(file);
}
  
function displayContents(contents) {
    var element = document.getElementById('file-content');
    element.textContent = contents;
}
  
document.getElementById('file-input')
    .addEventListener('change', readSingleFile, false);

function drawChart(data) {
    const width = 1000
    const height = 400
    
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
    const boxWidth = width * 128 / (max_x - min_x)
    const boxHeight = height * 128 / (max_y - min_y)
    var xScale = d3.scaleLinear()
        .domain([min_x, max_x])
        .range([0, width])
    var yScale = d3.scaleLinear()
        .domain([min_y, max_y])
        .range([0, height])
    
    var svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height)
    
    svg.selectAll("rect")
        .data(objlist)
        .enter()
        .append("rect")
        .style("fill", "steelblue")
        .attr("x", x => xScale(x.X))
        .attr("width", boxWidth)
        .attr("y", y => yScale(y.Y))
        .attr("height", boxHeight)
}
