#!/bin/bash

for file in out/*; do
        filename="$(basename "$file")";
        node out/$filename
        done