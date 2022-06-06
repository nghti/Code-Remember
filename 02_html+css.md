# HTML5

```html
1. khai báo đơn giản         // <!DOCTYPE html>, <meta charset="UTF-8">
2. các thẻ ngữ ngĩa new      // <header>, <footer>, ...
3. kiểm soát thuộc tính new  // ngày, giờ, lịch, ...
4. yếu tố đa phương tiện new // <audio>, <video>
5. yếu tố đồ họa new         // <svg>, <canvas>

>> Thẻ ngữ ngĩa
- <header>  // Định nghĩa khu vực header (phần đầu) của trang.
- <footer>  // Định nghĩa khu vực footer (phần cuối) của trang.
- <section> // Định nghĩa một khu vực (vùng bao).
- <article> // Định nghĩa một bài viết, một nội dung riêng biệt.
- <aside>   // Định nghĩa nội dung bên ngoài nội dung chính (thường là phần sidebar).
- <hgroup>  // Định nghĩa một nhóm các tiêu đề.
- <nav>     // Định nghĩa link danh mục (navigation)
- <mark>    // làm nổi bật văn bản.

>> New Input Types
- color
- date
- datetime
- datetime-local
- email
- month
- number
- range
- search
- tel
- time
- url
- week

>> Đa phương tiện
- audio
- video

>> Đồ họa
- svg
- canvas
```
# CSS3
```css
width: calc(100%/4)                 // Tính toán
width: 100vw                        // Full width
height: 100vh                       // Full height
table-layout: fixed;                // chia đều width cho các cột trong table

word-spacing: -6px                  // Cách chữ
letter-spacing: 8px                 // Cách từ
white-space:                        // trên dòng or rớt
writing-mode: vertical-lr           // Text theo chiều dọc

word-wrap: break-word               // từ xuống hàng
word-break: break-all               // chữ xuống hàng
text-overflow: ellipsis             // giới hạn và thay text

text-shadow: 0 0 3px blue           // width -> height -> mờ -> màu
box-shadow: 5px 10px 5px 10px #000  // width -> height -> mờ -> độ lan -> màu
box-sizing: border-box              // width and height đã bao gồm border
```
# Remember
## [<!DOCTYPE> là ji?](http://hocwebchuan.com/reference/tag/tag_doctype.php)

