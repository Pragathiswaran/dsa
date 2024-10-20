const validparantheses = (parantheses) => {
    let stack = [];

    for(let i = 0; i < parantheses.length; i++){
        if(parantheses[i] === '{' || parantheses[i] === '(' || parantheses[i] === '['){
            stack.push(parantheses[i])
            // console.log('if hello')
        } else {
            if(stack.length > 0 && (stack[stack.length - 1] === '{' && parantheses[i] === '}' || (stack[stack.length - 1] === '[' && parantheses[i] === ']') || (stack[stack.length - 1] === '(' && parantheses[i] === ')'))){
                stack.pop()
            } else {
                return false
            }
            // console.log('else hello')
        }
    }

    return stack.length == 0 
}

if(validparantheses('[](){}')){
    console.log('All patterbs are Matched !!!')
} else {
    console.log("Patterns doesn't matched!!!")
}
