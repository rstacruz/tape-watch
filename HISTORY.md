## [v2.3.0]
> Mar 15, 2017

- [#116] - Add `--clear` option. ([@lsanwick])

[v2.3.0]: https://github.com/rstacruz/tape-watch/compare/v2.2.4...v2.3.0

## [v2.2.4]
> Nov 15, 2016

- [#67] - Fix support for absolute paths. ([@tuckerconnelly])

[v2.2.4]: https://github.com/rstacruz/tape-watch/compare/v2.2.3...v2.2.4

## [v2.2.3]
> Aug 20, 2016

- Remove stray debugging text.

[v2.2.3]: https://github.com/rstacruz/tape-watch/compare/v2.2.2...v2.2.3

## [v2.2.2]
> Aug 18, 2016

- [#51] - Fix globs not being re-interpreted on changes. ([#57], [@tuckerconnelly])

[v2.2.2]: https://github.com/rstacruz/tape-watch/compare/v2.2.1...v2.2.2

## [v2.2.1]
> Aug 18, 2016

- [#19] - Fix bug where running stops when there's an unhandled exception.

[v2.2.1]: https://github.com/rstacruz/tape-watch/compare/v2.2.0...v2.2.1

## [v2.2.0]
> Aug 18, 2016

- [#53] - Add support for `-1` / `--once` to only run tests once.
- [#53] - Add support for `-w` / `--watch` to cancel out `--once`; useful for using tape-watch as the `npm test` script.

[v2.2.0]: https://github.com/rstacruz/tape-watch/compare/v2.1.0...v2.2.0

## [v2.1.0]
> May 28, 2016

- Add glob support (`tape-watch 'test/**/*.js`).

[v2.1.0]: https://github.com/rstacruz/tape-watch/compare/v2.0.2...v2.1.0

## [v2.0.2]
> May 28, 2016

- Fix bug when tape-watch is invoked with multiple filenames.

[v2.0.2]: https://github.com/rstacruz/tape-watch/compare/v2.0.0...v2.0.2

## [v2.0.0]
> May 27, 2016

- [#15] - Implement `-r` / `--require` to support preprocessors like Babel. ([#26])
- __Breaking:__ `--refresh` is now `-R`, from what used to be `-r`.

[v2.0.0]: https://github.com/rstacruz/tape-watch/compare/v1.3.0...v2.0.0

## [v1.3.0]
> Jan 15, 2016

- Catch uncaught exceptions.

[v1.3.0]: https://github.com/rstacruz/tape-watch/compare/v1.2.0...v1.3.0

## [v1.2.0]
> Jan 11, 2016

- Add `--refresh` support.

[v1.2.0]: https://github.com/rstacruz/tape-watch/compare/v1.1.0...v1.2.0

## [v1.1.0]
> Jan 11, 2016

- Fix 'no tests' problem.

[v1.1.0]: https://github.com/rstacruz/tape-watch/compare/v1.0.0...v1.1.0

## [v1.0.0]
> Jan 11, 2016

- Initial release.

[v1.0.0]: https://github.com/rstacruz/tape-watch/tree/v1.0.0
[#15]: https://github.com/rstacruz/tape-watch/issues/15
[#26]: https://github.com/rstacruz/tape-watch/issues/26
[#51]: https://github.com/rstacruz/tape-watch/issues/51
[#57]: https://github.com/rstacruz/tape-watch/issues/57
[#19]: https://github.com/rstacruz/tape-watch/issues/19
[#53]: https://github.com/rstacruz/tape-watch/issues/53
[#67]: https://github.com/rstacruz/tape-watch/issues/67
[@tuckerconnelly]: https://github.com/tuckerconnelly
[#116]: https://github.com/rstacruz/tape-watch/issues/116
[@lsanwick]: https://github.com/lsanwick
