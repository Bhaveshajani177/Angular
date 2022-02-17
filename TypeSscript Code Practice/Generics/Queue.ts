class Queue<T> {
  private data: T[] = [];

  add(item: T) {
    this.data.push(item);
  }

  remove() {
    this.data.shift();
  }

  print() {
    console.log(this.data);
  }
}

// string object
const nameQueue = new Queue<string>();
nameQueue.add("bhavesh");
console.log(nameQueue.print());

// number object
const numberQueue = new Queue<number>();
numberQueue.add(45);
console.log(numberQueue.print());
