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
    // Place your code here.
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
    // Place your code here.
  };
  
  // INDEXOF //
  Array.prototype.myIndexOf = function(searchElement) {
    // Place your code here.
  };
  
  // LASTINDEXOF //
  Array.prototype.myLastIndexOf = function(searchElement) {
    // Place your code here.
  };
  
  // KEYS //
  Object.myKeys = function(object) {
    // Place your code here.
  };
  
  // VALUES //
  Object.myValues = function(object) {
    // Place your code here.
  };

  // Test for myMap //
  // myArr = [100,32,1,32,2,4];
  // map1 = myArr.myMap(x => x * 2);
  // console.log(map1);


  