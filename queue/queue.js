class Queue{
    constructor(size){
        this.front = 0
        this.rear = -1
        this.size = size
        this.arr = new Array(this.size)
    }

    enqueue(value){
        if(this.front === this.size - 1){
            return "Overflow"
        } else {
            this.arr[++this.rear] = value
            return "the value is added"
        }
    }

    dequeue(){
        if(this.front > this.rear){
            return "Underflow"
        } else {
            this.arr[this.front] = " ";
            for(let i = 0; i < this.size; i++){
                this.arr[i] = this.arr[i + 1]
            }
            return "value is dequeued"
        }
    }

    peek(){
        return this.arr[this.front]
    }
    
    display(){
        return this.arr
    }
}

let queue = new Queue(5)
console.log(queue.enqueue('a'));
console.log(queue.enqueue('b'));
console.log(queue.enqueue('c'));
console.log(queue.enqueue('d'));
console.log(queue.enqueue('e'));
console.log(queue.peek())
console.log(queue.dequeue());
console.log(queue.display())
console.log(queue.peek())



