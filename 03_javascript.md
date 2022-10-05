## [3 cách dùng script](https://trello.com/c/5sm3mWW3/4-js-javascript-l%C3%A0-g%C3%AC-1)
## Variables [Biến](https://trello.com/c/tr412o82/5-js-khai-b%C3%A1o-bi%E1%BA%BFn-2)
[Global vs Local](https://trello.com/c/OAP3LT1j/11-js-biến-toàn-cục-và-cục-bộ-8)

```
- `var` Toàn cục
- `let` Cục bộ cho cập nhật biến không cho khai báo lại biến
- `const` Cục bộ không cho cập nhật hay khai báo lại biến
```

## Operation [Toán tử](https://trello.com/c/NTktUUCX/7-js-các-toán-tử-4)

```
- toán tử toán học
- toán tử gán
- toán tử quan hệ
- toán tử luận lý
- toán tử so sánh
- Nhớ độ ưu tiên của toán tử
```

## Number [Số](https://trello.com/c/qdhiQlai/34-js-number-object-31)
> [Number Object Function](https://trello.com/c/pMyMfZrg/35-js-number-object-function-32)

```javascript
valueOf()                               // Trả vê giá trị gốc của nó
Number(String_so)                       // Chuyển sang kiểu number
parseInt(String_so_dau)                 // Như Number nhưng chỉ lấy số đầu bỏ string
parseFloat(String_so_dau)               // Như parseInt nhưng lấy được số lẻ (float)
so.toString()                           // number to string
```

~~so.toFixed(n), so.toPrecision(n), number.toExponential()
Number.isSafeInteger(), Number.isNaN(), Number.isInteger(), Number.isFinite()~~

## String [Chuỗi](https://trello.com/c/LTxZALUI/30-js-string-object-27)

```javascript
let title = "hello string"
```
> [String Object Function](https://trello.com/c/mNFplg4v/31-js-string-object-function-28)

> [Hàm typeof](https://trello.com/c/0Kj1fKad/38-js-hàm-typeof-35)
```javascript
typeof number                           // check type
number.toString()                       // chuyển qua string
String.indexOf(str)                     // Tìm vị trí ký tự
String.lastIndexOf(str)                 // Như trên nhưng tìm con cuối cùng
String.search(str)                      // Giống indexOf()

String.slice(start, end)                // Cắt chuỗi nếu âm thì ngược lại
String.substring(start, end)            // Như trên nhưng ko âm
String.substr(start, length)            // Cắt bao nhiêu chữ 

String.replace(str_find, str_replace)   // Tìm kiếm và lặp chuỗi

String.concat('add')                    // Nối thêm chuỗi
String.charAt(4)                        // Tìm vị trí của số
String.split()                          // Chuyển chuỗi sang mảng

String.trim()                           // Loại bỏ span đầu và cuối
String.startsWith('con')                // Bắt đầu bằng con ko
String.endsWith('con')                  // Kết thúc bằng con ko
String.includes('con')                  // có con ko

```

~~String.toUpperCase(), String.toLowerCase(), String.fromCharCode()
string.repeat(), string.match(), string.localeCompare(),~~

## Array [mảng Chứa nhiều giá trị](https://trello.com/c/pffrZkNv/32-js-array-object-29)

```javascript
var name_array = new Array(1,2,3)
var name_array = [1,2,3]

name_array[0]                           // Lấy phần tử trong mảng
name_array.join('-')                    // Hiển thị PT ra ngoài theo kiểu chuổi
```

> [Array Object Function](https://trello.com/c/JGtZNjLs/33-js-array-object-function-30)

```javascript
array.valueOf()                         // Trả về giá trị gốc cảu mảng

array.push('add')                       // Thêm PT vào cuối mảng
array.unshift()                         // Thêm PT vào đầu mảng
array.pop()                             // Xóa PT cuối của mảng
array.shift()                           // Xóa PT đầu của mảng
array.splice(position_add, num_element_remove, value1, value2, ...)

array.sort()                            // Sắp xếp lại theo alpha
array.reverse()                         // Đảo ngược lại vị trí
array_1.concat(array_2)                 // Nối 2 mảng lại
array.slice(start, end)                 // Lấy số PT trong mảng

Array.isArray('array')                  // Kiểm tra đối tượng phải mảng ko
array.some(fun)                         // Chạy qua mảng để kiểm tra or thực hiện chức năng nào đó
array.every(fun)                        // Chạy qua mảng để kiểm tra or thực hiện chức năng nào đó

array.forEach(fun)                      // Chạy qua mảng thực hiện func nào đó
array.map(func)                         // Chạy qua mảng kiểu forEach() cho ra mảng mới
array.filter(func)                      // lọc các phần tử trong mảng ra mảng mới

array.find(fucn)                        // Trả về value đầu tiên thỏa mãn điều kiện
array.findIndex()                       // Trả về key đầu tiên thỏa mãn điều kiện
array.indexOf('html')                   // Tìm value trả ra key
array.lastIndexOf()                     // Tìm value trả ra key cuối
array.toString()                        // chuổi sang mảng cách nhau dấu ,
```

~~array.fill(), array.copyWithin(), array.reduce(), array.reduceRight()~~

## Object [Đối tượng](https://trello.com/c/xmiQTwXR/46-js-object-là-gì-43)

```js
let Comment = new Object()
let Comment = {}
let Comment = {
    title : "doi tuwong",
    content : "khai bao doi tuong",
    name: function() {
        document.write('nghti')
    }
}
```

## Functions [Hàm](https://trello.com/c/SduJ3Qwi/10-js-function-7)

```javascript
function print_function(n)
{
    for(let i =1; i < n; i++ ) {
        document.write(i)
    }
}
print_function(4)
```

# Control Statement <b>Câu lệnh điều khiển</b>

- [if/else](https://trello.com/c/lGeiSt5C/8-js-l%E1%BB%87nh-if-else-5)
- [switch, case](https://trello.com/c/2BwQc2qC/9-js-l%E1%BB%87nh-switch-case-6)
- [Vòng lặp for](https://trello.com/c/gWdye63t/15-js-vòng-lặp-for-12)
- [Vòng lặp while, do while](https://trello.com/c/pDQ9C9GU/16-js-v%C3%B2ng-l%E1%BA%B7p-while-do-while-13)
- [break, continue](https://trello.com/c/qo6IcEVI/17-js-l%E1%BB%87nh-break-continue-14)

# Event [Sự kiện](https://trello.com/c/NsMWxLHg/18-js-sự-kiện-event-là-gì-15)

```html
STT	Event Name	    Description
1	onclick             Xảy ra khi click vào thẻ HTML
2	ondbclick	    Xảy ra khi double click vào thẻ HTML
3	onchange	    Xảy ra khi giá trị (value) của thẻ HTML đổi. Thường dùng form input
9	onkeydown	    Xảy ra khi gõ một phím bất kì vào ô input
10	onload	            Sảy ra khi thẻ HTML bắt đầu chạy
11	onkeyup	            Xảy ra khi bạn gõ phím nhưng lúc bạn nhã phím ra sẽ được kích hoạt
12	onkeypress	    Xảy ra khi bạn nhấn môt phím vào ô input
14	... more
```

- [<h2>setTimeout(function, time), setInterval(function, time)</h2>](https://trello.com/c/PxctX5sT/14-js-settimeout-setinterval-11)
- [<h2>Thêm sự kiện bằng javascrip & for</h2>](https://trello.com/c/sFHdiH08/19-js-thêm-sự-kiện-event-16)
- [<h2>return true/false</h2>](https://trello.com/c/JGaACbVx/20-js-return-true-false-17)
- [<h2>Sự kiện onload</h2>](https://trello.com/c/LxcgVCHs/21-js-sự-kiện-onload-18)
- [<h2>addEventListener</h2>](https://trello.com/c/VK7T4Qxn/22-js-hàm-addeventlistener-19)
- [<h2>removeEventListener</h2>](https://trello.com/c/0C6JqmyI/23-js-hàm-removeeventlistener-20)

## DOM [Document Object Model](https://trello.com/c/mHZzhQUp/24-js-dom-là-gì-21)
- [DOM Element](https://trello.com/c/qOtlzmLX/25-js-dom-element-22)

```javascript
var element = document.getElementById('website')
document.getElementsByTagName('input');
document.getElementsByClassName('website')
document.querySelectorAll("div input.website"
element.value
element[0].value
```

- [DOM HTML](https://trello.com/c/PpvIPtcC/26-js-dom-html-23)

```javascript
var html = document.getElementById("content")
html.innerHTML
html.innerHTML = "<h2>noi dung</h2>"
html.attributeName
html.attributeName = "new value"
>>
html.type = "button"
```

- [DOM CSS](https://trello.com/c/qCl10JA9/27-js-dom-css-24)

```javascript
document.getElementById("object").style.cssName = 'something';
>>
document.getElementById("object").style.background = 'red';
```

- [DOM Nodes](https://trello.com/c/L0Wvf20O/28-js-dom-nodes-25)

```javascript
document.createElement('h2')
document.createTextNode('text')
Node.appendChild(h2)
Node.insertBefore(node_insert, node_child)
Node.removeChild(node_remove)
Node.replaceChild(node_new, node_replace)
```

## BOM [Browser Object Model](https://trello.com/c/yrdLKCEJ/39-js-bom-là-gì-36)
- [BOM Window](https://trello.com/c/nbvXKzip/40-js-bom-window-37)
> Window là một đối tượng toàn cục và ở đâu trong website cũng có thể sử dụng được.

```javascript
window.innerHeight
window.innerWidth
...
var windowObj = window.open('url', 'name', 'options')
windowObj.close()
windowObj.moveTo(top, left)
windowObj.resizeTo(width, height)
```

- [BOM Location](https://trello.com/c/JBD0GqIm/41-js-bom-location-38)
> location : chuyên dùng xử lý URL của trang web

```javascript
// Phương thức
window.location
window.location.reload()                // Load lại trang web
window.location.assign(url)             // Load một trang mới 
window.location.replace(url)            // Ghi đè trang web không đưa vào lịch sử
window.location.href="url"              // Ghi đè trang web có đưa vào lịch sử
// Thuộc tính
https://www.w3schools.com/jsref/jsref_getfullyear.asp#12
http://admin.dmm.test:8080/orders#12

href                                    // ( https://www.w3schools.com/jsref/jsref_getfullyear.asp#12 )
origin                                  // ( https://www.w3schools.com )
host                                    // ( www.w3schools.com )
hostname                                // ( www.w3schools.com )
pathname                                // ( /jsref/jsref_getfullyear.asp#12 )
hash                                    // ( #12 )
port                                    // ( 8080 )
search                                  // lấy phần query string của URL
```

- [BOM History](https://trello.com/c/R80gSkSR/42-js-bom-history-39)

```javascript
window.history.length                   // Số trang đã lưu trong history 
window.history.back()                   // Trở lại trang trước
window.history.forward()                // Đi tới trang tiếp sai khi đã back()
window.history.go(-4)                   // Trở lại trang cách đây -4 lần
```

- [BOM Cookie](https://trello.com/c/GLLLvPOi/43-js-bom-cookie-40)

- [BOM Window Navigator](https://trello.com/c/8PUFCaiJ/44-js-bom-window-navigator-41)
> Window Navigator: Để kiểm tra thông tin người dùng như trình duyệt, hệ điều hành, cookie ...

```javascript
navigator.cookieEnabled
navigator.appName & navigator.appCodeName
navigator.product
navigator.appVersion / navigator.userAgent
navigator.platform
navigator.language
```

- [BOM Screen](https://trello.com/c/fjIMtZji/45-js-bom-screen-42)

```javascript
screen.width
screen.height
screen.availWidth
screen.availHeight
screen.colorDepth
screen.pixelDepth
```

## Date [Thời gian](https://trello.com/c/C07RqZRU/36-js-date-object-33)

> [Date Object Function](https://trello.com/c/fEPjquEY/37-js-date-object-function-34)