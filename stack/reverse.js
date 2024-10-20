class Stack{
    constructor(size){
        this.index = -1
        this.size = size
        this.arr = new Array(this.size)
    }

    push(value){
        if(this.index >= this.size){
            return false;
        }else{
            this.arr[++this.index] = value
            return true
        }
    }

    pop(){
        if(this.index < 0){
            return false
        } else {
            let x = this.arr[this.index--];
            return x
        }
    }

    display(){
        console.log(this.arr)
    }

}

function reverseString(str){

    let reverse = new Stack(str.length)
    let result = '';
    for(const s of str){
        reverse.push(s)
    }

    for(let i = 0; i < str.length; i++){
        result += reverse.pop()
    }

    reverse.display();
    return result;
}

let str = "abcde"
console.log("Reversed String : ", reverseString(str))
// console.log(5 >= 5)