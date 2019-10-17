# JQUERY

## Note
```JS
$ <=> jQuery                       // 2js jQuery.noConflict()
$(document).ready(function(){...}) // thực thi khi HTML được nạp và DOM đã sẵn sàng
$(window).resize(function(){...})  // thực thi khi trang hoàn chỉnh được nạp đầy đủ,
                                   // bao gồm tất cả các khung, các đối tượng và hình ảnh
$(window).width() <= 768           // responsive
```

## import Js

- in HTML 
```js
<script type="text/javascript">
  ...
</script>
```

- in file JS
```js
$(function Hello()
{
  alert("Hello, World");
});
Hello();
-------------------------------------------
$(window).on('load resize', function() {
Hello();
});
```

## Select
```js
$(':button')    // chọn 
```
## event
```js
click() - hover() - scroll()
live()    [thay bằng 1.7 > on()]     // sử lý một hoặc nhiều sự kiện đính kèm 
                                     // bind(), delegate() như on có thể bị như live()
die()     [thay bằng 1.9 > off()]    // hủy bỏ sự kiện // unbind() như die()
load()    [dk sử dụng ở 1.8]         // load page
trigger()                            // kick hoạt sự kiện được chọn
change()                             // thay đổi only form
focus()                              // focusin(), focusout()
```
## actions
- Hiệu ứng
```js
animate()     // hình ảnh động tùy chỉnh bằng css
ex: 
$('button').click(function(){
  $('div').animate({
    left: '250px',
    paddingleft: '10px'
  });
});

hide()        // Ẩn (style="display: none;) 
show()        // Hiện (style="display: block;)

toggle()      // ẩn hiện luân phiên
toggleClass() // ẩn hiện class

fadeIn()      // hiện rõ dần ("slow"), (3000)
fadeOut()     // ẩn mờ dần
fadeToggle()  // ẩn hiện mờ dần ("slow"), (3000)

slideUp()     // ẩn trượt 
slideDown()   // hiên trượt
slideToggle() // ẩn hiện trượt

// clearQueue()  // ngưng hiệu ứng

// delay()       // trì hoãn time (option)

// dequeue()     // loại bỏ chức năng tiếp theo của hàng đợi và sau đó thực hiện chức năng
// queue()       // thực hiện chức năng hàng đợi dk chọn

// finish()      // loại bỏ tất cả chức năng tiếp theo rồi xong lun
// stop()        // tạm dừng chức năng
```
- thuộc tính HTML/CSS
```js
addClass() - removeClass() - toggleClass() 

attr()        // lấy giá trị or gán giá trị(nhiều thuộc tính)
offset()      // thiết lập or trả về vị trí của tp dk chọn
scrollTop()   // trả về vị trí của scroll
val()         // trả về phương pháp hoặc đặt thuộc tính giá trị của các thành phần được chọn.
append()      // tạo yếu tố mới và chèn vào sau tp
remove()      // xóa tp dk chọn
empty()       // xóa pt con của tp dk chọn
window.open() // mở cửa sổ mới
```
- Tìm
```js
each            // thực hiện hành động cho mỗi phần tử, mỗi lần 1pt dùng this
replace('','')  // tìm và thay chuỗi
indexOf()       // tìm kiếm chuỗi
first()         // đầu
last()          // cuối
eq()            // chọn (1) >>
filter()        // chọn dt có lọc
not()           // không phải chọn đó
find()          // tìm All con của list-cha tùy chỉnh
has()           // xác định con 
hasClass()      // tìm trong TP có class đó ko  
next()          // chọn anh chị sau nó
nextAll()       // tất cả anh chị sau nó
nextUntil()     // tất cả anh chị sau nó đến tùy chỉnh
prev()          // xác định chọn trước                
// prevAll()       // chọn trước all             
// prevUntil()     // chọn trước nó đến gần trước   
// parent()        // chọn cha mẹ đâu tiên của nó 
// patrents()      // all cha or tùy chỉnh chọn cha nào đó
// parentsUntil()  // tùy chỉnh chọn nó đến cha
// children ()     // chọn all con trực tiếp or tùy chọn con
// siblings ()     // all anh, chị or lọc tìm anh, chị tùy chỉnh                                 
```
## responsive
```js
var f = false;
function functionmy01() {
  if (!f) {
    if ($(window).width() > 768)  {
      // start
    }
    f = true;
  } else {
    if ($(window).width() <= 768) {
      // start
    }
    f = false;
  }
}

function functionmy02() {
  if ($(window).width() > 768) {
    if (DK) {
      // start
    }
  } else {
    if (DK) {
      // start
    }
  }
}

$(window).on('load resize', function() {
  functionmy01();
  functionmy02();
});
```
## js plusgin
### bxslider
http://bxslider.com/
```html
<ul class="slider">
  <li><a href="#" target="_blank"><img src="http://placehold.it/480x480" alt=""></a></li>
  <li><a href="#" target="_blank"><img src="http://placehold.it/480x480" alt=""></a></li>
  <li><a href="#" target="_blank"><img src="http://placehold.it/480x480" alt=""></a></li>
  <li><a href="#" target="_blank"><img src="http://placehold.it/480x480" alt=""></a></li>
  <li><a href="#" target="_blank"><img src="http://placehold.it/480x480" alt=""></a></li>
  <li><a href="#" target="_blank"><img src="http://placehold.it/480x480" alt=""></a></li>
</ul>
```
- Tùy chỉnh width
```js
$(document).ready(function (){

  var settings = function() {
    var settings01 = {
      slideWidth: 650,
      minSlides: 2,
      maxSlides: 2,
      moveSlides: 1,
      slideMargin: 20,
      pager: true,
      controls: true,
      responsive: true,
      infiniteLoop: true
    };
    var settings02 = {
      slideWidth: 650,
      minSlides: 4,
      maxSlides: 4,
      moveSlides: 1,
      slideMargin: 24,
      pager: true,
      controls: true,
      responsive: true,
      infiniteLoop: true
    };
    var settings03 = {
      slideWidth: 650,
      minSlides: 1,
      maxSlides: 1,
      moveSlides: 1,
      slideMargin: 20,
      pager: true,
      controls: true,
      responsive: true,
      infiniteLoop: true
    };

    var set;
    if($(window).width() <= 480) {
      set = settings03;
    } 
    else if($(window).width() <= 768) {
      set = settings01;
    } 
    else {
      set = settings02;
    }

    return set;

  };
  var sldr;
  var resizeHandler = function() {
    sldr.reloadSlider(settings());
  };
  sldr = $('.slider1').bxSlider(settings());
  $(window).on('resize', resizeHandler);
});
```
- Chỉ trên mobile
```js
$(document).ready(function($) { 
   var slider2 =  $('.slider1').bxSlider({
      slideWidth: 650,
      minSlides: 1,
      maxSlides: 1,
      moveSlides: 1,
      slideMargin: 20,
      pager: true,
      controls: true,
      responsive: true,
      infiniteLoop: true
      });
   function slideResponsive01() {
      w = $(window).width();  
      if(w <= 768) {
        slider2.reloadSlider(); 
    }
    else {
      slider2.destroySlider();  
    }
  }
    $(window).on("load resize", slideResponsive01);
});
```
### height auto List Box
http://blog.webcreativepark.net/2013/10/21-112000.html
```js
$(document).ready(function () { 
  $('.list_feature li p').heightLine(); 
});
```
### counterUp
https://github.com/bfintal/Counter-Up
```js
$(function() {
  jQuery(document).ready(function( $ ) {
      $('.counter').counterUp({
          delay: 10,
          time: 1000
      });
  });
});
```
### table reponsive mobile
```html
<table class="responsive">

</table>
```
```html
//---------- BackToTop ----------/
"https://markgoodyear.com/labs/scrollup/?theme=image"

//---------- anchor link ----------/

//---------- scroll fix top [pc, sp] ----------/
"https://github.com/bigspotteddog/ScrollToFixed"

//---------- ScrollSpy(fix menu vs nhận menu khi scroll) [pc, sp] ----------/

//---------- toggle menu [pc, sp] ----------/

//---------- Dropdowns [pc, sp] ----------/

//---------- toggle list vs change icon [pc, sp] ----------/

//---------- active menu js(trong, ngoài) ----------/

//---------- tab js ----------/

//---------- Tooltips hover vs active ----------/

//---------- link js [pc, sp] ----------/

//---------- lightbox ----------/
"http://www.jacklmoore.com/colorbox/"

//---------- slider ----------/

//---------- thay thế chuỗi [pc, sp] ----------/
```
## Note 2
```js
-----------------------------------------------//
.animate()          // Thực hiện một hình ảnh động (animate) tùy chỉnh của một tập hợp các thuộc tính css.
-----------------------------------------------//
.append()           // Thành phần được chèn thêm nội dung, nội dung này thường được sắp xếp ở vị trí sau cùng.
.appendTo()         // Chèn nội dung vào thành phần đã có, thường được sắp xếp ở vị trí sau cùng.
-----------------------------------------------//
.val()              // Lấy giá trị hiện tại của thành phần, hoặc thay đổi giá trị cho thành phần.
-----------------------------------------------// Ajax
.get()              // Lấy các thành phần DOM phù hợp của các đối tượng jQuery.
.load()             // Load sự kiện javascript. Load dữ liệu từ server sau đó đặt HTML trở lại từ các thành phần được chọn. // lấy db server về
.jquery             --> Xác định một thành phần có phải là jQuery object hay không. Xác định phiên bản hiện tại của jQuery đang chạy trong trang. // phải js o vs version ?

.scrollLeft()       --> Lấy vị trí hiện tại theo chiều ngang của thanh cuộn cho các thành phần đầu tiên trong một bộ các thành phần phù hợp hoặc thiết lập vị trí ngang của thanh cuộn cho mỗi thành phần phù hợp.
.scrollTop()        --> Lấy vị trí hiện tại theo chiều dọc của thanh cuộn cho các thành phần đầu tiên trong một bộ các thành phần phù hợp hoặc thiết lập vị trí dọc của thanh cuộn cho mỗi thành phần phù hợp.

.trigger()          --> Thực hiện tất cả các xử lý và đính kèm các loại sự kiện nhất định tới thành phần được chọn. // xử lý đến thành phần được chọn
.triggerHandler()   --> Kích hoạt sự kiện được xác định cho thành phần đc chọn.
.on()               --> Đính kèm một hàm xử lý sự kiện cho một hoặc nhiều sự kiện tới một thành phần được chọn.
.one()              --> Chèn một hoặc nhiều sự kiện cho một thành phần được chọn, xác định một function để chạy khi xảy ra một sự kiện.

.mousedown()        --> Ràng buộc một xử lý tới một sự kiện mousedown (click chuột), hoặc kích hoạt sự kiện mousedown lên một thành phần. // ràng buộc tới thành phần đó
.mouseenter()       --> Ràng buộc một xử lý tới một sự kiện mouseenter (di chuyển chuột vào thành phần), hoặc kích hoạt sự kiện mouseenter lên một thành phần.
.mouseleave()       --> Ràng buộc một xử lý tới một sự kiện mouseleave (di chuyển chuột ra khỏi thành phần), hoặc kích hoạt sự kiện mouseleave lên một thành phần.
.mousemove()        --> Ràng buộc một xử lý tới một sự kiện mousemove (click chuột), hoặc kích hoạt sự kiện mousemove lên một thành phần.
.mouseout()         --> Ràng buộc một xử lý tới một sự kiện mouseout (di chuyển chuột ra khỏi một thành phần), hoặc kích hoạt sự kiện mouseout lên một thành phần.
.mouseover()        --> Ràng buộc một xử lý tới một sự kiện mouseover (di chuyển chuột ra khỏi thành phần), hoặc kích hoạt sự kiện mouseover lên một thành phần.
.mouseup()          --> Ràng buộc một xử lý tới một sự kiện mouseup (nhả chuột), hoặc kích hoạt sự kiện mouseup lên một thành phần.

.focus()            --> Xử lý một sự kiện focus, hoặc kích hoạt sự kiện focus cho thành phần. // focus
.focusin()          --> Xử lý một sự kiện "focusin" (xác nhận một focus).
.focusout()         --> Xử lý một sự kiện "focusout" (xác nhận thoát khỏi focus).
.blur()             --> Kèm một hành động khi sử dụng blur, sự kiện blur là khi người dùng thoát khỏi focus trong trường nhập (input).

.remove()           --> Loại bỏ các thành phần được xác định. // xóa thành phần chọn
.removeAttr()       --> Loại bỏ các thuộc tính (attr) có bên trong thành phần.
.removeClass()      --> Loại bỏ thuộc tính (attr) class có bên trong thành phần.
.removeData()       --> Loại bỏ dữ liệu đã được lưu trữ trước đó.
.removeProp()       --> Loại bỏ thuộc tính của thành phần được tao bởi phương thức .prop().

.error()            --> Khi có lỗi xảy ra do một thành phần gặp lỗi có thể là do thành phần được tải không chính xác, khi đó .error() sẽ kích hoạt sự kiện lỗi hoặc thực hiện một function.
.die()              --> Loại bỏ việc xử lý các sự kiện đang sử dụng phương pháp .live() trước đó.
.delay()            --> Thiết lập một bộ đếm thời gian để trì hoãn thực hiện các hạng mục tiếp theo trong các hành động.
.stop()             --> Dừng chuyển động đang chạy của thành phần phù hợp.
.end()              --> Chấm dứt hoạt động lọc mới nhất trong chuỗi hiện tại và quay trở lại các thiết lập của các thành phần phù hợp với trạng thái trước đó.

.text()             --> Lấy nội dung text của thành phần, hoặc thay đổi nội dung text cho thành phần.
.submit()           --> Ràng buộc xử lý một sự kiện tới sự kiện Javascript "submit" hay kích hoạt sự kiện này trên thành phần.
.change()           --> Xác định một thành phần đã được thay đổi.

.andSelf()          --> Thêm hành động cho chính thành phần chọn ban đầu.

.bind()             --> Được sử dụng để đính kèm xử lý một sự kiện cho thành phần.
.children()         --> Lấy thành phần con trực tiếp của mỗi thành phần trong những thành phần phù hợp, có thể kết hợp vào bộ chọn (selector).
.clearQueue()       --> Loại bỏ các thành phần đang đợi tới lượt (chưa được chạy).
.clone()            --> Tạo một bản sao (copy) cho thành phần.
.closest()          --> Chọn thành phần đầu tiên tính từ thành phần cha trở lên của chính thành phần được chọn. Khác với .parent() chỉ chọn thành phần cha của chính nó, .closest() có thể chọn cả thành phần cấp cao hơn cấp cha.
.contents()         --> Lấy phần tử con của mỗi thành phần trong tập hợp các phần tử phù hợp, bao gồm cả nốt văn bản (text nodes) và nốt bình luận (comment nodes), node có thể hiểu như sau: Theo DOM, tất cả mọi thứ trong tài liệu XML là một node.
.context            --> Một DOM node context được thông qua jQuery();, nếu không được thông qua thì khi đó context sẽ có thể là môt document.
.delegate()         --> Đính kèm một xử lý tới một hoặc nhiều sự kiện cho tất cả thành phần phù hợp với bộ chọn ngay lập tức hoặc sau đó dựa trên một tập hợp cụ thể các thành phần gốc.
.dequeue()          --> Thực hiện chức năng tiếp theo trên queue cho các thành phần phù hợp.
.detach()           --> Loại bỏ các phần tử xuất hiện từ DOM. Được sử dụng tương tự như .remove(), tuy nhiên .detach() sẽ giữ lại tất cả các dữ liệu jQuery kết hợp với loại bỏ thành phần, phương pháp này sẽ hữu dụng khi thành phần được loại bỏ và thêm vào DOM sau một thời gian.
.each()             --> Thực hiện một hành động cho mỗi phần tử, mỗi lần thực hiện một phần tử, để làm được điều này ta cần sử dụng phương thức $(this).
.empty()            --> Loại bỏ tất cả các thành phần bên trong kể cả text của thành phần chọn.
.eq()               --> Xác định thành phần ở vị trí thứ n.
.filter()           --> Giúp lọc các thành phần trong một nhóm các thành phần giống nhau.

.finish()           --> Ngăn chặn các hình ảnh động (animate) đang chạy, loại bỏ ngay lập tức các hành động tiếp theo và hoàn thành các hành động này.
.first()            --> Xác định thành phần đầu tiên trong các thành phần phù hợp.

.index()            --> Trả về vị trí của thành phần trong các thành phần.
.insertAfter()      --> Chèn hoặc di chuyển một thành phần vào ngay sau mục tiêu được chọn.
.insertBefore()     --> Chèn hoặc di chuyển một thành phần vào ngay trước mục tiêu được chọn.
.keydown()          --> Ràng buộc một xử lý tới một sự kiện keydown (nhấn phím), hoặc kích hoạt sự kiện keydown lên một thành phần.
.keypress()         --> Ràng buộc một xử lý tới một sự kiện keypress, hoặc kích hoạt sự kiện keypress lên một thành phần.
.keyup()            --> Ràng buộc một xử lý tới một sự kiện keyup (nhã phím nhấn), hoặc kích hoạt sự kiện keyup lên một thành phần.
.last()             --> Xác định thành phần cuối cùng trong các thành phần phù hợp.
.length             --> Xác định số lượng thành phần trong jQuery Object.
.live()             --> .live() gắn một hoặc nhiều sự kiện cho các thành phần được chọn, và chỉ định một chức năng để chạy khi sự kiện xảy ra.
.map()              --> Qua mỗi phần tử được chọn, thông qua một function tạo ra một jquery object có chứa các giá trị trả lại.
.not()              --> Không chọn thành phần nào có sử dụng .not().
.off()              --> Thường được sử dụng để loại bỏ việc xử lý một sự kiện của thành phần khi sử dụng phướng thức .on()
.offset()           --> Lấy tọa độ hiện tại của thành phần đầu tiên, hoặc thiết lập các tọa độ của từng thành phần trong tập hợp các thành phần phù hợp liên quan đến văn bản.
.offsetParent()     --> Lấy một thành phần "tổ tiên" gần nhất có sử dụng thuộc tính position, những thành phần được lấy không phân biệt position: relative, absolute hay fixed.
.parent()           --> Lấy thành phần cha trực tiếp của mỗi thành phần trong những thành phần phù hợp, có thể kết hợp vào bộ chọn (selector).
.parents()          --> Lấy các thành phần tổ tiên của thành phần trong những thành phần phù hợp, có thể kết hợp vào bộ chọn (selector).
.parentsUntil()     --> Lấy các thành phần tổ tiên của thành phần trong những thành phần phù hợp, lấy đến khi gặp thành phần có trong bộ lọc thì dừng lại.
.position()         --> Lấy tọa độ hiện tại của thành phần, tọa độ này được tính dựa vào gốc của thành phần cha.
.prepend()          --> Chèn nội dung vào trong thành phần ở vị trí đầu tiên.
.prependTo()        --> Chèn nội dung vào thành phần đã có, thường được sắp xếp ở vị trí đầu tiên.
.replaceAll()       --> Thay thế từng nội dung và cả thành phần mục tiêu bằng nội dung và thành phần khác.
.replaceWith()      --> Thay thế từng nội dung và thành phần mới tới thành phần mục tiêu đã chọn.
.resize()           --> Ràng buộc một xử lý sự kiện "resize" hoặc kích hoạt sự kiện trên thành phần.
.select()           --> Ràng buộc xử lý một sự kiện tới sự kiện Javascript "select" hay kích hoạt sự kiện này trên thành phần.
.selector()         --> Lấy bộ chọn của thành phần.
.serialize()        --> Lấy giá trị các thành phần form, mã hóa các giá trị này thành giá trị chuỗi.
.serializeArray()   --> Lấy giá trị các thành phần form, mã hóa các giá trị này thành giá trị chuỗi.
.siblings()         --> Lấy thành phần con cùng cấp của mỗi thành phần trong một bộ chọn phù hợp.
.size()             --> Xác định số lượng thành phần trong jQuery Object.
.slice()            --> Chọn một dãy các thành phần con từ một tập hợp thành phần cha với các chỉ số thích hợp.
.toArray()          --> Lấy tất cả các thành phần DOM chứa trong tập jQuery, như là một mảng (array).
.unbind()           --> Loại bỏ sự kiện được đính kèm trước đó từ thành phần.
.undelegate()       --> Loại bỏ xử lý của một sự kiện cho tất cả thành phần phù hợp dựa trên một tập hợp cụ thể các thành phần gốc.
.unload()           --> Ràng buộc xử lý một sự kiện tới sự kiện javascript unload.
.unwrap()           --> Loại bỏ thành phần cha của thành phần được chọn từ DOM.

.wrap()             --> Bao ngoài thành phần được chọn bởi một cấu trúc HTML.
.wrapAll()          --> Bao ngoài các thành phần được chọn bởi một cấu trúc HTML.
.wrapInner()        --> Bao ngoài nội dung của thành phần được chọn bởi một cấu trúc HTML

.width()            --> Xác định hoặc gán giá trị chiều rộng (width) cho thành phần.
.height()           --> Xác định hoặc gán giá trị chiều cao (height) cho thành phần.
.innerHeight()      --> Lấy giá trị chiều cao của thành phần phù hợp, chiều cao này không bao gồm border hay margin.
.innerWidth()       --> Lấy giá trị chiều rộng của thành phần phù hợp, chiều cao này không bao gồm border hay margin.
.outerHeight()      --> Lấy giá trị chiều cao của thành phần phù hợp, chiều cao này bao gồm border, padding.
.outerWidth()       --> Lấy giá trị chiều rộng của thành phần phù hợp, chiều rộng này bao gồm border, padding.
```
### Note 3
```js
.jquery             --> Xác định một thành phần có phải là jQuery object hay không. Xác định phiên bản hiện tại của jQuery đang chạy trong trang. // phải js o vs version ?
.load()             --> Load sự kiện javascript. Load dữ liệu từ server sau đó đặt HTML trở lại từ các thành phần được chọn. // lấy db server về

.click()            --> Kích hoạt sự kiện click trên thành phần hoặc ràng buộc xử lý một sự kiện tới sự kiện click trong javascript.
.dblclick()         --> Kích hoạt sự kiện double click trên thành phần hoặc ràng buộc xử lý một sự kiện tới sự kiện double click trong javascript.
.hover()            --> kết hợp xử lý cả 2 sự kiện di chuyển con trỏ chuột vào thành phần (mouseenter) và di chuyển con trỏ chuột ra khỏi thành phần (mouseleave).
.scroll()           --> Ràng buộc xử lý một sự kiện tới sự kiện Javascript "scroll" hay kích hoạt sự kiện này trên thành phần.
.scrollLeft()       --> Lấy vị trí hiện tại theo chiều ngang của thanh cuộn cho các thành phần đầu tiên trong một bộ các thành phần phù hợp hoặc thiết lập vị trí ngang của thanh cuộn cho mỗi thành phần phù hợp.
.scrollTop()        --> Lấy vị trí hiện tại theo chiều dọc của thanh cuộn cho các thành phần đầu tiên trong một bộ các thành phần phù hợp hoặc thiết lập vị trí dọc của thanh cuộn cho mỗi thành phần phù hợp.

.css()              --> Được dùng để thêm một hoặc nhiều style cho thành phần, ngoài ra còn có thể sử dụng .css() để lấy giá trị style của thành phần.  // Thêm css trong js
.add()              --> Thêm thành phần vào thành phần đã có để cùng thực hiện một hành động. // add thêm nữa ...
.addBack()          --> Thêm thành phần vào trước thành phần đã có để cùng thực hiện một hành động. // là chính nó đấy
.addClass()         --> thêm class cho thành phần. // add thêm class
.has()              --> Xây dựng một đối tượng jQuery mới từ một tập hợp con của các thành phần phù hợp.
.hasClass()         --> Xác định thành phần có chứa class nhất định nào đó hay không. // có class đó ko
.after()            --> Chèn nội dung, xác định bởi tham số vào ngay sau mỗi thành phần đã có. // add thêm or duy chuyển thành phần vào sau
.before()           --> Thêm thành phần vào ngay trước thành phần đã có. // add thêm or duy chuyển thành phần vào trước
.hide()             --> Ẩn thành phần phù hợp. Thành phần sẽ được ẩn giống như được sử dụng style="display: none;". // ẩn thành phần
.show()             --> Hiện thành phần phù hợp, thành phần sẽ được hiện giống như được sử dụng style="display: block;". // hiện thành phần

.toggle()           --> Hiển thị và ẩn các thành phần phù hợp, việc hiển thị và ẩn được luân phiên nhau giữa các lần action (VD action Click). // ẩn hiện thành phần ~ to vs nhỏ
.toggleClass()      --> Thêm hoặc loại bỏ một hoặc nhiều class của thành phần. // ẩn hiện class ~

.fadeIn()           --> Hiển thị các thành phần phù hợp với hiệu ứng rõ dần (fade in). // hiện thành phần rõ dần
.fadeOut()          --> Ẩn các thành phần phù hợp với hiệu ứng mờ dần (fade). // ẩn thành phần mờ dần
.fadeTo()           --> Hiển thị các thành phần phù hợp với hiệu ứng mờ dần (fade). // hiện thành phần rõ dần
.fadeToggle()        --> Làm hiển thị (display: block;) hoặc biến mất (display: none;) thành phần kèm với hiệu ứng làm mờ (opacity). // ẩn hiện thành phàn mờ dần
.slideDown()        --> Hiển thị các thành phần phù hợp với hiệu ứng chuyển động trượt (slide). // hiên thành phần trượt
.slideUp()          --> Ẩn các thành phần phù hợp với hiệu ứng chuyển động trượt (slide). // ẩn thành phần trượt
.slideToggle()       --> Hiển thị và ẩn các thành phần phù hợp với hiệu ứng chuyển động trượt (slide). // ẩn hiện thành phần trượt

.prev()             --> Xác định thành phần cùng cấp ngay trước thành phần sử dụng .prev(). // xác dịnh chọn
.prevAll()          --> Xác định tất cả các thành phần cùng cấp ngay trước thành phần sử dụng .prevAll().
.prevUntil()        --> Xác định tất cả các thành phần cùng cấp ngay trước thành phần được chọn (tag) và kết thúc việc này ngay tại thành phần (bộ chọn) có trong .nextAll().
.next()             --> Xác định thành phần cùng cấp ngay kế tiếp thành phần sử dụng .next().
.nextAll()          --> Xác định tất cả các thành phần cùng cấp ngay kế tiếp thành phần sử dụng .nextAll().
.nextUntil()        --> Xác định tất cả các thành phần cùng cấp ngay kế tiếp thành phần được chọn (tag) và kết thúc việc này ngay tại thành phần (bộ chọn) có trong .nextAll().



.trigger()          --> Thực hiện tất cả các xử lý và đính kèm các loại sự kiện nhất định tới thành phần được chọn. // xử lý đến thành phần được chọn
.triggerHandler()   --> Kích hoạt sự kiện được xác định cho thành phần đc chọn.
.on()               --> Đính kèm một hàm xử lý sự kiện cho một hoặc nhiều sự kiện tới một thành phần được chọn.
.one()              --> Chèn một hoặc nhiều sự kiện cho một thành phần được chọn, xác định một function để chạy khi xảy ra một sự kiện.

.mousedown()        --> Ràng buộc một xử lý tới một sự kiện mousedown (click chuột), hoặc kích hoạt sự kiện mousedown lên một thành phần. // ràng buộc tới thành phần đó
.mouseenter()       --> Ràng buộc một xử lý tới một sự kiện mouseenter (di chuyển chuột vào thành phần), hoặc kích hoạt sự kiện mouseenter lên một thành phần.
.mouseleave()       --> Ràng buộc một xử lý tới một sự kiện mouseleave (di chuyển chuột ra khỏi thành phần), hoặc kích hoạt sự kiện mouseleave lên một thành phần.
.mousemove()        --> Ràng buộc một xử lý tới một sự kiện mousemove (click chuột), hoặc kích hoạt sự kiện mousemove lên một thành phần.
.mouseout()         --> Ràng buộc một xử lý tới một sự kiện mouseout (di chuyển chuột ra khỏi một thành phần), hoặc kích hoạt sự kiện mouseout lên một thành phần.
.mouseover()        --> Ràng buộc một xử lý tới một sự kiện mouseover (di chuyển chuột ra khỏi thành phần), hoặc kích hoạt sự kiện mouseover lên một thành phần.
.mouseup()          --> Ràng buộc một xử lý tới một sự kiện mouseup (nhả chuột), hoặc kích hoạt sự kiện mouseup lên một thành phần.

.focus()            --> Xử lý một sự kiện focus, hoặc kích hoạt sự kiện focus cho thành phần. // focus
.focusin()          --> Xử lý một sự kiện "focusin" (xác nhận một focus).
.focusout()         --> Xử lý một sự kiện "focusout" (xác nhận thoát khỏi focus).
.blur()             --> Kèm một hành động khi sử dụng blur, sự kiện blur là khi người dùng thoát khỏi focus trong trường nhập (input).

.remove()           --> Loại bỏ các thành phần được xác định. // xóa thành phần chọn
.removeAttr()       --> Loại bỏ các thuộc tính (attr) có bên trong thành phần.
.removeClass()      --> Loại bỏ thuộc tính (attr) class có bên trong thành phần.
.removeData()       --> Loại bỏ dữ liệu đã được lưu trữ trước đó.
.removeProp()       --> Loại bỏ thuộc tính của thành phần được tao bởi phương thức .prop().

.error()            --> Khi có lỗi xảy ra do một thành phần gặp lỗi có thể là do thành phần được tải không chính xác, khi đó .error() sẽ kích hoạt sự kiện lỗi hoặc thực hiện một function.
.die()              --> Loại bỏ việc xử lý các sự kiện đang sử dụng phương pháp .live() trước đó.
.delay()            --> Thiết lập một bộ đếm thời gian để trì hoãn thực hiện các hạng mục tiếp theo trong các hành động.
.stop()             --> Dừng chuyển động đang chạy của thành phần phù hợp.
.end()              --> Chấm dứt hoạt động lọc mới nhất trong chuỗi hiện tại và quay trở lại các thiết lập của các thành phần phù hợp với trạng thái trước đó.

.text()             --> Lấy nội dung text của thành phần, hoặc thay đổi nội dung text cho thành phần.
.submit()           --> Ràng buộc xử lý một sự kiện tới sự kiện Javascript "submit" hay kích hoạt sự kiện này trên thành phần.
.change()           --> Xác định một thành phần đã được thay đổi.
.animate()          --> Thực hiện một hình ảnh động (animate) tùy chỉnh của một tập hợp các thuộc tính css.
.attr()             --> Xác định thuộc tính của thành phần.
.get()              --> Lấy các thành phần DOM phù hợp của các đối tượng jQuery.
.andSelf()          --> Thêm hành động cho chính thành phần chọn ban đầu.
.append()           --> Thành phần được chèn thêm nội dung, nội dung này thường được sắp xếp ở vị trí sau cùng.
.appendTo()         --> Chèn nội dung vào thành phần đã có, thường được sắp xếp ở vị trí sau cùng.
.bind()             --> Được sử dụng để đính kèm xử lý một sự kiện cho thành phần.
.children()         --> Lấy thành phần con trực tiếp của mỗi thành phần trong những thành phần phù hợp, có thể kết hợp vào bộ chọn (selector).
.clearQueue()       --> Loại bỏ các thành phần đang đợi tới lượt (chưa được chạy).
.clone()            --> Tạo một bản sao (copy) cho thành phần.
.closest()          --> Chọn thành phần đầu tiên tính từ thành phần cha trở lên của chính thành phần được chọn. Khác với .parent() chỉ chọn thành phần cha của chính nó, .closest() có thể chọn cả thành phần cấp cao hơn cấp cha.
.contents()         --> Lấy phần tử con của mỗi thành phần trong tập hợp các phần tử phù hợp, bao gồm cả nốt văn bản (text nodes) và nốt bình luận (comment nodes), node có thể hiểu như sau: Theo DOM, tất cả mọi thứ trong tài liệu XML là một node.
.context            --> Một DOM node context được thông qua jQuery();, nếu không được thông qua thì khi đó context sẽ có thể là môt document.
.delegate()         --> Đính kèm một xử lý tới một hoặc nhiều sự kiện cho tất cả thành phần phù hợp với bộ chọn ngay lập tức hoặc sau đó dựa trên một tập hợp cụ thể các thành phần gốc.
.dequeue()          --> Thực hiện chức năng tiếp theo trên queue cho các thành phần phù hợp.
.detach()           --> Loại bỏ các phần tử xuất hiện từ DOM. Được sử dụng tương tự như .remove(), tuy nhiên .detach() sẽ giữ lại tất cả các dữ liệu jQuery kết hợp với loại bỏ thành phần, phương pháp này sẽ hữu dụng khi thành phần được loại bỏ và thêm vào DOM sau một thời gian.
.each()             --> Thực hiện một hành động cho mỗi phần tử, mỗi lần thực hiện một phần tử, để làm được điều này ta cần sử dụng phương thức $(this).
.empty()            --> Loại bỏ tất cả các thành phần bên trong kể cả text của thành phần chọn.
.eq()               --> Xác định thành phần ở vị trí thứ n.
.filter()           --> Giúp lọc các thành phần trong một nhóm các thành phần giống nhau.
.find()             --> Giúp tìm thành phần trong thành phần cha.
.finish()           --> Ngăn chặn các hình ảnh động (animate) đang chạy, loại bỏ ngay lập tức các hành động tiếp theo và hoàn thành các hành động này.
.first()            --> Xác định thành phần đầu tiên trong các thành phần phù hợp.
.html()             --> Lấy nội dung HTML của thành phần, hoặc gán giá trị HTML cho thành phần.
.index()            --> Trả về vị trí của thành phần trong các thành phần.
.insertAfter()      --> Chèn hoặc di chuyển một thành phần vào ngay sau mục tiêu được chọn.
.insertBefore()     --> Chèn hoặc di chuyển một thành phần vào ngay trước mục tiêu được chọn.
.is()               --> Kiểm tra các thành phần có phù hợp với bộ chọn, trả về "true" nếu ít nhất một trong các thành phần này phù hợp với đối số đã có.
.keydown()          --> Ràng buộc một xử lý tới một sự kiện keydown (nhấn phím), hoặc kích hoạt sự kiện keydown lên một thành phần.
.keypress()         --> Ràng buộc một xử lý tới một sự kiện keypress, hoặc kích hoạt sự kiện keypress lên một thành phần.
.keyup()            --> Ràng buộc một xử lý tới một sự kiện keyup (nhã phím nhấn), hoặc kích hoạt sự kiện keyup lên một thành phần.
.last()             --> Xác định thành phần cuối cùng trong các thành phần phù hợp.
.length             --> Xác định số lượng thành phần trong jQuery Object.
.live()             --> .live() gắn một hoặc nhiều sự kiện cho các thành phần được chọn, và chỉ định một chức năng để chạy khi sự kiện xảy ra.
.map()              --> Qua mỗi phần tử được chọn, thông qua một function tạo ra một jquery object có chứa các giá trị trả lại.
.not()              --> Không chọn thành phần nào có sử dụng .not().
.off()              --> Thường được sử dụng để loại bỏ việc xử lý một sự kiện của thành phần khi sử dụng phướng thức .on()
.offset()           --> Lấy tọa độ hiện tại của thành phần đầu tiên, hoặc thiết lập các tọa độ của từng thành phần trong tập hợp các thành phần phù hợp liên quan đến văn bản.
.offsetParent()     --> Lấy một thành phần "tổ tiên" gần nhất có sử dụng thuộc tính position, những thành phần được lấy không phân biệt position: relative, absolute hay fixed.
.parent()           --> Lấy thành phần cha trực tiếp của mỗi thành phần trong những thành phần phù hợp, có thể kết hợp vào bộ chọn (selector).
.parents()          --> Lấy các thành phần tổ tiên của thành phần trong những thành phần phù hợp, có thể kết hợp vào bộ chọn (selector).
.parentsUntil()     --> Lấy các thành phần tổ tiên của thành phần trong những thành phần phù hợp, lấy đến khi gặp thành phần có trong bộ lọc thì dừng lại.
.position()         --> Lấy tọa độ hiện tại của thành phần, tọa độ này được tính dựa vào gốc của thành phần cha.
.prepend()          --> Chèn nội dung vào trong thành phần ở vị trí đầu tiên.
.prependTo()        --> Chèn nội dung vào thành phần đã có, thường được sắp xếp ở vị trí đầu tiên.
.replaceAll()       --> Thay thế từng nội dung và cả thành phần mục tiêu bằng nội dung và thành phần khác.
.replaceWith()      --> Thay thế từng nội dung và thành phần mới tới thành phần mục tiêu đã chọn.
.resize()           --> Ràng buộc một xử lý sự kiện "resize" hoặc kích hoạt sự kiện trên thành phần.
.select()           --> Ràng buộc xử lý một sự kiện tới sự kiện Javascript "select" hay kích hoạt sự kiện này trên thành phần.
.selector()         --> Lấy bộ chọn của thành phần.
.serialize()        --> Lấy giá trị các thành phần form, mã hóa các giá trị này thành giá trị chuỗi.
.serializeArray()   --> Lấy giá trị các thành phần form, mã hóa các giá trị này thành giá trị chuỗi.
.siblings()         --> Lấy thành phần con cùng cấp của mỗi thành phần trong một bộ chọn phù hợp.
.size()             --> Xác định số lượng thành phần trong jQuery Object.
.slice()            --> Chọn một dãy các thành phần con từ một tập hợp thành phần cha với các chỉ số thích hợp.
.toArray()          --> Lấy tất cả các thành phần DOM chứa trong tập jQuery, như là một mảng (array).
.unbind()           --> Loại bỏ sự kiện được đính kèm trước đó từ thành phần.
.undelegate()       --> Loại bỏ xử lý của một sự kiện cho tất cả thành phần phù hợp dựa trên một tập hợp cụ thể các thành phần gốc.
.unload()           --> Ràng buộc xử lý một sự kiện tới sự kiện javascript unload.
.unwrap()           --> Loại bỏ thành phần cha của thành phần được chọn từ DOM.
.val()              --> Lấy giá trị hiện tại của thành phần, hoặc thay đổi giá trị cho thành phần.
.wrap()             --> Bao ngoài thành phần được chọn bởi một cấu trúc HTML.
.wrapAll()          --> Bao ngoài các thành phần được chọn bởi một cấu trúc HTML.
.wrapInner()        --> Bao ngoài nội dung của thành phần được chọn bởi một cấu trúc HTML

.width()            --> Xác định hoặc gán giá trị chiều rộng (width) cho thành phần.
.height()           --> Xác định hoặc gán giá trị chiều cao (height) cho thành phần.
.innerHeight()      --> Lấy giá trị chiều cao của thành phần phù hợp, chiều cao này không bao gồm border hay margin.
.innerWidth()       --> Lấy giá trị chiều rộng của thành phần phù hợp, chiều cao này không bao gồm border hay margin.
.outerHeight()      --> Lấy giá trị chiều cao của thành phần phù hợp, chiều cao này bao gồm border, padding.
.outerWidth()       --> Lấy giá trị chiều rộng của thành phần phù hợp, chiều rộng này bao gồm border, padding.
```
