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
* [Gulp](http://gulpjs.com/)
* [Sass](http://sass-lang.com/)
* [Bourbon](http://bourbon.io/)

Install the node modules
```
npm install
```

After installing the listed requirements you can start developing! :)

To compile Sass run:
```
gulp sass
```

To watch for Sass changes run:
```
gulp watch
```

I use [scrollMagic](http://scrollmagic.io/) for handling scroll events.

To enable development mode for scrollMagic add [this](http://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js) plugin. 

Use the following on your scenes to view triggers:
```
.addIndicators({name: '<name>'})
```

## Code Styling and Linting

I've installed some node modules to help with my code styling.

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

## Generating Build

To compress the project folder run:
```
gulp compress
```
This will compile all Sass files and create an archive.gz file in the build directory.
