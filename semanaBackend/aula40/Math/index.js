const operation = process.argv[2]

const help = 'type "add", "sub", "mult" or  "div" to select the mathematical operation and then the numbers!'

if(process.argv[3] && process.argv[4]){let result;
    const first_number = Number(process.argv[3])
    const second_number = Number(process.argv[4])
switch (operation) {
    case 'add':
        result = first_number + second_number
        break;
    case 'sub':
        result = first_number - second_number
        break;
    case 'mult':
        result = first_number * second_number
        break;
    case 'div':
        result = first_number / second_number
        break

    default:
        result = help
        break;
}
console.clear()
console.log('result: ' + result)}else{
    console.clear
    console.log(help)
}