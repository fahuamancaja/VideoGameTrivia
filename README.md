# Video Game Trivia!
## Screenshots
 Included in Screenshots folder.

## Description
 Multiple choice quiz! Contains a seeded bank of 50 questions. You must answer 10 random questions and see if you can get a higher score each time. See how many you can get right! Go through a series of Trivia Questions to test out your ability to guess XD!

## Installation
 1. Clone Repository
 2. Install .NET 5 Sdk (Dotnet 3 will not work!) 
 3. Install nodejs with npm
 4. Run in Terminal: dotnet tool install --global dotnet-ef (Make sure version 5+ installed)
 5. Drop Database: dotnet ef database drop
 6. Start API from API folder by running from CLI: dotnet run. 
 7. Might need to run, as well: Dotnet dev-certs https --trust (This will create an approved local host for https api, remove any previous local host certs to avoid issues)
 8. In Angular side within client folder run: ng serve
 9. Data is automatically seeded to sqlite db
 10. Go to http://localhost:4200/ (DO NOT USE HTTPS - no certs available sadly)

## Usage
 Made for practicing purposes. To restart simply hit reload button.

## Credentials
 Make your own! Though there is a minimum of 4 characters and max 8 for Username.
 
## Project Status
 Complete for version 1. Needs work on reiterating instead of statically creating data within tabs in Angular.
 Need to add loading screen to provide user an indication of data loading.

 Will also work on randomizing answer buttons

## License
 [MIT](https://choosealicense.com/licenses/mit/)
 
## Known Bug
 When first loading into Visual Studio Code you might have to reinstall the Microsoft.EntityFrameworkCore.Analyzers 5.0.0-rc.2.20475.6 package.
 You might get assembly errors if .NET 5 is not default or primary. Please ensure .NET 5.0+ is installed! If you are still having MSBuild issues and you have Visual Studio Community installed aside from Visual Studio Code, you might have to install Visual Studio Community 2019 Preview.
