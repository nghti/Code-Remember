# Board Javascript on [trello](https://trello.com/b/LDdECz87/javascrip)
## [3 cách dùng script](https://trello.com/c/5sm3mWW3/4-js-javascript-l%C3%A0-g%C3%AC-1) ( Trong File, import, trong thẻ )
## [Variables](https://trello.com/c/tr412o82/5-js-khai-b%C3%A1o-bi%E1%BA%BFn-2) (biến ko dấu, bắt đầu chữ hoặc _)

## [Operation](https://trello.com/c/NTktUUCX/7-js-các-toán-tử-4) (Toán tử)

```
- toán tử toán học; +, -, *, /, %, ++, --
- toán tử gán; =, +=, -=, *=, /=, %=
- toán tử quan hệ; >, <, >=, <=, ==, != ; TRUE / FALSE
- toán tử luận lý; &&, ||, ! ; TRUE / FALSE
- toán tử so sánh; ==, ===
- Nhớ độ ưu tiên của toán tử; Nhân chia trước ...
```

## [Number](https://trello.com/c/qdhiQlai/34-js-number-object-31)

```javascript
Number(String_so)                       // Chuyển sang kiểu number
parseInt(String_so_dau)                 // Như Number nhưng chỉ lấy số đầu bỏ string
parseFloat(String_so_dau)               // Như parseInt nhưng lấy được số lẻ (float)
```

