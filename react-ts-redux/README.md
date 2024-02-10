# My Journey to Learn TypeScript and React - Lesson 5: React-Redux Shopping Cart

This project represents a React application with Redux integration for state management, emphasizing the use of Redux Thunk middleware to handle asynchronous actions. The application features a shopping cart where users can view products, add items to the cart, and see a summary of their cart. The project showcases the usage of Redux for managing the shopping cart state and Redux Thunk for handling asynchronous actions.

## Project Overview

The application extends the functionalities of the previous Redux integration by incorporating Redux Thunk middleware to handle asynchronous actions. This is particularly useful for scenarios such as fetching data from an external API or performing asynchronous operations before dispatching actions.

### 1. **App Component - Application Entry Point**

The `App` component serves as the main entry point of the application. It wraps the entire application with the `Provider` from `react-redux` to make the Redux store available to all components.

#### Key Features:

- Imports the `Header`, `Shop`, and `Product` components.
- Uses the `Provider` to provide the Redux store to the application.
- Renders products from `DUMMY_PRODUCTS` using the `Product` component.

### 2. **Redux Store Configuration with Thunk Middleware**

The Redux store is configured using the `configureStore` function from Redux Toolkit. Redux Thunk middleware is applied to handle asynchronous actions.

#### Key Features:

- Applies Redux Thunk middleware to the store.
- Configures the store with the cart reducer.

### 3. **cartSlice - Redux Slice for Cart State**

The `cartSlice` defines the structure of the cart state and includes reducers for adding and removing items from the cart. Additionally, asynchronous actions are handled using Redux Thunk.

#### Key Features:

- Defines the initial state for the cart.
- Includes reducers for adding and removing items from the cart.
- Utilizes Redux Thunk for handling asynchronous actions like fetching data.

### 4. **Redux Thunk Middleware - Handling Asynchronous Actions**

Redux Thunk middleware is used to handle asynchronous actions, such as fetching data from an external API. This middleware allows for dispatching functions, enabling more complex logic before dispatching regular actions.

#### Key Features:

- Enables dispatching functions as actions.
- Handles asynchronous actions like fetching data before dispatching regular actions.

### 5. **Header, Product, Shop, Cart Components - Redux Integration**

Various components in the application interact with the Redux store using Redux hooks (`useSelector`, `useDispatch`). They showcase how to connect React components with the global state managed by Redux.

#### Key Features:

- Uses Redux hooks to access the cart state (`useCartSelector`, `useCartDispatch`).
- Dispatches actions to add or remove items from the cart.
- Integrates with Redux for a consistent and centralized state management.

## Getting Started

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Run the application with `npm run dev`.

Explore the codebase, experiment with adding products to the cart, and observe how Redux Thunk handles asynchronous actions seamlessly in a React application!

## Acknowledgments

Special thanks to Redux Toolkit for providing powerful utilities for Redux state management, including Redux Thunk for handling asynchronous actions.

## Live Demo

You can try the live demo of site [here](https://react-ts-redux.netlify.app/)

Happy shopping with Redux Thunk!
