# hs-react-example

## Get Started
1. **Run the example app**. `npm start -s`
This will run the automated build process, start up a webserver, and open the application in your default browser. When doing development with this kit, this command will continue watching all your files. Every time you hit save the code is rebuilt, linting runs, and tests run automatically. Note: The -s flag is optional. It enables silent mode which suppresses unnecessary messages during the build.

## Initial Machine Setup
1. **Install [Node 4.0.0 or greater](https://nodejs.org)** - (5.0 or greater is recommended for optimal build performance). Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm).
2. **Install [Git](https://git-scm.com/downloads)**.
3. **Install [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) and [Redux Dev  Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)** in Chrome. (Optional, but helpful. The latter offers time-travel debugging.)

**On Windows:**

* **Install [Python 2.7](https://www.python.org/downloads/)**. Some node modules may rely on node-gyp, which requires Python on Windows.
* **Install C++ Compiler**. Browser-sync requires a C++ compiler on Windows. [Visual Studio Express](https://www.visualstudio.com/en-US/products/visual-studio-express-vs) comes bundled with a free C++ compiler. Or, if you already have Visual Studio installed: Open Visual Studio and go to File -> New -> Project -> Visual C++ -> Install Visual C++ Tools for Windows Desktop. The C++ compiler is used to compile browser-sync (and perhaps other Node modules).

## Technologies

| **Tech** | **Description** |**Learn More**|
|----------|-------|---|
|  [React](https://facebook.github.io/react/)  |   Fast, composable client-side components.    | [Pluralsight Course](https://www.pluralsight.com/courses/react-flux-building-applications)  |
|  [Redux](http://redux.js.org) |  Enforces unidirectional data flows and immutable, hot reloadable store. Supports time-travel debugging. Lean alternative to [Facebook's Flux](https://facebook.github.io/flux/docs/overview.html).| [Pluralsight Course](http://www.pluralsight.com/courses/react-redux-react-router-es6)    |
|  [React Router](https://github.com/reactjs/react-router) | A complete routing library for React | [Pluralsight Course](https://www.pluralsight.com/courses/react-flux-building-applications) |
|  [Babel](http://babeljs.io) |  Compiles ES6 to ES5. Enjoy the new version of JavaScript today.     | [ES6 REPL](https://babeljs.io/repl/), [ES6 vs ES5](http://es6-features.org), [ES6 Katas](http://es6katas.org), [Pluralsight course](https://www.pluralsight.com/courses/javascript-fundamentals-es6)    |
| [Webpack](http://webpack.github.io) | Bundles npm packages and our JS into a single file. Includes hot reloading via [react-transform-hmr](https://www.npmjs.com/package/react-transform-hmr). | [Quick Webpack How-to](https://github.com/petehunt/webpack-howto) [Pluralsight Course](https://www.pluralsight.com/courses/webpack-fundamentals)|
| [Browsersync](https://www.browsersync.io/) | Lightweight development HTTP server that supports synchronized testing and debugging on multiple devices. | [Intro vid](https://www.youtube.com/watch?time_continue=1&v=heNWfzc7ufQ)|
| [Mocha](http://mochajs.org) | Automated tests with [Chai](http://chaijs.com/) for assertions and [Enzyme](https://github.com/airbnb/enzyme) for DOM testing without a browser using Node. | [Pluralsight Course](https://www.pluralsight.com/courses/testing-javascript) |
| [Isparta](https://github.com/douglasduteil/isparta) | Code coverage tool for ES6 code transpiled by Babel. |
| [ESLint](http://eslint.org/)| Lint JS. Reports syntax and style issues. Using [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) for additional React specific linting rules. | |
| [SASS](http://sass-lang.com/) | Compiled CSS styles with variables, functions, and more. | [Pluralsight Course](https://www.pluralsight.com/courses/better-css)|
| [Editor Config](http://editorconfig.org) | Enforce consistent editor settings (spaces vs tabs, etc). | [IDE Plugins](http://editorconfig.org/#download) |
| [npm Scripts](https://docs.npmjs.com/misc/scripts)| Glues all this together in a handy automated build. | [Pluralsight course](https://www.pluralsight.com/courses/npm-build-tool-introduction), [Why not Gulp?](https://medium.com/@housecor/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8#.vtaziro8n)  |

## FAQ

### Is this a complete example?
In simple words, no.  This is no a template or the only way, but it serve the purpose of simplifying the starting process of a new project.  It's a work-in-progress project and will have changes in the future.  For now this is what's pending:

1. Add more tests (maintain test coverage at >90%)
2. Use webpack aliases for the Shared components and tools
3. Redefine ESLint rules
4. Add more interaction to the workflow for a full CRUD operation.

### What do the scripts in package.json do?
Unfortunately, scripts in package.json can't be commented inline because the JSON spec doesn't support comments, but here is the information about the package.json.  

| **Script** | **Description** |
|----------|-------|
| prestart | Runs automatically before start. Calls remove-dist script which deletes the dist folder. This helps remind you to run the build script before committing since the dist folder will be deleted if you don't. |
| start | Runs tests, lints, starts dev webserver, and opens the app in your default browser. |
| lint:tools | Runs ESLint on build related JS files. (eslint-loader lints src files via webpack when `npm start` is run) |
| clean-dist | Removes everything from the dist folder. |
| remove-dist | Deletes the dist folder. |
| create-dist | Creates the dist folder and the necessary subfolders. |
| build:html | Copies to /dist, and allows adding customization to HTML before moving it. |
| prebuild | Runs automatically before build script (due to naming convention). Cleans dist folder, builds html, and builds sass. |
| build | Bundles all JavaScript using webpack and writes it to /dist. |
| test | Runs tests (files ending in .spec.js) using Mocha and outputs results to the command line. Watches all files so tests are re-run upon save. |
| test:cover | Runs tests as described above. Generates a HTML coverage report to ./coverage/index.html |

### What does the folder structure contain?
```
.
├── .babelrc                  # Configures Babel
├── .editorconfig             # Configures editor rules
├── .eslintrc                 # Configures ESLint
├── .gitignore                # Tells git which files to ignore
├── .npmrc                    # Configures npm to save exact by default
├── README.md                 # Provide introductory information for the project.
├── dist                      # Folder where the build script places the built app. Use this in prod.
├── package.json              # Package configuration. The list of 3rd party libraries and utilities
├── src                       # Source code
│   ├── businessLogic         # Plain old JS objects (POJOs). Pure logic. No framework specific code here.
│   ├── features              # List of features supported on this application
│       ├── components        # React components folder (inside you can find the .JSX)
│       ├── actions.js        # Flux/Redux actions. List of distinct actions that can occur for the specific feature  
│       ├── constants.js      # Application constants including constants for Redux
│       ├── reducer.js        # Redux reducer for the specific feature. Your state is altered here based on actions
│       ├── containers        # Top-level React components that interact with Redux
│       ├── style.scss        # SASS file for any CSS styling specific to the feature
│   ├── favicon.ico           # favicon to keep your browser from throwing a 404 during dev. Not actually used in prod build.
│   ├── index.html            # Start page
│   ├── index.js              # Entry point for your app
│   ├── rootReducer.js        # Redux root reducer. All reducers are combined here.
│   ├── initialState.js       # Redux initial state of the application. Typically a JSON object as flat as possible
│   ├── routes.js             # Contains all React-Router routes defined for the application
│   ├── store.js              # Redux store configuration files for Dev and Prod
├── tools                     # Node scripts that run build related tools (typically from package.json scripts)
│   ├── build.js              # Runs the production build
│   ├── buildHtml.js          # Builds index.html
│   ├── chalkConfig.js        # Centralized configuration for chalk, which is used to add color to console.log statements
│   ├── distServer.js         # Starts webserver and opens final built app that's in dist in your default browser
│   ├── srcServer.js          # Starts dev webserver with hot reloading and opens your app in your default browser
│   ├── startMessage.js       # Display log messages when starting webserver on dev mode
│   ├── testSetup.js          # Setup tests
├── webpack.config.dev.js     # Configures webpack for development
└── webpack.config.prod.js    # Configures webpack for production
```

### What are the dependencies in package.json used for?
| **Dependency** | **Use** |
|----------------|---------|
|classnames|A simple javascript utility for conditionally joining classNames together|
|connect-history-api-fallback|Provides a fallback for non-existing directories so that the HTML 5 history API can be used.|
|isomorphic-fetch|Fetch for node, built on top of WHATWG Fetch polyfill.|
|object-assign | Polyfill for Object.assign |
|react|React library |
|react-dom|React library for DOM rendering |
|react-redux|Redux library for connecting React components to Redux |
|react-router|React library for routing |
|redux|Library for unidirectional data flows |
|redux-form|A Higher Order Component using react-redux to keep form state in a Redux store |
|redux-thunk|Thunk middleware for Redux|

| **Dev Dependency** | **Use** |
|--------------------|---------|
|babel-cli|Babel Command line interface |
|babel-core|Babel Core for transpiling the new JavaScript to old |
|babel-loader|Adds Babel support to Webpack |
|babel-plugin-react-display-name| Add displayName to React.createClass calls |
|babel-polyfill|This will emulate a full ES2015 environment|
|babel-preset-es2015|Babel preset for ES2015|
|babel-preset-react| Add JSX support to Babel |
|babel-preset-react-hmre|Hot reloading preset for Babel|
|babel-preset-stage-1| Include stage 1 feature support in Babel |
|browser-sync| Supports synchronized testing on multiple devices and serves local app on public URL |
|chai|Assertion library for use with Mocha|
|chalk|Adds color support to terminal |
|cheerio|Supports querying DOM with jQuery like syntax - Useful in testing and build process for HTML manipulation|
|coveralls|Coveralls.io support for node.js.|
|cross-env|Cross-environment friendly way to handle environment variables|
|css-loader|Add CSS support to Webpack|
|enzyme|Simplified JavaScript Testing utilities for React|
|eslint|Lints JavaScript |
|eslint-plugin-import|This plugin intends to support linting of ES2015+ (ES6+) import/export syntax|
|eslint-plugin-jsx-a11y|A static analysis linter of jsx and their accessibility with screen readers.|
|eslint-plugin-react|React specific linting rules for ESLint|
|eslint-watch|Run eslint with watch mode|
|extract-text-webpack-plugin|Extracts CSS into separate file for production build|
|file-loader| Adds file loading support to Webpack|
|isparta|A code coverage tool for ES6 (babel)|
|mocha|JavaScript testing library|
|node-sass|Adds SASS support to Webpack|
|npm-run-all|A CLI tool to run multiple npm-scripts in parallel or sequential|
|prompt|A beautiful command-line prompt for node.js|
|react-addons-test-utils| Adds React TestUtils |
|redux-immutable-state-invariant|Redux middleware that detects mutations between and outside redux dispatches.|
|replace|Command line search and replace utility|
|rimraf|Delete files|
|sass-loader|Adds Sass support to Webpack|
|sinon|Standalone test spies, stubs and mocks for JavaScript|
|sinon-chai|Extends Chai with assertions for the Sinon.JS mocking framework|
|style-loader| Add Style support to Webpack |
|webpack| Bundler with plugin system and integrated development server |
|webpack-dev-middleware| Used to integrate Webpack with Browser-sync |
|webpack-hot-middleware| Use to integrate Webpack's hot reloading support with Browser-sync|

### Where are the files being served from when I run `npm start`?
Webpack serves your app in memory when you run `npm start`. No physical files are written. However, the web root is /src, so you can reference files under /src in index.html. When the app is built using `npm run build`, physical files are written to /dist and the app is served from /dist.

### How is SASS being converted into CSS and landing in the browser?
It's being handled differently in dev (`npm start`) vs prod (`npm run build`)

When you run `npm start`:

 1. The sass-loader compiles SASS into CSS
 2. Webpack bundles the compiled CSS into bundle.js.
 3. bundle.js contains code that loads styles into the &lt;head&gt; of index.html via JavaScript. This is why you don't see a stylesheet reference in index.html. In fact, if you disable JavaScript in your browser, you'll see the styles don't load either.

The approach above supports hot reloading, which is great for development. However, it also create a flash of unstyled content on load because you have to wait for the JavaScript to parse and load styles before they're applied. So for the production build, we use a different approach:

When you run `npm run build`:

 1. The sass-loader compiles SASS into CSS
 2. The [extract-text-webpack-plugin](https://github.com/webpack/extract-text-webpack-plugin) extracts the compiled SASS into styles.css
 3. buildHtml.js adds a reference to the stylesheet to the head of index.html.

For both of the above methods, a separate sourcemap is generated for debugging SAS in [compatible browsers](http://thesassway.com/intermediate/using-source-maps-with-sass).

### How do I deploy this?
`npm run build`. This will build the project for production. It does the following:
* Minifies all JS
* Sets NODE_ENV to prod so that React is built in production mode
* Places the resulting built project files into /dist. (This is the folder you'll expose to the world).

### Why are test files placed alongside the file under test (instead of centralized)?
Streamlined automated testing is a core feature of this starter kit. All tests are placed in files that end in .spec.js. Spec files are placed in the same directory as the file under test. Why?
+ The existence of tests is highly visible. If a corresponding .spec file hasn't been created, it's obvious.
+ Easy to open since they're in the same folder as the file being tested.
+ Easy to create new test files when creating new source files.
+ Short import paths are easy to type and less brittle.
+ As files are moved, it's easy to move tests alongside.

That said, you can of course place your tests under /test instead, which is the Mocha default. If you do, you can simplify the test script to no longer specify the path. Then Mocha will simply look in /test to find your spec files.

### How do I debug?
Since browsers don't currently support ES6, we're using Babel to compile our ES6 down to ES5. This means the code that runs in the browser looks different than what we wrote. But good news, a [sourcemap](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) is generated to enable easy debugging. This means your original JS source will be displayed in your browser's dev console.
*Note:* When you run `npm start`, no JS is minified. Why? Because minifying slows the build. So JS is only minified when you run the `npm run build` script. See [more on building for production below](https://github.com/coryhouse/react-slingshot#how-do-i-deploy-this).

Also note that no actual physical files are written to the filesystem during the dev build. **For performance, all files exist in memory when served from the webpack server.**. Physical files are only written when you run `npm run build`.

**Tips for debugging via sourcemaps:**

 1. Browsers vary in the way they allow you to view the original source. Chrome automatically shows the original source if a sourcemap is available. Safari, in contrast, will display the minified source and you'll [have to cmd+click on a given line to be taken to the original source](http://stackoverflow.com/questions/19550060/how-do-i-toggle-source-mapping-in-safari-7).  
 2. Do **not** enable serving files from your filesystem in Chrome dev tools. If you do, Chrome (and perhaps other browsers) may not show you the latest version of your code after you make a source code change. Instead **you must close the source view tab you were using and reopen it to see the updated source code**. It appears Chrome clings to the old sourcemap until you close and reopen the source view tab. To clarify, you don't have to close the actual tab that is displaying the app, just the tab in the console that's displaying the source file that you just changed.  
 3. If the latest source isn't displaying the console, force a refresh. Sometimes Chrome seems to hold onto a previous version of the sourcemap which will cause you to see stale code.

### Why does package.json reference the exact version?
This assures that the build won't break when some new version is released. Unfortunately, many package authors don't properly honor [Semantic Versioning](http://semver.org), so instead, as new versions are released, I'll test them and then introduce them into the starter kit. But yes, this means when you do `npm update` no new dependencies will be pulled down. You'll have to update package.json with the new version manually.

### How do I handle images?
Via <a href="https://github.com/webpack/file-loader">Webpack's file loader</a>. Example:

```
<img src={require('./src/images/myImage.jpg')} />

```

Webpack will then intelligently handle your image for you. For the production build, it will copy the physical file to /dist, give it a unique filename, and insert the appropriate path in your image tag.

### I'm getting an error when running npm install: Failed to locate "CL.exe"
On Windows, you need to install extra dependencies for browser-sync to build and install successfully. Follow the getting started steps above to assure you have the necessary dependencies on your machine.

### I can't access the external URL for Browsersync
To hit the external URL, all devices must be on the same LAN. So this may mean your dev machine needs to be on the same Wifi as the mobile devices you're testing.

### What about the Redux Devtools?
Install the [Redux devtools extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) in Chrome Developer Tools. If you're interested in running Redux dev tools cross-browser, Barry Staes created a [branch with the devtools incorporated](https://github.com/coryhouse/react-slingshot/pull/27).

### Hot reloading isn't working!
Hot reloading doesn't always play nicely with stateless functional components at this time. [This is a known limitation that is currently being worked](https://github.com/gaearon/babel-plugin-react-transform/issues/57). To avoid issues with hot reloading for now, use a traditional class-based React component at the top of your component hierarchy.

### How do I setup code coverage reporting?
Using the `npm run test:cover` command to run the tests, building a code coverage report. The report is written to `coverage/index.html`. A quick way to check coverage is:

1. `npm run test:cover`
2. Open ./coverage/index.html

### What is the recommended code editor?
[Atom](https://atom.io/) editor is the recommended editor for this project.  It provides numerous tools to help simplify development.

#### Useful Shortcuts

| **Tool** | **Shortcut** |
|----------|--------------|
| Command Palette | `Ctrl+Shift+P` on Windows or `Cmd+Shift+P` on MAC |
| Fuzzy Search | `Ctrl+P` on Windows or `Cmd+P` on MAC |

#### Improve Development Experience

1. Make sure to activate Atom for the terminal `Atom > Install Shell Commands` menu.
2. Install recommended plugins with the following command:

    ```
    apm install auto-detect-indentation highlight-selected pigments sort-lines tab-switcher todo-show open-recent minimap minimap-highlight-selected multi-cursor-plus language-babel markdown-preview-plus atom-material-ui atom-material-syntax-dark refactor js-refactor
    ```

3. Configure **config.cson** to hide unnecessary files from the Fuzzy Search.

    ```json
    core:
      ignoredNames: [
        ".scssc"
        ".sass-cache"
        ".git"
        ".hg"
        ".svn"
        ".DS_Store"
        "Thumbs.db"
        "node_modules"
      ]
    ```

4. Customize Keymap.cson to improve Tab Navigation using `tab-switcher` plugin.

    ````json
    "atom-workspace":
      "ctrl-tab": "tab-switcher:next"
      "ctrl-tab ^ctrl": "unset!"
      "ctrl-shift-tab": "tab-switcher:previous"
      "ctrl-shift-tab ^ctrl": "unset!"

    "ol.tab-switcher-tab-list":
      "^ctrl": "tab-switcher:select"
      "^shift": "tab-switcher:select"
      "ctrl-up": "tab-switcher:previous"
      "ctrl-down": "tab-switcher:next"
      "ctrl-escape": "tab-switcher:cancel"
      "ctrl-n": "tab-switcher:next"
      "ctrl-p": "tab-switcher:previous"
      "ctrl-w": "tab-switcher:close"
      "ctrl-s": "tab-switcher:save"
    ````

### Where is the main style located?

The main style is loaded via [CDN](https://en.wikipedia.org/wiki/Content_delivery_network)in the `src/index.html`.  Here, we are loading Bootstrap [Material Design Theme](https://bootswatch.com/paper/) and [FontAwesome](http://fontawesome.io/icons/) for our font icons.

**Note: Ideally we'll bundle these dependencies into `vendor.bundle.js` and customize it based on what's needed.**
