# React Router Dom

This React application is designed to provide a simple web interface with multiple pages and routing functionality.

## Functionality

### Components

The application consists of the following components:

1. Navbar: Navigation bar component providing links to different pages.
2. Home: Home page component.
3. About: About page component.
4. Contact: Contact page component.
5. User: User page component for displaying user-specific information.
6. Github: Github page component for fetching and displaying Github user data.
7. Footer: Footer component for displaying footer information.

### Routing

The application uses react-router-dom for routing. Here's how the routing is configured:

1. Home: The root URL / leads to the Home page.
2. About: The URL /about leads to the About page.
3. Contact: The URL /contact leads to the Contact page.
4. User: The URL /user/:userid leads to the User page, where :userid is a dynamic parameter representing the user ID.
5. Github: The URL /github leads to the Github page.

### Usage

To use this application:

1. Clone the repository.
2. Install dependencies using npm install.
3. Run the application using npm start.
4. Access the application in your web browser.

### Technologies Used

React
react-router-dom

## Directory Structure

/src
|-- App.css
|-- App.js
|-- About.js
|-- Contact.js
|-- Footer.js
|-- Github.js
|-- Home.js
|-- Navbar.js
|-- User.js
|-- index.js
|-- README.md

## License
This project is licensed under the MIT License - see the LICENSE file for details.