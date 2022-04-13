#! /usr/bin/env node
var shell = require("shelljs");
var getArgs = require("get-args");
var com = require("/home/alen/code/web_application/CLI/cli_tool/command.json")

var arg = getArgs().arguments[0]
var options = getArgs().options

if(arg ==="py_env_de"){
    shell.exec(com.commands.py_env_de);
}
else if(arg ==="ls"){
    shell.exec(com.commands.ls);
}
