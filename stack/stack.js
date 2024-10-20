class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top == null;
        this.size = 0;
    }

    push(value){
        let newNode = new Node(value);
        if(this.top == null){
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.size++
    }

    pop(){
        if(this.top == null){
            console.log('stack is Underflow')
        } else {
            let node = this.top.value
            this.top = this.top.next
            this.size--
            console.log(`${node} is poppoed successfully`)

        }
    }

    peek(){
        console.log(this.top == null ? 'Stack is empty' : `Top most value of stack is ${this.top.value}`)
    }

    isEmpty(){
        console.log(this.size == 0 ? 'Empty' : 'Not Empty');
    }

    display(){
        if(this.top == null){
            console.log('stack is empty');
        } else {
            let display = this.top
            let result = []
            while(display !== null){
                result.push([display.value , (display.next ? display.next.value: null)])
                display = display.next
            }
            console.log(result)
        }
    }
}

let stack = new Stack()
stack.push(10)
stack.push(20)
// stack.pop()
stack.push(30)
stack.display()
// stack.peek()
// stack.isEmpty()
