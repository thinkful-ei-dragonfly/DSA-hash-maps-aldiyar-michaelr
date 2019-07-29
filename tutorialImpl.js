/* eslint-disable strict */
class HashTable {
  constructor(size = 42) {
    this.buckets = new Array(size);
    this.size = size;
  }

  hash(key) {
    return key.toString().length % this.size;
  }

  set(key,value){

    let index = this.hash(key);

    if(!this.buckets[index]){
      this.buckets[index] = [ ];
    }

    this.buckets[index].push([key,value])

    return index;

  }

};

function main() {
  let lor = new HashTable();
  
  lor.set('Hobbit', 'Bilbo');
  lor.set('Hobbit', 'Frodo');
  lor.set('Human', 'Aragorn');

  return lor;
}

console.log(main());