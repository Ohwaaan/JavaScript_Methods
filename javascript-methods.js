// MAP //
Array.prototype.myMap = function(callbackFn) {
    // Place your code here.
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

  /*//----testing for myIncludes
  myArr = [32,1,32,2,4];
  console.log('piss')

  console.log(myArr.myIncludes(12))
  console.log(myArr.myIndexOf(32))
  */