let word = "MAHARDIKA"
let row = word.length
let col = word.length

for (let i = 0; i < col; i++) {
    let result = ""
    for (let j = 0; j < row; j++) {
        if(i === j){
            result += word[i]
        }else if(j === row - 1 - i){
            result += word[word.length-1-i]
        }else{
            result += " "
        }
    }
    console.log(result);
}