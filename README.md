# MOOC website

A one page website describing the progress of creating a MOOC.

## Setup

Clone the repo with git:
```
git clone git@github.com:sjaakluthart/mooc-website.git
```

Requirements:
* [Sass](http://sass-lang.com/)
* [Bourbon](http://bourbon.io/)
* [Compass](http://compass-style.org/)

After installing the listed requirements you can start developing! :)

I use [Compass](http://compass-style.org/) to process my Sass, you can use any processor you like.

To watch for Sass changes run:
```
compass watch <path to assets>
```

To enable development mode for scrollMagic add [this](http://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js) plugin. 

Use the following on your scenes to view triggers:
```
.addIndicators({name: '<name>'})
```
