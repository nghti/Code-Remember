---------------------------------------------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// STUDY Javascript /////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
---------------------------------------------------------------------------------------------
**************
****************************
*************************************
-> / * Browser environment (Môi trường trình duyệt) * /
*************************************
****************************
**************
-------------------------------------> Integration (Tích hợp)
<!DOCTYPE html>
<html>
  <head>
    <script src="myscript1.js"></script>
    <script> /* some code */ </script>        
  </head>
  <body>

    <script src="myscript2.js"></script>   
  </body>
</html>
-------------------------------------> Browser objects (Đối tượng trình duyệt)
var title = document.title;
var href = window.location.href;
var userAgent = window.navigator.userAgent;

document.write("chào các bạn");                                         // hiện chữ trên html
window.alert('Never send a human to do a machine\'s job.');             // hiện box
var bluePill = confirm('Take the blue pill?');                          // y/n
var name = prompt('What is your name?');                                // nhập

console.log('Perhaps we are asking the wrong questions.');              // f12
console.error('Nothing. Just had a little déjà vu.');                   // x
console.info('A déjà vu is usually a glitch in the Matrix.');           // i
console.warn('The Matrix is a system, Neo. That system is our enemy.'); // A

**************
****************************
*************************************
-> / * Variables & Types (biến và loại) */
*************************************
****************************
**************
-------------------------------------> Number
var s = 2;
-------------------------------------> String
var c = "You're empty.\nSo are you.";       // \n xun hang
-------------------------------------> Boolean
var sai = false;
var dung = true;
-------------------------------------> Null and Undefined
var neo;          // Type is undefined
neo = null;       // Type is object (đối tượng)

**************
****************************
*************************************
-> / * Arrays (mảng) * /
*************************************
****************************
**************
-------------------------------------> Creating
var a = [];                         // không có yếu tố / []
var b = new Array();                // ~~~~~~~~~~~~~~~
var c = [,,,,];                     // 4 yếu tố, tất cả undefined / []
var d = new Array(4);               // ~~~~~~~~~~~~~~~~~~~~~~~~~~
var e = ["the", 1, true];           // 3 yếu tố khác nhau của các loại / ["the", 1, true]
var f = new Array("the", 1, true);  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
-------------------------------------> Reading and writing
var a = ["white"];    // Bắt đầu với một mảng một phần tử / ["white"]
var b = a[0];         // b => white
var c = a[100];       // c => undefined (no error)
a[1] = 3.14;          // a => ["white", 3.14]
var i = 2;            // i = 2pt
a[i] = 3;             // a => ["white", 3.14, 3]
a[i + 1] = "rabbit";  // a => ["white", 3.14, 3, "rabbit"]
a[a[i]] = a[0];       // a => ["white", 3.14, 3, "white"]
var d = a.length;     // d => 4
-------------------------------------> Adding and deleting
var a = ["follow", "the", "white", "rabbit"];

var b = a.pop();              // a => ["follow", "the", "white"]
                              // b => "rabbit"
var c = a.push("RABBIT");     // a => ["follow", "the", "white", "RABBIT"]
                              // c => 4 (new length)
var d = a.shift();            // a => ["the", "white", "RABBIT"]
                              // d => "follow"
var e = a.unshift("FOLLOW");  // a => ["FOLLOW", "the", "white", "RABBIT"]
                              // e => 4 (new length)
var f = a.splice(2, 1);       // a => ["FOLLOW", "the", "RABBIT"]
                              // f => "white"
var g = a.splice(1, 2, "ME"); // a => ["FOLLOW", "ME"]
                              // g => ["the", "RABBIT"]
                              
**************
****************************
*************************************
-> / * Operators (vận hành) * /
*************************************
****************************
**************
-------------------------------------> Arithmetics (toán tử)
var a = 6 + 4;                    // a => 10
var b = -a;                       // b => -10
var c = 6 - 4;                    // c => 2

var d = 1, e = ++d;               // d and e are both 2
var f = 1, g = f++;               // f is 2, g is 1
var h = 7, i = --h;               // h and i are both 6
var j = 7, k = j--;               // j is 6, k is 7

