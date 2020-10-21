/**
 * MinMaxCoordinates class: keep all the min and max values
 */
class MinMaxCoordinates {
    /**
     * Constructor of MinMaxCoordinates
     * @param {number} minX 
     * @param {number} maxX 
     * @param {number} minY 
     * @param {number} maxY 
     */
    constructor(minX, maxX, minY, maxY) {
        this.minX = minX;
        this.maxX = maxX;
        this.minY = minY;
        this.maxY = maxY;
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