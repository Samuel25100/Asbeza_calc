# AsbezaCalc
##Introduction
AsbezaCalc is a simple web app that use to calculate common expenses or cost to live or stay in Ethiopia,Addis-Ababa. it is designed specifically to help tourist or they work remote job and want to settle in Addis Ababa, on planning how much buget they could need based on thier espenses per months or a year. 
AsbezaCalc will have already studied and collected data of common goods and services prices within the web app so the client or user only need to know what and how much did they need per a certain duration then AsbezaCalc will help them on how much budget will they need based on thier needs, so they don't have to research many website just to get the prices of each things they may need for thier staying in Addis-Ababa.

AsbezaCalc will solve problems of tourists struggles to find upto-date data of prices of commodity and services, and not knowing how much the travel could cost you is 
very overwhelming for many so AsbezaCalc will make that road smooth and make travelling to Addis Ababa is one of your great experience

##Development
###Frontend:
    React + Vite enviroment.
###Backend:
    Vercel - for hosting
    api - using python, flask, and Gunicorn with nginx

##Files heirarchy
Asbeza_calc
    |->database - all backend except hosting are here
        |->AsbezaCalc.sql - is the sql data dumping file, running this file create
            mysql database.
        |->AsbezaCalc_API.py - is flask api that fetch data from file.json and
            return it based on http request 
        |->file.json - file storage of all data (name, price ...etc)
        |->filestorage.py - is python file use to fetch data from mysql database
            and store it in file named 'file.json'
    |->dist - is the build destination of react 
    |->public
    |->src - is the main build enviroment
        |->App.jsk - here is where all AsbezaCalc component located at
        |->main.jsx - is the main file who call root component
        |->index.css - for body and root element
        |->App.css - main css file
        |->landingPg.css - css of landing page 
        |->more.css - css of asbezacalc button effects (hover, onclick ...etc)
    |->README.md
    |->index.html


