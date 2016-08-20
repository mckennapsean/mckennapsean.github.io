# Personal Website

Sean McKenna's personal website and portfolio

## Installation

```ShellSession
$ npm install
# grabs all resources to work offline
```

Also, the website template uses an old version of `skel-js`, and these files must be manually copied into the `vendor/skel/dist` folder in order to run the site offline. This is because no other host (bower or npm) stored old enough versions of these files. Updating the website template would help solve this issue.

## Usage

```ShellSession
$ npm start
# sync browser and watch for changes (offline mode)

$ npm test
# build and test on a web server (offline mode)

$ npm run deploy
# build for production environment (online mode)
```

## License

Portions of this website are a derivative work of an HTML5 UP template,
so currently this project is under the Creative Commons Attribution license.

## Credit

Sean McKenna for setting up the build scripts and porting files from Harp to Jekyll.

[AJ](http://n33.co)
for the [Prologue template](http://html5up.net/prologue)
from [HTML5 UP](http://html5up.net/)
