# REACT
> React là một thư viện viết bằng javascrip `Không như Angular là một Framework`, dùng để xây dựng giao diện người dùng `Làm all thao tác ngoài View trong mô hình MVC`

## Mô Tả Tổng quan
```html
- nhận action từ người dung (click, onChange, lifecycle..)
- dispatch đến 1 `action` (TYPE, DATA)
- đến `saga`, bắt sự kiện dựa vào TYPE, update DATA sever
- đến `action` dựa vào Success/failure
- đến `reducer`, dựa vào TYPE, update DATA
- STATE change, được update lên STORE
- DONE
```

## [Folow aribnb](https://github.com/airbnb/javascript/tree/master/react)
```html
1  Basic Rules                                // Done
2  Class vs React.createClass vs stateless    // Done
3  Mixins                                     // Done
4  Naming                                     // 2
5  Declaration                                // Done
6  Alignment                                  // Done
7  Quotes                                     // Done
8  Spacing                                    // Done
9  Props                                      // Done
10 Refs                                       // 2
11 Parentheses                                // Done
12 Tags                                       // Done
13 Methods                                    // Done
14 Ordering                                   // 2
15 isMounted                                  // Done
```
## structure
- Demo [https://github.com/nghti/Source-Demo/tree/master/Code-React](https://github.com/nghti/Source-Demo/tree/master/Code-React)
- env [custom-react-scripts](https://www.npmjs.com/package/custom-react-scripts)
- Trong React  có 2 loại [Component](https://techtalk.vn/blog/posts/tim-hieu-component-trong-reactjs)
    + Stateful Component 
    + Stateless Component
- Containers
    + một khung lớn bao bọc các components nhỏ trong 1 màng hình
    + chỉ chứa dispatch , mapstate và phân phát cho components dùng
    + components chỉ chưa views
    + dễ sửa vs nhìn gọn hơn
- truyền Props
    + cha truyền đến con <Component/>
    + React.createElement()

## Vi sao dùng redux
- Nếu ko
```html
- Thay đổi state của component trên cùng từ component dưới cùng
sẽ thông qua nhiều handlefunction sẽ rối handlefuntion
- Nhiều component sử dụng 1 state nếu ta thực thi 1 sự kiện nào đó 
sẽ làm thay đổi state của nhiều component khác
```
- Nếu dùng
```html
- Sẽ quản lý tất cả state tại store
- Component lấy state trực tiếp ko phải thông qua component khác
- Nếu mun thay đổi nhiều component ta có thể chỉ xét state 1 lần ở store
```
