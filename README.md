# Website Performance Optimization portfolio project

frontend-nanodegree-mobile-portfolio
===============================

    This project is about optimizing websites.

** Clone Github Repository
    $git clone  https://github.com/LissaNgSang/frontend-nanodegree-mobile-portfolio
    $ open index.html

** Open Github Page click on the below
    [GitHub Page](https://lissangsang.github.io/frontend-nanodegree-mobile-portfolio/).

## Optmize Index.html
    Index.html file has to run on Google's Speed insight above 90 both on mobile and desktop

    Grunt was used to compress files like pictures and Style.CSS
    -Grunt cssmin
    -Grunt responsive images
    -Grunt image min

    Compressed pictures was added to the file

    After Style.CSS was minified this was inlined to the HTML file and Print.css was added with a media query

    Google analytics was left in the <script> tag but added *defer*

    All of this was done to eliminate Render-blocking

## Optimize main.js for pizza.html
    -removed unnecessary calculations from for loops
    -changed querySelector to getElementId
    -removed some variables that selected html classes from for loops
    -reduced pizza amounts from background based on the sizes of inner window

    Node.js was used to minify main.js
    -uglify.js


