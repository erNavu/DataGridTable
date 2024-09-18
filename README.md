# Project Overview

This project is a React application that fetches data from the GitHub API and displays it in a searchable table. The table lists repositories related to "facebook/react" and includes columns for the repository name, star count, and fork count.

## How It Works

1. **Data Fetching**: The application fetches data from the GitHub API using the `fetch` function. This is done inside a `useEffect` hook to ensure the data is fetched when the component mounts.
2. **State Management**: The application uses React's `useState` hook to manage the state of the fetched data, loading status, and search input.
3. **Search Functionality**: Users can search through the table data using a search input. The search functionality filters the table data based on the search term.
4. **Table Display**: The data is displayed in a table using the `DataGrid` component from the `@mui/x-data-grid` library. The table is rendered by the `CustomTable` component.

## Project Structure

- `src/App.js`: Main application component that handles data fetching, state management, and rendering the search input and table.
- `src/components/customTable.js`: Component responsible for rendering the table using the `DataGrid` component.
- `src/index.js`: Entry point of the application that renders the `App` component.
- `src/App.test.js`: Basic test file for the `App` component.
- `README.md`: This file, providing an overview and instructions for the project.

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs the necessary dependencies for the project.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).