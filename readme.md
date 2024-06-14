# Fullstack

Welcome to Fullstack! This project was created to simplify the work of a full-stack web developer.

## Table of Contents

1. [About](#about)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Getting Started](#getting-started)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [License](#license)
8. [Gratitude](#Gratitude)

## About

Fullstack dynamically handles frontend queries in the backend, utilizing MySQL and file management.

## Features

- [MySQL]: Handles queries dynamically in the backend.
- [Files]: Generates necessary files for the frontend.
- [Watch]: Monitors changes in HTML, CSS, and JS files/
- [CORS]: Facilitates backend execution from the frontend.

## Technologies Used

- Frontend:

  - [HTML5]: Standard markup language for web pages and applications.
  - [CSS3]: Latest evolution of Cascading Style Sheets.
  - [SCSS]: Superset of CSS3 with advanced features.
  - [JavaScript]: Enables interactive web pages.

- Backend:

  - [JavaScript]: Versatile programming language for server-side development.
  - [NodeJS](https://nodejs.org/): Executes JavaScript on the server-side.

  - NPM's:

    - [Crypto](https://www.npmjs.com/package/crypto-js): Can make strings into encrypted and decrypted hashes.
    - [CORS](https://www.npmjs.com/package/cors): Mechanism for cross-origin resource sharing.
    - [dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a .env file.
    - [Express](https://www.npmjs.com/package/express): Web application framework for Node.js.
    - [MySQL2](https://www.npmjs.com/package/mysql2): Fast MySQL driver for Node.js.
    - [LiveReload](https://www.npmjs.com/package/livereload): Automatically refreshes web pages on file changes.

  - Database:

    - [MariaDB](https://mariadb.org/): Community-developed fork of MySQL.
    - [HeidiSQL](https://www.heidisql.com/): Lightweight database management tool.

## Getting Started

To set up your website using this Fullstack:

1. Clone the repository
   ```sh
   git clone https://github.com/Tristan-23/fullstack.git
   ```
2. Navigate to a root folder. (example : `C:\.git`)
3. Open a project terminal to install NPM's
   ```sh
   npm i cors crypto dotenv express mysql2
   npm i connect-livereload livereload --save-dev
   ```
4. Open a project terminal and run `npm start`. (recommand GitBash)
5. Ctrl + click the provided link to open it in your default web browser.

## Usage

Here we list a couple of fetures and explain how to use them.

### Generating Frontend

To semi-automatically generate your frontend:

    1. Go to .env file.
    2. Make sure `DEVELOPMENT_FILES_CREATE` is set to `true`.
    3. Go to the routes folder.
    4. Copy the sv_explain.js.
    5. Rename the copied file like `sv_${your_desired_name}.js`.
    6. Save it.
    7. Go to the npm start terminal.
    8. Press Crtl + C.
    9. Type `npm start`.

### Watch

To monitor changes during development:

    1. Open another project terminal
    2. Type `npm run watch`

### Test

To test your backend and the default features:

[Click here](http://127.0.0.1:5000/explain/) to access the test page or follow the guide bellow.

1. Open browser
2. Search for `http://127.0.0.1:5000/explain/`
3. Press enter

## Contributing

1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine.
   ```sh
   git clone https://github.com/your-username/fullstack.git
   ```
3. Create a new branch for your feature or bug fix.
   ```sh
   git checkout -b feature/your-feature-name
   ```
4. Make your changes and ensure they are properly tested.
5. Commit your changes with descriptive commit messages.
   ```sh
   git commit -m "Add feature: your feature description"
   ```
6. Push your changes to your forked repository.
   ```sh
   git push origin feature/your-feature-name
   ```
7. Finally, open a pull request on the original repository with a detailed description of your changes

Thank you for contributing to this project! Your help makes this project better for everyone!

## License

Fullstack is open-source software licensed under the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).

This means you are free to use, modify, and distribute the software for any purpose, even commercially, as long as you give appropriate credit to the creators by providing a link to the [original repository](https://github.com/Tristan-23/fullstack/).

## Gratitude

We would like to extend our gratitude to the creators of the npm packages used in this project. Their contributions have greatly enhanced the functionality and efficiency of this project. For a summary of the npm packages utilized, [click here](#technologies-used).
