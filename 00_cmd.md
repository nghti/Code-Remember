# CMD

## NPM vs Yarn
#### init
```html
npm init
```

#### gulp
```html
npm install -g gulp 
gulp
```

#### npm & yarn
> [npm > yarn](https://yarnpkg.com/en/docs/migrating-from-npm)
```html
npm install yarn -g
yarn install <=> npm install
yarn add [package] --dev <=> npm install [package] --save-dev
yarn start <=> npm start
```
## Basic CMD
git config --global user.email "nghti8020@gmail.com" 

git clone ( `tạo bản sao Sever >> Local` )

```html
git clone https://github.com/nghti/default.git
```
git init ( `tạo kho` )

```html
git init
git remote add origin https://github.com/nghti/default.git
```
git branch ( `nhánh` )

```html
git branch -a        // kiểm tra nhánh
git branch abc       // add nhánh abc
git branch -d abc    // del nhánh abc
```
git fetch --all ( `cập nhật all nhánh` )

git checkout ( `chuyển nhánh` )

```html
git checkout abc         // qua nhanh acb
git checkout .           // lay het code lai
git checkout -b cdf      // create nhánh mới khi fix
```
git pull ( `Lấy source mới nhất trên server >> local` )

```html
git pull origin master
```
git status ( `kiểm tra thay đổi vs xem có conflicts` )

```html
git status
```
git add ( `thêm` )

```html
git add -A        // Cập nhật thay đổi all
git add .          // Cập nhật thay đổi mà không bị xóa
git add -u	      // cập nhật thay đổi mà không mới
```
git commit ( `ghi chú commit` )

```html
git commit -m  "fix bug"
```
git push  ( `Cập nhật local >> server` )

```html
git push origin master
```
 ---- OR All

```html
git add -A && git commit -m "fix bug" && git push origin master
```
## master

git conflict

```html
git pull origin develop  
> file conflict
git add .
git commit -m "commit"
git pull origin develop
> fix file conflict
git add .
git commit -m "commit conflict"
git push origin develop
```
git push origin HEAT ( `chính nhánh đó` )

git fetch ( `Lấy source server đè source local` )

```html
git fetch <Tên nhánh>
```
git tag ( `Gắn nhãn` )

```html
git tag 1.0.0 1b2e1d63ff
OR>
git log            // lấy mã 
```
git reset --hard ( `lay lai code` )

```html
git reset --hard 70cb5a9
```
git reset ( `lay lai code cu khi da add -A` ) 

git stash ( `khi conflicts, lay all server -> local` )

git diff

git luu nhanh
```html
git checkout -b LUU
git add .
git stash // lưu vô nhanh LUU
git stash list // Xem có bao nhiêu nhánh lưư
git stash pop // checkout lại nhánh LUU sẽ lấy lại data

```