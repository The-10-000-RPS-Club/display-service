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
The CRUD API is described below.

## Add a new product to the page -
#### Request:

POST /api/product/:id/insertdisplayItem

#### Response:
Status: 201 Created


## Get a list of products to be displayed from Database -
#### Request:
GET /api/products/:id

#### Response:
Status: 200 OK

{
  id: 0,
  product_name: 'shoes',
  rating: 2.4,
  ratingsAmt: 45,
  price: '$45.99',
  color: 'red, blue,green',
  description: 'a pair of shoes',
  image: 'URL',
  carousel: '',
  clothing_sizes: '',
  count: 0,
  show: false,
}


## Edit an existing entry
#### Request:
PUT /api/product/:id

#### Response:
Status: 200 OK
{
  id: 0,
  product_name: 'shoes',
  rating: 2.4,
  ratingsAmt: 45,
  price: '$45.99',
  color: 'red, blue,green',
  description: 'a pair of shoes',
  image: 'URL',
  carousel: '',
  clothing_sizes: '',
  count: 0,
  show: false,
}


## remove an entry
#### Request:
DELETE /api/product/:id

#### Response:
Status: 204 No Content
{removed product}