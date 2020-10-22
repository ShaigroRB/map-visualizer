class BlockObject extends AssetObject {
    constructor(id, name, x, y, objIsTile, objIndexId, depth, logicId) {
        super(id, name, x, y, objIsTile, objIndexId, depth, logicId);
        this.fillColor = "black";
    }
}

class Block2x2Object extends BlockObject {
    constructor(id, name, x, y, objIsTile, objIndexId, depth, logicId) {
        super(id, name, x, y, objIsTile, objIndexId, depth, logicId);
        this.widthCoeff = 2;
        this.heightCoeff = 2;
    }
}

class Block4x1Object extends BlockObject {
    constructor(id, name, x, y, objIsTile, objIndexId, depth, logicId) {
        super(id, name, x, y, objIsTile, objIndexId, depth, logicId);
        this.widthCoeff = 4;
    }
}

class Block1x4Object extends BlockObject {
    constructor(id, name, x, y, objIsTile, objIndexId, depth, logicId) {
        super(id, name, x, y, objIsTile, objIndexId, depth, logicId);
        this.heightCoeff = 4;
    }
}

class WallObject extends BlockObject {
    constructor(id, name, x, y, objIsTile, objIndexId, depth, logicId, objWallWidth, objWallHeight, gridSize) {
        super(id, name, x, y, objIsTile, objIndexId, depth, logicId);
        this.widthCoeff = parseInt(objWallWidth) / gridSize;
        this.heightCoeff = parseInt(objWallHeight) / gridSize;
    }
}

class LavaObject extends BlockObject {
    constructor(id, name, x, y, objIsTile, objIndexId, depth, logicId) {
        super(id, name, x, y, objIsTile, objIndexId, depth, logicId);
        this.fillColor = "#EE5A1C";
    }
}

class WaterObject extends BlockObject {
    constructor(id, name, x, y, objIsTile, objIndexId, depth, logicId) {
        super(id, name, x, y, objIsTile, objIndexId, depth, logicId);
        this.fillColor = "#24859F";
    }
}

class EmptySeaObject extends BlockObject {
    constructor(id, name, x, y, objIsTile, objIndexId, depth, logicId) {
        super(id, name, x, y, objIsTile, objIndexId, depth, logicId);
        this.X += 2;
        this.Y += 2;
        this.widthCoeff = 0.94;
        this.heightCoeff = 0.94;
        this.fillColor = "none";
        this.strokeColor = "#FF00FF";
        this.strokeWidth = "2px";
    }

    drawD3(svg, width, height, xScale, yScale) {
        svg.append("rect")
            .attr("id", this.ObjID)
            .style("fill", this.fillColor)
            .style("stroke", this.strokeColor)
            .style("stroke-width", this.strokeWidth)
            .attr("x", xScale(this.X))
            .attr("width", width * this.widthCoeff)
            .attr("y", yScale(this.Y))
            .attr("height", height * this.heightCoeff);
    }
}

class WaypointBlockObject extends EmptySeaObject {
    constructor(id, name, x, y, objIsTile, objIndexId, depth, logicId) {
        super(id, name, x, y, objIsTile, objIndexId, depth, logicId);
        this.fillColor = "#F16EAA";
        this.strokeColor = "#EE1C24";
    }
}