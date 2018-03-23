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

## Priority in css ( `độ ưu tiên` )
> [Page](https://marksheet.io/css-priority.html)

> [Question](https://stackoverflow.com/questions/1637343/what-are-the-priorities-among-css-selectors)

## Safe CSS Default ( `Giá trị mặc định` )
> [Default](http://nimbupani.com/safe-css-defaults.html)

> [All](https://stackoverflow.com/questions/15901030/reset-remove-css-styles-for-element-only)

## CSS properties ( `Kế thừa` )
> [Question](https://stackoverflow.com/questions/5612302/which-css-properties-are-inherited)
## Select tag a pro ( `bộ chọn` )
- [Pseudo](http://vietjack.com/css/pseudo_element_trong_css.jsp) ( `phần tử giả` )
-  [Demo chọn](http://lea.verou.me/demos/nth.html)

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
> [Vendor prefix](https://kipalog.com/posts/Tai-sao-mot-so-thuoc-tinh-trong-CSS3-phai-them-Vendor-prefixes-nhu--moz----webkit---o----ms--) ( `tiền tố của trình duyệt` )
```css
-moz-     // filefox
-o-       // opera
-ms-      // ie
-webkit-  // chrome & safari
```
---------------
> Tag đã dùng
- border-radius
- rgba
- opacity
---------------
> Tag có thể dùng
- border-img      ie11 >>
- column          (cột văn bản trong div) ie10 >>
- filter          (lọc img) ie13
- user Interface  (giao diện người dùng) ie13
---------------
> Tag đang dùng

- text
```css
text-overflow ( giới hạn và thay text )
text-overflow: clip;       // Xén bớt vùng text
text-overflow: ellipsis;   // giới hạn vs thay = 3 chấm ! chạy được trên 1 dòng 
text-overflow: 'còn tiếp'; // Cắt đoạn text ... và thay bằng đoạn text khác

word-wrap ( từ xuống hàng )
word-wrap: break-word; // Những từ quá dài sẽ xuống hàng.
word-wrap: normal;     // mặc định cho word-wrap.

word-break ( chữ xuống hàng )
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
- [display: flex;](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) ( `ie11 >>` )
  - flex container
    + flex-direction: sắp xếp lại thứ tự trái >< phải, trên >< dưới
    + flex-wrap: co dãng trên dòng, tràn xún vs tràn lên
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


- [display: grid;](https://css-tricks.com/snippets/css/complete-guide-grid/) ( `ie11 >>` )
  - Grid Container
    - grid-template-columns
    - grid-template-rows
      ```css
      .container {
        grid-template-columns: 40px 50px auto 50px 40px;
        grid-template-rows: 25% 100px auto;
      }
      ```
      ![img](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-numbers.png)
      ```css
      .container {
        grid-template-columns: [first] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end];
        grid-template-rows: [row1-start] 25% [row1-end] 100px [third-line] auto [last-line];
      }
      ```
      ![img](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-names.png)
    
    - grid-template-areas
      ```css
      .container {
        grid-template-areas: 
          "<grid-area-name> | . | none | ..."
          "...";
      }
      ```

    - grid-template ( Viết tắt cho 3 cái trên )

    - grid-column-gap
    - grid-row-gap
      ```css
      .container {
        grid-template-columns: 100px 50px 100px;
        grid-template-rows: 80px auto 80px; 
        grid-column-gap: 10px;
        grid-row-gap: 15px;
      }
      ```
      ![img](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-column-row-gap.png)
    
    - grid-gap ( Viết tắt cho grid-row-gap and grid-column-gap )

    - justify-items
      ```css
      .container {
        justify-items: start;
      }
      ```
      ![img](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-justify-items-start.png)
      ```css
      .container{
        justify-items: end;
      }
      ```
      ![img](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-justify-items-end.png)
      ```css
      .container {
        justify-items: center;
      }
      ```
      ![img](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-justify-items-center.png)
      ```css
      .container {
        justify-items: stretch;
      }
      ```
      ![img](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-justify-items-stretch.png)
    - align-items
      ```css
      .container {
        align-items: start;
      }
      ```
      ![img](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-align-items-start.png)
      ```css
      .container {
        align-items: end;
      }
      ```
      ![img](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-align-items-end.png)
      ```css
      .container {
        align-items: center;
      }
      ```
      ![img](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-align-items-center.png)
      ```css
      .container {
        align-items: stretch;
      }
      ```
      ![img](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-align-items-stretch.png)
    - justify-content
      ```css
      .container {
        justify-content: start;
      }
      ```
      ![img](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-justify-content-start.png)
      ```css
      .container {
        justify-content: end;	
      }
      ```
      ![img](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-justify-content-end.png)
      ```css
      .container {
        justify-content: center;	
      }
      ```
      ![img](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-justify-content-center.png)
      ```css
      .container {
        justify-content: stretch;	
      }
      ```
      ![img](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-justify-content-stretch.png)
      ```css
      .container {
        justify-content: space-around;	
      }
      ```
      ![img](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-justify-content-space-around.png)
      ```css
      .container {
        justify-content: space-between;	
      }
      ```
      ![img](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-justify-content-space-between.png)
      ```css
      .container {
        justify-content: space-evenly;	
      }
      ```
      ![img](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-justify-content-space-evenly.png)
    - align-content
      ```css
      .container {
        align-content: start;	
      }
      ```
      ![img](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-align-content-start.png)
      ```css
      .container {
        align-content: end;	
      }
      ```
      ![img](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-align-content-end.png)
      ```css
      .container {
        align-content: center;	
      }
      ```
      ![img](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-align-content-center.png)
      ```css
      .container {
        align-content: stretch;	
      }
      ```
      ![img](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-align-content-stretch.png)
      ```css
      .container {
        align-content: space-around;	
      }
      ```
      ![img](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-align-content-space-around.png)
      ```css
      .container {
        align-content: space-between;	
      }
      ```
      ![img](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-align-content-space-between.png)
      ```css
      .container {
        align-content: space-evenly;	
      }
      ```
      ![img](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-align-content-space-evenly.png)
    - grid-auto-columns
    - grid-auto-rows
      ```css
      .container {
        grid-template-columns: 60px 60px;
        grid-template-rows: 90px 90px
      }
      ```
      ![img](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-auto.png)

    - grid-auto-flow

    - grid ( Viết tắt cho All )
  - Grid Items
    - grid-column-start
    - grid-column-end
    - grid-row-start
    - grid-row-end
      ```css
      .item-a {
        grid-column-start: 2;
        grid-column-end: five;
        grid-row-start: row1-start
        grid-row-end: 3
      }
      ```
      ![img](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-start-end-a.png)
      ```css
      .item-b {
        grid-column-start: 1;
        grid-column-end: span col4-start;
        grid-row-start: 2
        grid-row-end: span 2
      }
      ```
      ![img](https://cdn.css-tricks.com/wp-content/uploads/2016/11/grid-start-end-b.png)
    - grid-column ( Viết tắt trên )
    - grid-row ( Viết tắt trên )
      ```css
      .item-c {
        grid-column: 3 / span 2;
        grid-row: third-line / 4;
      }
      ```
      ![img](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-start-end-c.png)
    - grid-area
      ```css
      .item-d {
        grid-area: 1 / col4-start / last-line / 6
      }
      ```
      ![img](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-start-end-d.png)
    - justify-self
      ```css
      .item-a {
        justify-self: start;
      }
      ```
      ![img](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-justify-self-start.png)
      ```css
      .item-a {
        justify-self: end;
      }
      ```
      ![img](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-justify-self-end.png)
      ```css
      .item-a {
        justify-self: center;
      }
      ```
      ![img](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-justify-self-center.png)
      ```css
      .item-a {
        justify-self: stretch;
      }
      ```
      ![img](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-justify-self-stretch.png)
    - align-self
      ```css
      .item-a {
        align-self: start;
      }
      ```
      ![img](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-align-self-start.png)
      ```css
      .item-a {
        align-self: end;
      }
      ```
      ![img](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-align-self-end.png)
      ```css
      .item-a {
        align-self: center;
      }
      ```
      ![img](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-align-self-center.png)
      ```css
      .item-a {
        align-self: stretch;
      }
      ```
      ![img](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-align-self-stretch.png)



- transition ( `chuyển đối khi có một hành động..:hover làm to nút` ) 
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

- transform ( c`huyển đổi 2 chiều, 3 chiều, xoay, nghiêng, kích thước PT ...` )
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

- Animations ( `xác định một chuyển động.. a -> b` )
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

- [Flex equal height](http://osvaldas.info/flexbox-based-responsive-equal-height-blocks-with-javascript-fallback)
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