>[More](https://trello.com/c/pMyMfZrg/35-js-number-object-function-32)

## [String](https://trello.com/c/mNFplg4v/31-js-string-object-function-27)
```javascript
typeof number                           // check type
number.toString() / array.toString()    // chuyển qua string
String.split()                          // Chuyển chuỗi sang mảng

String.trim()                           // Loại bỏ span đầu và cuối
String.concat(String2)                  // Nối thêm chuỗi
String.replace(str_find, str_replace)   // Tìm kiếm và lặp chuỗi

String.slice(start, end)                // Cắt chuỗi nếu âm thì ngược lại
    String.substring(start, end)        // Như trên nhưng ko âm
    String.substr(start, length)        // Cắt bao nhiêu chữ 

String.indexOf(str)                     // Tìm vị trí ký tự
    String.lastIndexOf(str)             // Như trên nhưng tìm con cuối cùng
    String.search(str)                  // Giống indexOf()
    String.charAt(4)                    // Tìm vị trí của số

String.includes('con')                  // có con ko
    String.startsWith('con')            // Bắt đầu bằng con ko
    String.endsWith('con')              // Kết thúc bằng con ko

```
> [More](https://trello.com/c/mNFplg4v/31-js-string-object-function-27)

## [Array](https://trello.com/c/pffrZkNv/32-js-array-object-29) (mảng Chứa nhiều giá trị)

```javascript
let name_array = [1,2,3]
name_array[0]                           // Lấy phần tử trong mảng = 1
name_array.join('-')                    // Hiển thị PT ra ngoài theo kiểu chuổi

array.push('add')                       // Thêm PT vào cuối mảng
    array.unshift()                     // Thêm PT vào đầu mảng
    array.pop()                         // Xóa PT cuối của mảng
array.shift()                           // Xóa PT đầu của mảng
array.splice(position, num_element_remove, value1_add, value2_add, ...)
// chọn Vị trí, xóa n*PT, them1, them2, ... nhiều PT
array.sort()                            // Sắp xếp lại theo alpha
array.reverse()                         // Đảo ngược lại vị trí
array_1.concat(array_2)                 // Nối 2 mảng lại
array.slice(start, end)                 // Lấy số PT trong mảng

array.forEach(fun)                      // Chạy qua mảng thực hiện func nào đó
array.map(func)                         // Chạy qua mảng kiểu forEach() cho ra mảng mới
array.filter(func)                      // lọc các phần tử trong mảng ra mảng mới
array.find(fucn)                        // Trả về value đầu tiên thỏa mãn điều kiện
```
> [More](https://trello.com/c/JGtZNjLs/33-js-array-object-function-30)

## [Object](https://trello.com/c/xmiQTwXR/46-js-object-là-gì-43) (Đối tượng)

```js
let Comment = {}
let Comment = {
    title : "thuoc tinh",
    content : "gia tri cua thuoc tinh",
    name: function() {
        document.write('nghti')
    }
}
```

## [Functions](https://trello.com/c/SduJ3Qwi/10-js-function-7) (Hàm)

```javascript
function print_function(n)
{
    for(let i =1; i < n; i++ ) {
        document.write(i)
    }
}
print_function(4)
```

## <b>Control Statement</b> Câu lệnh điều khiển

- [if/else](https://trello.com/c/lGeiSt5C/8-js-l%E1%BB%87nh-if-else-5)
```js
NULL => False
Rỗng(empty) => False
undefined => False
Số khác 0 => TRUE
Số 0 => FALSE
```
- [switch, case](https://trello.com/c/2BwQc2qC/9-js-l%E1%BB%87nh-switch-case-6)
```js
switch (variable)
{
    case value_1 : {
        // do some thing
        break;
    }
    case value_2 : {
        // do some thing
        break;
    }
    default : {
        // do something
    }
}
`break` là thoát chương trình
`default` trường hợp ngoại lệ
```
- [Vòng lặp for](https://trello.com/c/gWdye63t/15-js-vòng-lặp-for-12)
```html
var i = 0;
for (i = 0; i < 100; i++){
    // Dòng lệnh xử lý vòng lặp
}
```
- [Vòng lặp while, do while](https://trello.com/c/pDQ9C9GU/16-js-v%C3%B2ng-l%E1%BA%B7p-while-do-while-13)
```js
- Vòng lặp while và do while dùng để lặp với trường hợp ta không biết chính xác số lần lặp là bao nhiêu
- trường hợp điều kiện dừng vòng lặp phức tạp, điều này hoàn toàn khác với vòng lặp for
- Đối với vòng lặp do while thì luôn luôn lặp ít nhất 1 lần tại vì nó thực hiện code bên trong lệnh do rồi mới kiểm tra điều kiện
```
- [break, continue](https://trello.com/c/qo6IcEVI/17-js-l%E1%BB%87nh-break-continue-14)
```js
- `break` dừng vòng lặp cho dù điều kiện của vòng lặp vẫn đang đúng
- `continue` bỏ qua một bước lặp nào đó
=> Ngoài vòng lặp for và vòng lặp while ra thì hai lệnh này có thể được dùng với tất cả các vòng lặp khác
=> giúp cho chương trình có thể hoạt động một cách lắc léo hơn
```

## [Event](https://trello.com/c/NsMWxLHg/18-js-sự-kiện-event-là-gì-15)

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

- [setTimeout(function, time), setInterval(function, time)](https://trello.com/c/PxctX5sT/14-js-settimeout-setinterval-11)
```js
`setTimeout(function(){alert('hien sau 3 giay')}, 3000)`
- dùng để thiết lập một khoảng thời gian nào đó sẽ thực hiện một nhiệm vụ nào đó và nó chỉ thực hiện đúng `một lần`.
`clearTimeout(action)` 
- biết trên dùng hủy bỏ let action = setTimeout

`setInterval(function, time)`
- như trên nhưng `N lần`
`clearInterval()` 
- như trên for setInterval
```
- [Thêm sự kiện bằng javascrip & for](https://trello.com/c/sFHdiH08/19-js-thêm-sự-kiện-event-16)
```js
Tại sao nên gán `sự kiện bằng Javascript` thay vì `gán trực tiếp bằng mã HTML` >> VD có 100 thẻ a ko thể gán 100 sự kiện onclick (Dùng DOM thêm vòng lặp)
```
- [return true/false](https://trello.com/c/JGaACbVx/20-js-return-true-false-17)
```js
- Hàm có return và hàm không có return
    + Thông thường ta sử dụng return ở những trường hợp cần lấy kết quả đó để xử lý tiếp
    + Còn trả về kq luôn thì dùng hàm không return
    + Như vậy tùy vào mục đích mà ta dùng có return hay không có return

- True/False 
    + Tóm lại return của events trong javascript dùng để xác nhận một `sự kiện` nào đó thực thi `thành công` hay `thất bại`
    + Từ đó đối tượng HTML sẽ có những xử lý `cho phép` hoặc `không cho phép` thao tác đó thực hiện tiếp như validate ko
    + Nếu có return sẽ trả về giá trị
```
- [Sự kiện onload](https://trello.com/c/LxcgVCHs/21-js-sự-kiện-onload-18)
```js
- Javascript : `onload` cho all `window.onload`
    + Javascript sẽ chạy biên dịch từ trên xuống dưới và từ trái qua phải
    + Chính vì vậy khi bạn sử dụng một hàm mà `phía trên nó` không tồn tại hàm đó thì sẽ bị báo lỗi undefined ngay. Và để giải quyết vấn đề này thì ta sẽ dùng `sự kiện onload trong javascript`.

    window.onload = function()
    {
        // code
    };
    => code sẽ chạy khi trình duyệt load xong mọi thứ
```
- [addEventListener](https://trello.com/c/VK7T4Qxn/22-js-hàm-addeventlistener-19)
```js
// Lấy đối tượng
var input = document.getElementById("txt-val");
// Thêm sự kiện cho đối tượng
input.addEventListener('keyup', function(){
    // Gán giá trị vào div
    document.getElementById('result').innerHTML = input.value;
});
```
- [removeEventListener](https://trello.com/c/0C6JqmyI/23-js-hàm-removeeventlistener-20)
```js
Tóm lại hàm `removeEventListener()` dùng để xóa một hành động ra khỏi một sự kiện nào đó và hành động đó `phải được định nghĩa bằng một hàm` chứ không gán trực tiếp vào

object.removeEventListener("click", some_action);
+ object: (html ...)
+ some_action: Tên của function
```
## [DOM](https://trello.com/c/mHZzhQUp/24-js-dom-là-gì-21) (Document Object Model)
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

## [BOM](https://trello.com/c/yrdLKCEJ/39-js-bom-là-gì-36) (Browser Object Model)
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