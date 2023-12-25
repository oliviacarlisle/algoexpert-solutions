class MinMaxStack {

    constructor() {
      this.stack = [];
      this.minMaxStack = [];
    }
    
    peek() {
      return this.stack[this.stack.length - 1];
    }
  
    pop() {
      this.minMaxStack.pop();
      return this.stack.pop();
    }
  
    push(number) {
      const len = this.stack.length;
      if (!len) {
        this.minMaxStack.push([number, number]);
      } else {
        const lastMin = this.minMaxStack[len - 1][0];
        const lastMax = this.minMaxStack[len - 1][1];
        const newMin = Math.min(number, lastMin);
        const newMax = Math.max(number, lastMax);
        this.minMaxStack.push([newMin, newMax]);
      }
      
      this.stack.push(number);
    }
  
    getMin() {
      const len = this.stack.length;
      return this.minMaxStack[len - 1][0];
    }
  
    getMax() {
      const len = this.stack.length;
      return this.minMaxStack[len - 1][1];
    }
}