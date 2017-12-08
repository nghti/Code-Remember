# REACT

> Mô Tả Tổng quan
```html
- nhận action từ người dung (click, onChange, lifecycle..)
- dispatch đến 1 action (TYPE, DATA)
- Ở Reducer, dựa vào TYPE, update DATA
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
## components
- Trong React  có 2 loại Component
    + Stateful Component 
    + Stateless Component

- Tên thư mục
```html
action:      chứa hành động
constants:   chứa biến hằng số
helpers:     chứa các hàm hổ trợ
images:      chứa ảnh
middleware:  chứa trung gian (lang)
reducers:    chứa các option mới thay đổi của action 
routes:      chứa link (react-router)
styles:      chứa css
utils:       chứa tạp
validations: chứa xác nhận
```
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
-component lấy state trực tiếp ko phải thông qua component khác
-nếu mun thay đổi nhiều component ta có thể chỉ sét state 1 lần ở store
```