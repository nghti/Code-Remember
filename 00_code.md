👉 Front End Developer 👈
```html
Front End * Animation : GreenSock, Velocityjs, Mojs
					* Logic     : AngularJS, Reactjs, Backbonejs 
```
## I work web

http://www.yms.ac.jp/

http://www.sapporo.belle.ac.jp/p/belles-snap/

http://www.takayama.ac.jp/lp/feature/

http://www.subaru.jp/event/2016/odaiba/

http://sp.subaru.jp/event/2016/odaiba/

http://ichinomiya-surftown.jp/

http://lalaphoto.jp/

http://lalaphoto.jp/sp/

## Hoc framework mới
```html
- Đắm chiềm vào nó.
- Vui vẽ, thích thú với như chơi với thứ mình tạo ra.
- ko cam kết nhiều thơi gian, chỉ cần cam kết ít như việc danh cho face..
- nghĩ chậm, nghĩ kĩ làm bước nhỏ sẽ học tốt hơn.
```

## Neolab
```html
comment bitbucket =>
EM-1499: [TB]Fix js menu
```
## Framgia
-Interview at Framgia

-Dựa vào skill ghi trong CV để hỏi.
+ cv trên cty của e là ji? trình bày quy trình lam việc?
+ dùng ji để trao đổi file?
+ dùng ji để code css?
+ đã từng thiết kế web chưa
+ css3 + html5 (vd) ,xml chưa
+ Đã từng sử dụng Bootstrap chưa?
+ Đã dùng ji ngoài Bootstrap chưa?
+ Mô tả viết JS cái click vs fixmenu như thế nào?

+ Angular đã dùng qua chưa? dùng thế nào?
+ JS có tự viết nhiều ko? plugins?

###----------------------------------  👉 Github 👈 -----------------------------------------------------
(*) git config --global user.email "nghti8020@gmail.com" 

(*) git clone (tạo bản sao) Sever ---> Local
-- git clone https://github.com/nghti/sass_default.git
OR >
-- git clone tênusername@địachỉmáychủ:/đường-dẫn-đến/repository

(*) git init (tạo kho)
	git init
  git remote add origin link_project

(*) git branch (nhánh)
	git branch -a     // kiểm tra nhánh
	git branch abc    // add nhánh abc
	git branch -d abc // del nhánh abc

(*) git fetch --all (cập nhật nhánh)

(*) git checkout (chuyển nhánh)
    git checkout abc          // qua nhanh acb
    git checkout .            // lay het code lai
    git checkout -b TOIL-246  // create nhánh mới khi fix

(*) git pull (Lấy source mới nhất trên server về và tiến hành trộn local)
  git pull <Tên nhánh>

(*) git status (kiểm tra thay đổi vs xem có conflicts)
  git status

(*) git add (thêm, xóa, sửa)
	git add -A        // Cập nhật thay đổi all
	git add .         // Cập nhật thay đổi mà không bị xóa
	git add -u		    // cập nhật thay đổi mà không mới

(*) git commit (ghi chú của project)
	git commit -m "<Ghi chú>"

(*) git push  (Cập nhật project >> server)
	git push origin <Tên nhánh>

 ---- OR

 git add -A && git commit -m "Ghi chú Commit" && git push origin master

========> master

(*) git fetch (Lấy source server đè source local)
	git fetch <Tên nhánh>

(*) git tag (Gắn nhãn)
	git tag 1.0.0 1b2e1d63ff
  OR>
	git log            // lấy mã 

(*) git reset --hard (lay lai code)
	git reset --hard 70cb5a9
(*) git reset // lay lai code cu khi da add -A

(*) git stash // khi conflicts, lay all server -> local

(*) git diff

###----------------------------------  👉 Localhost 👈 --------------------------------------------------
Install Linux, Apache, MySQL, PHP
##------------ localhost window
# vhosts
xampp\apache\conf\httpd.conf

Listen 8081
<VirtualHost *:8080>
    ServerAdmin admin@Default
    DocumentRoot "E:/xampp/htdocs/Default"
    ServerName localhost
</VirtualHost>

# host 
-> include phps
  # To parse .shtml files for server-side ncludes (SSI):
  # (You will also need to add "Includes" to the "Options" directive.)
  #
  AddType text/html .shtml 
  AddOutputFilter INCLUDES .shtml 

