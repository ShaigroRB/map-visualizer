/**
 * MinMaxCoordinates class: keep all the min and max values
 */
class MinMaxCoordinates {
    /**
     * Constructor of MinMaxCoordinates
     * @param {MapObject[]} listOfCoords 
     */
    constructor(listOfCoords) {
        const firstElement = listOfCoords[0];
        this.minX = firstElement.X;
        this.maxX = firstElement.X;
        this.minY = firstElement.Y;
        this.maxY = firstElement.Y;

        listOfCoords.forEach(elm => {
            this.compareAndSetMinX(elm.X);
            this.compareAndSetMaxX(elm.X);
            this.compareAndSetMinY(elm.Y);
            this.compareAndSetMaxY(elm.Y);
        });
    }

    /**
     * Compare current minX with given one and update it if needed
     * @param {number} minX 
     */
    compareAndSetMinX(minX) {
        if (minX < this.minX) {
            this.minX = minX;
        }
    }

    /**
     * Compare current minY with given one and update it if needed
     * @param {number} minY 
     */
    compareAndSetMinY(minY) {
        if (minY < this.minY) {
            this.minY = minY;
        }
    }

    /**
     * Compare current maxX with given one and update it if needed
     * @param {number} maxX 
     */
    compareAndSetMaxX(maxX) {
        if (maxX > this.maxX) {
            this.maxX = maxX;
        }
    }

    /**
     * Compare current maxY with given one and update it if needed
     * @param {number} maxY 
     */
    compareAndSetMaxY(maxY) {
        if (maxY > this.maxY) {
            this.maxY = maxY;
        }
    }

    /**
     * Correct max X and Y values with the correction
     * @param {number} correction 
     */
    correctMaxXY(correction) {
        this.maxY += correction;
        this.maxX += correction;
    }
}