// MAP //
Array.prototype.myMap = function(callbackFn) {
  array = []
    for (let i = 0; i < this.length; i++) { 
      if (this[i] === undefined) continue;
      array.push(callbackFn(this[i]))
    }
    return array

  };
  
  // FILTER //
  Array.prototype.myFilter = function(callbackFn) {
    // Place your code here.
  };
  
  // SOME //
  Array.prototype.mySome = function(callbackFn) {
    for (let i = 0; i < this.length; i++) { 
      if (this[i] === undefined) continue;
      if (callbackFn(this[i]) === true) { 
        return true
      }
    }
    return false  
  };
  
  // EVERY //
  Array.prototype.myEvery = function(callbackFn) {
    // Place your code here.
  };
  
  // REDUCE //
  Array.prototype.myReduce = function(callbackFn) {
    // Place your code here.
  };
  
  // INCLUDES //
  Array.prototype.myIncludes = function(searchElement) {
    
    isThere = false;
    for (i = 0; i < this.length; i++) {
      if(searchElement === this[i]){
        isThere = true;
      }
    }
    return isThere;
  };
  
  // INDEXOF //
  Array.prototype.myIndexOf = function(searchElement) {
    
    for(i = 0; i < this.length; i++){
      if(searchElement === this[i]){
        return i;
      }
    }
    return -1
  };
  
  // LASTINDEXOF //
  Array.prototype.myLastIndexOf = function(searchElement) {
    
    for(i = this.length; i > 0; i--){
      if(searchElement === this[i]){
        return i;
      }
    }
    return -1
  };
  
  // KEYS //
  Object.myKeys = function(object) {
    const arr_key = []
    for(let i in object)
    {
      arr_key.push(i)
    }
    return arr_key
  };
  
  // VALUES //
  Object.myValues = function(object) {
    const arr_value = []
    for(let i in object)
    {
      arr_value.push(object[i])
    }
    return arr_value
  };

  /*//----testing for myIncludes, myIndexOf, myLastIndexOf
  myArr = [100,32,1,32,2,4];


  console.log(myArr.myIncludes(12))
  console.log(myArr.myIndexOf(32))
  console.log(myArr.myLastIndexOf(32))
  */

  // Test for myMap //
  /* myArr = [100,32,1,32,2,4];
   map1 = myArr.myMap(x => x * 2);
   console.log(map1);
  */

// Test for mySome //
/* const even = (element) => element % 3 === 0;
myArr = [13,23,9,43,53,47];
console.log(myArr.mySome(even))
*/
  