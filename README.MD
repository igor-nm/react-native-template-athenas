[![npm](https://img.shields.io/npm/v/react-native-template-athenas.svg?label=npm%20package)](https://www.npmjs.com/package/react-native-template-athenas)
[![GitHub last commit](https://img.shields.io/github/last-commit/igor-nm/react-native-template-athenas.svg)](https://github.com/igor-nm/react-native-template-athenas/commits/master)
[![GitHub issues](https://img.shields.io/github/issues-raw/igor-nm/react-native-template-athenas.svg)](https://github.com/igor-nm/react-native-template-athenas/issues)
[![License](https://img.shields.io/github/license/igor-nm/react-native-template-athenas.svg)](https://github.com/igor-nm/react-native-template-athenas/blob/master/LICENSE)
[![GitHub tag](https://img.shields.io/github/tag/igor-nm/react-native-template-athenas.svg?color=ff0052)](https://GitHub.com/igor-nm/react-native-template-athenas/tags/)

<h1 align="center" style="margin: auto">Athenas</h1>

### About

This project exists because it became necessary to have agility and speed in the production of the native reaction projects. However we knows that configure and installation of libs on project start may have some complexity and sometimes errors that that end up disrupting the flow of development and bringing some delay on project.

### Template content (libraries)

Here is what was used to create this template:

-   [React Navigation](https://reactnavigation.org/en/) - _React Navigation_ is born from the React Native community's need for an extensible yet easy-to-use navigation solution written entirely in JavaScript (so you can read and understand all of the source), on top of powerful native primitives.
-   [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/) - _Gesture Handler_ aims to replace React Native's built in touch system called Gesture Responder System. It is used to provide more control over the built-in native components that can handle gestures.
-   [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) - Customizable Icons for React Native with support for NavBar/TabBar/ToolbarAndroid, image source and full styling.
-   [Styled Components](https://www.styled-components.com/) - _Styled Components_ is a CSS-in-JS library that enables developers to write each component with their own styles and allows the code to be in a single location. By coupling your styles with the components, it results in optimizing developer experience and output.
-   [Prop Types](https://github.com/facebook/prop-types) - _Prop Types_ is used to runtime type checking for React props and similar objects. React will check props passed to your components against those definitions, and warn in development if they don’t match.
-   [EditorConfig](https://editorconfig.org/) - _EditorConfig_ helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs.
-   [Babel](https://babeljs.io/) - _Babel_ is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.
    -   [babel-eslint](https://github.com/babel/babel-eslint) - A _wrapper_ for Babel's parser used for ESLint;
    -   [babel-plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import) - _Babel_ plugin to add the opportunity to use import and require with root based paths;
-   [ESLint](https://eslint.org/) - _ESLint_ is a open source project and its goal is to provide a pluggable linting utility for JavaScript.
    -   [eslint-config-standard](https://github.com/standard/eslint-config-standard) - This package provide the _.eslint_ from comunite, and is used to follow comunite code (code's default and style);
    -   [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - _ESLint_ plugin with specific rules to react;
    -   [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - _ESLint_ plugin with specific rules to help in imports validation;
    -   [eslint-plugin-react-native](https://github.com/Intellicode/eslint-plugin-react-native) - _ESLint_ plugin with specific rules to react-native;

## Getting Start

#### Requirements

To follow steps bellow its important to have the development environment of the react-native to create and test it applications.
Case you don't have you can follow these [steps](https://docs.rocketseat.dev/ambiente-react-native/introducao) provide by _[Rocket Seat](https://rocketseat.com.br/)_.
_Rocket Seat_ is a statup of development and currently these guys provides courses about Java Script including frameworks as ReactJS, React Native, Node and more.

#### Instalation

1. To use and install this template is a simple process, you just need create a new project with this command:

```sh
react-native init AwesomeExample --template athenas
```

2. After that you may delete the file `App.js` from root, because the file `index.js` now points to **src** folder..

This way the project will be create with all dependencies from template install and linked, such as files and configs that will be copies to project.

#### Additional step for android

For gestures is enabled on Android is necessary one more step, but is very simple!! Only open file `android/app/src/main/java/<pacote_do_projeto>/MainActivity.java` and import packages bellow:

```java
// ...
import com.facebook.react.ReactActivity;
// Added imports
import com.facebook.react.ReactRootView;
import com.facebook.react.ReactActivityDelegate;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
```

After import, we need create a new method bellow `getMainComponentName()`:

```java
public class MainActivity extends ReactActivity {
  @Override
  protected String getMainComponentName() { ... }
  // Added method
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
        return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }
}
```

## Files structure

The files structure is this way:

```bash
athenas
├── src/
│   ├── components/
│   │   ├── Theme.json
│   ├── assets/
│   │   └── images/
│   │       └── athenas.jpg
│   ├── screens/
│   │   └── main/
│   │       └── index.js
│   │       └── styles.js
│   ├── services/
│   │   └── sampleService.js
│   ├── app.js
│   └── routes.js
├── .editorconfig
├── .eslintrc.json
├── .gitignore
├── babel.config.js
├── dependencies.json
├── devDependencies.json
├── index.js
├── jsconfig.json
├── LICENSE
├── package.json
└── README.md
```

This section will have instructions case you wanna edit template, explaining folder by folder and file by file:

-   **src** - Here contains every folders and files of the application, it is created in a only directory `src` because the code can be isolated and easile ported to another projects, if you need.

    -   **components** - Here you can put your components that all application can use:

        -   **Theme.json** - This file is resposible to manager all theme in the application, for example you can put the application's colors and use from this file in all components, this way when you wanna change the application theme you just need change this file;

    -   **assets** - Here you can put some files splited by folders, follow sample bellow:

        -   **images** - Some images here;

    -   **screens** - Directory that has screens from application, by default and good practices every screen will stay inside directory with your name.

        -   **main** - Sample directory whose name's _main_, by default, it was adopted to always use the directory name in camelCase mode, within this directory it is necessary to create at least the `index.js` file.
            -   **index.js** - File with all logic from this screen, such as components that will be rendered;
            -   **\*styles.js** - File with all styled components from this screen;

    -   **services** - Here is where will be created the files relationed the services used on application, such as request HTTP, date, strings and more.

        -   **sampleService.js** - Sample file;

    -   **app.js** - Responsable file for centralize directory's code `src`, here are called the routes and also will be initialized any configuration from application and it is as a _Entry point_ from directory `src`;

    -   **routes.js** - File with application's routes configuration, here is created the navigators provided from _React Navigation_.

-   **.editorconfig** - File that has configuration from plugin _Editor Config_ that define some configs to diferents IDEs.

-   **.eslintrc.json** - ESlint's configuration file, here is inserted some rules and configuration of the project's linting.

-   **babel.config.js** - Babel's configuration file, here has the configuration that Babel Plugin Import provide to accept imports absolute in the application using `src` directiory as root.

-   **dependencies.json** - File containing only one object with list of dependencies that should be installed in the application, it is worth remembering that the dependencies that already come by default in the project as `react` and `react-native` need not be in this list, unless you want manage the version of these libs.

-   **devDependencies.json** - File containing only one object with list of development dependencies that should be installed in the application, it is worth remembering that the development dependencies that already come by default in the project like `@babel/core`, `@babel/runtime`, among others , do not need to be on this list, unless you want to manage the version of these libs.

-   **index.js** - The root file of the application, also called _Entry Point_, is the first file called at the time of building and executing the applications, in it is called the script `src/index.js`, which in turn calls the rotations of the application.

-   **jsconfig.json** - JavaScript configuration file in the Editor, it is responsible for activating the Autocomplete JavaScript code in the application.

-   **package.json** - Unlike common projects, this file has the necessary settings for publishing the Template in NPM.

## Contribution

Contributions are what make the open source community an incredible place to learn, inspire and create. Any contributions you make will be greatly appreciated.

1. Make a Project Fork
2. Create a Branch for your Feature (`git checkout -b feature/NewFeature`)
3. Add your changes (`git add .`)
4. Commit your changes (`git commit -m 'Adding an incredible feature!'`)
5. Push Branch (`git push origin feature/NewFeature`)
6. Open a Pull Request

## License

Distributed under the MIT license. See `LICENSE` for more information.

**"That's all folks!"**
