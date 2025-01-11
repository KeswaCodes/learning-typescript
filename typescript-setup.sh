#!/bin/bash

echo "Initialising project with package.json file..."
npm init -y

echo "Initialising tsconfig file..."
tsc --init 


mkdir src
mkdir tests