
# Type Ahead Search

This is a React project that implements a type-ahead search feature using Bootstrap for styling. The project fetches data from a local JSON file and provides a type-ahead search functionality.

## Project Setup

1. Clone the repository or download the zip file.
2. Navigate to the project directory.
3. Install the dependencies using npm:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Run the tests:

   ```bash
   npm test
   ```

## Project Structure

- `public/data.json`: Contains the sample data for the type-ahead search.
- `src/TypeAheadSearch.js`: The main component implementing the type-ahead search functionality.
- `src/TypeAheadSearch.test.js`: Tests for the `TypeAheadSearch` component.
- `src/App.js`: The main application component that includes `TypeAheadSearch`.
- `src/App.css`: Basic styling for the application.
- `src/index.js`: Entry point of the React application.
- `src/index.css`: Additional global styles.

## Dependencies

- React
- Bootstrap
- react-bootstrap
- @testing-library/react

## Usage

1. Type in the search input to filter the results based on the input.
2. The results will update in real-time as you type, showing matching entries from the data.

## Customization

You can customize the data by modifying the `data.json` file in the `public` directory. The component will fetch and filter the data based on the content of this file.
