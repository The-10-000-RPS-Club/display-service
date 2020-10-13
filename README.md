# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

# CRUD API
The CRUD API to the display service app is described below.

## Add a new product to the page -
#### Request:

POST /api/product/:id/insertdisplayItem

#### Response:
201 Created


## Get a list of products to be displayed from Database -
#### Request:
GET /api/products/:id

#### Response:
HTTP/1.1 200 OK

[ insert get object here ]


## Edit an existing entry
#### Request:
PUT /api/product/:id/updatedisplayItem

#### Response:
HTTP/1.1 200 OK
{edited response object}


## remove an entry
#### Request:
DELETE /api/product/:id/deletedisplayItem

#### Response:
HTTP/1.1 204 No Content