# [Deployment Link here](https://directory-gui-demo-git-main-0xapplepies-projects.vercel.app/)

# Directory GUI Demo

This project showcases a simple React App. The user can enter an array of file path strings (e.g. ['root/test', 'dev/dir1'] ) and the App will visualize it by rendering a collapsable tree.
Only invalid Unix paths will be marked, otherwise the App tries to render as much of the given input as possible.

## Improvements

Further considerations and improvements:

- Dark Mode
- possible different deployment than Vercel
- Automated Test for string inputs, could be integrated into CI/CD pipeline
- Performance Optimizations
- Test on all target devices (screen size, browsers, ...)
- Multi Languange Support / Localization
- better input cleaning / edge case handling

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
