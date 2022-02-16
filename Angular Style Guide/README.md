# Naming Conventions

## UpperCamelCase For:
- class
- interface
- type
- enum
- decorator
- type parameters

## lowerCamelCase For:
- variable
- parameter
- function
- method
- property
- module alias

## CONSTANT_CASE:
- global constant values, including enum values

## Constants:
- CONSTANT_CASE indicates that a value is intended to not be changed
- the uppercase shows users to not modify it.
  ```js
  const UNIT_SUFFIXES = {
    'milliseconds': 'ms',
    'seconds': 's',
  };
  ```
