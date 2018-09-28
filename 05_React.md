# REACT

> Mô Tả Tổng quan
```html
- nhận action từ người dung (click, onChange, lifecycle..)
- dispatch đến 1 `action` (TYPE, DATA)
-- Ở `Reducer`, dựa vào TYPE, update DATA
-- Ở `saga`, bắt sự kiện dựa vào TYPE, update DATA sever
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
- Tên thư mục
```html
- app      --> Tổng `?`
            + exception  --> Page ngoại lệ ( 404, error )
            + layouts    --> TP chung ( header, footer )
            + routes     --> Đường dẫn web
            + rootReducer.js
            + rootSaga.js
            + store.js
- assets   --> css, img, font
- common   --> chung `?`
            + componets  --> TP dùng chung
- features --> Layout từng page ( layout riêng, store [ actions, reducer, sage ] riêng, components riêng )
- services --> Link API `?`
- utils    --> chứa tạp `?`
- index.js
```
- Trong React  có 2 loại Component
> https://techtalk.vn/blog/posts/tim-hieu-component-trong-reactjs
    + Stateful Component 
    + Stateless Component

- Containers
    + một khung lớn bao bọc các components nhỏ trong 1 màng hình
    + chỉ chứa dispatch , mapstate và phân phát cho components dùng
    + components chỉ chưa views
    + dễ sửa vs nhìn gọn hơn

## Vi sao dùng redux
- Nếu ko
```html
- thay đổi state của component trên cùng từ component dưới cùng
sẽ thông qua nhiều handlefunction sẽ rối handlefuntion
- nhiều component sử dụng 1 state nếu ta thực thi 1 sự kiện nào đó 
sẽ làm thay đổi state của nhiều component khác
```
- Nếu dùng
```html
- sẽ quản lý tất cả state tại store
- component lấy state trực tiếp ko phải thông qua component khác
- nếu mun thay đổi nhiều component ta có thể chỉ sét state 1 lần ở store
```
