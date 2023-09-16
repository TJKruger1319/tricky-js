1. What is the potential pitfall with using typeof bar === "object" to determine if bar is an object? How can this pitfall be avoided?

Null is considered to be an object. One could add a seperate check to make sure that bar is an object and bar is not null.

2. What is the output of this code?
false
true

3. What is the output of this code?
this.foo = bar
self.too = bar
this.too = undefined
self.too = bar

4. What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?

This prevents name clashes between different JS modules and libaries.

5. What is the significance, and what are the benefits, of including 'use strict' at the beginning of a JavaScript source file?

Forces errors that wouldn't have been reported to be thrown. This allows for things like making debugging easier, preventing accidental globals, eliminates this coercion, disallows duplicate parameter values, makes erval() safer, and throws erros on invalid usage of delete.

6. Consider the two functions below. Will they both return the same thing? Why or why not?

No, since nothing follows return in foo2, it is going to think that you just forgot the simicolon there and put it in there for you, this returning undefined.

7. What will the code below output?
0.30000000000004
false

8. In what order will the numebrs 1-4 be logged to the console when the code below is executed? Why?
1
4
3
2

9. Write a simple function that returns a boolean indicating where or not a string is a palindrome
function isPalidome(str) {
    str = str.replace(/\W/g, '').toLowerCase();
    return (str == str.split('').reverse().join(''));
}

10. Write a sum method which will woirk properly when invoked using either syntax below.
function sum(x) {
  if (arguments.length == 2) {
    return arguments[0] + arguments[1];
  } else {
    return function(y) { return x + y; };
  }
}

11. Consider the following code snippet
a. The button is going to output 5 no matter what.
b. 
for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', (function(i) {
    return function() { console.log(i); };
  })(i));
  document.body.appendChild(btn);
}

12. Sets both things in the array as 'string' = undefined in the d object

13. "array 1: length=5 last=j,o,n,e,s"
"array 2: length=5 last=j,o,n,e,s"

14. 
"122"
"32"
"02"
"112"
"NaN2"
NaN

15. 
var list = readHugeList();

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...
        setTimeout( nextListItem, 0);
    }
};

16.
Closure is having a function with variables an a function in it that can access those variables.

17.
0 || 1 = 1
1 || 2 = 1
0 && 1 = 0
1 && 2 = 2

18.
true
false

19.
456

20.
3628800

21. 1

22. 
Undefined
John Doe

23.
function Traverse(p_element,p_callback) {
   p_callback(p_element);
   var list = p_element.children;
   for (var i = 0; i < list.length; i++) {
       Traverse(list[i],p_callback);  // recursive call
   }
}

24. 
10
2

25.
1
undefined
2

26.
undefined

27.
0 1 2 3 4

28.
true 
false

29.
push
unshift

30.
No.
Undefined

31.
True

32.
String

33.
5 5 5 5 5
(Var sucks and is worthless)

34.
NaN is not a number.
Number.
NaN compared to anything is always false.

35.
3

36.function isInteger(x) { return (x ^ 0) === x; } 


37.
var obj = {a: 1 ,b: 2}
var objclone = Object.assign({},obj);