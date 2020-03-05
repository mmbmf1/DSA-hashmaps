const hashMap = require("./hashmap");

const main = () => {
  let lotr = new hashMap();
  lotr.MAX_LOAD_RATIO = 0.5;
  lotr.SIZE_RATIO = 3;

  lotr.set("Hobbit", "Bilbo");

  console.log(lotr);

  return lotr;
};
