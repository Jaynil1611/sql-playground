# SQL Playground⚡

## Introduction
- This application helps users to query the tables available in database via SQL.
- Users can execute SQL queries & view the results. 
- Users can select a query from a set of pre-defined queries.
- Users can view the table schema & corresponding type of each column in the sidebar.
- Users can sort any column of the result by clicking on the column name header.
- Users can navigate the entire result using pagination.
- Users can export the queried result into CSV format.

## Live Demo
View the live demo of the application here 👉 [SQL Playground](http://sql-payground.vercel.app/).


## Application View!

![SQL Playground](https://user-images.githubusercontent.com/48921037/192089148-acc5b26e-35ec-46af-83ee-77d5017ed663.png)

## Technologies Used
- React JS
- Tailwind CSS
- [react-json-to-csv](https://www.npmjs.com/package/react-json-to-csv)
- [react-syntax-highlighter](https://www.npmjs.com/package/react-syntax-highlighter)
- [react-table](https://www.npmjs.com/package/react-table)

## Page Load Time
- Performance Report is calculated using [Page Speed Insights](https://pagespeed.web.dev/)
- [Desktop Performance Report]()
- [Mobile Performance Report]()

## Performance Improvements
- Used `useMemo` hook to avoid re-calculating same information for rendering tables.
- Used dynamic imports & code-splitting to create separate bundle for table data to optimize time to interactive.
- Made the website responsive to maintain consitent performance for mobile & tablet users.
- Fixed image rendering issues & accessibility issues recommended by lighthouse report.
- Using vercel to deploy this application which uses it's edge network to cache requests & improve initial load time.

## Run Application
- Clone the repository
- Run npm install to install required dependencies
- Finally, run npm start to run the application and open the browser to view the site on localhost.
- Use Node JS version `16.17.0` to run the application on local

## 👤 **Jaynil Gaglani**
- Portfolio: [jaynil.gaglani](https://bit.ly/jaynil-profile)
- Linkedin: [Jaynil Gaglani](https://www.linkedin.com/in/jaynilgaglani/)
- Twitter: [@Jaynil1611](https://twitter.com/Jaynil_Gaglani)
- Github: [@Jaynil1611](https://github.com/Jaynil1611)

## Show your support
Give a ⭐️ if you like this repository!

Made with ❤️ by Jaynil Gaglani
