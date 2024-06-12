// Gera um valor entre 0 a 999 e o multiplica por 1000
let raceNumber = Math.floor(Math.random() * 1000);

// Registro de participação 
let runnerRegistered = true;

// Idade do participante
const runnerAge = 16;

// Condição para verificar idade e registro do participante
if (runnerRegistered && runnerAge > 18) {
  raceNumber += 1000; // Adiciona o valor de 1000 se a condição for verdadeira
}

// Condições de participação 
if (runnerRegistered && runnerAge > 18) {
  console.log(`The player number ${raceNumber} will race at 9:30 am.`);
} else if (runnerAge > 18 && !runnerRegistered) {
  console.log(`The player number ${raceNumber} will race at 11:00 am.`);
} else if (runnerAge <= 18 && runnerRegistered) {
  console.log(`The player number ${raceNumber} will race at 12:30 pm.`);
} else {
  console.log('No registration in the system! Please go to the registration desk!');
}