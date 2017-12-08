👉 +++++++++++++++++++++++++++++++++ [Material-UI](http://www.material-ui.com) +++++++++++++++++++++++++++++++++ 👈

1. [Getting Started](#getting-started)
1. [Customization](#customization)
1. [Themes](#themes)

# Getting Started
- [Example Projects](https://material-ui-next.com/getting-started/example-projects/#example-projects)

# Customization

- Overrides(ghi đè)

+ [Overriding with class names](https://material-ui-next.com/customization/overrides/#overriding-with-class-names)
+ [Overriding with classes](https://material-ui-next.com/customization/overrides/#overriding-with-classes)
+ [Overriding with inline-style](https://material-ui-next.com/customization/overrides/#overriding-with-inline-style)
+ [dùng lại](https://material-ui-next.com/customization/overrides/#2-specific-variation-of-a-component)
- Themes
+ [MuiThemeProvider](https://material-ui-next.com/customization/themes/)

- [CSS in JS](https://material-ui-next.com/customization/css-in-js/)

# Guides
- [api](https://material-ui-next.com/guides/api/)
- [Minimizing Bundle Size](https://material-ui-next.com/guides/minimizing-bundle-size/)
```js
Bad:
   import { Button, TextField } from 'material-ui';
Good:
   import Button from 'material-ui/Button';
   import TextField from 'material-ui/TextField';
```
- Migration from v0.x
```js
yarn add material-ui@latest
yarn add material-ui-next@npm:material-ui@next
```
- [Right-to-left](https://material-ui-next.com/guides/right-to-left/)

# Style
- [Color](https://material-ui-next.com/style/color/#color)
- [Font Icon](https://material-ui-next.com/style/icons/)
- [typography](https://material-ui-next.com/style/typography/#typography)

# Layout
- Breakpoints
+ xs, extra-small: 360dp
+ sm, small: 600dp
+ md, medium: 960dp
+ lg, large: 1280dp
+ xl, xlarge: 1920dp

- Grid ************
+ spacing: padding các div
+ xs, sm, md, lg, and xl: wid % các div & mobile firt
+ Auto-layout: nếu xs không có giá trị
+ layout: containers => items
+ Interactive: https://material-ui-next.com/layout/grid/#interactive

- Hidden
+ xlUp: ẩn all dưới trừ XL
+ xsDown: ẩn all trên trừ XS
+ only="lg": ẩn chính nó & only={['sm', 'lg']} cho nhiều trường hợp

- CSS in JS
```css
[theme.breakpoints.up('md')]: {
    backgroundColor: theme.palette.primary[500],
},
[theme.breakpoints.down('md')]: {
    backgroundColor: theme.palette.secondary.A400,
},
```