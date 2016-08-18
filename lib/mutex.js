/*
 * returns a mutex-locked version of async function `fn`, which is assumed to
 * return a promies.
 */

module.exports = function mutex (fn) {
  var running
  return function () {
    if (running) return
    running = true
    process.on('uncaughtException', function () {
      running = false
    })
    fn.apply(this, arguments)
      .then(function (data) { running = false; return data })
      .catch(function (error) { running = false; throw error })
  }
}

