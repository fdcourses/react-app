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

// function* generateNumbers(maxNumber) {
//   try {
//     let number = 0;

//     while (number < maxNumber) {
//       number++;
//       yield number;
//     }
//   } catch (error) {
//     console.log('Случилась ошибка:', error);
//   }
// }

// const iter = generateNumbers(100);

// for (let i = 0; i < 120; i++) {
//   if (i === 10) {
//     iter.return('бабах');
//   }

//   console.log(iter.next());
// }

/*
  Каррирование - процесс уменьшения арности функции
*/

function sum(a, b, c) {
  return a + b + c;
}

console.log('sum 1 2 3:', sum(1, 2, 3));

function curriedSum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const withFirstNumber = curriedSum(1);

const withSecondNumber = withFirstNumber(2);

// console.log('curried sum 1 2 3:', withSecondNumber(3));
// console.log('curried sum но одним вызовом 1 2 3:', curriedSum(1)(2)(3));

function countPrice(price, amount, discount) {
  return price * amount - price * amount * discount;
}

console.log(countPrice(100, 2, 0.1));

// function curriedPrice(price) {
//   return function (amount) {
//     return function (discount) {
//       return price * amount - price * amount * discount;
//     };
//   };
// }

const curriedPrice = (price) => (amount) => (discount) =>
  price * amount - price * amount * discount;

const withPrice100 = curriedPrice(100);

const withAmount5AndPrice100 = withPrice100(5);

const result1 = withAmount5AndPrice100(0.2);

const result2 = withAmount5AndPrice100(0.98);

console.log(result1);
console.log(result2);
