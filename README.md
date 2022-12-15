# Project Title

CIOMPRIX Challenge App

## Table of contents

- [Overview](#overview)
  - [Description](#description)
  - [Demo Links](#demo-links)
  - [Screenshots](#screenshots)
  - [Tasks breakdown](#tasks-breakdown)
- [Tools and structure](#tools-and-structure)
  - [Technologies Used](#technologies-used)
  - [Setup](#setup)
  - [Project structure](#project-structure)

## Overview

### Description

A small landing page example focused on the internal data of a company. It is important to mention that the site has registration and user information update forms, along with login and session management.

This landing page is part of a technical test for [Ciomprix company](https://www.ciomprix.com/).

### Demo Links

Deployment of the web app on Vercel:

[Main branch](https://ciomprix-app.vercel.app/)

[Developer branch](https://ciomprix-app-developer.vercel.app/)


### Screenshots

![Web Application in Desktop](public/desktop-screenshot.png)

![Web Application in Mobile](public/mobile-screenshot.png)

### Tasks breakdown

To check the tasks breakdown, please refer to the GitHub Project [Ciomprix App](https://github.com/GersonJairG/ciomprix-app)

## Tools and structure

### Technologies Used

#### Dev stack

- TypeScript
- NextJS
- RTK (Redux Toolkit)
- TailwindCSS
- HeadlessUI

#### Dependencies

- react-hook-form (Form creation)
- yup (Form validations)
- react-icons (Icons)
- redux-persist (State persistence)

- pg (Connection to db postgres)
- bcryptjs (Password encryption)

### Project structure

#### Back and front connection

Taking advantage of the ability of NextJS to be able to implement APIs within the same project, I decided to implement the following endpoints following the REST standards:

- GET [/api/users](https://ciomprix-app-developer.vercel.app/api/users) (List users)

- POST [/api/users](https://ciomprix-app-developer.vercel.app/api/users) (Create user)

- PUT [/api/users](https://ciomprix-app-developer.vercel.app/api/users) (Update user)

- POST [/api/users/sign_in](https://ciomprix-app-developer.vercel.app/api/users/sign_in) (Log in)

- GET [/api/users/check_email](https://ciomprix-app-developer.vercel.app/api/users/check_email) (Check email)

To request the information from these endpoints I used the Fetch API and this allowed me to obtain the necessary information to render in the respective views.

A postgres database created with
Supabase, which has an option that allows us to use it through a traditional connection.

More details at: [documentation supabase](https://supabase.com/database) (Just Postgres)

#### Components

- **Atoms**: The atoms include AtAlert, AtButton, AtCheckbox, AtInput, AtLoader and AtLogo components.
- **Molecules**: The molecule include MlCard, MlModalScreen, MlSocialList and Forms components.
- **Organisms**: The organisms include OrFooter, OrHeader, OrHero and OrNavigationMenu components.
- **Templates**: The templates include Layout component.

#### Pages

The Pages folder has the main views: Home, Login, Signup, Profile, and 404.

#### Deployment tool

- Vercel

### Setup

- Download or clone the repository
- You need to create an .env file with the following environment variables for the database connection: PGUSER, PGHOST, PGDATABASE, PGPASSWORD y PGPORT

- Run `npm install`
- Run `npm run dev`
- Open `http://localhost:3000` to view it in your browser.