var l = 3 * 3                     // l => 9
var m = 10 / 3                    // m => 3.3333333333333335
var n = 10 % 3                    // n => 1

var o = "Dodge" + " " + "this."   // o => "Dodge this.";
-------------------------------------> Equality (bằng)
var a = "2" == 2;    // a => true  / == tương đối
var b = "2" != 2;    // b => false

var c = "2" === 2;   // c => false  / === tuyệt đối
var d = "2" !== 2;   // d => true
-------------------------------------> Strict equality (so sánh)
var a = 2 > 2;          // a => false
var b = 2 <= 2;         // b => true
var c = "2" >= 2;       // c => true
var d = 2 < 2;          // d => false
var e = 2 <= 2;         // e => true
var f = 'abc' < 'def'   // f => true
-------------------------------------> Logical (hợp lý)
var a = true && false;  // a => false
var b = true || false;  // b => true
var c = !true;          // c => false
-------------------------------------> Bitwise (số bit) *
var a = 42 & 2   // a =>          2  (AND)
var b =  7 | 2   // b =>          2  (OR)
var c =  7 ^ 2   // c =>          7  (XOR)
var d = ~8       // d =>         -7  (NOT)
var e =  1 << 3  // e =>          8  (Shift left)
var f =  8 >> 2  // f =>          2  (Shift right)
var g = -1 >>  2 // g =>         -1
var h = -1 >>> 2 // h => 1073741823  (Shift right with zero fill)
-------------------------------------> Assignment (chuyển đổi)
var a = 1, b = 0;
a += b    // a = a + b
a -= b    // a = a - b
a *= b    // a = a * b
a /= b    // a = a / b
a %= b    // a = a % b
a <<= b   // a = a << b
a >>= b   // a = a >> b
a >>>= b  // a = a >>> b
a &= b    // a = a & b
a |= b    // a = a | b
a ^= b    // a = a ^ b

// ===== in

var a = [1,9,4];
var b = (2 in a);          // b => true (có 3 pt)
var c = (9 in a);          // c => false
var d = (length in a);     // d => true

// ===== typeof

var a = 3;
var b = typeof a;   // b => "number"
var c = "";
var d = typeof c;   // d => "string"
var e = true;
var f = typeof e;   // f => "boolean"

**************
****************************
*************************************
-> / * Type conversions (Loại chuyển đổi) * /
*************************************
****************************
**************
-------------------------------------> Explicit (Minh bạch)
// to Number
var a = Number("10");         // a => 10
var b = Number(false);        // b =>  0
var c = parseInt("10", 10);   // c => 10
var d = parseInt(10.2);       // d => 10
var e = parseFloat("10.2");   // e => 10.2
// to String
var a = String(false);        // a => "false"
var b = String(10);           // b => "10"
var c = String(10.2);         // c => "10.2"
var d = (10).toString();      // d => "10"
// to Boolean
var a = Boolean(10);          // a => true
var b = Boolean(0);           // b => false
var c = Boolean(0.3);         // c => true
var d = Boolean("true");      // d => true
-------------------------------------> Implicit (ngầm)
// to Number
var a = +"10";                // a => 10
var b = "10" >> 0;            // b => 10
var c = "10" * 1;             // c => 10
var d = ~~"10";               // d => 10
var e = "2" * "5";            // e => 10 (both strings converts to number)
// to String
var a = 10 + "10";             // a => "1010"
var b = "10" + "10";           // b => "1010"
var c = 10 + " agents";        // c => "10 agents"
var d = 10 + 10 + " agents";   // d => "20 agents"
// to Boolean
var a = !!'morpheus';          // a => true
var b = !!'';                  // b => false
var c = !!'0';                 // c => true
var d = !!'1';                 // d => true
-------------------------------------> Summary (Tóm lược)
Value                           String                                Number                                  Boolean

