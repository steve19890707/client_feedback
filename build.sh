#!/bin/bash
# 說明： 執行 build 指令
#
# 備註：
#  

API_URL=""

# develop api domain
DEVELOP_API_URL=""

# qatest api domain
QATEST_API_URL=""

# int api domain
INT_API_URL=""

# prod api domain
PROD_API_URL=""


# 依分支給予 api domain
case "${DRONE_BRANCH}" in 
    test_drone|develop ) API_URL=$DEVELOP_API_URL ;;
    qatest ) API_URL=$QATEST_API_URL ;;
    int ) API_URL=$INT_API_URL ;;
    * ) null ;;
esac

# 依 tag 給予 api domain
if [[ ${DRONE_TAG} == *"v"* || ${DRONE_TAG} == *"t"* ]]; then
  API_URL=$PROD_API_URL
fi

# 開始 build 指令
yarn install

node setConfig $API_URL

yarn run build
