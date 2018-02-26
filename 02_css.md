# CSS
## Thẻ Cần nhớ
```css
word-spacing: -6px;     // Cách chữ
letter-spacing: 8px;    // Cách từ
cursor: pointer;        // Hiển thì chuột
width: calc(100%/4);    // Tính toán
height: 100vh;          // Full height
width: 100vw;           // Full width
```
## Select tag a pro

-  [Chọn](http://lea.verou.me/demos/nth.html)

- Chọn 1
```css
input[type=submit]
```
- Chọn child
```css
:first-child         // chọn con đầu tiên và cha duy nhất
:last-child          // chọn con cuối cùng và cha duy nhất

:first-of-type       // con con đầu tiên và các cha
:last-of-type        // con con cuối cùng và các cha

:nth-child(even)     // even là chẵn
:nth-child(odd)      // odd là lẻ

:nth-child(n)        // Chọn thành phần thứ "n" trong cha và tính từ đầu
:nth-last-child(n)   // Chọn thành phần thứ "n" trong cha và tính từ cuối

:nth-of-type(n)      // Chọn thành phần thứ "n" tính từ đầu
:nth-last-of-type(n) // Chọn thành phần thứ "n" tính từ cuối

:gt                  // lớn hơn >> all
:lt                  // nhỏ hơn >> all
```

##  CS3 NEW 
```css
-moz-     // filefox
-o-       // opera
-ms-      // ie
-webkit-  // chrome & safari
```
---------------
- border-radius
- rgba
- opacity
---------------
- Border-img      ie11 >>
- Column          (cột văn bản trong div) ie10 >>
- filter          (lọc img) ie13
- User Interface  (giao diện người dùng) ie13
---------------
- display: flex;  ie11 >>
  - flex container
    + flex-direction: sắp xếp lại thứ tự trái >< phải, trên >< dưới
    + flex-wrap: co dãng trên 1 dòng, tràn xún vs tràn lên
    + flex-flow: <‘flex-direction’> || <‘flex-wrap’> : kết hợp cả 2
    + justify-content: ![img](https://cdn.css-tricks.com/wp-content/uploads/2013/04/justify-content-2.svg)
    + align-items: ![img](https://cdn.css-tricks.com/wp-content/uploads/2014/05/align-items.svg)
    + align-content: ![img](https://css-tricks.com/wp-content/uploads/2013/04/align-content.svg)

  - flex items
    + order: integer; default is 0
    + flex-grow: number;  default 0 , số  2 wid gấp đôi 1
    + flex-shrink: number;  default 1 , ngược với flex-grow
    + flex-basis: length | auto; default auto , độ dài của PT
    + flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ] Kết hợp nhiều
    + align-self: ![img](https://css-tricks.com/wp-content/uploads/2014/05/align-self.svg) 

- text
```css
// text-overflow (giới hạn và thay text)
   text-overflow: clip;       // Xén bớt vùng text
   text-overflow: ellipsis;   // giới hạn vs thay = 3 chấm ! chạy được trên 1 dòng 
   text-overflow: 'còn tiếp'; // Cắt đoạn text ... và thay bằng đoạn text khác

// word-wrap (từ xuống hàng)
   word-wrap: break-word; // Những từ quá dài sẽ xuống hàng.
   word-wrap: normal;     // mặc định cho word-wrap.

// word-break (chữ xuống hàng)
   word-break: break-all; // hết đoạn ngắt chữ xuống hàng
   word-break: hyphenate; // hết từ xuống hàng tại gạch nối thích hợp
   word-break: normal;    // mặc định cho từ
```

- text-shadow
```css
  text-shadow: 0 0 3px blue;                      // width -> height -> mờ -> màu
  text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;  // nhiều màu
```

- box-shadow
```css
  box-shadow: 5px 10px 5px 10px #000;             // width -> height -> mờ -> độ lan -> màu
  box-shadow: 10px 10px #cc0000 inset;            // Thay độ bóng từ ngoài vào trong sáng
```

- box-sizing
```css
  box-sizing: border-box;                         // width and height đã bao gồm border
```

- transition (chuyển đối khi có một hành động..:hover làm to nút) 
```css
  + [*]
  transition-timing-function: linear;      // chậm -> nhanh -> chậm (Default)
  transition-timing-function: ease;        // nhanh đều
  transition-timing-function: ease-in;     // chậm chậm
  transition-timing-function: ease-out;    // kết chậm
  transition-timing-function: ease-in-out; // chậm đều
  -----------
  transition-property: width;  // xác định hiệu ứng chuyển đổi cho thuộc tính
  transition-duration: 2s;     // time
  transition-timing-function: linear;
  transition-delay: 1s;
  + [Viết tắt]
  transition: width 2s linear 1s;
  + [*]
  Transition + Transform
  
```

- transform (chuyển đổi 2 chiều, 3 chiều, xoay, nghiêng, kích thước PT ...)
```css
  transform: rotate();       // xoay thành phần theo kim đồng hồ      
             translate()     // di chuyển thanh phần nằm ngang lên or xún
             scale()         // ảnh hưởng đến kích thước pt
             sKewX(),sKewy() // nghiêng yếu tố sang trái or phải
             matrix()        // chuyển đổi 2D or 3D
  -----------
  transform: scale(20) skew(-20deg);
  transform: rotate(45deg) translate(24px, 25px)
```

- Animations (xác định một chuyển động.. a -> b)
```css
  + [*]()
  {animation-timing-function: linear;}      // chậm -> nhanh -> chậm (MD)
  {animation-timing-function: ease;}        // nhanh đều
  {animation-timing-function: ease-in;}     // đều chậm
  {animation-timing-function: ease-out;}    // kết chậm
  {animation-timing-function: ease-in-out;} // chậm đều
  -----------
>  mã animation
@keyframes example {
  0%   {background-color: red; left:0px; top:0px;}
  25%  {background-color: yellow; left:200px; top:0px;}
  50%  {background-color: blue; left:200px; top:200px;}
  75%  {background-color: green; left:0px; top:200px;}
  100% {background-color: red; left:0px; top:0px;}
}
{
  animation-name: example;        // tên
  animation-duration: 5s;         // chạy 4s
  animation-timing-function: linear;
  animation-delay: 2s;          
  animation-iteration-count: 3;   // infinite(~)
  animation-direction: alternate; // reverse(chạy ngược) or alternate(chay 1v sau đó ngược lại )
}
+ [Viết tắt]
{
  animation: example 5s linear 2s infinite alternate;
}

{
  ```

- Background gradient && ie
```css
  background: linear-gradient(to right, rgba(35, 173, 56, .9) 0%, rgba(173, 202, 85, .9) 100%); 
  -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#23ad38', endColorstr='#adca55', GradientType=1)";
```

- Background
```css
// nhiều img
  background-image: url(img_flwr.gif), url(paper.gif);
  background-position: right bottom, left top;
  background-repeat: no-repeat, repeat;
  ...

// bg cắt boc theo vùng giới hạn
  background-clip: padding-box; (border-box, content-box)

// chia lại tỉ lệ ảnh
  background-size: cover or contain
```

## VD support 
- font-face
```css
@font-face {
  font-family: 'MyriadPro-Regular';
  src: url('fonts/MyriadPro-Regular.eot');
  src: url('fonts/MyriadPro-Regular.eot?888#iefix') format('embedded-opentype'),
  	 url('fonts/MyriadPro-Regular.woff') format('woff'),
  	 url('fonts/MyriadPro-Regular.ttf') format('truetype'),
  	 url('fonts/MyriadPro-Regular.svg#Soymilk') format('svg');
  font-weight: normal;
  font-style: normal;
}
```

- flex equal height
"http://osvaldas.info/flexbox-based-responsive-equal-height-blocks-with-javascript-fallback"
```css
.list {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.list__item {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
```

- custom icon check
```css
.check01 {
  label {
    padding-left: 35px;
  }
  input[type="checkbox"] {
    display: none;
  }
  [type="checkbox"]:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0px;
    top: -4px;
    background: url(../images/checkbox01-off.png) no-repeat;
    background-size: cover;
    width: 28px;
    height: 28px;
  }
  [type="checkbox"]:checked + label:before {
    content: '';
    position: absolute;
    left: 0px;
    top: -4px;
    background: url(../images/checkbox01-on.png) no-repeat;
    background-size: cover;
    width: 28px;
    height: 28px;
  }
}
```

- bg-css
```css
div {
  display: block;
  width: 41px; 
  height: 41px;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
}

<span  style="background: url('../img/profile/cover-edit.png') no-repeat;"></span>
```