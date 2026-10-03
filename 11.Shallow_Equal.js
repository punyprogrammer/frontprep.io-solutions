function shallowEqual(obj1, obj2) {
  // Your code here
  const keysA = Object.keys(obj1)
  //  use set for fast look up 
  const keysB = new Set(Object.keys(obj2))
  if (keysA.length !== keysB.size) return false
  for (let key of keysA){
     if (!keysB.has(key)) return false
    
     const valueA = obj1[key]
     const valueB = obj2[key]
    //  Object.is works for both primitives and as NaN and -0 and +0 
    // remmber NaN!==Nan and +0 === -0 is false 
    if(!Object.is(valueA,valueB)) return false
     
  }
  return true

}

// --- Smoke tests (press Run to verify) ---
console.log(shallowEqual({ a: 1, b: 2 }, { a: 1, b: 2 }));
// Expected: true

console.log(shallowEqual({ a: 1, b: 2 }, { a: 1, b: 3 }));
// Expected: false

console.log(shallowEqual({ a: 1 }, { a: 1, b: 2 }));
// Expected: false (different number of keys)

console.log(shallowEqual({ a: undefined }, { b: undefined }));
// Expected: false (different keys)

console.log(shallowEqual({ a: NaN }, { a: NaN }));
// Expected: true

console.log(shallowEqual({ a: { nested: 1 } }, { a: { nested: 1 } }));
// Expected: false (nested objects are different references)
