class LadderMetalObject extends AssetObject {
    constructor(id, name, x, y, objIsTile, objIndexId, depth, logicId) {
        super(id, name, x, y, objIsTile, objIndexId, depth, logicId);
        this.strokeColor = "#00BFF3";
        this.strokeWidth = "2px";
    }

    drawD3(svg, width, height, xScale, yScale) {
        const group = svg.append("g")
            .attr("id", this.ObjID)
            .attr("stroke", this.strokeColor)
            .attr("stroke-width", this.strokeWidth);

        // vertical lines
        group.append("line")
            .attr("x1", xScale(this.X) + (width * 1 / 5))
            .attr("y1", yScale(this.Y))
            .attr("x2", xScale(this.X) + (width * 1 / 5))
            .attr("y2", yScale(this.Y) + height);

        group.append("line")
            .attr("x1", xScale(this.X) + (width * 3 / 5))
            .attr("y1", yScale(this.Y))
            .attr("x2", xScale(this.X) + (width * 3 / 5))
            .attr("y2", yScale(this.Y) + height);

        // horizontal lines
        group.append("line")
            .attr("x1", xScale(this.X) + (width * 1 / 5))
            .attr("y1", yScale(this.Y) + (height * 2 / 5))
            .attr("x2", xScale(this.X) + (width * 3 / 5))
            .attr("y2", yScale(this.Y) + (height * 2 / 5));

        group.append("line")
            .attr("x1", xScale(this.X) + (width * 1 / 5))
            .attr("y1", yScale(this.Y) + (height * 3 / 5))
            .attr("x2", xScale(this.X) + (width * 3 / 5))
            .attr("y2", yScale(this.Y) + (height * 3 / 5));

        group.append("line")
            .attr("x1", xScale(this.X) + (width * 1 / 5))
            .attr("y1", yScale(this.Y) + (height * 4 / 5))
            .attr("x2", xScale(this.X) + (width * 3 / 5))
            .attr("y2", yScale(this.Y) + (height * 4 / 5));
    }
}

class LadderWoodObject extends LadderMetalObject {
    constructor(id, name, x, y, objIsTile, objIndexId, depth, logicId) {
        super(id, name, x, y, objIsTile, objIndexId, depth, logicId);
        this.strokeColor = "#F78E56";
    }
}