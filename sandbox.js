/*
  генератор - функция, которая может возвращать некоторый промежуточные результаты своей работы

  итераторы делали нам:
  for .. of
  rest, spread
  деструктуризации
*/

// function* generator() {
//   console.log(1);
//   yield 5;
//   console.log(2);
//   yield 10;
//   console.log(3);

//   return 50
// }

// const iterator = generator();

// console.log('первый вызов next');
// console.log(iterator.next());

// console.log('2 вызов next');
// console.log(iterator.next());

// console.log('3 вызов next');
// const result = iterator.next();

// console.log(result);

/*
  напушите функцию которая будет генерировать числа от 1 до бесконечности. Каждый ваш вызов next увеличивает значение на 1
*/

function* generateNumbers(maxNumber) {
  try {
    
    let number = 0;
  
    while(number < maxNumber) {
      number++;
      yield number;
    }
  } catch (error) {
    console.log('Случилась ошибка:', error)
  }
}

const iter = generateNumbers(100);

for(let i = 0; i < 120; i++) {


  if(i === 10) {
    iter.return('бабах');
  }

  console.log(iter.next());

}