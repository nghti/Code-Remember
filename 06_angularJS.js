+ Login
+ Register
+ Forgot password
+ List danh sách, click vào detail
+ Like 1 article+ ...
+ Thêm, sửa, xóa nữa

#####------------------------------------------ STUDY Angular JS ----------------------------------------------------------------------------------------------------------------------------------------
True: 
* tạo ra code đơn giản. code sạch
* có thể chạy trên hầu hết các điện thoại thông minh and tự động fix các trình duyệt khác nhau
False:
* không an toàn vì là js, phải nhận quyền để máy chạy ok
* phụ thuộc js nên web ko có sẽ die

###----------------------------------------------- ứng dụng
>> MVC 									// Mô hình chia thành phần riêng biệt thành Model, View, Controller. Đây là một mô hình khá hay nhưng trong Angular, nó được chế biến lại một chút gần giốn với MVVM (Model View View Model)

>> Model                // truy vấn trực tiếp với dữ liệu, controller(bằng hàm) rồi gửi qua View

>> View                 // có nhiệm vụ tiếp nhận dữ liệu từ controller và hiển thị nội dung sang các đoạn mã HTML (giao diện)

>> controllers					// trung gian giữa Model và View.


>> modules          		// định ngĩa đây là ứng dụng *

>> data-binding         // Liên kết dữ liệu - tự động đồng bộ dữ liệu giữa model và view

>> scope 								// phạm vi - đây là những đối tượng kết nối giữa controller và view

>> Service 							// AngularJS sử dụng các API được xây dựng từ các web service (PHP, ASP) để thao tác với DB.

>> Filters 							// Bộ lọc lọc ra các thành phẩn của một mảng và trả về mảng mới

>> Directives  					// đánh dấu vào các yếu tố của DOM, nghĩa là sẽ tạo ra các thẻ HTML tùy chỉnh

>> Templates 						// hiển thị thông tin từ controller, đây là một thành phần của views

>> Routing  						// chuyển đổi giữa các action trong controller

>> Deep Linking         // Liên kết sâu, cho phép bạn mã hóa trạng thái của ứng dụng trong các URL  để nó có thể đánh dấu được với công cụ tìm kiếm.

>> Dependency Injection // Angular giúp các nhà phát triển tạo ứng dụng dễ dàng hơn để phát triển, hiểu và thử nghiệm dễ dàng.

###----------------------------------------------- components //Các components chính
ng-app="myApp"   				// định nghĩa và liên kết một ứng dụng AngularJS tới HTML.
ng-controller="myCtrl"  // xác định bộ điều khiển
ng-model="name" 		    // gắn kết giá trị của dữ liệu ứng dụng AngularJS đến các điều khiển đầu vào HTML.
ng-bind="name"        	// gắn kết dữ liệu ứng dụng AngularJS đến các thẻ HTML.

###----------------------------------------------- Directives
#--// directive co ban
ng-app    // Dùng để bắt đầu một ứng dụng AngularJS
ng-init   // Dùng để bắt đầu một ứng dụng AngularJS
ng-model  // Dùng định nghĩa model như là một biến có thể sử dụng trong AngularJS.
ng-repeat // Dùng để lặp lại các phần tử HTML cho mỗi item trong một tập hợp.

#--// directive All
Application
(> ng-app
(> ng-controller

Forms
(> ng-pattern
(> ng-minlength
(> ng-maxlength
(> ng-required
(> ng-list
(> ng-true-value
(> ng-false-value
(> ng-options
(> ng-submit

Template
(> ng-csp
(> ng-disabled
(> ng-hide | ng-show
(> ng-if 
(> ng-mouse
(> ng-repeat
(> ng-switch
(> ng-transclude
(> ng-view
(> ng-include

Operation
(> ng-change
(> ng-checked
(> ng-click
(> ng-href
(> ng-selected

Binding
(> ng-bind
(> ng-model
(> ng-init
(> ng-src
(> ng-style

#--// directive Tu tao
.directive('myDirective', function() {
    return {
        template: '<h1>directive tự tạo</h1>'
    };
});

>>

<div my-directive>

##----------------------------------------------- expression
#--// Cung show HTML
ng-bind="expression" <==> {{expression}}

#--// one-time binding
{{ ::expression }}

##----------------------------------------------- controller
>> ng-controller
>> ứng dụng được điều khiểu bở ng-

##----------------------------------------------- modules
>> angular.module

>> add controller

>> add chỉ thị

>> modules and controller in files

##----------------------------------------------- chỉ thị
ng-app   // chỉ thị khởi tạo ứng dụng *
ng-init  // chỉ thị khởi tạo dữ liệu ứng dụng
ng-model // chỉ thị liên kết vs html để xem dữ liệu ứng dụng


##----------------------------------------------- model
>> ràng buộc đầu vào

>> ràng buộc cả hai

>> user input

>> tình trạng ứng dụng

>> lớp css

##----------------------------------------------- data binding


##----------------------------------------------- scope // phạm vi
>> local vs global

##----------------------------------------------- Services // dịch vụ




##----------------------------------------------- filters // bộ lọc
> currency: định dạng số thành kiểu tiền tệ
> date: định dạng ngày tháng theo định dạng đã cho
> filter: trả về tập con từ mảng dữ liệu
> json: định dạng đối tượng thành JSON
> limitTo: giới hạn một mảng/chuổi thành một số phần tử/ký tự đã cho
> lowercase: chuyển chuổi sang chữ thường
> number: chuyển số sang chữ
> orderBy: sắp xếp mảng theo thứ tự
> uppercase: chuyển chuỗi sang chữ hoa

#--// chỉ thị
ng-init="name"          // chỉ thị khởi tạo dữ liệu ứng dụng