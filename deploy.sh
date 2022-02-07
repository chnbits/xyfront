#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

if [ -n "$1" ]; then
    cli hosting deploy --provider aliyun --space xycloud --source ./$1 --prefix /$1
else
    cli hosting deploy --provider aliyun --space xycloud --source ./
fi

