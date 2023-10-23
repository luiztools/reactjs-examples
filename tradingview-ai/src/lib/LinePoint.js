export default class LinePoint {
    constructor(timestamp, value) {
        this.x = new Date(timestamp);
        this.y = parseFloat(value);
    }
}