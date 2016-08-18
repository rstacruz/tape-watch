## [v2.2.1]
> Aug 18, 2016

- Fix bug where running stops when there's an unhandled exception.

[v2.2.1]: https://github.com/rstacruz/tape-watch/compare/v2.2.0...v2.2.1

## [v2.2.0]
> Aug 18, 2016

- Add support for `-1` / `--once` to only run tests once.
- Add support for `-w` / `--watch` to cancel out `--once`; useful for using tape-watch as the `npm test` script.

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