undefined                       "undefined"                           NaN                                     false
null                            "null"                                0                                       false
true                            "true"                                1 
false                           "false"                               0 
"" (empty string)                                                     0                                       false
"1.2" (nonempty, numeric)                                             1.2                                     true
"one" (nonempty, non-numeric)                                         NaN                                     true
0                               "0"                                                                           false
-0                              "0"                                                                           false
NaN                             "NaN"                                                                         false
Infinity                        "Infinity"                                                                    true
-Infinity                       "-Infinity"                                                                   true
1 (finite, non-zero)            "1"                                                                           true
[] (empty array)                ""                                    0                                       true
[9] (1 numeric elt)             "9"                                   9                                       true
['a'] (any other array)         use join() method                     NaN                                     true

**************
****************************
*************************************
-> / * Statements (câu lệnh) * /
*************************************
****************************
**************
-------------------------------------> if/else
if (username == null) {  // if username is null or undefined,
  username = "Trinity";  // define it
}

if (bulletCount === 1) {
  bulletCount += 'bullet';
} else {
  bulletCount += 'bullets';
}

var user = (name == null) ? 'default user' : name;
-------------------------------------> switch
var quote;
switch (characterName) {
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
-------------------------------------> loops
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
-------------------------------------> for...in loops
var a = [123, 456, 789];
for (var i in a) {      // DO NOT use with arrays
  doSomething(a[i]);
}
**************
****************************
*************************************
-> / * Simple functions (Chức năng đơn giản) * /
*************************************
****************************
**************
function functionName(var1, var2, var3) { // no variable types
  /*
    Some code here
  */
  return returnVal;                       // optional
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

**************
****************************
*************************************
-> / * Variable scope (Phạm vi biến) * /
*************************************
****************************
**************
-------------------------------------> Global vs local
var name = "Andy";                         // not in a function => variable is global

function foo() {
  var lastName = "WACHOWSKI";              // inside a function => variable is local
  return name + ' ' + lastname;            // can access global variable "name"
}
foo();

var a = lastName;                          // ReferenceError lastName is not defined
                                           // can not access local variable "lastName"
-------------------------------------> Do not forget var (đừng quên var)
var i = 1;
function foo() {
  var i = 3;
}
foo();
var a = i;        // a => 1

var i = 1;
function foo() {
  i = 3;          // no var keyword !!! :-(
  j = 4;          // no var keyword !!! :-(
}
foo();
var a = i;        // a => 3
var b = j;        // b => 4

---------------------------------------------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// EX Javascript /////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
---------------------------------------------------------------------------------------------
-----------------
--------------------> // EX
-----------------
<form>
    <input type="button" value="click" onclick="xin_chao()" /> 
</form>

function xin_chao()
{
    // document.getElementById("1").innerHTML=document.write("HAHA");
    document.getElementById("1").innerHTML=Date();
}
-----------------
--------------------> // EX
-----------------
// if/else
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
-----------------
--------------------> // EX
-----------------
// if ... else
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
-----------------
--------------------> // EX
-----------------
// swich case
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
-----------------
--------------------> // EX
-----------------
// for and do/while
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
-----------------
--------------------> // EX
-----------------
// while
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
-----------------
--------------------> // EX
-----------------
// kiểm tra 
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
-----------------
--------------------> // EX
-----------------
// kiểm tra 2
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
</script>
-----------------
--------------------> // EX
-----------------
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

//OR code HTML All EX
---------------------
<body>
  <p id="1">Bấn vào nút bên dưới để xem sự thay đổi</p>
  <form>
      <input type="button" value="click" onclick="xin_chao()" /> 
      // if/else
      <input type="button" value="chẵn lẻ" onclick="chan_le()" /> 
      // if ... else
      <input type="button" value="học lực" onclick="hoc_luc()" /> 
      // swich case
      <input type="button" value="điểm số" onclick="diem_so()" /> 
      // for and do/while
      <input type="button" value="tính tích" onclick="tinh_tich()" /> 
      // while
      <input type="button" value="tính tích2" onclick="tinh_tich2()" /> 
      // kiểm tra 
      <input type="button" value="kiểm tra" onclick="kiem_tra()" /> 
      // kiểm tra 2
      <input type="button" value="kiểm tra 2" onclick="kiem_tra2()" /> 
  </form>
</body>