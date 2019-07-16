var arguments = process.argv.splice(2)
const fs = require('fs');
const path = require('path');
var stat = fs.stat;
var copy = function (src, dst) {
  //读取目录
  fs.readdir(src, function (err, paths) {
    console.log(paths)
    if (err) {
      throw err;
    }
    paths.forEach(function (path) {
      var _src = src + '/' + path;
      var _dst = dst + '/' + path;
      var readable;
      var writable;
      stat(_src, function (err, st) {
        if (err) {
          throw err;
        }

        if (st.isFile()) {
          readable = fs.createReadStream(_src); //创建读取流
          writable = fs.createWriteStream(_dst); //创建写入流
          readable.pipe(writable);
        } else if (st.isDirectory()) {
          exists(_src, _dst, copy);
        }
      });
    });
  });
}
var del = function (dst, exclude) {
  fs.readdir(dst, function (err, paths) {
    if (err) throw err;
    paths.forEach(function (path) {
      let _file = dst + '/' + path;
      let stats = fs.stat;
      stats(_file, function (err, st) {
        if (err) throw err;
        if (st.isDirectory()) {
          del(_file);
        } else {
          if (exclude !== path)
            fs.unlink(_file);
        }
      })
    })
  })
}
var exists = function (src, dst, callback, isDelTarget = false, exclude = "") {
  //测试某个路径下文件是否存在
  fs.exists(dst, function (exists) {
    if (exists) { //存在
      // 是否清空目标文件夹
      if (isDelTarget) {
        del(dst, exclude);
      }
      callback(src, dst);
    } else { //不存在
      fs.mkdir(dst, function () { //创建目录
        callback(src, dst)
      })
    }
  })
}

const pathFrom = arguments[0];
const pathTo = arguments[1];
const isDelTarget = arguments[2];
const exclude = arguments[3];

console.log(arguments)

// del(arguments[0], arguments[1])

exists(pathFrom, pathTo, copy, isDelTarget, exclude)