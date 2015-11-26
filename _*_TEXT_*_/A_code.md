-----------------------------------------------------------------------------------------------------
------------------- Show hidden files (like htaccess) in Mac OS X -----------------------------------
-----------------------------------------------------------------------------------------------------
iMAC1s-iMac:~ imac1$ defaults write com.apple.finder AppleShowAllFiles TRUE
iMAC1s-iMac:~ imac1$ killall Finder
iMAC1s-iMac:~ imac1$ defaults write com.apple.finder AppleShowAllFiles FALSE
-----------------------------------------------------------------------------------------------------
---------------------------------- Cross-browser ----------------------------------------------------
-----------------------------------------------------------------------------------------------------
[if lt IE 9]>
   <link rel="stylesheet" type="text/css" media="screen" href="css/lt.ie.9.css" />
<![endif]

=> Modernizr
-----------------------------------------------------------------------------------------------------
---------------------------------- Localhost --------------------------------------------------------
-----------------------------------------------------------------------------------------------------
(#) localhost mac
—— hosts
sudo nano -w /private/etc/hosts
control + x
—— vhosts
etc/extra/httpd-vhosts.conf
—— user
iMAC1s-iMac:~ imac1$ cd /Applications/XAMPP/htdocs/wohnungssuche/trunk_pro
iMAC1s-iMac:trunk_pro imac1$ sudo chmod -R 777 *
-----------------------------------------------------------------------------------------------------
---------------------------------- Github -----------------------------------------------------------
-----------------------------------------------------------------------------------------------------
(*) git init (tạo kho)
	git init

(*) git branch (nhánh)
	git branch        // kiểm tra nhánh
	git branch abc    // add nhánh
	git branch -d abc // del nhánh

(*) git checkout (chuyển nhánh)
-----

(*) git add (thêm, xóa, sửa)
	git add -A         // Cập nhật thay đổi all
	git add .          // Cập nhật thay đổi mà không bị xóa
	git add -u		   // cập nhật thay đổi mà không mới

(*) git commit (Xác nhận và lưu những thay đổi của project)
	git commit -m "<Ghi chú>"

(*) git push  (Cập nhật những thay đổi của project và gửi lên server)
	git push origin <Tên nhánh>
OR >  Chưa clone một repository
	git remote add origin <máy-chủ>

(*) git fetch (Lấy source server đè source local)
	git fetch <Tên nhánh>

(*) git pull (Lấy source mới nhất trên server về và tiến hành trộn)
	git pull <Tên nhánh>

(*) git tag (Gắn nhãn)
	git tag 1.0.0 1b2e1d63ff
OR>
	git log            // lấy mã 

(*) git status (trạng thái)
	git status
####################################################################################################
(# 1) git clone (tạo bản sao) Sever ---> Local
iMAC1s-iMac:Desktop imac1$ git clone https://github.com/nghti/sass_default.git
OR >
iMAC1s-iMac:Desktop imac1$ git clone tênusername@địachỉmáychủ:/đường-dẫn-đến/repository

(# 2) commit new Local ---> Sever
iMAC1s-iMac:myApp imac1$ git init
iMAC1s-iMac:myApp imac1$ git add .
iMAC1s-iMac:myApp imac1$ git commit -m "Ghi chú Commit"
	iMAC1s-iMac:myApp imac1$ git remote add origin https://github.com/nghti/app_ion.git
iMAC1s-iMac:myApp imac1$ git push origin master

(# 3) commit add Local ---> Sever
iMAC1s-iMac:git_new imac1$ git add -A
iMAC1s-iMac:git_new imac1$ git commit -m "Ghi chú Commit"
iMAC1s-iMac:git_new imac1$ git pull origin master
iMAC1s-iMac:git_new imac1$ git push origin master

(# 3) commit add Sever ---> Local
iMAC1s-iMac:git_new imac1$ git pull
-----------------------------------------------------------------------------------------------------
---------------------------------- BitBucket --------------------------------------------------------
-----------------------------------------------------------------------------------------------------
...
-----------------------------------------------------------------------------------------------------
---------------------------------- SASS -------------------------------------------------------------
-----------------------------------------------------------------------------------------------------
(#) creater compass and start
iMAC1s-iMac:~ imac1$ gem install compass
iMAC1s-iMac:~ imac1$ compass version
iMAC1s-iMac:Desktop imac1$ compass create mynew
iMAC1s-iMac:Desktop imac1$ compass watch mynew
* note change in config.rb
--------------->
(#) start sass
iMAC1s-iMac:sass imac1$ sass --watch style.scss:style.css
-----------------------------------------------------------------------------------------------------
----------------------------------- Phonegap --------------------------------------------------------
-----------------------------------------------------------------------------------------------------
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
-----------------------------------------------------------------------------------------------------
--------------------------------------- App Ionic ---------------------------------------------------
-----------------------------------------------------------------------------------------------------
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
-----------------------------------------------------------------------------------------------------
---------------------------------- Nodejs -----------------------------------------------------------
-----------------------------------------------------------------------------------------------------
(#) nodejs
iMAC1s-iMac:root1 imac1$ sudo mongod
and
iMAC1s-iMac:root1 imac1$ node server.js
