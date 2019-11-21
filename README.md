# byzantine-api-gateway

API gateway implementation providing access to Hyper Ledger Fabric (HLF) networks. Useful for providing application access to HLF peer nodes. 

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Project Setup](#project-setup)
- [Notes](#notes)
----

#### Architecture

The gateway is implemented with `Node.js` and uses the `Express` framework to provide restul `HTTP` based endpoints that access HLF network peers using the FABRIC-NODE-SDK.  

Api's are defined to execute chaincode and query channel configuration information. 

#### Setup Installation

##### Requirements
* [Node](https://nodejs.org/en/download/) 8.9.x (v9.0+ not supported). Recommended version 8.9.4.
* Python (https://www.python.org/downloads/) 2.7+ (v3+ not supported)
* `Windows OS Only` - For 'rm' and 'cp' commands, use Powershell or add Git to PATH (C:\Program Files\Git\usr\bin) or install Cygwin.
* Docker must be installed.

Clone the repo:

> git clone https://github.com/in-the-keyhole/byzantine-api-gateway.git

Install the dependencies:
> $ npm install

Launch the Gateway:
> $ ./run.sh

This will run the node app ./index.js for byzantine-api-gateway.

#### Configuration 

Configuration options for the Gateway are definedin the `./config.js` file, they can be set using environment variables.  The config file with default values are shown below. 

    module.exports = {
        loglevel: process.env.LOGLEVEL || "all",
        port: process.env.PORT || 9090,
        host: process.env.HOST || "localhost",
        wallet_path: process.env.KEYSTORE || "app/hfc-key-store",
        user_id: process.env.USERID || "PeerAdmin",
        orderer_url: process.env.ORDERER_URL || "grpc://localhost:7050",
        network_url: process.env.NETWORK_URL || "grpc://localhost:7051",
        event_url: process.env.EVENT_URL || "grpc://localhost:7052",
        authenticate: process.env.AUTHENTICATE || false,
        authhandler: process.env.AUTHHANDLER || "./app/testAuthHandler.js"
    
    }

#### API's 


#### Authentication

API authentication is set to `false` by default, allowing them to be accessed without any authenticationm. If set to true, the authentication api must be called initially with the following API route 

    /authenticate  POST {key/values for authentication handler}

If `authenticate` is set to `true`, then an AUTHHANDLER must be specified to apply authentication. 





