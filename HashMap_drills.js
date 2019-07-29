/* eslint-disable strict */
const HashMap = require('./hash');

function main() {
  const lor = new HashMap();
  

  lor.set('Hobbit', 'Bilbo');
  lor.set('Hobbit', 'Frodo');
  lor.set('Wizard', 'Gendolf');
  lor.set('Human', 'Aragorn');
  lor.set('Elf', 'Legolas');
  lor.set('Maiar', 'The Necromancer');
  lor.set('Maiar', 'Sauron');
  lor.set('RingBearer', 'Gollum');
  lor.set('LadyOfLight', 'Galadriel');
  lor.set('HalfElven', 'Arwen');
  lor.set('Ent', 'Treebeard');
  lor.set('gogog', 'gogogog');
  lor.set('wtf', 'etf')

  console.log(lor);



}

// main();

const WhatDoesThisDo = function(){
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap();
  map1.set(str1,10);
  map1.set(str2,20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3,20);
  map2.set(str4,10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
}

// WhatDoesThisDo();

// 10 22 31 4 15 28 17 88 59


// 00 01 02 03 04 05 06 07 08 09 10
// 22 88        4 15 28 17 59 31 10

// 5, 28, 19, 15, 20, 33, 12, 17, 10

// 00 01 02 03 04 05 06 07 08
//    28 20    12  5 15    17
//    19             33
//    10   

function deleteDuplicates(string) {
  
}