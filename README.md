# MOOC website

A one page website describing the progress of creating a MOOC.

## Setup

Clone the repo with git:
```
git clone git@github.com:sjaakluthart/mooc-website.git
```

Requirements:
* [Node.js](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/)
* [Sass](http://sass-lang.com/)
* [Bourbon](http://bourbon.io/)

After installing the listed requirements you can start developing! :)

To watch for Sass changes run:
```
sass --watch src/assets/sass/style.scss:src/assets/stylesheets/style.css
```

I use [scrollMagic](http://scrollmagic.io/) for handling scroll events.

To enable development mode for scrollMagic add [this](http://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js) plugin. 

Use the following on your scenes to view triggers:
```
.addIndicators({name: '<name>'})
```

## Code Styling and Linting

I've installed some node modules to help with my code styling. I use gulp as a task manager.

First install the node modules
```
npm install
```

To check scss code styling run:
```
make scss
```

To check js code styling run:
```
make jscs
```

To check js linting run:
```
make lint
```
