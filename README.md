## What's in the Box!?!?

#### This project was created to house the default styles and components for all Thuzi admins apps.

The project contains styles for all the basic elements and some for more complex components.

Any new components that are created that can be used in a universal manor should be added to this project. As well as any updated basic element styles.

The project should be installed to all thuzi admins via [bower](https://bower.io). All Thuzi developers should have access to the [repo in github](https://github.com/Thuzi/admin-asset-lib).

```
bower install git@github.com:Thuzi/admin-asset-lib.git --save
```

### Dependencies

All dependencies will be installed if not already present when you install the package from bower. It does this based on the dependencies defined in the bower.json.

The project will appear in the bower_components folder as if it where any other package.

_(can be updated as needed, or based on new releases)_

*   [Angular](https://angularjs.org/)
*   [Angular-Animate](https://docs.angularjs.org/guide/animations)
*   [Angular-Route](https://docs.angularjs.org/api/ngRoute)
*   [Angular-Bootstrap](https://angular-ui.github.io/bootstrap/)
*   [Less](http://lesscss.org/)

### Bootstrap

The bootstrap.css included in the css folder is a custom build of bootstrap from the bootstrap [site](http://getbootstrap.com). Included with it is also the config.json file that can be used to update the custom build on the bootstrap site.

### Using the Less Files

Each less file in the css/less folder was created to house very specific CSS. All the CSS in each less file is done in a mobile first and Object Oriented manor. This is to increase and promote re-use of existing styles to decrease page bloat.

_More less files can be added as needed when more components are created. A new less file should be added for any and all new components._

One caveat to less is that you must include the **../bower_components/less/dist/less.min.js** script after all of your less file includes.

Another caveat to less is that calc() method does not work with mixing units of messure. ie. calc(100% - 80px) does not work. This does work with CSS3 however. So, to allow for this and other functionailty that less fails to provide, we have the things-that-dont-work-in-less.css file.

### Variables.less

The variables.less file is used to elimiate the need to add the same value to properties across all .less files. It also allows updates to specific values to be done much more simple because it is only defined in one place.

### Fonts

The default font in the typography.less is a google web font called Open Sans. It has the 400, 600 and 700 weight versions. With and Wihout italics.

```
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,400italic,600,600italic,700,700italic);
```

In the typography.less is also the icon font [Font Awesome](http://fontawesome.io) that is used. The fonts folder houses the web font files, in the formats .eot, .svg, .ttf, .woff, .woff2, and .otf.
