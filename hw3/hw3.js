// - Написать функцию filterBy(), которая будет принимать в себя 2 аргумента.
// Первый аргумент - массив, который будет содержать в себе любые данные,
//     второй аргумент - тип данных.
// - Функция должна вернуть новый массив, который будет содержать в себе все данные,
//     которые были переданы в аргумент, за исключением тех,
//     тип которых был передан вторым аргументом.
// То есть, если передать массив['hello', 'world', 23, '23', null],
//     и вторым аргументом передать 'string', то функция вернет массив[23, null].

function filterBy(dataArr, dataType) {
  return dataArr.reduce((result, item) => {
    if (typeof item != dataType) {
      result.push(item);
    }
    return result;
  }, []);
}

console.log(filterBy([1, 2, 3, "hello", "world"], "string"));
console.log(filterBy([1, 2, 3, "hello", "world"], "number"));
console.log(filterBy([true, false, NaN, undefined], "boolean"));