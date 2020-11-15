class QueueWithStacks {
  constructor() {
    this.in = [];
    this.out = [];
  }

  enqueue(val) {
    this.in.push(val);
  }

  dequeue() {
    if (!this.out.length) {
      while (this.in.length) {
        const last = this.in.pop();
        this.out.push(last);
      }
    }
    return this.out.pop();
  }

  dequeue() {
    if (!this.out.length) {
      while (this.in.length) {
        const last = this.in.pop();
        this.out.push(last);
      }
    }
    return this.out[this.out.length - 1];
  }

  empty() {
    return !this.in.length && !this.out.length;
  }
}
