function sleep(seconds = 0) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
}

function randomNumber(max, type = "int") {
  if (type === "int") {
    return Math.floor(Math.random() * max);
  } else {
    return Math.random() * max;
  }
}

/* timestamps */
function Timestamp() {
  this.value = Math.floor(Date.now() / 1000);
}

Timestamp.prototype = {
  units: {
    DAY: 86400,
    HOUR: 3600,
  },

  add: function (number, unit) {
    const _unit = this.units[unit];
    this.value = this.value + Number(number) * _unit;
    return this.value;
  },

  subtract: function (number, unit) {
    const _unit = this.units[unit];
    this.value = this.value - Number(number) * _unit;
    return this.value;
  },
};
