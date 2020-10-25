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

class TerrainObject extends BlockObject {
    constructor(id, name, x, y, objIsTile, objIndexId, depth, logicId) {
        super(id, name, x, y, objIsTile, objIndexId, depth, logicId);
        this.widthCoeff = 4;
        this.heightCoeff = 2;
        this.fillColor = "#431803";
    }
}

class PolygonObject extends BlockObject {
    constructor(id, name, x, y, objIsTile, objIndexId, depth, logicId, x2, y2, x3, y3) {
        super(id, name, x, y, objIsTile, objIndexId, depth, logicId);
        this.X2 = x2;
        this.Y2 = y2;
        this.X3 = x3;
        this.Y3 = y3;
    }

    drawD3(svg, _, __, xScale, yScale) {
        const points =
            `${xScale(this.X)},${yScale(this.Y)} `
            + `${xScale(this.X2)},${yScale(this.Y2)} `
            + `${xScale(this.X3)},${yScale(this.Y3)}`;
        svg.append("polygon")
            .attr("id", this.ObjID)
            .style("fill", this.fillColor)
            .attr("points", points);
    }
}

class RampAObject extends BlockObject {
    constructor(id, name, x, y, objIsTile, objIndexId, depth, logicId) {
        super(id, name, x, y, objIsTile, objIndexId, depth, logicId);
    }

    drawD3(svg, width, height, xScale, yScale) {
        const points =
            `${xScale(this.X) + width},${yScale(this.Y)} `
            + `${xScale(this.X)},${yScale(this.Y) + height} `
            + `${xScale(this.X) + width},${yScale(this.Y) + height}`;
        svg.append("polygon")
            .attr("id", this.ObjID)
            .style("fill", this.fillColor)
            .attr("points", points);
    }
}

class RampBObject extends BlockObject {
    constructor(id, name, x, y, objIsTile, objIndexId, depth, logicId) {
        super(id, name, x, y, objIsTile, objIndexId, depth, logicId);
    }

    drawD3(svg, width, height, xScale, yScale) {
        const points =
            `${xScale(this.X)},${yScale(this.Y)} `
            + `${xScale(this.X)},${yScale(this.Y) + height} `
            + `${xScale(this.X) + width},${yScale(this.Y) + height}`;
        svg.append("polygon")
            .attr("id", this.ObjID)
            .style("fill", this.fillColor)
            .attr("points", points);
    }
}

class RampCObject extends BlockObject {
    constructor(id, name, x, y, objIsTile, objIndexId, depth, logicId) {
        super(id, name, x, y, objIsTile, objIndexId, depth, logicId);
    }

    drawD3(svg, width, height, xScale, yScale) {
        const points =
            `${xScale(this.X)},${yScale(this.Y)} `
            + `${xScale(this.X) + width},${yScale(this.Y)} `
            + `${xScale(this.X) + width},${yScale(this.Y) + height}`;
        svg.append("polygon")
            .attr("id", this.ObjID)
            .style("fill", this.fillColor)
            .attr("points", points);
    }
}

class RampDObject extends BlockObject {
    constructor(id, name, x, y, objIsTile, objIndexId, depth, logicId) {
        super(id, name, x, y, objIsTile, objIndexId, depth, logicId);
    }

    drawD3(svg, width, height, xScale, yScale) {
        const points =
            `${xScale(this.X)},${yScale(this.Y)} `
            + `${xScale(this.X) + width},${yScale(this.Y)} `
            + `${xScale(this.X)},${yScale(this.Y) + height}`;
        svg.append("polygon")
            .attr("id", this.ObjID)
            .style("fill", this.fillColor)
            .attr("points", points);
    }
}