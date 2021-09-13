# CheckList

## Introduction
Some basic apis are created to show POC of backend

## How To Run

`docker-compose.yml` is created at root through that services can easily start to run.

### Dependencies
* Docker

### Run through docker-compose.yml
After cloning repo, run below command at root

```
docker compose up --build -d
```

It will up two services

* Backend Apis exposed at port `3000`
* mongodb at exposed port `27017`

Inorder to stop services, run below command at root of repo

```
docker compose down
```

## API docs

* POST /api/register (To sign up user)
```
// body
{
    "username": "username",
    "firstName": "firstName",
    "lastName": "lastName",
    "email": "test@test.com",
    "password": "password"
}
```

* POST /api/login (To login user) - `this will return access token that is expected to be passed as Authorization header as an` [OAuth2 Bearer token](https://oauth.net/2/bearer-tokens/) in every api request for authorization.
```
// body
{
    "username": "username",
    "password": "password"
}
```

* POST /api/phase (To create phases)

```
    {
        title: 'Foundation'
    }
```

* POST /api/phase/task (To create tasks)

```
    {
        task: 'Setup virtual office'
    }
```

* GET /api/phase (To all phases and their tasks)

* PUT /api/phase/task (To mark task as check unchecked)

```
    {
    "task": "Buy Domains",
    "isDone": false,
    "taskId": "au6zqhr13p",
    "phaseId": "613f605768d616c84c0b2d27"
    }
```



