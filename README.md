# CMC Integration tests

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

This is the integration tests for CMC.

## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) >= v7.8.0
* [yarn](https://yarnpkg.com/)
* [codeceptjs](http://codecept.io/)

### Environment variables

Relevant environment variables that will be pulled from your environment:
- `IDAM_CMC_GOV_NOTIFY_API_KEY`: a mock key which does not cause Notify to send emails, ask around for it.
- `GOV_PAY_AUTH_KEY_CMC`: payments sandbox API key, also ask around for it

### Running the tests

First step is to start the environment for the tests to execute against:

```bash
$ ./bin/start-clean-test-environment.sh
```

If you see the command exit with messages like *"service unhealthy"* it may mean that docker has exceeded the container health check verifications limit. You can try re-running the command in that case, but if those messages persist then the problem is probably elsewhere. 

After that you can run the tests:

```bash
$ ./bin/run-integration-local-tests.sh
```

If you want to shut down the environment use:

```bash
$ docker-compose down 
```

This environment will not persist data between restarts, so when you start again you'll get a fresh environment.

### Starting a local development environment

#### Setting up an IDAM User
The first time you will need to create a user to login with, use:
```
curl -XPOST -H 'Content-Type: application/json' localhost:8080/testing-support/accounts -d '{
    "email": "me@server.net",
    "forename": "john",
    "surname": "smith",
    "levelOfAccess": 0,
    "userGroup": {
      "code": "cmc-private-beta"
    },
    "activationDate": "",
    "lastAccess": "",
    "password": "Password1"
}'
```

To use the compose files defined in the project to start a local development environment, use:

```bash
$ ./bin/start-local-environment.sh
```

This will:
- start all the services beside the `legal-frontend`, you'll need to start that one on it's own,
- mount database volumes, thanks to which your data will persist between environment restarts,
- expose container ports to the host, so all the APIs and databases will be directly accessible. Use `docker ps` or read the [compose file](./docker-compose.yml) to see how the ports are mapped.

To stop the environment use the same script, just make sure to pass the `local` parameter:

```bash
$ ./bin/stop-local-environment.sh
```

If you want to delete the volumes as well pass the `-v` flag:

```bash
$ ./bin/stop-local-environment.sh -v
```

## Developing

### Code style

We use [StandardJS](http://standardjs.com/index.html)

StandardJS installation:

```bash
$ yarn global add standard
```

Running the tests:

```bash
$ yarn lint
```

or

```bash
$ standard
```

Standard can automatically fix the easy problems like the wrong quotes, spaces or semi-colons

```bash
$ standard --fix
```

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.txt) file for details
