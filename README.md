 OMNICONVERT PRO - DevOps Unit Converter

Group Information

* Student 1: Tharindu Dilshan - ITBNM-2313-0018 - Role: Frontend Developer (Structure &           Markup)
* Student 2: Nipun Mihiranga - ITBNM-2313-0040 - Role: Frontend Developer (UI/UX & Styling)
* Student 3: Udesh Chanuka - ITBNM-2313-0011 - Role: Backend/Logic Developer (Core    Functionality)

 Project Description
OMNICONVERT PRO is a professional-grade Unit Converter application developed as part of the Advanced Git & DevOps Team Collaboration Assignment. The application provides real-time conversions across multiple categories including Length, Weight, Temperature, and Currency, featuring a clean, responsive user interface and a conversion history log.

Live Deployment
*Live URL: https://unit-converter-assignment-1-uzi6.vercel.app/

Technologies Used

* HTML5 (Semantic structure)
* CSS3 (Responsive styling and layout)
* JavaScript (Conversion logic and DOM manipulation)
* GitHub Actions (CI/CD Automation)
* Vercel (Cloud Deployment Platform)

Features

* Multi-Category Support: Seamlessly switch between Length, Weight, Temperature, and Currency tabs.
* Real-Time Conversion: Instant calculation as the user types.
* Smart Dropdowns: "From" and "To" unit selection (e.g., Meters to Kilometers).
* Conversion History: Automatically saves and displays recent conversions at the bottom of the dashboard.
* Responsive Design: Fully functional on both desktop and mobile devices.
* Live Rates: Placeholder structure for currency exchange integration.

Branch Strategy
We implemented the Gitflow branching strategy as required:

* main - Production branch (Protected, Auto-deploys to Vercel).
* develop - Integration branch for merging features before production.
* feature - Individual feature branches for each developer (e.g., feature/html-structure, feature/css-styling, feature/js-logic).
	
Individual Contributions

 Tharindu Dilshan (ITBNM-2313-0018)
Role: Frontend Developer (HTML)
* Set up the initial repository structure and `index.html`.
* Developed the semantic HTML5 layout for the dashboard.
* Implemented accessible form inputs and navigation tabs structure.
*Commits: Created the skeleton of the application and managed merging of structural updates.

 Nipun Mihiranga (ITBNM-2313-0040)
Role: Frontend Developer (CSS)
* Role: Designed the "OmniConvert Pro" UI theme (Blue gradient background, Glassmorphism card effect).
* Styled the input fields, dropdowns, and navigation buttons.
* Implemented responsive CSS to ensure the app works on mobile screens.
*Commits: Added `styles.css`, configured fonts, and polished the visual interface.

Udesh Chanuka (ITBNM-2313-0011)
Role: Backend/Logic Developer (JavaScript)
* Developed the core conversion algorithms for Length, Weight, and Temperature.
* Implemented JavaScript event listeners for real-time data processing.
* Created the "Conversion History" functionality to log user activities.
*Commits: Added `script.js`, handled logic validation, and fixed calculation bugs.

Setup Instructions
 Prerequisites
* Node.js (v18 or higher)
* Git

 Build Status & Deployment Process

The project uses GitHub Actions for CI/CD:
1.  CI Pipeline: Triggers on push/pull requests to run linting and build checks.
2.  Deployment: Automatically deploys to Vercel when changes are merged into the `main` branch.
