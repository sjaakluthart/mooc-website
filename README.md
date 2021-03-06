# MOOC website

A one page website describing the progress of creating a MOOC.

## Setup

Clone the repo with git:
```
git clone git@github.com:sjaakluthart/mooc-website.git
```

Requirements:
* [Node.js](https://nodejs.org/en/)
* [Bower](http://bower.io/)
* [Gulp](http://gulpjs.com/)
* [Sass](http://sass-lang.com/)

Install the node modules:
```
npm install
```

Install the bower components:
```
bower install
```

Generate the assets file *scripts.js*:
```
gulp scripts
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
gulp scss
```

To check js code styling run:
```
gulp jscs
```

To check js linting run:
```
gulp lint
```

## Generating Build

To compress the project folder run:
```
gulp compress
```
This will compile all Sass files and create an archive.zip file in the build directory.

### License
<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons-Licentie" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a>
