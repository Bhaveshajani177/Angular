var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.add = function (item) {
        this.data.push(item);
    };
    Queue.prototype.remove = function () {
        this.data.shift();
    };
    Queue.prototype.print = function () {
        console.log(this.data);
    };
    return Queue;
}());
// string object
var nameQueue = new Queue();
nameQueue.add("bhavesh");
console.log(nameQueue.print());
// number object
var numberQueue = new Queue();
numberQueue.add(45);
console.log(numberQueue.print());
