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