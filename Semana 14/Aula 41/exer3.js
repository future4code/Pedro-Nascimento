const tasks = ["estudar", "fazer almoço", "cuidar da filha"];

const task = Process.argv[2];

if (!task) {
  return console.log("Was expecting at least 1 parameter for new task");
}

tasks.push(task);

console.log(`Tarefa ${task} added sucessfuly`);
console.log("tarefas:", task.toString());
