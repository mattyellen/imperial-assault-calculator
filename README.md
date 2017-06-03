# Imperial Assualt Calculator

Plug in your attack dice, defense dice, and surge abilities and [the calculator](http://mattyellen.github.io/imperial-assault-calculator/) will tell you how much damage you are likely to do.  Works great on mobile too.

## Development
### Prerequisites
Install [node/npm](https://nodejs.org).
#### Optional
Add `node_modules/.bin` to your path or install gulp globally:
```
$ npm install -g gulp
```
### Build
```
$ npm run install-all
$ gulp build
```
### Run
Serve the app locally for test and debug:
```
$ gulp serve
```
Or for reactive development...
```
$ gulp watch
```
Or to test the bundled app...
```
$ gulp serve-bundle
$ gulp unbundle
```
