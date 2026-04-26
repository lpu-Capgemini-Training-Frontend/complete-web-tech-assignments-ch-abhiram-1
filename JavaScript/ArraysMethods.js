let array = [10,20,30,40,50]
let array2 = ['Dingaa' , 'Tingaa' , 'Chenga' ]
//concat vs join

console.log(array.concat(array2)) // concat is used to merge two or more arrays and it returns a new array without modifying the original arrays.
console.log(array.join("-")) // join is used to join all the elements of an array into a string and it returns a new string. The separator can be specified as an argument, if not provided it defaults to a comma.
console.log(array.join("@")) // if we want to join the elements without any separator we can pass an empty string as an argument to the join method.
console.log(array.join(" ")) // if we want to join the elements without any separator we can pass an empty string as an argument to the join method.
console.log(typeof array2.join("-")) // the join method returns a string, so the type of the result is string.

//searching and sorting methods
let array3 = [101,20,30,410,50]
//array3.sort() // sort method is used to sort the elements of an array in place and it returns the sorted array. By default, the sort method sorts the elements as strings in ascending order.
console.log(array3.sort((a,b)=>a-b)) // to sort the elements in ascending order we can pass a compare function as an argument to the sort method. The compare function takes two arguments and returns a negative value if the first argument is less than the second argument, a positive value if the first argument is greater than the second argument, and zero if they are equal.
console.log(array3.sort((a,b)=>b-a)) // to sort the elements in descending order we can pass a compare function as an argument to the sort method. The compare function takes two arguments and returns a negative value if the first argument is greater than the second argument, a positive value if the first argument is less than the second argument, and zero if they are equal.

//finding any values or index in an array
console.log(array3.indexOf(30)) // indexOf method is used to find the index of the first occurrence of a specified value in an array. It returns the index of the first occurrence of the value, or -1 if the value is not found.
console.log(array3.includes(30)) // includes method is used to check if a specified value is present in an array. It returns true if the value is found, otherwise false.


let array4 = [[1,2,3],["hi","hello"]]
console.log(array4.flat()) // flat method is used to flatten a nested array. It returns a new array with all sub-array elements concatenated into it recursively up to the specified depth. By default, the depth is 1, which means it will only flatten one level of nesting.

console.log(array.reverse()) // reverse method is used to reverse the order of the elements in an array. It modifies the original array and returns the reversed array.

//Hositing of functions and variables in JavaScript is a behavior in which function and variable declarations are moved to the top of their containing scope during the compilation phase. 
// This means that you can call a function or access a variable before it is declared in the code, and it will not result in an error. 
// However, only the declarations are hoisted, not the initializations. So if you try to access a variable before it is initialized, it will return undefined.
