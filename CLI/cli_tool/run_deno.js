#! /usr/bin/env node
import shell from 'shell'
// var shell = require("shelljs");
import getArgs from 'get-args'
// var getArgs = require("get-args");
import com from '/home/alen/code/web_application/CLI/cli_tool/command.json'
// var com = require("/home/alen/code/web_application/CLI/cli_tool/command.json")

var arg = getArgs().arguments[0]
var options = getArgs().options

if(arg ==="py_env_de"){
    shell.exec(com.commands.py_env_de);
}
else if(arg ==="ls"){
    shell.exec(com.commands.ls);
}
