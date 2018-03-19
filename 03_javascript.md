# Javascript
```html
1  Types                                // Done
2  References                           // Done
3  Objects                              // 2
4  Arrays                               // Done
5  Destructuring                        // Done
6  Strings                              // Done
7  Functions                            // 2
8  Arrow Functions                      // Done
9  Classes & Constructors               // 3
10 Modules                              // Done
11 Iterators and Generators             // Done
12 Properties                           // Done
13 Variables                            // Done
14 Hoisting                             // 2
15 Comparison Operators & Equality      // 2 - 15.5
16 Blocks                               // Done
17 Control Statements                   // Done
18 Comments                             // Done
19 Whitespace                           // Done
20 Commas                               // Done
21 Semicolons                           // Done
22 Type Casting & Coercion              // Done
23 Naming Conventions                   // Done
24 Accessors                            // 3
25 Events                               // 2
26 jQuery                               // Done
27 ECMAScript 5 Compatibility           // bad
28 ECMAScript 6+ (ES 2015+) Styles      // bad
29 Standard Library                     // Done
30 Testing                              // Done
31 Performance                          // ...
32 Resources                            // ...
33 In the Wild                          // ...
34 Translation                          // ...
35 The JavaScript Style Guide Guide     // ...
36 Chat With Us About JavaScript        // ...
37 Contributors                         // ...
38 License                              // ...
```
## Browser environment ( `Môi trường trình duyệt` )
### Browser objects ( `Đối tượng trình duyệt` )
```js
var title = document.title;
var href = window.location.href;

document.write("hello work");            // hiện chữ trên html
window.alert('in box');                  // hiện box
confirm('yes or no?');                   // y/n
prompt('What is your name?');            // nhập

console.log('in ra text');
console.error('in ra lỗi');
console.info('in ra thông tin');
console.warn('in ra chú ý');
```
### Variables & Types ( `biến và loại` )
#### Number
```js
var s = 2;
```
#### String
```js
var c = "You're empty.\nSo are you.";
```
#### Boolean
```js
var dung = true;
var sai = false;
```
#### Null and Undefined
```js
var neo;                                 // Type is undefined (Không xác định)
neo = null;                              // Type is object (đối tượng)
```
## Arrays ( `mảng` )
### Creating
```js
var a = [];                              // không có yếu tố / []
var b = new Array();                     // ~~~~~~~~~~~~~~~
var c = [,,,,];                          // 4 yếu tố, tất cả undefined / []
var d = new Array(4);                    // ~~~~~~~~~~~~~~~~~~~~~~~~~~
var e = ["the", 1, true];                // 3 yếu tố khác nhau của các loại / ["the", 1, true]
var f = new Array("the", 1, true);       // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
```
### Reading and writing
```js
var a = ["white"];                       // Bắt đầu với một mảng một phần tử / ["white"]
var b = a[0];                            // b => white
var c = a[100];                          // c => undefined (no error)
a[1] = 3.14;                             // a => ["white", 3.14]
var i = 2;                               // i = 2
a[i] = 3;                                // a => ["white", 3.14, 3]
a[i + 1] = "rabbit";                     // a => ["white", 3.14, 3, "rabbit"]
a[a[i]] = a[0];                          // a => ["white", 3.14, 3, "white"]
var d = a.length;                        // d => 4 / đếm pt
```
### Adding and deleting
```js
var a = ["follow", "the", "white", "rabbit"];

var b = a.pop();               // a => ["follow", "the", "white"]           // xóa pt cuối
                               // b => "rabbit"
var c = a.push("RABBIT");      // a => ["follow", "the", "white", "RABBIT"] // thêm vào pt cuối
                               // c => 4 (new length)
var d = a.shift();             // a => ["the", "white", "RABBIT"]           // xóa pt đầu
                               // d => "follow"
var e = a.unshift("FOLLOW");   // a => ["FOLLOW", "the", "white", "RABBIT"] // thêm vào pt đầu
                               // e => 4 (new length)
var f = a.splice(2, 1);        // a => ["FOLLOW", "the", "RABBIT"]          // xóa pt chọn
                               // f => "white"
var g = a.splice(1, 2, "ME");  // a => ["FOLLOW", "ME"]                     // thêm pt chọn
                               // g => ["the", "RABBIT"]
```            
## Operators ( `vận hành` )
### Arithmetics ( `toán tử` )
```js
var a = 6 + 4;                           // a => 10
var b = -a;                              // b => -10
var c = 6 - 4;                           // c => 2

var d = 1, e = ++d;                      // d and e are both 2
var f = 1, g = f++;                      // f is 2, g is 1
var h = 7, i = --h;                      // h and i are both 6
var j = 7, k = j--;                      // j is 6, k is 7

var l = 3 * 3                            // l => 9
var m = 10 / 3                           // m => 3.3333333333333335
var n = 10 % 3                           // n => 1

var o = "Dodge" + " " + "this."          // o => "Dodge this.";
```
### Equality ( `bằng` )
```js
var a = "2" == 2;                        // a => true  / == tương đối
var b = "2" != 2;                        // b => false

var c = "2" === 2;                       // c => false  / === tuyệt đối
var d = "2" !== 2;                       // d => true
```
### Strict equality ( `so sánh` )
```js
var a = 2 > 2;                           // a => false
var b = 2 <= 2;                          // b => true
var c = "2" >= 2;                        // c => true
var d = 2 < 2;                           // d => false
var e = 2 <= 2;                          // e => true
var f = 'abc' < 'def'                    // f => true
```
### Logical ( `hợp lý` )
```js
var a = true && false;                   // a => false
var b = true || false;                   // b => true
var c = !true;                           // c => false
```
### Bitwise ( `số bit` )
```js
var a = 42 & 2                           // a =>          2  (AND)
var b =  7 | 2                           // b =>          2  (OR)
var c =  7 ^ 2                           // c =>          7  (OR)
var d = ~8                               // d =>         -7  (NOT)
var e =  1 << 3                          // e =>          8  (Shift left)
var f =  8 >> 2                          // f =>          2  (Shift right)
var g = -1 >>  2                         // g =>         -1
var h = -1 >>> 2                         // h => 1073741823  (Shift right with zero fill)
```
### Assignment ( `chuyển đổi` )
```js
var a = 1, b = 0;
a += b                                   // a = a + b
a -= b                                   // a = a - b
a *= b                                   // a = a * b
a /= b                                   // a = a / b
a %= b                                   // a = a % b
a <<= b                                  // a = a << b
a >>= b                                  // a = a >> b
a >>>= b                                 // a = a >>> b
a &= b                                   // a = a & b
a |= b                                   // a = a | b
a ^= b                                   // a = a ^ b
```
#### in array
```js
var a = [1,9,4];
var b = (2 in a);                        // b => true (có 3 pt)
var c = (9 in a);                        // c => false
var d = (length in a);                   // d => true
```
#### typeof ( `xem kiểu` )
```js
var a = 3;
var b = typeof a;                        // b => "number"
var c = "";
var d = typeof c;                        // d => "string"
var e = true;
var f = typeof e;                        // f => "boolean"
```
## Type conversions ( `loại chuyển đổi` )
### Explicit ( `minh bạch` )
```js
// to Number
var a = Number("10");                    // a => 10
var b = Number(false);                   // b =>  0
var c = parseInt("10", 10);              // c => 10
var d = parseInt(10.2);                  // d => 10
var e = parseFloat("10.2");              // e => 10.2
// to String
var a = String(false);                   // a => "false"
var b = String(10);                      // b => "10"
var c = String(10.2);                    // c => "10.2"
var d = (10).toString();                 // d => "10"
// to Boolean
var a = Boolean(10);                     // a => true
var b = Boolean(0);                      // b => false
var c = Boolean(0.3);                    // c => true
var d = Boolean("true");                 // d => true
```
### Implicit ( `ngầm` )
```js
// to Number
var a = +"10";                           // a => 10
var b = "10" >> 0;                       // b => 10
var c = "10" * 1;                        // c => 10
var d = ~~"10";                          // d => 10
var e = "2" * "5";                       // e => 10 (both strings converts to number)
// to String
var a = 10 + "10";                       // a => "1010"
var b = "10" + "10";                     // b => "1010"
var c = 10 + " agents";                  // c => "10 agents"
var d = 10 + 10 + " agents";             // d => "20 agents"
// to Boolean
var a = !!'morpheus';                    // a => true
var b = !!'';                            // b => false
var c = !!'0';                           // c => true
var d = !!'1';                           // d => true
```
### Summary ( `Tóm lược` )
```js
Value                           String                     Number                                  Boolean

undefined......................."undefined".................NaN.....................................false
null............................"null"......................0.......................................false
true............................"true"......................1............................................
false..........................."false".....................0............................................
"" (empty string)...........................................0.......................................false
"1.2" (nonempty, numeric)...................................1.2.....................................true
"one" (nonempty, non-numeric)...............................NaN.....................................true
0..............................."0".................................................................false
-0.............................."0".................................................................false
NaN............................."NaN"...............................................................false
Infinity........................"Infinity"..........................................................true
-Infinity......................."-Infinity".........................................................true
1 (finite, non-zero)............"1".................................................................true
[] (empty array)................""...........................0.......................................true
[9] (1 numeric elt)............."9"..........................9.......................................true
['a'] (any other array).........use join() method............NaN.....................................true
```
## Statements ( `câu lệnh` )
### if/else
```js
if (username == null) {                   // if username is null or undefined,
  username = "Trinity";                   // define it
}

if (bulletCount === 1) {
  bulletCount += 'bullet';
} else {
  bulletCount += 'bullets';
}

var bulletCount = (bulletCount === 1) ? "bullet" : "bullets";
```
### switch
```js
var quote;
switch (quote) {
  case 'Smith':
    quote = 'Goodbye, Mr. Anderson...';
    break;
  case 'Neo':
    quote = 'I know kung fu.';
    break;
  default:
    quote = 'What is the Matrix?';
    break;
}
```
### loops
```js
for (var i = 0; i < 10; i++) {
  doSomething();
}
--------------
var count = 0;
while (count < 10) {
  doSomething();
  count++;
}
--------------
var count = 100;
do {
  doSomething();
} while (--count > 0);
```
### for...in loops
```js
var a = [123, 456, 789];
for (var i in a) {                        // DO NOT use with arrays
  doSomething(a[i]);
}
```
## Simple functions ( `Chức năng đơn giản` )
```js
function functionName(var1, var2, var3) { // no variable types
  /*
    Some code here
  */
  return returnVal;                       // optional (không bắt buộc)
}

function useArgs(var1, var2, var3) {
  var a = arguments.length;               // array containing all the arguments (mảng chưa all đối số)
  var result = "";
  for (var i = 0; i < a; i++) {
    result += " " + arguments[i];
  }
  return result;
}

// document.getElementById("variable-scope").innerHTML = myFunction(10, 4); 

var b = useArgs("Déjà", "vu");             // b => " Déjà vu", var3 = undefined
```
## Variable scope ( `Phạm vi biến` )
### Global vs local
```js
var name = "Andy";                         // not in a function => variable is global

function foo() {
  var lastName = "WACHOWSKI";              // inside a function => variable is local
  return name + ' ' + lastname;            // can access global variable "name"
}
foo();

var a = lastName;                          // ReferenceError lastName is not defined
                                           // can not access local variable "lastName"
```
### Do not forget var ( `đừng quên var` )
```js
var i = 1;
function foo() {
  var i = 3;
}
foo();
var a = i;                                // a => 1

var i = 1;
function foo() {
  i = 3;                                  // no var keyword !!! :-(
  j = 4;                                  // no var keyword !!! :-(
}
foo();
var a = i;                                // a => 3
var b = j;                                // b => 4
```
## EX Javascript
### EX in nhap
```js
<input type="text" id="nut" />
<input type="button" value="click" onclick="xin_chao()" /> 

function xin_chao()
{
    // document.getElementById("1").innerHTML=document.write("HAHA");
    // document.getElementById("1").innerHTML=Date();
    documen.getElemnetById('nut').value;
}
```
### EX if/else
```js
<input type="button" value="chẵn lẻ" onclick="chan_le()" /> 

function chan_le() {
  var a=prompt("chương trình tìm số chẵn lẻ:","nhập");
  if(a%2==0){
    alert("số chẳn");
  } else {
    alert("số lẻ");
  }
  return result;
}
```
### EX if ... else
```js
<input type="button" value="học lực" onclick="hoc_luc()" /> 

function hoc_luc() {
  var b=prompt("chương trình tính học lực:","nhập điểm");
  if(b<5) {
    alert("yếu");
  } else if(b<=7) {
    alert("trung bình");
  } else if(b<=9) {
    alert("khá");
  } else {
    alert("giỏi")
  }
  return result; 
}
```
### EX swich case
```js
<input type="button" value="điểm số" onclick="diem_so()" /> 

function diem_so() {
  var a = 5;
  switch(a) {
    case 1:
      alert("thi lai");
      break;
    case 2:
      alert("hoc lai");
      break;
    default:
      alert("123");
      break;
  }
  return result;
}
```
### EX for and do/while
```js
<input type="button" value="tính tích" onclick="tinh_tich()" /> 

function tinh_tich() {
  n=0;
  do {
  n=prompt("mời bạn nhập số vào đây:");
  tich=1;
  for(i=1;i<=n;i++)
  {
    if(i%2==0)
    {
      tich=tich*i;
    }
  }
  alert(tich);
  n=prompt("mời bạn tiếp tục nhấn 0 or no 124..: ");
  }
  while (n==0)
  return result;
}
```
### EX while
```js
<input type="button" value="tính tích2" onclick="tinh_tich2()" /> 

function tinh_tich2() {
  n=prompt("mời bạn nhập n vào đây: ");
  tich=1;
  i=1;
  while (i<=n)
  {
    tich=tich*i;
    i=i+2;
  }
  alert(tich); 
}
```
### EX kiểm tra 
```js
<input type="button" value="kiểm tra" onclick="kiem_tra()" /> 

function kiem_tra() {
  a=prompt("nhập a: ");
  b=prompt("nhập b: ");
  c=prompt("nhập c: ");
  iMax=a;
  if (b>iMax) {
    iMax=b;
  }
  if (c>iMax) {
    iMax=c;
  }
  alert(iMax);
}
```
### EX kiểm tra 2
```js
<input type="button" value="kiểm tra 2" onclick="kiem_tra2()" />   

function kiem_tra2() {
  n=prompt("nhập số lượng ss: ");
  iMax=4;
  for(i=1; i<=n; i++)
  {
    ss=prompt("nhập số ss: ")
  if (ss>iMax) {
    iMax=ss;
  }
  }
  alert(iMax);
}
```
### EX vẽ ô
```js
function hcn() {
  cd=prompt("Mời bạn nhập chiều dài cho cạnh dài","nhập đây...");
  cn=prompt("mời bạn nhập độ rộng cho cạnh ngắn","nhập đây...");
  document.write('<table border="1">');
  for(k=1;k<=cn;k++)
  {
    document.write('<tr>');
    for (i=1; i<=cd; i++)
    {
      document.write('<td>');
      document.write('*');
      document.write('</td>');
    }
    document.write('</tr>');
  }
  document.write('</table >');
}
```
### EX Neolab
```js
$(document).ready(function (){
  for(var i=1;i<=100;i++, msg=""){
    if (!(i%3)) msg+="Fizz"; 
    if (!(i%5)) msg+="Buzz"; 
    console.log(msg || i); 
  }
});

// aa
e.currentTarget : lấy yếu tố nghe thực hiện 1 sự kiện
.textContent    : trả về nội dung văn bản
eval()          : thực hiện 1 biểu thức
indexOf('...')  : trả về vị trí xuất hiện đầu tiên của giá trị
replace('x','y'): tháy x thành y
```