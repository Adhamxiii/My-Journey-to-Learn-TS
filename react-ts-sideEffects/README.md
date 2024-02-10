# My Journey to Learn TypeScript and React - Lesson 4: React App with Asynchronous Operations and Side Effects

This project represents a React application that focuses on handling asynchronous operations and side effects using the `useEffect` hook. The application fetches and displays blog posts from a remote server using the JSONPlaceholder API. It also demonstrates the usage of the `useEffect` hook to manage side effects and handle asynchronous tasks.

## Project Overview

The application extends the functionalities of data fetching from the previous lesson and incorporates the `useEffect` hook to handle asynchronous operations and side effects more efficiently.

### 1. **App Component - Asynchronous Operations and `useEffect`**

The `App` component is the main entry point of the application and leverages the `useEffect` hook for managing asynchronous operations and side effects.

#### Key Features:

- Utilizes `useEffect` to manage asynchronous operations.
- Fetches blog posts from the JSONPlaceholder API.
- Handles loading states and errors during data fetching.

### 2. **BlogPosts Component - Displaying Fetched Data**

The `BlogPosts` component is responsible for rendering the fetched blog posts, and it receives the data from the `App` component.

#### Key Features:

- Receives `posts` as props and maps through them to render each blog post.
- Utilizes `BlogPost` component for each individual post rendering.

### 3. **ErrorMessage Component - Displaying Errors**

The `ErrorMessage` component handles the rendering of error messages in case of fetch failures, receiving error messages from the `App` component.

#### Key Features:

- Receives an error message as a prop and renders an error aside.

### 4. **get Function - Fetching Data Utility**

The `get` function is a utility function responsible for making HTTP GET requests using the `fetch` API and handling errors.

#### Key Features:

- Uses `fetch` to make HTTP GET requests to a given URL.
- Throws an error if the response status is not OK.

### 5. **Use of `useEffect` - Managing Side Effects**

The application prominently features the `useEffect` hook for managing side effects, such as data fetching, in a React functional component.

#### Key Features:

- Utilizes `useEffect` to execute code that has side effects.
- Handles cleanup for side effects using the cleanup function.

## Getting Started

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Run the application with `npm run dev`.

Explore the codebase, experiment with asynchronous operations and side effects using `useEffect`, and deepen your understanding of managing complex behaviors in a React application!

## Acknowledgments

Special thanks to the JSONPlaceholder API for providing a mock server for testing.

Happy coding!
