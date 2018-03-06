# CMD
## Basic
git config --global user.email "nghti8020@gmail.com" 

git clone (tạo bản sao) Sever ---> Local

```html
git clone https://github.com/nghti/sass_default.git
OR
git clone tênusername@địachỉmáychủ:/đường-dẫn-đến/repository
```
git init (tạo kho)

```html
git init
git remote add origin [link_project]
```
git branch (nhánh)

```html
git branch -a        // kiểm tra nhánh
git branch abc     // add nhánh abc
git branch -d abc // del nhánh abc
```
git fetch --all (cập nhật nhánh)

git checkout (chuyển nhánh)

```html
git checkout abc           // qua nhanh acb
git checkout .                // lay het code lai
git checkout -b TOIL-4  // create nhánh mới khi fix
```
git pull (Lấy source mới nhất trên server về và tiến hành trộn local)

```html
git pull <Tên nhánh>
```
git status (kiểm tra thay đổi vs xem có conflicts)

```html
git status
```
git add (thêm, xóa, sửa)

```html
git add -A        // Cập nhật thay đổi all
git add .          // Cập nhật thay đổi mà không bị xóa
git add -u	      // cập nhật thay đổi mà không mới
```
git commit (ghi chú của project)

```html
git commit -m  "<Ghi chú>"
```
git push  (Cập nhật project >> server)

```html
git push origin <Tên nhánh>
```
 ---- OR

```html
git add -A && git commit -m "Ghi chú Commit" && git push origin master
```
## master

git conflict

```html
git add .
git commit -m "commit conflict"
git pull origin develop
> fix file conflict
```

git fetch (Lấy source server đè source local)

git push origin HEAT (Chinh nhanh do)

```html
git fetch <Tên nhánh>
```
git tag (Gắn nhãn)

```html
git tag 1.0.0 1b2e1d63ff
OR>
git log            // lấy mã 
```
git reset --hard (lay lai code)

```html
git reset --hard 70cb5a9
```
git reset // lay lai code cu khi da add -A

git stash // khi conflicts, lay all server -> local

git diff