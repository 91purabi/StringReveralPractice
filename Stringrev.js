// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// console.log(reverseString('Hello'));


// function reverseString(str) {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//       reversed += str[i];
//     }
//     return reversed;
//   }
  
//   console.log(reverseString('World')); // Output: 'dlroW'



// function reverseString(str) {
//     return Array.from(str).reverse().join('');
//   }
  
//   console.log(reverseString('JavaScript')); // Output: 'tpircSavaJ'

// function reverseString(str) {
//     if (str === '') {
//       return str;
//     } else {
//       return reverseString(str.substr(1)) + str[0];
//     }
//   }
  
//   console.log(reverseString('Example')); // Output: 'elpmaxE'
  

function reverseString(str) {
    return str.split('').reduce((reversed, char) => char + reversed, '');
  }
  
  console.log(reverseString('Reversal')); // Output: 'lasreveR'
  
  
  