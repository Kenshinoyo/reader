# File Uploader(BETA)

- This app was created using the JavaScript based library React
- Tool takes user file uploads and displays the data in a readable format
- Uses a traditional class component code structure with the capacity for expansion via Redux

## Stretch Goals

- Refactor code base to utilize functional components over class style for efficiency.
- Improved styling

## Hurdles

- File changes not staging for git commit(**solved**)
- Properly refactoring "event handler(s)" for functional component structure
- *Uncaught Error* with Home component not being recognized as a child of the Routes
  - **Solution**: Revised react router dom to 5.2 version, and utilized legacy syntax
- *Runtime Error* with component not being exported properly
  - **Solution**: Installed eslint plugins for compatibility
- *Uncaught Error* with <br> tag not working properly
  - **Solution**: Updated syntax to self closing tag
