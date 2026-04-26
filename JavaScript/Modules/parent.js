import {name} from './a.js'
import ageg from './a.js' //default import - we can give any name to the variable while importing.
import {add} from './b.js' //named import - we have to use the same name of the variable while importing.

console.log(ageg)

console.log(name)

//default export - default import (you could change the name of the variable while importing)
//there is only one default export in a module and it is imported without using curly braces {}. You can give any name to the variable while importing.

//named export - named import (you have to use the same name of the variable while importing)



let result = add(10, 20)
console.log(result)