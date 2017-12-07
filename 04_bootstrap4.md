👉 +++++++++++++++++++++++++++++++++ [BOOTSTRAP](http://getbootstrap.com/) +++++++++++++++++++++++++++++++++ 👈

1. [Layout](#layout)
1. [Content](#content)
1. [Components](#components)
1. [Utilities](#utilities)

# Layout
#### Overview ( Tổng quan )
- [Responsive breakpoints](http://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints/)

> Viết css => @include media-breakpoint-$

- [Z-index](http://getbootstrap.com/docs/4.0/layout/overview/#z-index/)

> Giúp các Components tránh đè nhau

#### Grid
- [Option layout](http://getbootstrap.com/docs/4.0/layout/grid/#grid-options)

> .container ( mobile first )
```css
<  576px(.col)(auto)
>= 576px(.col-sm-*)(540px)
>= 768px(.col-md-*)(720px)
>= 992px(.col-lg-*)(960px)
>= 1200px(.col-xl-*)(1140px)

.container-fluid ( width => full-width )

.row ( Chuyển => margin: $ -15px )

.no-gutters ( Chuyển => margin: $ 0 )

.w-100 ( breaks div )
```
- col-$-*
```css
.col [ .col-$ ] : 100%
.col-auto [ .col-$-auto ] : none
```
- [Alignment](http://getbootstrap.com/docs/4.0/layout/grid/#alignment)

> Căn chỉnh thành phần
```css
.justify- [ justify-$ ] : Trai, giua, phai, cách đôi
.align- [ align-$ ] : Tren, giua, duoi, 1hang
.flex- [ flex-$ ] : ?
```
- [Reordering](http://getbootstrap.com/docs/4.0/utilities/borders/)

> Xắp xếp vs tùy chỉnh
```css
.order-* ( .order-first ) [ order-$-* ] : Thứ tự trước sau
.offset-* [ offset-$-* ] : margin-left
```

#### More
- [Media object](http://getbootstrap.com/docs/4.0/layout/media-object/)

> Layout box thông tin hình

- //-If have time- [Utilities for layout](http://getbootstrap.com/docs/4.0/layout/utilities-for-layout/)

> Tiện ích thêm

# Content

- [Reboot](http://getbootstrap.com/docs/4.0/content/reboot/)

> Giới thiệu chung về content

- [Typography](http://getbootstrap.com/docs/4.0/content/typography/)

> Global settings, Kiểu chữ headings, text, lists ...

- //-If have time- [Code](http://getbootstrap.com/docs/4.0/content/code/)

> Xem them

- [Images](http://getbootstrap.com/docs/4.0/content/images/)

> Tùy chỉnh ảnh

- [Tables](http://getbootstrap.com/docs/4.0/content/tables/)

> Tùy chỉnh bảng

- [Figures](http://getbootstrap.com/docs/4.0/content/figures/)

> Text phụ ảnh

# Components
> [Demo có JS](http://getbootstrap.com/docs/4.0/components/alerts/)

+ Alerts ( Cảnh báo theo màu )
+ Badges ( Danh hiệu cho text có màu trong padding )
+ Breadcrumb ( Link sau )
+ Buttons ( = )
+ Button group ( Kiểu nhiều button dính )
+ Cards ( Thông tin có cả hình )
+ Carousel ( Slider chạy ảnh )
+ Collapse ( Option toggle )
+ Dropdowns ( Click show menu )
+ Forms ( = )
+ Input group ( Title in input )
+ Jumbotron ( Demo nội dung basic )
+ List group ( = )
+ Modal ( = )
+ Navs ( List trên, trái, dưới )
+ Navs ( Menu )
+ Pagination ( Phân trang )
+ Popovers ( Show box cho cái thành phần )
+ Progress ( Chạy bao nhiêu % theo line )
+ Scrollspy ( Scroll các kiểu menu )
+ Tooltips ( Show text cho cái thành phần )

# Utilities
> [Class Tiện ích](http://getbootstrap.com/docs/4.0/utilities/borders/)

+ Borders ( Trái, phải, màu, radius ... )
+ Clearfix ( = )
+ Close icon ( Icon ẩn modals, alerts ... )
+ Colors ( Text, padding, box ... )
+ Display property ( Ẩn/hiện nhiều kiểu inline, block ... )
+ Embeds ( Nhúng video, slideshow ... )
+ Flex ( Giống ^Alignment^ ... )
+ Float ( = )
+ Image replacement ( Thay ảnh cho text )
+ Position ( Fixed top, Fixed bottom ... )
+ Screenreaders ( ide elements )
+ Sizing ( width, height % của div )
+ Spacing ( Tùy chỉnh phần tử 'left: 5px' ... )
+ Text ( Kiểu trái, phải, đậm, nghiên ... )
+ Vertical alignment ( Căn chỉnh chữ trong box )
+ Visibility ( Hiểu thị ẩn/hiện )
