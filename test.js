var test = require('tape')
var spawn = require('child_process').spawn
var path = require('path')

test('things', function (t) {
  var proc = spawnTest(['othertest.js'], function (output) {
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

function spawnTest (args, fn) {
  var proc = spawn('../bin/tape-watch', args, {
    cwd: path.join(process.cwd(), 'fixtures')
  })
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
