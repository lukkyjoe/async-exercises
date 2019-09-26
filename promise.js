console.log('hi start'); 
console.trace('first trace');

var promise2 = new Promise((resolve, reject) => {
  console.log('inside another promise');
  setTimeout(() => {resolve('boom')}, 1000);
})

let resolveEventually = function() {
  // return new Promise((resolve, reject) => {
  //   console.log('inside another promise');
  //   setTimeout(() => {resolve('boomer')}, 1000);
  // })
  return promise2 // await value is undefined if return promise2. why?
}

someFunc();

function waitABit(promiseX){
  setTimeout(() => {
    console.log('waited')
    return promiseX
  }, 1000)
}

var sup = {
    hey: 'hey',
    foo: 'foo',
    foobar: {
        foo1: 'foo1',
        bar1: '`bar1'
    },
    wowNum: 1, 
    bool: false
}
var fastPromise = new Promise((resolve) => setTimeout(() => resolve('so fast'), 0))
var promise1 = new Promise((resolve, reject) => {
    console.log('inside promise');
    setTimeout(() => {resolve('resolved')}, 5000)
})



var promise3 = new Promise((resolve, reject) => {
  console.log('inside promise3');
  setTimeout(() => {resolve(3)}, 10000);
})

console.log('before first promise.then()')
promise1
  .then((value) => {
    console.log('here is promise1s resolved value', value)
    setTimeout(() => {console.log('waaaah')}, 5000);
  })
  .then(() => promise3)
  .then((value) => {
    console.log('sup', value)
  })
  .then(() => 'end?')
  .then(() => {
    console.log('when will this go')
  })
  .then(() => console.log('foo'))
  .catch((err) => {console.log(err)})
var assigned = fastPromise.then((value) => console.log('fast promise then log', value));
console.log('fastPromise', fastPromise)
console.log('assigned', assigned);
console.log('hi after');
console.trace('hi after2');
console.log('hi after3');

promise2
  .then((value) => {
    console.log('here is promise2 resolved value', value)
    waitABit();
  })
  .then(value => console.log('prom2', value))

async function someFunc() {
  console.log('inside someFunc')
  const awaitedValue = await resolveEventually();
  console.log('awaited value', awaitedValue)
}