## Priority ( `độ ưu tiên trong css` )
> [on stackoverflow](https://stackoverflow.com/questions/1637343/what-are-the-priorities-among-css-selectors)

```html
!important
inline style
id
class
tag
```

## Safe CSS Default ( `Giá trị mặc định của thẻ` )
> [for default](http://nimbupani.com/safe-css-defaults.html)

> [for all](https://stackoverflow.com/questions/15901030/reset-remove-css-styles-for-element-only)

```css
max-width       // none
max-height      // none
float           // none
clear           // none
box-shadow      // none
text-shadow     // none
text-Transform  // none
Transform       // none
Transition      // none

background      // none or 0 0
border          // none or 0

border-radius   // 0
min-width       // 0
min-height      // 0

content         // normal
font            // normal
letter-spacing  // normal
line-height     // normal
white-space     // normal
word-spacing    // normal

width           // auto
height          // auto

z-index         // auto (not none or 0)

display         // inline
opacity         // 1
overflow        // visible
visibility      // visible
position        // static (not relative)
vertical-align  // baseline
```

## Pseudo in css ( `Phần tử giả của bộ chọn` )
> [on page](http://vietjack.com/css/pseudo_element_trong_css.jsp)

```css
:before         // vào trước một phần tử
:after          // vào sau một phần tử
:first-line     // cho dòng đầu tiên của đoạn văn
:first-letter   // cho chữ cái đầu tiên
```

## Table
> [on page](https://html.com/tables/rowspan-colspan/)

```html
colspan="2" // Chiếm 2 cột
rowspan="2" // chiếm 2 hàng
```

## Tag inline/block
> [on w3s](https://www.w3schools.com/html/html_blocks.asp)

- Block-level Elements

```html
<p> <h1>-<h6>

<table> <form> <ul> <ol> <li> <hr>

<div> <section> <article> <aside> <header> <footer> <main> <nav> <canvas> <video>

<dd> <dl> <dt> <pre>
```

- Inline Elements

```html
<a> <img>

<input> <button> <label> <textarea> <select>

<span> <br> <small>

<b> <i> <em> <strong>
```

## Tag self closing
> [on quora](https://www.quora.com/Which-HTML-tags-are-self-closing)

```html
<br /> <hr /> <img /> <input /> <link /> <meta />
```
### + [Symbols](http://hocwebchuan.com/reference/tag/symbols.php) ( `Ký tự đặc biệt` )
### + [CSS properties](https://stackoverflow.com/questions/5612302/which-css-properties-are-inherited) ( `Kế thừa của thẻ cha` )
### + [Vendor prefix](https://kipalog.com/posts/Tai-sao-mot-so-thuoc-tinh-trong-CSS3-phai-them-Vendor-prefixes-nhu--moz----webkit---o----ms--) ( `tiền tố của trình duyệt` )

## display: flex;
> [on page](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

```css
.container {
  display: flex;

  flex-direction: row | row-reverse | column | column-reverse;
      |- Xác định hướng

  flex-wrap: nowrap | wrap | wrap-reverse;
      |- Co dãng trên dòng, tràn xún vs tràn lên

  >> flex-flow: <‘flex-direction’> || <‘flex-wrap’>
      |- kết hợp cả 2 cái trên;

  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
      |- Linh hoạt 1 hàng ngang

  align-items: flex-start | flex-end | center | baseline | stretch;
      |- Linh hoạt 1 hàng dọc

  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
      |- Linh hoạt khối dọc

  .item {
    order: <integer>; /* default is 0 */
        |- Có thể âm

    flex-grow: <number>; /* default 0 */
        |- Số 2 wid gấp đôi 1 và không âm

    flex-shrink: <number>; /* default 1 */
        |- Ngược với flex-grow và không âm

    flex-basis: <length> | auto; /* default auto */
        |- Độ dài của phần tử

    flex: 0 1 auto;
        |- Viết tắt 3 cái trên, Default is 0 1 auto

    align-self: auto | flex-start | flex-end | center | baseline | stretch;
        |- Thay mặc định để ghi đẻ 1 mục riêng
  }
}
```

## display: grid;
> [on page](https://css-tricks.com/snippets/css/complete-guide-grid/)

```css
.container {
  display: grid;

  grid-template-columns: 40px 50px auto 50px 40px;
  grid-template-rows: 25% 100px auto;
      |- Chia cột vs hàng

  grid-template-areas: 
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer";
      |- Đặt tên chia lưới

  grid-column-gap: 10px;
      |- Margin cho cột

  grid-row-gap: 15px;
      |- Margin cho hàng

  >> grid-gap: <‘grid-row-gap’> || <‘grid-column-gap’>
      |- kết hợp cả 2 cái trên;

  justify-items: start | end | center | stretch;
      |- linh hoạt từng item hàng ngang trong lưới

  align-items: start | end | center | stretch;
      |- Linh hoạt từng item hàng dọc trong lưới
  
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
      |- Linh hoạt ngang cho khối lưới

  align-content: start | end | center | stretch | space-around | space-between | space-evenly;
      |- Linh hoạt dọc cho khối lưới

  grid-auto-flow: row | column | row dense | column dense;
      |- Dòng chảy của lưới

  .item {
    grid-column-start: <number> | <name> | span <number> | span <name> | auto
    grid-column-end: <number> | <name> | span <number> | span <name> | auto
    grid-row-start: <number> | <name> | span <number> | span <name> | auto
    grid-row-end: <number> | <name> | span <number> | span <name> | auto
        |- Xác định vị trí và kích thước item
    
    >> grid-column: <start-line> / <end-line> | <start-line> / span <value>;
    >> grid-row: <start-line> / <end-line> | <start-line> / span <value>;
        |- Viết gọn 4 cái trên
    
    >> grid-area: <name> | <row-start> / <column-start> / <row-end> / <column-end>;
        |- Viết gọn 2 cái trên
    
    justify-self: start | end | center | stretch;
        |- Vị trí của box trong item theo hàng

    align-self: start | end | center | stretch;
        |- Vị trí của box trong item theo cột
  }
}
```

## CS3 Magic
- transition ( `chuyển đối khi có một hành động..:hover làm to nút` ) 

```css
  + [*]
  transition-timing-function: linear;      // chậm -> nhanh -> chậm (Default)
  transition-timing-function: ease;        // nhanh đều
  transition-timing-function: ease-in;     // chậm chậm
  transition-timing-function: ease-out;    // kết chậm
  transition-timing-function: ease-in-out; // chậm đều
  ----------->
  transition-property: width;              // xác định hiệu ứng chuyển đổi cho thuộc tính
  transition-duration: 2s;                 // time
  transition-timing-function: linear;      // [*]
  transition-delay: 1s;                    // time delay
  ----------->
  transition: width 2s linear 1s;
  + [*]
  Transition + Transform
  
```

- transform ( c`huyển đổi 2 chiều, 3 chiều, xoay, nghiêng, kích thước PT ...` )

```css
transform: rotate();       // xoay thành phần theo kim đồng hồ      
           translate()     // di chuyển thanh phần nằm ngang lên or xún
           scale()         // ảnh hưởng đến kích thước pt
           sKewX(),sKewy() // nghiêng yếu tố sang trái or phải
           matrix()        // chuyển đổi 2D or 3D
----------->
transform: scale(20) skew(-20deg);
transform: rotate(45deg) translate(24px, 25px)
```

- animations ( `xác định một chuyển động.. a -> b` )

```css
+ [*]()
{animation-timing-function: linear;}      // chậm -> nhanh -> chậm (MD)
{animation-timing-function: ease;}        // nhanh đều
{animation-timing-function: ease-in;}     // đều chậm
{animation-timing-function: ease-out;}    // kết chậm
{animation-timing-function: ease-in-out;} // chậm đều
>  mã animation
@keyframes example {
  0%   {background-color: red; left:0px; top:0px;}
  25%  {background-color: yellow; left:200px; top:0px;}
  50%  {background-color: blue; left:200px; top:200px;}
  75%  {background-color: green; left:0px; top:200px;}
  100% {background-color: red; left:0px; top:0px;}
}
----------->
{
  animation-name: example;        // tên
  animation-duration: 5s;         // chạy 4s
  animation-timing-function: linear;
  animation-delay: 2s;          
  animation-iteration-count: 3;   // infinite(~)
  animation-direction: alternate; // reverse(chạy ngược) or alternate(chay 1v sau đó ngược lại )
}
----------->
{
  animation: example 5s linear 2s infinite alternate;
}
  ```
