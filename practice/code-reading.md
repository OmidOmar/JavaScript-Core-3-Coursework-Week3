# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);
```

Explain why line 4 and line 6 output different numbers.
A: Because we declare variables in different scopes.

## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code? Explain your answer in 50 words or less.
A: -----Output------
10
undefined
y is not defined

variable x is defined globally and used inside the f1 function, so it is executed without any issue. By executing line number 33 we have got undefined the reason is the f1 function which we have called doesn't return any value. the last one says y is not defined because y is declared locally i.e. declared inside the f1 function.

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
y.newObj = 10
console.log(y);
```

What will be the output of this code? Explain your answer in 50 words or less.
A:-----------Output----------
9
{x: 9}

Variable x didn't affect for the reason that it was declared as a constant. It's possible to change the content of the y object that is declared with the const variable.
