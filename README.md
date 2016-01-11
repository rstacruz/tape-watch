# tape-watch

> Rerun tape tests when files change

tape-watch is an auto-test runner for [tape]. It will re-run your tests when any of the files in your project changes. This is better than using [watch][] or [nodemon][]: it will reload your tests in the same Node.js process, saving you precious startup time.

[![Status](https://travis-ci.org/rstacruz/tape-watch.svg?branch=master)](https://travis-ci.org/rstacruz/tape-watch "See test builds")

[nodemon]: https://www.npmjs.com/package/nodemon
[watch]: https://www.npmjs.com/package/watch

## Usage

Can happily live in your project (`--save-dev`) or globally (`-g`). I prefer global, since it's compatible with every project with [tape][] in it.

```
npm install -g tape-watch
```

[tape]: https://github.com/substack/tape

## Reference

```
Usage:
  $ tape-watch [file] [options] -- [options for the test]

Options:
  -p, --pipe PACKAGE        pipe to this package
  -o, --out CMD             output to this file/cmd
  -r, --refresh PACKAGE     ensure this PACKAGE gets refreshed

Other options:
  -h, --help                show usage information
  -v, --version             print version info and exit

Examples:
  tape-watch test/index.js
  tape-watch test/index.js -p tap-spec
  tape-watch test/index.js -o '| tap-spec --color'

  # ensure require('jquery') and require('react') always gets reevaluated
  tape-watch test/index.js -r jquery -r react
```

## Thanks

**tape-watch** © 2016+, Rico Sta. Cruz. Released under the [MIT] License.<br>
Authored and maintained by Rico Sta. Cruz with help from contributors ([list][contributors]).

> [ricostacruz.com](http://ricostacruz.com) &nbsp;&middot;&nbsp;
> GitHub [@rstacruz](https://github.com/rstacruz) &nbsp;&middot;&nbsp;
> Twitter [@rstacruz](https://twitter.com/rstacruz)

[MIT]: http://mit-license.org/
[contributors]: http://github.com/rstacruz/tape-watch/contributors
