# byzantine-api-gateway

API gateway implementation providing access to Hyper Ledger Fabric (HLF) networks. Useful for providing application access to HLF peer nodes. 

## Table of Contents

- [Architecture](#Architecture)
- [Setup Installation](#project-setup)
- [Notes](#notes)
----

#### Architecture

The gateway is implemented with `Node.js` and uses the `Express` framework to provide restful `HTTP` based endpoints that access HLF network peers using the FABRIC-NODE-SDK.  

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


> The current keystore has credentials for the Hyperledger example networks. You can access other networks by modifying the `config.js` so that the `network_url` property points to a peer node address and an admin `USERID` property references an admin user and public/private keys located in the `hfc-key-store` folder.

```javascript
    module.exports = {
        loglevel: process.env.LOGLEVEL || "all",
        port: process.env.PORT || 9090,
        host: process.env.HOST || "localhost",
        wallet_path: process.env.KEYSTORE || "endpoint/hfc-key-store",
        user_id: process.env.USERID || "PeerAdmin",
        orderer_url: process.env.ORDERER_URL || "grpc://localhost:7050",
        network_url: process.env.NETWORK_URL || "grpc://localhost:7051",
        event_url: process.env.EVENT_URL || "grpc://localhost:7052",
    }
```

Here is an example public/private and user file in the `hfc-key-store` directory. 

![](images/keystore.png)

The server startup script copies credentials from the `wallet-path` config.js `hfc-key-store` value to the users home `~/hfc-key-store` directory. Make sure the user home directory is writable.

Access credentials are created for a network by enrolling a user here's a [LINK](https://hlf.readthedocs.io/en/v1.1.0/write_first_app.html) describing how a user can be enrolled and credentials generated.  Go to the `Enroll the Admin User` section.



Launch the Gateway:
> $ ./run.sh

This will run the node app ./index.js for byzantine-api-gateway.

#### Configuration 

Configuration options for the Gateway are definedin the `./config.js` file, they can be set using environment variables.  The config file with default values are shown below. 

    module.exports = {
        loglevel: process.env.LOGLEVEL || "all",
        port: process.env.PORT || 9090,
        host: process.env.HOST || "localhost",
        wallet_path: process.env.KEYSTORE || "endpoint/hfc-key-store",
        user_id: process.env.USERID || "PeerAdmin",
        orderer_url: process.env.ORDERER_URL || "grpc://localhost:7050",
        network_url: process.env.NETWORK_URL || "grpc://localhost:7051",
        event_url: process.env.EVENT_URL || "grpc://localhost:7052",
        authenticate: process.env.AUTHENTICATE || true,
        authhandler: process.env.AUTHHANDLER || "./authentication/exampleAuthHandler.js",
        authvalidator: process.env.AUTHVALIDATOR || "./authentication/sessionValidator.js"

    }

#### API's 


#### Authentication

API authentication is set to `false` by default, allowing them to be accessed without any authenticationm. If set to true, there are two types of autentication validation schemes that can be applied, example implementations are provided for both. 

Authentication is enabled by setting the  `./config.js` `AUTHENTICATE` property to `true` 

    ...
    authenticate: process.env.AUTHENTICATE || true,
    ...

A token based or a session based validation scheme can also be specified in the `./config.js` file.

##### Token Based Validator

A token based validator expects a valid `api-token` in each API requests. The gateway will execute the specified validator on each request. The validator module function is passed in a current request and response object, and it can pull an `API-TOKEN` from the request header, and validate the token. An example hard coded token validator is supplied and shown below. 

    module.exports = function (req, res) {

        // Lookup token here, for test purposes token is hardcoded 

        if (req.headers['api-token'] == "changemeplease") {
            return true;
        }
        logger.error("Invalid API Token, request denied...");

        return false;
    }

The token validator is defined in a `JS` file and referenced in the `./config.js` and assigned to the `authvalidator` property, as shown below. 

    authvalidator: process.env.AUTHVALIDATOR || "./authentication/tokenValidator.js

You'll notice, an environment variable can be used to assign.  

The example above is not for production usage, you should replace the existing logic with logic that validates a token, such as JWT.  

##### Session Based Validator

A session based authentication validator expects an authenticated user identity object stored in the current session. An authenticate API route hase been pre defined, that when called will invoke a module defined in the module referenced in the `./config.js` `authhandler` property.  

    ...
    authhandler: process.env.AUTHHANDLER || "./authentication/exampleAuthHandler.js",
    ...

The authentication API route that invokes the handler is shown below.

    /authenticate  POST {key/values for authentication handler}

When this route is invoked, the authhandler module function will be invoked. This handling method can validate provided credentials and add them to the session object. An non production example implementation is shown below. 

    ...

    module.exports = function (request,response) {

        var user = { userid: "testuserid" };

        request.session.user = user;

        logger.info("User session created");

        response.status(200);
        response.send("Authenticated")

    };

    ...

You'll notice that the example simply creates and assign a user object, in production this handler method should apply an actual authentication mechanism before assigning a user object to the session. 

You can find these examples in the `authentication` folder. 




