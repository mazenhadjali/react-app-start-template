# Admin Frontend Template

This is a React-based admin frontend template. Below you will find information about the dependencies used, different parts of the template, and instructions on how to run the project.

## Dependencies

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A predictable state container for JavaScript apps.
- **@reduxjs/toolkit**: The official, recommended way to write Redux logic.
- **react-redux**: Official React bindings for Redux.
- **react-router-dom**: DOM bindings for React Router.
- **i18next**: Internationalization framework.
- **react-i18next**: React bindings for i18next.
- **prop-types**: Runtime type checking for React props.

## Project Structure

### `src/store`

Contains the Redux store configuration.

- **index.js**: Configures and exports the Redux store.

### `src/reducers`

Contains the Redux reducers.

- **index.js**: Combines all reducers.
- **counter.reducer.js**: Manages the state for the counter example.

### `src/pages`

Contains the different pages of the application.

- **notfound/index.jsx**: 404 Not Found page.
- **login/index.jsx**: Login page.

### `src/i18n`

Contains the internationalization configuration and translation files.

- **index.js**: Configures i18next.
- **en.json**: English translations.
- **fr.json**: French translations.

### `src/components/atoms`

Contains small, reusable components.

- **StyledLogo.jsx**: A simple component that displays the "StyledLogo" text.

### `src/App.jsx`

The main application component that connects to the Redux store and handles the counter functionality.

## Running the Project

1. **Clone the repository**:
    ```sh
    git clone https://github.com/hadjalimazen/React-Application-Setup-template.git
    cd React-Application-Setup-template
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Run the project**:
    ```sh
    npm run dev
    ```

4. **Open the application**:
    Open your browser and navigate to `http://localhost:5173`.

## Explanation of Template Parts

- **Store Configuration**: The Redux store is configured in `src/store/index.js` using `@reduxjs/toolkit`.
- **Reducers**: The state management logic is handled by reducers in `src/reducers`. The `counter.reducer.js` manages the counter state.
- **Pages**: The `src/pages` directory contains different pages of the application, such as the login page and the 404 Not Found page.
- **Internationalization**: The `src/i18n` directory contains the configuration for i18next and the translation files for English and French.
- **Components**: The `src/components/atoms` directory contains small, reusable components like `StyledLogo.jsx`.
- **Main Application**: The `src/App.jsx` file is the main application component that connects to the Redux store and handles the counter functionality.

## Declaring Layout and Adding Subpages

To declare a layout and add subpages, you can use the `react-router-dom` library to define nested routes. For example, you can create a `Dashboard` layout with subpages like `Overview` and `Profile`.

### Example

1. **Define the routes in `src/main.jsx`**:

    ```jsx
    import { createBrowserRouter, RouterProvider } from 'react-router-dom';
    import Dashboard from './dashboard';
    import Overview from './pages/dashboard/overview';
    import Profile from './pages/dashboard/profile';

    const router = createBrowserRouter([
      {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
          {
            path: 'overview',
            element: <Overview />,
          },
          {
            path: 'profile',
            element: <Profile />,
          },
        ],
      },
      // other routes...
    ]);

    createRoot(document.getElementById('root')).render(
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>,
    );
    ```

2. **Create the `Dashboard` layout in `src/dashboard/index.jsx`**:

    ```jsx
    import React from 'react';
    import { Outlet } from 'react-router-dom';
    import Aside from './aside';
    import Nav from './nav';

    function Dashboard() {
      return (
        <div className="min-h-screen bg-gray-50/50">
          <Aside />
          <div className="p-4 xl:ml-80">
            <Nav />
            <div className="mt-12">
              <Outlet />
            </div>
          </div>
        </div>
      );
    }

    export default Dashboard;
    ```

3. **Create subpages like `Overview` and `Profile`**:

    - `src/pages/dashboard/overview.jsx`:
    
        ```jsx
        import React from 'react';

        function Overview() {
          return <h1>Overview Page</h1>;
        }

        export default Overview;
        ```

    - `src/pages/dashboard/profile.jsx`:
    
        ```jsx
        import React from 'react';

        function Profile() {
          return <h1>Profile Page</h1>;
        }

        export default Profile;
        ```

### `variant` Prop in `ToastProvider`

The `variant` prop in the `ToastProvider` component specifies the position of the toast notifications on the screen. It is passed to the `ToastContainer` component to determine where the toasts will appear.

#### Definition

In `ToastProvider.jsx`, the `variant` prop is defined as follows:

            <ToastProvider>
              <RouterProvider router={router} />
            </ToastProvider>

By following these steps, you can create a layout with nested subpages in your React application.

This template provides a basic structure for a React-based admin frontend with state management and internationalization support.
