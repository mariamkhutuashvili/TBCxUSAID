# TBC x USAID Training Program Website

This website is the official source code repository for the TBC x USAID training program, hosted on GitHub: https://github.com/mariamkhutuashvili/TBCxUSAID

## Project Structure

The website consists of several main sections, each fulfilling a specific role:

- **Banner Section**: This is the first visual part of the website that users encounter, containing the program title and subtitle.
- **Program Overview**: Provides a concise introduction to what the TBC x USAID training program offers, its benefits, and calls to action.
- **Courses Modules**: Lists all the available courses in the training program, with a brief description of each.
- **Partners Section**: Showcases the partners associated with the program, emphasizing collaboration and support.
- **Queries Section**: Answers the most common questions regarding the program, its structure, and enrollment processes.

The project is structured into a main `index.html` file which serves as the entry point of the website. It is linked to `style.css` for styling, and `index.js` and `modules.js` for functionality.

- `index.html` - Contains the structure of the website including the header, main banner section, program overview, courses modules, partners, and queries.
- `style.css` - Provides the visual styling for the HTML structure using CSS including media queries for responsiveness.
- `index.js` - Includes the interactive JavaScript code that handles dynamic behaviors such as navigation bar toggling, carousel functionality, and queries accordion.
- `modules.js` - Exports an array of objects where each object represents a course module, containing properties like image URL, title, info, and details.

## Technologies Used

- **HTML5**: Used for structuring the content of the website.
- **CSS3**: For styling the website. Media queries are used for making the website responsive across different devices.
- **JavaScript (ES6)**: To provide interactivity to the website, such as the responsive navigation menu and the queries accordion.
- **FontAwesome**: A web font and icon toolkit used for icons throughout the website.
- **Google Fonts**: To import 'Noto Sans Georgian' font which is used for the textual content on the website.

The technologies were chosen for their wide support and robustness, which ensures a consistent user experience across different browsers and devices.

## Running the Project

To run this project locally:

1. Clone the repository to your local machine.
2. Setting Up a Local Server: Due to the inclusion of ES6 modules, opening index.html directly in a web browser will not work correctly because of CORS (Cross-Origin Resource Sharing) policy restrictions. To view the project, you'll need to open the project with your prefered IDE to run a webpage with a local server.
5. Explore the different sections of the website, such as the program overview, course modules, partners, and queries.

No additional setup is required, and there is no need for a local server since the project consists of static files only. However, for production deployment, ensure to host the website on a secure web server.

---

© 2023 TBC x USAID Training Program. All rights reserved.
