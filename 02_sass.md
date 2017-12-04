#####--------------------------------------------  STUDY SASS  --------------------------------------------
#####--------------------------------------------  BEM  --------------------------------------------
/// @alias element
@mixin e($element) {
    &__#{$element} {
        @content;
    }
}
/// @alias modifier
@mixin m($modifier) {
    &--#{$modifier} {
        @content;
    }
}
/// Rewriting our previous example with our brand new mixins alias
.menu {
    ...

    @include e('item') {
        ...
    }

    @include m('fixed') {
        ...
    }
}
#####--------------------------------------------  Sass  --------------------------------------------
sass -> (nhanh, dễ quản lý ... css )
###/ * Quy tắc xếp chồng (Nested Rules) ^^ Tốt nhất <= 4 lớp * /
.menu {
 	li {
 		float: right;
		a {
		  color: #fff;
			&:hover,&:visited {
			text-decoration: none;
			}
		}
 	}
}

>> ex: kết nối

.menu {
  &-sidebar {
    border: 1px solid;
  }
}

-> css
.menu-sidebar {
  border: 1px solid;
}

>> ex: kết nối x

.funky {
  font: {
    family: fantasy;
    size: 30em;
  }
}

-> css
.funky {
  font-family: fantasy;
  font-size: 30em;
}

>> ex: kết nối x 2

.funky {
  font: 20px/24px fantasy {
    weight: bold;
  }
}

-> css
.funky {
  font: 20px/24px fantasy;
  font-weight: bold;
}

###/ * Sử dụng biến (Varibles) – $tên-biến * /
$shadow: 5px 5px 5px #000000;

-> user
.post_title {text-shadow: $shadow}

>> ex: !global(toàn cầu)

.main {
  $width: 5em !global;
  width: $width;
}

.sidebar {
  width: $width;
}

###/ * Quy tắc Mixin – @mixin tên_mix * /
@mixin float-left {
float: left;
margin: 10px;
}

-> user
.class { @include float-left;}

>> ex

@mixin float-left($float,$margin) {
float: $float;
margin: $margin;
}

-> user
.class_1 {
@include float-left(left, 10px)
}

###/ * Extends – Kế thừa @extend tên_class * /
.button_1 {
shadow:inset 0px 1px 0px 0px #ffffff;
-moz-box-shadow:inset 0px 1px 0px 0px #ffffff;
-webkit-box-shadow:inset 0px 1px 0px 0px #ffffff;
......
}

-> user
.button_2 { @extend .button_1; }
.button_3 { @extend .button_1; }

>> Vùng chọn %name

%button_1 {
color: red;
margin: 10px;
}

-> user
.button_1 { @extend %button_1; }

###/ * Các mệnh đề điều kiện trong SASS * /

>> Điều kiện @if

$type: monster;
p {
  @if $type == ocean {
    color: blue;
  } @else if $type == matador {
    color: red;
  } @else if $type == monster {
    color: green;
  } @else {
    color: black;
  }
}

-> css
p {
  color: green; 
}

>> Điều kiện @for

@for $i from 1 through 3 {
  .item-#{$i} { width: 2em * $i; }
}

-> css
.item-1 {
  width: 2em; }
.item-2 {
  width: 4em; }
.item-3 {
  width: 6em; }

>> Điều kiện @each

@each $animal in puma, sea-slug, egret, salamander {
  .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
  }
}

-> css
.puma-icon {
  background-image: url('/images/puma.png'); }
.sea-slug-icon {
  background-image: url('/images/sea-slug.png'); }
.egret-icon {
  background-image: url('/images/egret.png'); }
.salamander-icon {
  background-image: url('/images/salamander.png'); }

>> Điều kiện while

$i: 6;
@while $i > 0 {
  .item-#{$i} { width: 2em * $i; }
  $i: $i - 2;
}

-> css
.item-6 {
  width: 12em; }

.item-4 {
  width: 8em; }

.item-2 {
  width: 4em; }



