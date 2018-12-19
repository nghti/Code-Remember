# CSS
### Thẻ Cần nhớ
```css
word-spacing: -6px;     // Cách chữ
letter-spacing: 8px;    // Cách từ
cursor: pointer;        // Hiển thì chuột
width: calc(100%/4);    // Tính toán
height: 100vh;          // Full height
width: 100vw;           // Full width
```
### Priority in css ( `độ ưu tiên trong css` )
> [Page](https://marksheet.io/css-priority.html)

> [Question](https://stackoverflow.com/questions/1637343/what-are-the-priorities-among-css-selectors)

### Safe CSS Default ( `Giá trị mặc định của thẻ` )
> [Default](http://nimbupani.com/safe-css-defaults.html)

> [All](https://stackoverflow.com/questions/15901030/reset-remove-css-styles-for-element-only)

### CSS properties ( `Kế thừa của thẻ cha` )
> [Question](https://stackoverflow.com/questions/5612302/which-css-properties-are-inherited)

### Pseudo in css ( `Phần tử giả của bộ chọn` )
> [Pseudo](http://vietjack.com/css/pseudo_element_trong_css.jsp)

### Select tag a pro ( `bộ chọn` )
> [Demo chọn](http://lea.verou.me/demos/nth.html)

> [Link](https://viblo.asia/p/30-css-selectors-can-nho-p1-0bDM6ko6G2X4)

> [Chọn remenber](https://viblo.asia/p/30-css-selectors-can-nho-p1-0bDM6ko6G2X4)

## CS3 NEW 
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

#### text
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

#### text-shadow
```css
text-shadow: 0 0 3px blue;                      // width -> height -> mờ -> màu
text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;  // nhiều màu
```

#### box-shadow
```css
box-shadow: 5px 10px 5px 10px #000;             // width -> height -> mờ -> độ lan -> màu
box-shadow: 10px 10px #cc0000 inset;            // Thay độ bóng từ ngoài vào trong sáng
```

#### box-sizing
```css
box-sizing: border-box;                         // width and height đã bao gồm border
```

#### [display: flex;](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) ( `ie11 >>` )

```css
.container {
  display: flex;

  flex-direction: row | row-reverse | column | column-reverse;
      |- Xác định hướng
  flex-wrap: nowrap | wrap | wrap-reverse;
      |- Co dãng trên dòng, tràn xún vs tràn lên
  flex-flow: <‘flex-direction’> || <‘flex-wrap’>
      |- kết hợp cả 2 cái trên
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

  - flex container
    + flex-direction
      > Xác định hướng

      ```css
      .container {
        flex-direction: row | row-reverse | column | column-reverse;
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/10/flex-direction.svg)

    + flex-wrap
      > Co dãng trên dòng, tràn xún vs tràn lên

      ```css
      .container{
        flex-wrap: nowrap | wrap | wrap-reverse;
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/10/flex-wrap.svg)

    + flex-flow
      > kết hợp cả 2 cái trên

      ```css
      flex-flow: <‘flex-direction’> || <‘flex-wrap’>
      ```

    + justify-content
      > Linh hoạt 1 hàng ngang

      ```css
      .container {
        justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/10/justify-content.svg)

    + align-items
      > Linh hoạt 1 hàng dọc

      ```css
      .container {
        align-items: flex-start | flex-end | center | baseline | stretch;
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/10/align-items.svg)

    + align-content
      > Linh hoạt khối dọc

      ```css
      .container {
        align-content: flex-start | flex-end | center | space-between | space-around | stretch;
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/10/align-content.svg)

  - flex items
    + order
      > Có thể âm

      ```css
      .item {
        order: <integer>; /* default is 0 */
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/10/order.svg)

    + flex-grow
      > Số  2 wid gấp đôi 1 và không âm

      ```css
      .item {
        flex-grow: <number>; /* default 0 */
      }

      .item2 {flex-grow: 2;}
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/10/flex-grow.svg)

    + flex-shrink  
      > Ngược với flex-grow và không âm

      ```css
      .item {
        flex-shrink: <number>; /* default 1 */
      }
      ```

    + flex-basis
      > Độ dài của phần tử

      ```css
      .item {
        flex-basis: <length> | auto; /* default auto */
      }
      ```

    + flex
      > Viết tắt 3 cái trên, Default is 0 1 auto

      ```css
      .item {
        flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
      }
      ```

    + align-self
      > Thay mặc định để ghi đẻ 1 mục riêng

      ```css
      .item {
        align-self: auto | flex-start | flex-end | center | baseline | stretch;
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/10/align-self.svg) 


#### [display: grid;](https://css-tricks.com/snippets/css/complete-guide-grid/) ( `ie11 >>` )

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
      
  grid-gap: <grid-row-gap> <grid-column-gap>;

  justify-items: start | end | center | stretch;
      |- linh hoạt từng box hàng ngang trong lưới

  align-items: start | end | center | stretch;
      |- Linh hoạt từng box hàng dọc trong lưới
      
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
    
    grid-column: <start-line> / <end-line> | <start-line> / span <value>;
    grid-row: <start-line> / <end-line> | <start-line> / span <value>;
    |- Viết gọn 4 cái trên
    
    grid-area: <name> | <row-start> / <column-start> / <row-end> / <column-end>;
    |- Viết gọn 2 cái trên
    
    justify-self: start | end | center | stretch;
    |- Vị trí của box trong item theo hàng

    align-self: start | end | center | stretch;
    |- V
  }

}
```

  - Grid Container
    - grid-template-columns
    - grid-template-rows
      ```css
      .container {
        grid-template-columns: <track-size> ... | <line-name> <track-size> ...;
        grid-template-rows: <track-size> ... | <line-name> <track-size> ...;
      }
      ```
      ```css
      .container {
        grid-template-columns: 40px 50px auto 50px 40px;
        grid-template-rows: 25% 100px auto;
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/template-columns-rows-01.svg)
      ```css
      .container {
        grid-template-columns: [first] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end];
        grid-template-rows: [row1-start] 25% [row1-end] 100px [third-line] auto [last-line];
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/template-column-rows-02.svg)
    
    - grid-template-areas
      ```css
      .container {
        grid-template-areas: 
          "<grid-area-name> | . | none | ..."
          "...";
      }
      ```
      ```css
      .item-a {
        grid-area: header;
      }
      .item-b {
        grid-area: main;
      }
      .item-c {
        grid-area: sidebar;
      }
      .item-d {
        grid-area: footer;
      }

      .container {
        grid-template-columns: 50px 50px 50px 50px;
        grid-template-rows: auto;
        grid-template-areas: 
          "header header header header"
          "main main . sidebar"
          "footer footer footer footer";
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/dddgrid-template-areas.svg)

    - grid-template
      > Viết tắt cho 3 cái trên nhưng ko full nên ít dùng

    - grid-column-gap
    - grid-row-gap
      ```css
      .container {
        grid-column-gap: <line-size>;
        grid-row-gap: <line-size>;
      }
      ```
      ```css
      .container {
        grid-template-columns: 100px 50px 100px;
        grid-template-rows: 80px auto 80px; 
        grid-column-gap: 10px;
        grid-row-gap: 15px;
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/dddgrid-gap.svg)
    
    - grid-gap
      > Viết tắt cho 2 cái trên nên dùng

      ```css
      .container {
        grid-gap: <grid-row-gap> <grid-column-gap>;
      }
      ```
      ```css
      .container {
        grid-template-columns: 100px 50px 100px;
        grid-template-rows: 80px auto 80px; 
        grid-gap: 10px 15px;
      }
      ```

    - justify-items
      > Chú ý vị trí cột màu xanh

      ```css
      .container {
        justify-items: start | end | center | stretch;
      }
      ```
      ```css
      .container {
        justify-items: start;
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/justify-items-start.svg)
      ```css
      .container{
        justify-items: end;
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/justify-items-end.svg)
      ```css
      .container {
        justify-items: center;
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/justify-items-center.svg)
      ```css
      .container {
        justify-items: stretch;
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/justify-items-stretch.svg)

    - align-items
      > Chú ý vị trí hàng màu xanh

      ```css
      .container {
        align-items: start | end | center | stretch;
      }
      ```
      ```css
      .container {
        align-items: start;
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/align-items-start.svg)
      ```css
      .container {
        align-items: end;
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/align-items-end.svg)
      ```css
      .container {
        align-items: center;
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/align-items-center.svg)
      ```css
      .container {
        align-items: stretch;
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/align-items-stretch.svg)

    - justify-content
      > Kích thước lưới với thùng chứa theo chiều ngang

      ```css
      .container {
        justify-content: start | end | center | stretch | space-around | space-between | space-evenly;	
      }
      ```
      ```css
      .container {
        justify-content: start;
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/justify-content-start.svg)
      ```css
      .container {
        justify-content: end;	
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/justify-content-end.svg)
      ```css
      .container {
        justify-content: center;	
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/justify-content-center.svg)
      ```css
      .container {
        justify-content: stretch;	
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/justify-content-stretch.svg)
      ```css
      .container {
        justify-content: space-around;	
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/justify-content-space-around.svg)
      ```css
      .container {
        justify-content: space-between;	
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/justify-content-space-between.svg)
      ```css
      .container {
        justify-content: space-evenly;	
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/justify-content-space-evenly.svg)

    - align-content
      > Kích thước lưới với thùng chứa theo chiều dọc

      ```css
      .container {
        align-content: start | end | center | stretch | space-around | space-between | space-evenly;	
      }
      ```
      ```css
      .container {
        align-content: start;	
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/align-content-start.svg)
      ```css
      .container {
        align-content: end;	
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/align-content-end.svg)
      ```css
      .container {
        align-content: center;	
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/align-content-center.svg)
      ```css
      .container {
        align-content: stretch;	
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/align-content-stretch.svg)
      ```css
      .container {
        align-content: space-around;	
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/align-content-space-around.svg)
      ```css
      .container {
        align-content: space-between;	
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/align-content-space-between.svg)
      ```css
      .container {
        align-content: space-evenly;	
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/align-content-space-evenly.svg)

    - grid-auto-columns
    - grid-auto-rows
     > Xác định vị trí

      ```css
      .item-a {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
      }
      .item-b {
        grid-column: 5 / 6;
        grid-row: 2 / 3;
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/grid-auto-columns-rows-02.svg)

    - grid-auto-flow

      ```css
      .container {
        grid-auto-flow: row | column | row dense | column dense
      }
      ```
      ```css
      .container {
        display: grid;
        grid-template-columns: 60px 60px 60px 60px 60px;
        grid-template-rows: 30px 30px;
        grid-auto-flow: row;
      }
      .item-a {
        grid-column: 1;
        grid-row: 1 / 3;
      }
      .item-e {
        grid-column: 5;
        grid-row: 1 / 3;
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/grid-auto-flow-01.svg)

      ```css
      .container {
        display: grid;
        grid-template-columns: 60px 60px 60px 60px 60px;
        grid-template-rows: 30px 30px;
        grid-auto-flow: column;
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/grid-auto-flow-02.svg)

    - grid
      > Viết tắt cho All

      ```css
      .container {
          grid: none | <grid-template-rows> / <grid-template-columns> | <grid-auto-flow> [<grid-auto-rows> [/ <grid-auto-columns>]];
      }

      .container {
        grid: [row1-start] "header header header" 1fr [row1-end]
              [row2-start] "footer footer footer" 25px [row2-end]
              / auto 50px auto;
      }

      < = >

      .container {
        grid-template-areas: 
          "header header header"
          "footer footer footer";
        grid-template-rows: [row1-start] 1fr [row1-end row2-start] 25px [row2-end];
        grid-template-columns: auto 50px auto;    
      }
      ```

  - Grid Items

    - grid-column-start
    - grid-column-end
    - grid-row-start
    - grid-row-end

      ```css
      .item {
        grid-column-start: <number> | <name> | span <number> | span <name> | auto
        grid-column-end: <number> | <name> | span <number> | span <name> | auto
        grid-row-start: <number> | <name> | span <number> | span <name> | auto
        grid-row-end: <number> | <name> | span <number> | span <name> | auto
      }

      ```
      ```css
      .item-a {
        grid-column-start: 2;
        grid-column-end: five;
        grid-row-start: row1-start
        grid-row-end: 3
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/grid-column-row-start-end-01.svg)
      ```css
      .item-b {
        grid-column-start: 1;
        grid-column-end: span col4-start;
        grid-row-start: 2
        grid-row-end: span 2
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/grid-column-row-start-end-02.svg)

    - grid-column
    - grid-row

      > Viết tắt 4 cái trên

      ```css
      .item {
        grid-column: <start-line> / <end-line> | <start-line> / span <value>;
        grid-row: <start-line> / <end-line> | <start-line> / span <value>;
      }
      ```
      ```css
      .item-c {
        grid-column: 3 / span 2;
        grid-row: third-line / 4;
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/grid-column-row.svg)

    - grid-area
      > Dùng để đặt tên với viết tắt 4 cái trên

      ```css
      .item {
        grid-area: <name> | <row-start> / <column-start> / <row-end> / <column-end>;
      }
      ```
      ```css
      .item-d {
        grid-area: header
      }
      .item-d {
        grid-area: 1 / col4-start / last-line / 6
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/grid-area.svg)

    - justify-self
      > Item theo hàng

      ```css
      .item {
        justify-self: start | end | center | stretch;
      }
      ```
      ```css
      .item-a {
        justify-self: start;
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/justify-self-start.svg)
      ```css
      .item-a {
        justify-self: end;
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/justify-self-end.svg)
      ```css
      .item-a {
        justify-self: center;
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/justify-self-center.svg)
      ```css
      .item-a {
        justify-self: stretch;
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/justify-self-stretch.svg)

    - align-self
      > Item theo cột

      ```css
      .item {
        align-self: start | end | center | stretch;
      }
      ```
      ```css
      .item-a {
        align-self: start;
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/align-self-start.svg)
      ```css
      .item-a {
        align-self: end;
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/align-self-end.svg)
      ```css
      .item-a {
        align-self: center;
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/align-self-center.svg)
      ```css
      .item-a {
        align-self: stretch;
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/align-self-stretch.svg)

    - align-self
      ```css
      .item-a {
        place-self: center;
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/place-self-center.svg)
      ```css
      .item-a {
        place-self: center stretch;
      }
      ```
      ![img](https://css-tricks.com/wp-content/uploads/2018/11/place-self-center-stretch.svg)
#### transition ( `chuyển đối khi có một hành động..:hover làm to nút` ) 
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

#### animations ( `xác định một chuyển động.. a -> b` )
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

#### background gradient && ie
```css
  background: linear-gradient(to right, rgba(35, 173, 56, .9) 0%, rgba(173, 202, 85, .9) 100%); 
  -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#23ad38', endColorstr='#adca55', GradientType=1)";
```

#### background
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

## Demo support 
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

- [Flex equal height](http://osvaldas.info/flexbox-based-responsive-equal-height-blocks-with-javascript-fallback) (Chiều cao bằng nhau)
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

- background in css
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

shorthand =>> background: url(path/image.jpg) 0 0/cover no-repeat;
```
