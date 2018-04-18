# SASS
> Nhanh, dễ quản lý ... css, hướng component

## Tree in sass

![img](https://image.prntscr.com/image/cAQneQSfSc6xwJLGhiSE8Q.png)

## Varibles - Sử dụng biến
> Dùng tốt nhất với màu sắc

 - $tên-biến
```css
$shadow: 5px 5px 5px #000000;

.post_title {
  text-shadow: $shadow
}
```

- !global (toàn cầu)
```css
.main {
  $width: 5em !global;
  width: $width;
}
.sidebar {
  width: $width;
}
```

## Nesting - xếp chồng
> Tốt nhất <= 3 lớp

```css
.menu {
  li {
    float: right;
  }
  a {
    color: #fff;
    &:hover,&:visited {
    text-decoration: none;
    }
  }
}
```

- ex: kết nối
```css
.menu {
  &-sidebar {
    border: 1px solid;
  }
}
```

- ex: kết nối x
```css
.funky {
  font: {
    family: fantasy;
    size: 30em;
  }
}
```

- ex: kết nối x 2
```css
.funky {
  font: 20px/24px fantasy {
    weight: bold;
  }
}
```

## Partials
> Nên tách 'sass' ra từng phần nhỏ để dễ quản lý

> '_partial.scss' biết đây chỉ là file ko build ra css

> dung '@import' tổng hợp file lại với nhau

## Mixin – @mixin
- ex1
```css
@mixin float-left {
  float: left;
  margin: 10px;
}

.class { @include float-left;}
```

- ex2
```css
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.box { @include border-radius(10px); }
``

- ex3
```css
@mixin float-left($float,$margin) {
  float: $float;
  margin: $margin;
}

.nav {
  @include float-left(left, 10px)
}
```

## Extends – Kế thừa
```css
.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.error {
  @extend .message;
  border-color: red;
}

.warning {
  @extend .message;
  border-color: yellow;
}
```

## Operators - Tính toán
```css
.container { width: 100%; }

.article {
  float: left;
  width: 600px / 960px * 100%;
}

.aside {
  float: right;
  width: 300px / 960px * 100%;
}
```

## Các mệnh đề điều kiện trong SASS
### Điều kiện @if
```css
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

-> `Build`

p {
  color: green; 
}
```

### Điều kiện @for
```css
@for $i from 1 through 3 {
  .item-#{$i} { width: 2em * $i; }
}

-> `Build`

.item-1 {
  width: 2em; }
.item-2 {
  width: 4em; }
.item-3 {
  width: 6em; }
```

### Điều kiện @each
```css
@each $animal in puma, sea-slug, egret, salamander {
  .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
  }
}

-> `Build`

.puma-icon {
  background-image: url('/images/puma.png'); }
.sea-slug-icon {
  background-image: url('/images/sea-slug.png'); }
.egret-icon {
  background-image: url('/images/egret.png'); }
.salamander-icon {
  background-image: url('/images/salamander.png'); }
```

### Điều kiện while
```css
$i: 6;
@while $i > 0 {
  .item-#{$i} { width: 2em * $i; }
  $i: $i - 2;
}

-> `Build`

.item-6 {
  width: 12em; }

.item-4 {
  width: 8em; }

.item-2 {
  width: 4em; }
```


