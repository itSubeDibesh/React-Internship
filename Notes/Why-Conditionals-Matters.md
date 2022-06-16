# Why conditionals matters?

[👈Go Back](./Readme.md)

At core of `ReactJs` conditionals plays **significant** role determining the whole **application's behavior**. Let's first understand what are conditional statements? A conditional statement in general refers to a logic that helps to determine whether a context presented is truthy or falsy. Let's take an example, where we have to check if the value stored in a variable is truthy or falsy.

```js
const userAge = 18;

console.log(userAge, typeof userAge, userAge === 18);

// The output will be: 18 "number" true

```

 As we can observe the comparative result of `18` and `userAge` is `true`. This is because `userAge`  stores a number and `18` is a number and they both are equal.
There are several conditionals in core _javaScript_  so lets observe the behavior some of them.

``` js

1. console.log(1==1); // true
2. console.log(1=="1"); // false
3. console.log("apple"==="apple"); // true
4. console.log(true===true); // true
5. console.log(false===false); // true
6. console.log(false===0); // true
7. console.log(true===1); // true
8. console.log(true===2); // false
9. console.log(undefined === undefined); // true
10. console.log(null === null); // true
11. console.log(null === undefined); // false
12. console.log([] === []); // false
13. console.log({} === {}); // false
14. console.log([] === {}); // false

```

Line 1 `1==1` checks if the left hand side value is equal to the right hand side value, since both are numbers and equal it's `true`. Line 2 `1=="1"` checks if the left hand side value is equal to the right hand side value, either value gets explicitly converted [^1] resulting in `true`. Similarly, No issues would arise unless line number `12` because in line 12 it might seems comparing **two empty** arrays which is correct but actually we are comparing the references of two empty arrays resulting in `false`. Every conditional after Line number 12 is `false` because we are comparing reference(_pointer_) of two (objects/array) which are **not** equal.

**Why is that so?**

Every thing boils down to the datatype[^2] in JavaScript, Which is divided into **Primitive** and **Non-Primitive** datatypes[^3]. Sor ease of sake we can say that values of primitive data type are evaluated while using conditionals whereas the reference(address, pointer) of non-primitive data type is evaluated while using conditionals.

**Why should we know it?**

Under the hood, **ReactJs** inherits JavaScript and it's datatypes, when a difference is conditional or state is detected by the react it re-renders the components. That's the core reason why conditionals matters in ReactJs.

[^1]: [JavaScript type coercion explained](https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/)
[^2]: [Primitive Data Types in JavaScript](https://www.educba.com/primitive-data-types-in-javascript/)
[^3]: [Primitive and Non-primitive data-types in JavaScript](https://www.geeksforgeeks.org/primitive-and-non-primitive-data-types-in-javascript/)
