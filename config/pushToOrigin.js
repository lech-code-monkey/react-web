var arguments = process.argv.splice(2);
const child_process = require("child_process");
const moment = require('moment');
//定义一个执行cmd的函数
const execCMD = function (cmd) {
  child_process.exec(cmd, function (error, stdout, stderr) {
    if (error) {
      console.error('error: ' + error);
      return;
    }
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
  })
}

//用&&连接多条CMD命令
const origin = 'E:\\nice-management';

const arg1 = arguments[0];
const arg2 = arguments[1];

const cmd = 'cd ' + (arg2 || origin) + ' && git pull && git add . && git commit -m "前端笨笨更新 ' + moment().format("YYYYMMDDHHmm") + '" && git push';

const cmdPull = 'cd ' + (arg2 || origin) + ' && git pull';

const cmdPushThisBugFixed = 'git pull && git add . && git commit -m "BugFixed # ' + arg2 + '" && git push';
const cmdPushThis = 'git pull && git add . && git commit -m "' + arg2 + '" && git push';

switch (arg1) {
  case "pull":
    execCMD(cmdPull);
    break;
  case "push":
    execCMD(cmd);
    break;
  case "pushThis":
    execCMD(cmdPushThis);
    break;
  case "cmdPushThisBugFixed":
    execCMD(cmdPushThisBugFixed);
    break;
}