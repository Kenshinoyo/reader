# File Uploader(BETA)

- This app was created using the JavaScript based library React
- Tool takes user file uploads and displays the data in a readable format
- Uses a traditional class component code structure with the capacity for expansion via Axios and Redux
- Application is rooted in object-oriented programming, with the file uploader using encapsulated states to convert the raw data into a readable format(additional detail in code base)
- App is tested using React's live server

## Stretch Goals

- Refactor code base to utilize functional components over class style for efficiency.
- Improved styling(in development)

## Hurdles

- File changes not staging for git commit(**solved**)
- Properly refactoring "event handler(s)" for functional component structure
- *Uncaught Error* with Home component not being recognized as a child of the Routes
  - **Solution**: Revised react router dom to 5.2 version, and utilized legacy syntax
- *Runtime Error* with component not being exported properly
  - **Solution**: Installed eslint plugins for compatibility
- *Uncaught Error* with <br> tag not working properly
  - **Solution**: Updated syntax to self closing tag
