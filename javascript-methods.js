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
    const arr_filt = []

    for(let x = 0; x < this.length; x++){
      if (callbackFn[x]){
        arr_filt.push(this[x]);
      }
    }
    return arr_filt
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
    itEvery = false;
    for ()
  };
  
  // REDUCE //
  Array.prototype.myReduce = function(callbackFn) {
    
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
<<<<<<< HEAD
  
  //Test for myFilter//
  /* const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const map1 = words.myFilter(word => word.length > 6);

console.log(words); */
=======

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
  
>>>>>>> d98c4397882480b3f357f047dbe84dec09a638c0
