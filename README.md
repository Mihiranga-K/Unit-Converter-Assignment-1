OMNICONVERT PRO - Dockerized DevOps Unit Converter

Project Overview
OMNICONVERT PRO is a professional-grade Unit Converter application (Length, Weight, Temperature, Currency) featuring a clean user interface and a conversion history log. 

Originally developed for Assignment 1, this project has now been containerized using Docker for Assignment 2. This ensures the application runs easily and consistently on any computer, without the it works on my machine problem.

Group Information
Student 1: Tharindu Dilshan (ITBNM-2313-0018) - Frontend Developer (Structure & Markup)
Student 2: Nipun Mihiranga (ITBNM-2313-0040) - Frontend Developer (UI/UX & Styling)
Student 3:Udesh Chanuka (ITBNM-2313-0011) - Backend/Logic Developer (Core Functionality)

Technologies Used
Frontend: HTML5, CSS3, JavaScript
Containerization: Docker, Docker Compose
Web Server: Nginx (Alpine Linux based)

Prerequisites
To run this application on your machine, you only need to install:
* [Docker] (https://docs.docker.com/get-docker/)
* [Docker Compose] (https://docs.docker.com/compose/install/)



Environment Variables & Configuration
We use environment variables so you can easily change settings without touching the code. 

1. Create a file named env in the root folder of this project.
2. Add the following line to the env file to set your preferred port: env
   The port where the app will run on your computer
   HOST_PORT=8080
