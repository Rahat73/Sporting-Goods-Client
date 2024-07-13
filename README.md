# Project Name : Sporting Goods

## Introduction

Sporting Goods: Your one-stop shop for everything sports.

## Project Description

This project aims to create a comprehensive e-commerce website focused on sporting goods. It will allow users to browse, purchase, and manage their shopping carts for a variety of athletic/fitness equipment and apparel.

## Features

- User can manage products, add, update, and delete them.
- User can add items to cart and then buy them later
- User can also remove items from cart
- User can also view cart
- User can also checkout

## Technology Stack

- Frontend: React, Redux toolkit, Ant Design, Tailwind, Framer Motion etc.
- Backend: Node, Express, Mongoose etc.

## Installation Guideline

### Prerequisites

- node, npm must be installed before running the project

### Configure frontend

- Clone the git repository
- Go to the file directory
- Create an .env file and add the following variables

```
VITE_IMG_BB_KEY --> put the key from imgbb.com
```

- Run Command `npm install` to install required modules
- Run command `npm run dev` to start the server

### Configure server

- Clone the git repository
- Go to the file directory
- Create an .env file and add the following variables

```
PORT --> which port you want the server to run
DATABASE_URL --> Your MongoDB connection URL
```

- Run Command `npm install` to install required modules
- Run command `npm run start:dev` to start the server

## Usage

- Go to all products by clicking on "All Products" on navbar to see all products
- Click on 'View Details' to see product details
- Click on 'Add to cart' to add product to cart
- Click on 'Cart' on the navbar to see cart
- Click on 'Procedd to checkout' to checkout
- Add user information in the follwing page
- Click next and select payment method
- Click next and confirm payment clicking the submit button
