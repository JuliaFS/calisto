# Calisto

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.12.

## Development server
Run `npm install' and `npm start` to generate project with all dependiencies.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

Project details:

This site is something like companies list defense of the Angular Softuni Course as part of the Front-End Module. This project is an Angular App for companies list.

Database
Using Firestore database. Implemented login, login with google, register, verify email and forgot password.

Navigation
User are able to navigate through various links like:

Home,
Companies functionality

The application contains two parts:

Public part
Guests can:
    - visit Home page
    - visit Companies page 
    - visit public part of details page
    - register: "/auth/register"
    - login: "/auth/login"
    - view all companies: "/company/company-list"
    - view a part of a single company details: "/company/company-details/:companyId"
    - view 404 page

Private part (logged in users only)
    - logged users can (if they are not the owner of that company) see private part with company rating:
    - create company "/company/add-company"
The owner of the company can:
    - edit existing company: "/company/edit-company/:companyId"
     - delete existing company implemented with modal.
Any logged in user can:
 - create new company: "/company/add-company"
 
🔨 Used technologies
HTML
CSS
Angular
Firestore database

firebase link: https://galeriq-guyndogan.web.app/
npm run build (to catch if have changes)
firebase deploy (add changes to firebase)
Resources
Use local image files
Person images are my own pictures
Pictures in gallery are my own (pictures of my little painters)
The design is my own

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
