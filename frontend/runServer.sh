#!/bin/bash

echo "Forge is Running <3"
mongod --dbpath=data &
node app.js

