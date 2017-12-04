# STUDY BOOTSTRAP 3
## Bootstrap: 
> code nhanh, Hệ thống lưới 12 cột dễ style, Hổ trợ responsive và trình duyệt tốt, Css vs Js cơ bản đã dk viết sẵn
```css
# >> so sánh
                  Bottstrap 2                         Bottstrap 3
                  chỉ hổ trợ less										  có hổ trợ sass
                 																			lưới responsive tốt hơn
                 																			mobile trước (mobile first)
- tên class vs js có thay đổi

                 .span* chia cột                     .col-md-* chia cột
                 .container-fluid                    .container
                 .row-fluid                          .row
```
###------------------------------------------ * html * ------------------------------------------------
Normalize.css (reset)
#--------------| vô hiệu hóa responsive zoom
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"> 

#--------------| width
.container ( các thiết bị khác nhau with # )
.container-fluid ( chiều rộng của nó sẽ full-width )
.row ( trong lớp => margin: 0 -15px -> == )

==> .container(mobile first): @media (min-width: 768px) >= @media (min-width: 992px) >= @media (min-width: 1200px)

#--------------| lưới 12(cột)

==> col-xs-4	...		0px(xs) >=        768px(sm)         >=         992px(md)         >=         1200px(lg) >

==> user col   <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2"> col thiết bị khác nhau </div>

col-xs-offset-3 (margin-left: trái)
col-xs-push-3   (position: relative <=> left: trái)
col-xs-pull-3   (position: relative <=> right: phải)

#--------------| media
@media (min-width: 768px) { ... }
@media (max-width: 320px) { ... }
@media (min-width: 320px) and (max-width: 768px) { ... }
@media only screen and (max-width:320px) {} /* only screen -> chính màn hình đó */

###------------------------------------------ * css * ------------------------------------------------

.clearfix									 // Clear box >> height
.lead  		   							 // nổi bật văn bản >> font-size: 21px;
.pull-left  							 // float: left !important;
.pull-right 							 // float: right !important;
.center-block							 // center: box;
.hidden										 // display: none !important;
.show											 // display: block !important;

<small> 	   							 // font-size: 80%;
<strong> 	   							 // font-weight: đậm
<em> 				 							 // in nghiêng
<code> 										 // in code trên web
...
http://getbootstrap.com.vn/css/#code

- align
	+ .text-left 
	+ .text-right
	+ .text-center 
	+ .text-justify 

- list
<ul> *, *, *
<ol> 1, 2, 3 ...
	+ .list-unstyled  		   // no style
	+ .list-inline 				   // (- - -)

- dl
  .dl-horizontal           // width auto dt vs dd (cân bằng)

- table 
	+ .table								 // tạo ô bản
	+ .table-striped 			   // kẻ xọc có/ko
	+ .table-bordered 		   // viền cho ô
	+ .table-hover 				   // hover dòng
	+ .table-condensed 		   // ô gần nhau
	+ < .table-responsive    // bọc table

- form
	+ .form-inline 					 // (- - -)
	+ .form-horizontal			 // tạo lưới cho form-group 
	+ > .form-group          // box cho input sẽ cách đẹp $ xét width: 100% or thêm .col-$-$ 
	+ .checkbox-inline và radio-inline. // (- - -)
	...
	http://getbootstrap.com.vn/css/#forms

- Button
	+ btn btn-default btn-lg active
	...
	http://getbootstrap.com.vn/css/#buttons

- img 
	+ .img-responsive 			 // max-width: 100%; height: auto;
	+ .img-rounded    			 // border-radius: 6px
	+ .img-circle     			 // border-radius: 50%;
	+ .img-thumbnail  			 // thumbnail img
----------------------------------------- * Components * -------------------------------------------
- fon icon glyphicon
	<span class="glyphicon glyphicon-search"></span>
	http://getbootstrap.com.vn/components/#glyphicons

- Button
	<button type="button" class="btn btn-default">Left</button>
	http://getbootstrap.com.vn/components/#btn-groups
	...
	ex: css style

###------------------------------------------ * js * ------------------------------------------------
- Modals 						 /* hộp thoại nhắc nhở */

- Dropdowns 				 /* menu sổ xuống */

- ScrollSpy 				 /* tự nhận menu khi kéo */

- tabs 							 /* điều hướng tab trong box */

- Tooltips 					 /* hover:thêm title > top - left -right -bottom */

- Popovers 					 /* click có nd vs ~ thêm h$ */

- Alert box messages /* nd ! có thể X */

- Buttons ~          /* Checkbox / Radio */

- Collapse 					 /* toggle => thanh kick ẩn hiện */

- Carousel: ;				 /* slider - băng chuyền 2 loai*/
	+ id="carousel-example-generic"
	+ id="carousel-example-captions"




