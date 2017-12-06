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

### Localhost
#### localhost window
- vhosts
```html
xampp\apache\conf\httpd.conf

Listen 8081
<VirtualHost *:8080>
    ServerAdmin admin@Default
    DocumentRoot "E:/xampp/htdocs/Default"
    ServerName localhost
</VirtualHost>
```
- host 
```html
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
```
#### localhost mac
- hosts
```html
sudo nano -w /private/etc/hosts
control + x
```
- vhosts
```html
etc/extra/httpd-vhosts.conf
```
- user
```html
iMAC1s-iMac:~ imac1$ cd /Applications/XAMPP/htdocs/wohnungssuche/trunk_pro
iMAC1s-iMac:trunk_pro imac1$ sudo chmod -R 777 *
```
### Phonegap
- creater phonegap
```html
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
```
### App Ionic
- creater ionic
```html
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
```
### Nodejs
- nodejs
```html
iMAC1s-iMac:root1 imac1$ sudo mongod
and
iMAC1s-iMac:root1 imac1$ node server.js
```
### Show hidden files (like htaccess) in Mac OS X
```html
iMAC1s-iMac:~ imac1$ defaults write com.apple.finder AppleShowAllFiles TRUE
iMAC1s-iMac:~ imac1$ killall Finder
iMAC1s-iMac:~ imac1$ defaults write com.apple.finder AppleShowAllFiles FALSE
```