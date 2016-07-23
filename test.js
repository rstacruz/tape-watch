var test = require('tape')
var spawn = require('child_process').spawn

test('things', function (t) {
  var proc = spawnTest(['fixtures/othertest.js'], function (output) {
    t.equal(output.stderr, '', 'no stderr')
    t.equal(output.stdout,
      'TAP version 13\n# dummy test\nok 1 works\n\n1..1\n' +
      '# tests 1\n# pass  1\n\n# ok\n',
      'prints tap output')
    t.equal(output.code, null, 'exited successfully')
    t.end()
  })

  setTimeout(function () {
    proc.kill('SIGHUP')
  }, 1000)
})

test('eslint', require('eslint-engine/tape')())

test('globstar works', function (t) {
  var proc = spawnTest(['fixtures/**/test_*.@(js|jsx|es6)'], function (output) {
    t.equal(output.stderr, '', 'no stderr')
    var out = output.stdout
    t.ok(out.indexOf('ran test/test_js.js'), 'ran test_js.js')
    t.ok(out.indexOf('ran test/a/test_es6.es6'), 'ran test_es6.es6')
    t.ok(out.indexOf('ran test/b/test_jsx.jsx'), 'ran test_jsx.jsx')
    t.equal(output.code, null, 'exited successfully')
    t.end()
  })

  setTimeout(function () {
    proc.kill('SIGHUP')
  }, 1000)
})

function spawnTest (args, fn) {
  var proc = spawn('./bin/tape-watch', args)
  var output = { stdout: '', stderr: '', code: undefined }

  proc.stdout.on('data', function (data) {
    output.stdout += data
  })

  proc.stderr.on('data', function (data) {
    output.stderr += data
  })

  proc.on('close', function (code) {
    output.code = code
    fn(output)
  })

  return proc
}
