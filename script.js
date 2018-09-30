const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value)
}

inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))



// const firstWorld = () => {
//   const bestProgrammingLanguage = 'JavaScript';
//   return bestProgrammingLanguage;
// }
//
// const secondWorld = () => {
//   firstWorld();
//   console.log(bestProgrammingLanguage);
// }
//
// secondWorld();

// let lettuce = 'lettuce';
// let tomato = 'tomato';
//
//
// function happy(){
//   let lettuce = 'lettuce';
//   let tomato = 'tomato';
//   function nestedWithin() {
//     let onlyHere = 'Ada Lovelace';
//     // console.log(lettuce)
//     return function doubleNestedWithin() {
//       console.log('lettuce')
//     }
//
//   }
//   return nestedWithin()();
// }
//
// happy();







// const happy = () => {
//   let lettuce = 'lettuce';
//   let tomato = 'tomato';
//   const nestedWithin = () => {
//     let onlyHere = 'Ada Lovelace';
//     console.log(lettuce);
//   }
//   return nestedWithin();
// }



// let lettuce = 'lettuce';
// let tomato = 'tomato';
//
// function happy(lettuce, tomato){
//   function nestedWithin() {
//     let onlyHere = 'Ada Lovelace';
//     return onlyHere
//   }
//   return onlyHere;
// }
//
// happy();


// function secret (encryptedCode) {
//   return {
//     saySecretCode () {
//       console.log(encryptedCode)
//     }
//   }
// }
//
// const theEncrypt = secret('Programming is the best!')
// theEncrypt.saySecretCode()