-> include virtual
  # To parse .shtml files for server-side includes (SSI):
  # (You will also need to add "Includes" to the "Options" directive.)
  #
  AddType text/html .html .shtml 
  AddOutputFilter INCLUDES .html .shtml 

##------------ localhost mac
# hosts
sudo nano -w /private/etc/hosts
control + x

# vhosts
etc/extra/httpd-vhosts.conf

# user
iMAC1s-iMac:~ imac1$ cd /Applications/XAMPP/htdocs/wohnungssuche/trunk_pro
iMAC1s-iMac:trunk_pro imac1$ sudo chmod -R 777 *

##------------ Create local ubuntu ------------##
#-> .env
  sudo nano .env
  php artisan key:generate
#sudo chown -R hoangtu:hoangtu .env
#sudo chown -R hoangtu:hoangtu /var/www/html/test/server-aglp/public/
#-> Access
  sudo chmod -R 755 ./
  sudo chmod -R 777 storage
  sudo chmod -R 777 bootstrap
#-> Hosts
  sudo nano /etc/hosts
#-> Vhosts
  sudo cp /etc/apache2/sites-available/toilet.dev.conf /etc/apache2/sites-available/test.kobori1.dev.conf
  sudo nano /etc/apache2/sites-available/test.kobori1.dev.conf
  sudo a2ensite test.kobori1.dev.conf
  #sudo a2enmod rewrite
  sudo service apache2 restart
#-> Create composer
  composer install
  composer update
  #composer dump-autoload
#-> Up db
  php artisan migrate
  php artisan db:seed
# Chay lai DB ~
  php artisan db:seed --class=CountriesTableSeeder

#---- Html local ubuntu
# rm -r folder  // xóa folder

# creater local mang
sudo php artisan serve --host=10.121.79.247 --port=81

# Del clear
php artisan view:clear
###----------------------------------  👉 Phonegap 👈 ---------------------------------------------------
(#) creater phonegap
iMAC1s-iMac:~ imac1$ cd 588
iMAC1s-iMac:588 imac1$ cordova create hello com.example.hello HelloWorld
iMAC1s-iMac:588 imac1$ cd hello 
--- android(studio) >> add (http://cordova.apache.org/docs/en/3.0.0/guide_platforms_android_index.md.html#Android%20Platform%20Guide)
iMAC1s-iMac:hello imac1$ cordova platform add android
iMAC1s-iMac:hello imac1$ cordova build android
iMAC1s-iMac:hello imac1$ cordova run android
--- ios(Xcode)
iMAC1s-iMac:hello imac1$ cordova platform add ios
iMAC1s-iMac:hello imac1$ cordova build ios
open -> project(platforms/ios) -> run

###----------------------------------  👉 App Ionic 👈 --------------------------------------------------
(#) creater ionic
iMAC1s-iMac:~ imac1$ sudo npm install -g cordova ionic
iMAC1s-iMac:~ imac1$ cd Desktop
iMAC1s-iMac:Desktop imac1$ ionic start myApp tabs
iMAC1s-iMac:~ imac1$ cd myApp
iMAC1s-iMac:myApp imac1$ ls
iMAC1s-iMac:myApp imac1$ cat package.json
iMAC1s-iMac:myApp imac1$ cd www
iMAC1s-iMac:www imac1$ vim index.html
->exit control + z
iMAC1s-iMac:www imac1$ cd ../
--- android
iMAC1s-iMac:myApp imac1$ ionic platform add android
iMAC1s-iMac:myApp imac1$ ionic build android
iMAC1s-iMac:myApp imac1$ ionic emulate android
--- ios
iMAC1s-iMac:myApp imac1$ ionic platform add ios
iMAC1s-iMac:myApp imac1$ ionic build ios
iMAC1s-iMac:myApp imac1$ ionic emulate ios

###----------------------------------  👉 Nodejs 👈 -----------------------------------------------------
(#) nodejs
iMAC1s-iMac:root1 imac1$ sudo mongod
and
iMAC1s-iMac:root1 imac1$ node server.js

###------------------- Show hidden files (like htaccess) in Mac OS X -----------------------------------
iMAC1s-iMac:~ imac1$ defaults write com.apple.finder AppleShowAllFiles TRUE
iMAC1s-iMac:~ imac1$ killall Finder
iMAC1s-iMac:~ imac1$ defaults write com.apple.finder AppleShowAllFiles FALSE
