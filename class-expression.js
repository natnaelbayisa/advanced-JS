// class Title {}

// const title = class Title {
//   constructor() {}
// };

// const title2 = class {};

// create class dynamically
const classFactory = function (...params) {
  return class {
    constructor(...values) {
      for (const [index, param] of params.entries()) {
        this[param] = values[index];
      }
    }
  };
};

const Alarm = classFactory("time", "reference");
const tenAmAlarm = new Alarm(10, "AM");
console.log(`I have wake up at ${tenAmAlarm.time}${tenAmAlarm.reference}`);

const CreditCard = classFactory("type", "cardLimit", "validThru");
const myCredCard = new CreditCard("Premium", 3_00_00_00, 2025);
console.log(
  `I have a ${myCredCard.type} card, having balance of ${myCredCard.cardLimit} and is valid till ${myCredCard.validThru}`
);
