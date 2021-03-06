# grunt-svg-to-javascript

> Compile a folder of SVG files into object in a JavaScript file.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-svg-to-javascript --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-svg-to-javascript');
```

### Overview
In your project's Gruntfile, add a section named `svg-to-javascript` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    svg_to_javascript: {
        all: {
          options: {},
          files: {
            //output : [input] 
          }
        }
    }
});
```


### Options

#### options.objName
Type: `String`
Default value: `'svgData'`

A string value that is used to do javascript object name.

### Usage Examples

#### Default Options

```js
grunt.initConfig({
  svg_inject: {
    options: {},
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

#### Custom Options

```js
grunt.initConfig({
  svg_inject: {
    options: {
      objName: 'svgData'
    },
    files: {
      'dest/default_options.js': ['src/1.svg', 'src/123.svg'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
