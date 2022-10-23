// TASK: Попробуйте изменять переменные и понаблюдать, что получится.
// Мое понимание: 1) при secure == false, отклоняем выполнение промиса функцией reject и
// выбрасываем ошибку в функции sendData, котороя потом отлавливается в цепочке
//                2) при sendSuccessfully == false, отклоняем выполнение промиса функцией reject и
// выбрасываем ошибку в функции sendData, котороя потом отлавливается в цепочке
//                3) при secure, sendSuccessfully = true - все ок, 
const secure = true;
const sendSuccessfully = true;

const createConnection = () => {
  console.log('Opening connection...');

  return new Promise((resolve) => {
    // выполняем асинхронный код внутри промиса и вызываем resolve() или reject()
    setTimeout(() => {
      const connection = {
        port: 80,
        secure,
        send: (data) => {
          console.log(data);
          return sendSuccessfully;
        },
        serializeData: (data) => JSON.stringify(data),
      };

      resolve(connection);
    }, 2000);
  });
};

function prepareData(data) {
  console.log('Preparing data...');

  return new Promise((resolve) => {
    // выполняем асинхронный код внутри промиса и вызываем resolve() или reject()
    data.prepared = true;
    setTimeout(() => resolve(data), 2000);
  });
}

function sendData(connection, data) {
  console.log('Sending data...');

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!connection.secure) {
        return reject(new Error("Can't send data with insecure connection"));
      }
      if (!connection.send(data)) {
        return reject(new Error('Error during sending'));
      }
      resolve(data);
    }, 2000);
  });
}

// createConnection()
//   .then((connection) => {
//     const data = {
//       status: 200,
//       message: 'Hello, mister!',
//       prepared: false,
//     };
//     // думаю тут тоже можно это отметить:
//     // 1-ый уровень вложенности
//     const promise = prepareData(data, connection)
//       // 2-ой уровень вложенности
//       .then((prepared) => connection.serializeData(prepared))
//       .then((serialized) => {
//         return {
//           data: serialized,
//           connection,
//         };
//       });

//     return promise;
//   })
//   .then((result) => {
//     const { data, connection } = result;
//     return sendData(connection, data);
//   })
//   .then(() => {
//     console.log('Sent');
//   })
//   .catch(console.error);


// Task 2
// Вывод: с async/await код более лаконичный (его меньше => понятнее)
async function main(){
  try{
    const data = {
      status: 200,
      message: 'Hello, mister!',
      prepared: false,
    };

    const connection = await createConnection();
    await prepareData(data, connection);
    await sendData(connection, data)
    console.log('Sent');
  }
  catch(error){
    console.log(error);
  }
}

  main();