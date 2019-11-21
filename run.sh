#!/bin/bash
#


# Exit on first error, print all commands.
set -ev
# delete previous creds
rm -rf ~/.hfc-key-store/*

# copy peer admin credentials into the keyValStore
mkdir -p ~/.hfc-key-store
cp endpoint/hfc-key-store/* ~/.hfc-key-store

# Run Node App
node index
