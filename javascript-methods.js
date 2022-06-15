// MAP //
Array.prototype.myMap = function(callbackFn) {
    // Place your code here.
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
    // Place your code here.
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
    // Place your code here.
  };
  
  // VALUES //
  Object.myValues = function(object) {
    // Place your code here.
  };

  /*//----testing for myIncludes, myIndexOf, myLastIndexOf
  myArr = [100,32,1,32,2,4];


  console.log(myArr.myIncludes(12))
  console.log(myArr.myIndexOf(32))
  console.log(myArr.myLastIndexOf(32))
  */
  
  //Test for myFilter//
  /* const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const map1 = words.myFilter(word => word.length > 6);

console.log(words); */