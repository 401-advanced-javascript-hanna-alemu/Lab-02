'use strict';
//Hanna- I'm going to import the validator exported from the module
const ValidatorClass = require('../lib/validator');
const validator = new ValidatorClass();

//Hanna - Check if the number is positive
describe('#validator', () => {
  describe('#isPositive', () => {
    test('regular-case', () => {
      expect(validator.isPositive(-5)).toEqual(false);
      expect(validator.isPositive(5)).toEqual(true);
      expect(validator.isPositive(0)).toEqual(false);
    });
  });
});

//Lets check for type of something to be a string(problem 2)

describe('#validator', () => {
  describe('#isString', () => {
    test('regular-case', () => {
      expect(validator.isString('hanna')).toEqual(true);
      expect(validator.isString(22)).toEqual(false);
      expect(validator.isString([])).toEqual(false);
      expect(validator.isString({})).toEqual(false);
    });
  });
});


//Hanna - now I'm going to test if an object is valid according to the schemaI(problem 3)

describe('#validator', () => {
  describe('#isObjectValid', () => {
    test('regular-case', () => {
      const schema = {
        fields : {
          name: {type : 'string'},
          age: {type : 'number'},
          courses: {type: 'object'},
        },
      };
      expect(validator.isObjectValid({name: 'hanna' , age: '22' , courses: {}}, schema)).toEqual(true);
      expect(validator.isObjectValid({name: '22' , age: '22' , courses: {}}, schema)).toEqual(true);
      expect(validator.isObjectValid({name: 'hanna' , age: 'twentytwo' , courses: {}}, schema)).toEqual(true);
      expect(validator.isObjectValid({name: 'hanna' , age: '22' , courses: []}, schema)).toEqual(true);
    });
  });
});

