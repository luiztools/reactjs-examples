export default class Point {
    constructor(timestamp, value) {
        this.x = new Date(timestamp);
        this.y = parseFloat(value);
    }
}