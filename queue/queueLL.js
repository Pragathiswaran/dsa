class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue{
    constructor(){
        this.top =null
        this.front = null;
        this.rear = null;
    }

    enqueue(value){
        let newQueue = new Node(value)
        
        if(this.isEmpty()){
            this.top = this.front = this.rear = newQueue
            return
        }

        this.rear.next = newQueue
        this.rear = newQueue

    }

    dequeue(){
        if(this.isEmpty()){
            return "Under flow"
        }

        this.front = this.front.next
        return
    }

    isEmpty(){
        return this.front == null && this.rear == null
    }
    
    display(){
        console.log(this.top)
        console.log(this.front)
        console.log(this.rear)
    }
}


let queue = new Queue()
queue.enqueue('a')
queue.enqueue('b')
queue.enqueue('c')
queue.enqueue('d')
queue.enqueue('e')
queue.display()