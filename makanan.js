/**
 * Terdapat sebuah Array dari nama Makanan
 * ['Bakso', 'Ubi', 'Nasi Goreng', 'Kolak', 'Bubur', 'Onde-Onde']
 * contoh : yang mengandung huruf "o"
 * hasil = ['Bakso', 'Nasi Goreng', 'Kolak', 'Onde-onde']
 * Tampilkan makanan yang memiliki huruf yang dicari
 */

 function findFood(foods, letter) {
     let result = []
    // Insert your code
    foods.forEach(food => {
        for (let i = 0; i < food.length; i++) {
            if(food[i] === letter){
                result.push(food)
                break
            }
        }
    });

    return result
  }
  
  console.log(findFood(['Bakso', 'Ubi', 'Nasi Goreng', 'Kolak', 'Bubur', 'Onde-onde'], 'o')) // ['Bakso', 'Nasi Goreng', 'Kolak', 'Onde-onde'] 
  
  console.log(findFood(['Bakso', 'Ubi', 'Nasi Goreng', 'Kolak', 'Bubur', 'Onde-onde'], 'B')) // ['Bakso', 'Bubur']
  
  console.log(findFood(['Bakso', 'Ubi', 'Nasi Goreng', 'Kolak', 'Bubur', 'Onde-onde'], 'u')) // ['Bubur'] 