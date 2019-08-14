'use strict';
//Hanna - First I'm going to create an object that exports a couple of things to the test file and call it validator
class validator {

  constructor(schema) {
    this.schema = schema;
  }

  //Now I'm going to attach the things I want to check for to the validator object.
  //First lets check if a number is less than or greater than 0(Problem-1 : number problem)

  isPositive(input) {
    return input > 0;
  }

  //Hanna - Now I'm going to check if something is the right type Problem - 2 : type problem

  isString(input) {
    return typeof input === 'string';
  }

  //Now we are checking if the object has the same type of properties as the schema(Problem three - check validation)


  isObjectValid(data, schema) {
    Object.keys(schema.fields).forEach(expectedProperty => {
      if(!data.hasOwnProperty(expectedProperty)) {
        return false;
      }
    });
    return true;
  }
}

module.exports = validator;

