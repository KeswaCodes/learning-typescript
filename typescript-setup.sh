#!/bin/bash

echo "Initialising project..."
npm init -y

    echo "Installing typescript..."
npm install typescript --save-dev

echo "Adding configuration for TypeScript"
tsc --init

echo "Adding Jest as a test dependency..."
npm install jest --save-dev


echo "Installing jest package..."
npm install ts-jest --save-dev

echo "Installing type defintions for jest"
npm install @types/jest --save-dev

