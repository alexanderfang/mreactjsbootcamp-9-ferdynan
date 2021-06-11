// jika ada 3 "x" berurutan dan posisi x tidak didahului oleh x tunggal lainnya maka true

function tripleX(str){
    let result = false
    let counter = 0
    for (let i = 0; i < str.length; i++) {
        if(str[i] === "x"){
            counter++
            if(counter === 3){
                result = true
                break
            }
        }else{
            if(counter > 0 && counter < 3){
                result = false
                break
            }
        }
    }

    return result
}

console.log(tripleX("abraxxxas") )//true
console.log(tripleX("xoxotrololololololoxxx")) //false
console.log(tripleX("softX kitty, warm kitty, xxxxx") )//true
console.log(tripleX("softx kitty, warm kitty, xxxxx"))//false