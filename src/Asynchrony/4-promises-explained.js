const fail = false; // TASK: Попробуйте изменять переменную и понаблюдать, что получится.
                    // Моё понимание: 1) в случае ошибки (fail == true), попадаем в блок с ф-ей reject,
                    // которая отклоняет выполнение и вызывает Error, которая отлавливается в цепочке catch-ом;
                    //                2) в случае успеха (fail == false), выполняется функция resolve (резрешение 
                    // выполнения промиса), и соотв. в цепочке проходим 2 then-а

const promise = new Promise((resolve, reject) => {
  // выполняем асинхронный код внутри промиса и вызываем resolve() или reject()
  if (!fail) {
    // для примера - на деле какая-то полезная операция, требующая времени
    setTimeout(() => {
      resolve({ data: 'Useful Information' });
    }, 1000);
  } else {
    setTimeout(() => {
      reject(new Error('Something went wrong!'));
    }, 3000);
  }
});

promise
  .then((data) => {
    console.log('We got to "then"!');
    console.dir(data);
    return data;
  })
  .then((result) => console.log(result))
  .catch((err) => {
    console.log('We got to "catch"!');
    console.error(err.message);
  });

console.dir(promise);

setTimeout(() => {
  console.log(promise);
}, 3100);
