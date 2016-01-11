/*
 * waits for `ms` milliseconds and resolves a promise.
 */

module.exports = function wait (ms) {
  return function () {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve()
      }, ms)
    })
  }
}
