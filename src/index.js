class SmartCalculator {
  constructor(initialValue) {
    this.value = initialValue;
    this.initialExpression = '' + initialValue;
  }

  valueOf(){
    return this.value;
  }

  add(number) {
    this.initialExpression += '+' + number;
    this.value = eval(this.initialExpression);
    return this;
  }

  subtract(number) {
    this.initialExpression += '-' + number;
    this.value = eval(this.initialExpression);    
    return this;
  }

  multiply(number) {
    this.initialExpression += '*' + number;
    this.value = eval(this.initialExpression);
    return this;
  }

  devide(number) {
    this.initialExpression += '/' + number;
    this.value = eval(this.initialExpression);
    return this;
  }

  pow(number) { 
    this.initialExpression += '**' + number;
    this.value = eval(this.initialExpression);
    return this;
  }
}
module.exports = SmartCalculator;