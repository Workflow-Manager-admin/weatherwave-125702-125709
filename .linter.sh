#!/bin/bash
cd /tmp/kavia/workspace/code-generation/weatherwave-125702-125709/main_container_for_weatherwave
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

