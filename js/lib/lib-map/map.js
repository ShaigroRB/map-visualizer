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
    }

    /**
     * Create a MapObject from an object of a BM map
     * @param {} mapObj 
     */
    static viewerMapObjectFromObj(mapObj) {
        let x;
        let y;
        if (mapObj.ObjIndexID == 6) {
            x = mapObj.X1;
            y = mapObj.Y1;
        } else {
            x = mapObj.X;
            y = mapObj.Y;
        }
        return new MapObject(
            mapObj.ID, mapObj.Name,
            x, y,
            mapObj.ObjIsTile, mapObj.ObjIndexID,
            mapObj.Depth, mapObj.LogicID,
        );
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
            .style("fill", "steelblue")
            .attr("x", xScale(this.X))
            .attr("width", width)
            .attr("y", yScale(this.Y))
            .attr("height", height);
    }
}