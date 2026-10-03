// array.forEach(callbackFn, thisArg)
// callbackFn(element, index, array)
Array.prototype.myForEach = function (callback,thisArg) {
  // Your code here
  // idea is to iterate items and invoke callback 
  for (let i = 0 ; i < this.length ;i++){
      // sparse array 
      if (i in this){
        // invoke callbacl 
        callback.call(thisArg,this[i],i ,this)
      }
  }
};

