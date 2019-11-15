# byzantine-gateway

The communication gateway to the Byzantine Hyperledger Fabric runtime

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Byzantine Flu Full Stack Setup](#byzantine-flu-full-stack-setup)
- [Project Setup](#project-setup)
- [Notes](#notes)
----
## Byzantine Flu Full Stack Setup

#### Setup Steps
1. Set up and run Byzantine Hyperledger Fabric:  https://github.com/in-the-keyhole/byzantine-flu

    
    - This project implements a HyperLedger blockchain network with chaincode that manages a ledger of Influenza tests. The chaincode implements functions to create and retrieve Influenza test results.

2. **-> (You are here)** Set up and run the Gateway:  https://github.com/in-the-keyhole/byzantine-gateway


3. Set up and run the UI:  https://github.com/in-the-keyhole/byzantine-flu-ui

    - A website containing a map displaying the locations and concentrations of reported flu samples


#### Optional Steps:
4. Hyperledger Brower:  https://github.com/in-the-keyhole/byzantine-browser

    - A website showing the actual blockchain and the associated metadata 
-----

## Project Setup

#### Requirements
* [Node](https://nodejs.org/en/download/) 8.9.x (v9.0+ not supported). Recommended version 8.9.4.
* Python (https://www.python.org/downloads/) 2.7+ (v3+ not supported)
* `Windows OS Only` - For 'rm' and 'cp' commands, use Powershell or add Git to PATH (C:\Program Files\Git\usr\bin) or install Cygwin.
* Docker must be installed.

Clone the repo:

> git clone https://github.com/in-the-keyhole/byzantine-gateway.git


Install the dependencies:
> $ npm install

Launch the Gateway:
> $ ./run.sh

This will run the node app ./index.js for byzantine-gateway.

---
## Notes

This project was bootstrapped with NodeJS
