 let array = ["A", "B", "C"];

//Removes the last element of the array
 array.pop();

//===========================
 console.log(array);
//output =>
//["A", "B"]

//if you want to remove more varibles in the array,
//insted of using push you can simply define the length of the array 
 let array1 = [1, 2, 3, 4, 5, 6];
  
//Defines the length of the array to 2, removing the elements
//after the second element
 array1.length = 2;
  
//===========================
 console.log(array1);
//output =>
//["1", "2"]
