const username = process.argv[2];

const age = Number(process.argv[3]);

const params = process.argv.length - 2;
if (params < 2) {
  return console.log(`Was expecting 2 parameters,got ${params}`);
}

console.log(`Olá, ${username}! Você tem ${age} anos.`);

console.log(
  `Ola, ${username}! voce tem ${age} anos. Em sete anos voce tera ${age + 7}`
);
