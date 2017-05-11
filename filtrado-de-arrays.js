var numbers=[1,2,3,4,5,6,7,8,9,10];
var filtered=numbers.filter(function evenNumbers(number){//esta funcion sirve para filtrar numeros o cualquier cosa en un array
  return number%2===0;
  });
  console.log(filtered);
