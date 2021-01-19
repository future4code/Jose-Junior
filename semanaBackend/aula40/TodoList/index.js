const fs = require('fs')

if(process.argv[2]){

fs.appendFile("./TodoList/todo.txt", `${process.argv[2]},\n`, (err)=> err&&console.log(err))

fs.readFile("./TodoList/todo.txt", function(err, buf) {
    console.log('Tasks to do:\n' + buf.toString());
  });}else{
         console.log("\x1b[31m",'Usage: npm run start "your-task-here"')
  } 
  
