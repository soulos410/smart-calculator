class SmartCalculator {
  constructor(initialValue) {
    this.value = initialValue;
  }
  valueOf(){
    return this.value;
  }

  add(number) {
    this.value += number;
    return this;
  }
  
  subtract(number) {
    this.value -= number;    
    return this;
  }

  multiply(number) {
    this.value *= number;
    return this;
  }

  devide(number) {
    this.value /= number;
    return this;
  }

  pow(number) {
    this.value = Math.pow(this.value,number);
    return this;
  }
}

module.exports = SmartCalculator;
