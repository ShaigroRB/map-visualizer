/**
 * Default map object
 */
class MapObject {
    /**
     * Constructor of MapObject
     * @param {number} id 
     * @param {string} name 
     * @param {number} x 
     * @param {number} y 
     * @param {boolean} objIsTile 
     * @param {number} objIndexId 
     * @param {number} depth 
     * @param {number} logicId 
     */
    constructor(id, name, x, y, objIsTile, objIndexId, depth, logicId) {
        this.ID = parseInt(id);
        this.Name = name;
        this.ObjIsTile = (1 == objIsTile);
        this.X = parseInt(x);
        this.Y = parseInt(y);
        this.ObjIndexID = parseInt(objIndexId);
        this.Depth = parseInt(depth);
        this.LogicID = parseInt(logicId);
        const trimmedName = name.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
        this.ObjID = `${id}+${trimmedName}+${objIsTile}+${objIndexId}+${depth}`;

        this.fillColor = "steelblue";
        this.widthCoeff = 1;
        this.heightCoeff = 1;
    }

    /**
     * Sort a list of MapObject by ObjIndexID
     * @param {MapObject[]} list 
     */
    static sortByObjIndexID(list) {
        list.sort((a, b) => {
            if (a.ObjIndexID < b.ObjIndexID) {
                return -1;
            }
            if (a.ObjIndexID > b.ObjIndexID) {
                return 1;
            }
            return 0;
        });
    }

    /**
     * Sort a list of MapObject by depth
     * @param {MapObject[]} list
     * @param {boolean} ascending
     */
    static sortByDepth(list, ascending = true) {
        const asc = ascending ? 1 : -1;
        list.sort((a, b) => {
            if (a.Depth < b.Depth) {
                return (-1 * asc);
            }
            if (a.Depth > b.Depth) {
                return (1 * asc);
            }
            return 0;
        });
    }

    /**
     * Draw this MapObject in the svg using D3
     * @param {} svg 
     */
    drawD3(svg, width, height, xScale, yScale) {
        svg.append("rect")
            .attr("id", this.ObjID)
            .style("fill", this.fillColor)
            .attr("x", xScale(this.X))
            .attr("width", width * this.widthCoeff)
            .attr("y", yScale(this.Y))
            .attr("height", height * this.heightCoeff);
    }
}

/**
 * Get a corresponding MapObject from a given object
 * @param {*} mapObj The object to convert into a MapObject
 * @param {number} gridSize Size of the grid
 */
function getCorrespondingMapObject(mapObj, gridSize) {
    const {
        ID, Name, ObjIsTile,
        X, Y, X1, Y1,
        X2, Y2, X3, Y3,
        ObjIndexID, Depth, LogicID,
        ObjWallWidth, ObjWallHeight
    } = mapObj;

    let result = new MapObject(
        ID, Name,
        X, Y,
        ObjIsTile, ObjIndexID,
        Depth, LogicID
    );

    if (ObjIsTile === '0') {
        const objIndexID = parseInt(ObjIndexID);
        switch (objIndexID) {
            case Assets.BLOCK_1X1:
                result = new BlockObject(
                    ID, Name,
                    X, Y,
                    ObjIsTile, ObjIndexID,
                    Depth, LogicID
                );
                break;
            case Assets.BLOCK_2X2:
                result = new Block2x2Object(
                    ID, Name,
                    X, Y,
                    ObjIsTile, ObjIndexID,
                    Depth, LogicID
                );
                break;
            case Assets.BLOCK_1X4:
                result = new Block1x4Object(
                    ID, Name,
                    X, Y,
                    ObjIsTile, ObjIndexID,
                    Depth, LogicID
                );
                break;
            case Assets.BLOCK_4X1:
                result = new Block4x1Object(
                    ID, Name,
                    X, Y,
                    ObjIsTile, ObjIndexID,
                    Depth, LogicID
                );
                break;
            case Assets.WALL_TOOL:
                result = new WallObject(
                    ID, Name,
                    X, Y,
                    ObjIsTile, ObjIndexID,
                    Depth, LogicID,
                    ObjWallWidth, ObjWallHeight,
                    gridSize
                );
                break;
            case Assets.LAVA:
                result = new LavaObject(
                    ID, Name,
                    X, Y,
                    ObjIsTile, ObjIndexID,
                    Depth, LogicID
                );
                break;
            case Assets.WATER:
                result = new WaterObject(
                    ID, Name,
                    X, Y,
                    ObjIsTile, ObjIndexID,
                    Depth, LogicID
                );
                break;
            case Assets.EMPTY_SEA:
                result = new EmptySeaObject(
                    ID, Name,
                    X, Y,
                    ObjIsTile, ObjIndexID,
                    Depth, LogicID
                );
                break;
            case Assets.WAYPOINT_BLOCK:
                result = new WaypointBlockObject(
                    ID, Name,
                    X, Y,
                    ObjIsTile, ObjIndexID,
                    Depth, LogicID
                );
                break;
            case Assets.TERRAIN:
                result = new TerrainObject(
                    ID, Name,
                    X, Y,
                    ObjIsTile, ObjIndexID,
                    Depth, LogicID
                );
                break;
            case Assets.POLYGON_TOOL:
                result = new PolygonObject(
                    ID, Name,
                    X1, Y1,
                    ObjIsTile, ObjIndexID,
                    Depth, LogicID,
                    X2, Y2,
                    X3, Y3
                );
                break;
            case Assets.RAMP_A:
                result = new RampAObject(
                    ID, Name,
                    X, Y,
                    ObjIsTile, ObjIndexID,
                    Depth, LogicID
                );
                break;
            case Assets.RAMP_B:
                result = new RampBObject(
                    ID, Name,
                    X, Y,
                    ObjIsTile, ObjIndexID,
                    Depth, LogicID
                );
                break;
            case Assets.RAMP_C:
                result = new RampCObject(
                    ID, Name,
                    X, Y,
                    ObjIsTile, ObjIndexID,
                    Depth, LogicID
                );
                break;
            case Assets.RAMP_D:
                result = new RampDObject(
                    ID, Name,
                    X, Y,
                    ObjIsTile, ObjIndexID,
                    Depth, LogicID
                );
                break;
            case Assets.LONG_RAMP_A:
                result = new LongRampAObject(
                    ID, Name,
                    X, Y,
                    ObjIsTile, ObjIndexID,
                    Depth, LogicID
                );
                break;
            case Assets.LONG_RAMP_B:
                result = new LongRampBObject(
                    ID, Name,
                    X, Y,
                    ObjIsTile, ObjIndexID,
                    Depth, LogicID
                );
                break;
            case Assets.LONG_RAMP_C:
                result = new LongRampCObject(
                    ID, Name,
                    X, Y,
                    ObjIsTile, ObjIndexID,
                    Depth, LogicID
                );
                break;
            case Assets.LONG_RAMP_D:
                result = new LongRampDObject(
                    ID, Name,
                    X, Y,
                    ObjIsTile, ObjIndexID,
                    Depth, LogicID
                );
                break;
            default:
                result = new AssetObject(
                    ID, Name,
                    X, Y,
                    ObjIsTile, ObjIndexID,
                    Depth, LogicID
                );
        }
    }
    else {
        // TODO: tiles
    }
    return result;
}