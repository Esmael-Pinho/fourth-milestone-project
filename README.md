![Mini M](/readMe/content/web-icon.png)

## Mini M - Milestone Project 4 

![Responsive-app](/readMe/content/am-i-responsive-mini-m.png)

* Mini M is an app where users can purchase products, including handmade products. The website design is responsive so it can be used on any device.

* This is my Milestone Project 4 submission for Code Institute's Diploma in Web Application Development course. My website uses relational databases, features full CRUD functionality and is built using technologies that I have learnt including HTML, CSS, JavaScript, Python, Django and PostgreSQL/ElephantSQL.

## Live Project

[View the live project here.](https://mini-m-3d8a36d1df66.herokuapp.com/)

## Repository

[Find the project repository here.](https://github.com/Esmael-Pinho/fourth-milestone-project)

# Table of Contents

## Contents
- [Shopper experience](#user-experience)
  * [Shopper Stories](#user-stories)
    + [Shopper](#first-time-users)
    + [Returning Shopper](#returning-users)
    + [Business Owner](#business-owner)
- [Design](#design)
  + [Overview](#overview)
  + [Colour Scheme](#colour-scheme)
  + [Typography](#typography)
  + [Icons](#icons)
  + [Cards](#cards)
- [Wireframes](#wireframes)
- [Features](#features)
  + [All Pages Features](#all-pages-features)
    - [Navbar](#navbar)
    - [Footer](#footer)
  + [Register and Log In Pages](#register-and-log-in-pages)
- [Future Features](#future-features)
- [Data Model](#data-model)
- [Technologies used](#technologies-used)
  + [Languages Used](#languages-used)
  + [Frameworks Libraries and Programs](#frameworks-libraries-and-programs)
- [Testing](#testing)
- [Deployment](#deployment)
  + [Creating a Gitpod Workspace](#creating-a-gitpod-workspace)
  + [GitHub Pages](#github-pages)
  + [Forking the GitHub Repository](#forking-the-github-repository)
  + [Making a Local Clone](#making-a-local-clone)
  + [Creating an application with Heroku](#creating-an-application-with-heroku)
- [Credits](#credits)
  + [Code](#code)
  + [Media Content](#media-content)
  + [Acknowledgements](#acknowledgements)

*Note:

*For Product Management Options please login with this user:

| **Username:** | gita |
|--------------|--------------|
| **Password:** | original123 |

For testing payments please use any of these:   
![Payments Tests](/readMe/content/payments-test.png)


# Shopper Experience

## Shopper stories

### Shopper

* As a shopper, I want the landing page of the website to explain the purpose of the website and allow me to preview the content.
* As a shopper, I want to be able to register for an account.
* As a shopper, I want to view a list of the products, and be able to select some to purchase.
* As a shopper, I want to be able to see the total of my purchases, so that I can control how much I'm spending.
* As a shopper, I want to sort for a specific or the different product categories.
* As a shopper, I want to search for a product either by name or description.
* As a shopper, I want to access and use the website on any device.

### Returning Shopper

* As a returning shopper, I want to be able to log in to my account.
* As a returning shopper, I want to easily recover my password in case I forget it..

### Business Owner

* As a business owner, I want to have an admin user profile, so that I can view, add, modify or delete a product.
* As a business owner, I want the website to function and look good on any device.

## Design

### Overview

- The website design is playfull and colourful

### Colour Scheme
A combination of very bright and primary color, to get a litle attencion.! 
![My color pallete](/readMe/content/Mini-M-coolors.png)

### Typography

 Google Fonts was used for the following fonts:
  * Bruno Ace Sc : was used for the logo at the navbar.
  * Ubuntu: was used for the headings
  * Oswald: was used for the paragraphs, small texts and spans.
  * Sans-serif: used as the fallback font.


### Icons

- [From Fontawesome](https://fontawesome.com/icons).

### Cards

- [Bootstrap cards](https://getbootstrap.com/docs/5.3/components/card/#card-groups)

# Wireframe

- [View my wireframe](/readMe/wireframe/mini-m-wireframe.pdf).

# Features

## All Pages Features

### Register and Log In Pages
- The Log in form features input fields for Username and Password. All fields are required.
![Login Page](/readMe/content/login.png)
- The Register and Log in pages both feature forms, a login and register buttons, and a link to the other page in case a user is in the wrong place. E.g. on the Register Page, it says "Already Registered? Log in here."
![Register Page](/readMe/content/register.png)
- The Register form features input fields for Username, User Name, email and Password. All fields are required.

### Intro-Page
- The Intro page displays, a carousel, highlighting the contents available os the site, with buttons directing to them.
 ![Intro-page](/readMe/content/home-page.png)

### NavBar
- Nav structure, simple, responsive, compose of a logo, nav-links, with dropdowns, proving access to different products, either by price, category, rating, or simply access all the products regardless. Icons - search, profile, and bag - allowing the user easily access, according to they needs. 
![Navbar](/readMe/content/nav-bar.png)

 ## Home-Page
 The home page, is where user can view the products..
### Products-Page
Products:
- At the top, it displays, a delivery banner, container, alerting the user, of a free delivery soon.
- The page will display, collums of the products in a card styling, with name, rating, price, discounted price. When hovering over the cards, it will display two buttons, a quick view, that shows the product with it's description, and a add to bag button, allowing to user a quick add to bag option - it adds onw item at a time. Clicking on the product it takes you to the product-details page.
![Products](/readMe/content/products-page.png)


Products-details:
- The page displays on the left the product image, and on the right it's price, name, rating at the top, a increment button allowing the user to choose the required amount they need, following by a return back and a add to bag buttons. Clickin on the image, it opens a new window, displaying the images as a full.
![Product-details](/readMe/content/product-detail.png)

### Contact-Page
- Contact page to allow users to send a message, feedback, a comment, some ideas or complains,or simply a hello message, about the app. It has a form requiring a name, a textarea, for the subject, reason they are contacting. After the form submition, a thank you message will display.
![Contact-page](/readMe/content/contact-page.png)
![Contact-with-message](/readMe/content/contact-with-message.png)

### Bag-Page
Bag:
- The page as a table content that displays the products in the order, with it;s image on the left, product info, followed by the price, the quantity of the same products, and a subtotal. At the bottom, another table content providing more info about the delivery fee, as well as the final price, with or without the delivery, if included. A go back button and a checkotut button, allowing you to proceed with your order.
![Bag](/readMe/content/shopping-bag.png)


Checkout:
- The page displays, a form for the user details, along with some info regarding the delivery. With a payment at the bottom, accepting different types of cards. 
On the right side, it displays to the buyer a final recap of the order that's about to be made, as a final check in case something needs to be changed.
![Checkout](/readMe/content/checkout-1.png)
![Checkout](/readMe/content/checkout-2.png)


Checkout-success:
- The page displays the order information, along with the order number and the order date. Has a "Keep shopping" button to direct the user back to the products page.
![Checkout-success](/readMe/content/checkout-success.png)


### Product-Management-Page
For the superUsers
Add-Product:
- A form with the products fiels, name, description, price, rating, img and image-url. Filling those fiels and clicking "add product" will then display a success message, if the actions was indeed successful and direct them to the page with the new product created.
![Add-Product](/readMe/content/add-product.png)


Edit-Product:
- A form with the products fiels, name, description, price, rating, img and image-url. Filling those fiels and clicking "edit product" will then display a success message, if the actions was indeed successful and direct them to the page with the updated product. Displaying a message alerting the user that it's about to edit a product.
![Edit-Product](/readMe/content/edit-product.png)

### Footer 
Footer follows the same principle as the navbar, responsive on all screens, with three sections, the app name, some social links and contact button.
![Footer](/readMe/content/footer.png)

# Future Features



# Data Model

- [View my Database diagram structure here](/readMe/database/PipeTracker_Database_Diagram.pdf).
- [Database created from workspace enviroment](/readMe/database/my_models.png)

# Technologies Used

## Languages Used

- [HTML5](https://en.wikipedia.org/wiki/HTML5)

- [CSS3](https://en.wikipedia.org/wiki/CSS)

- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

- [Python](https://en.wikipedia.org/wiki/Python_(programming_language))


## Frameworks Libraries and Programs

- [Heroku](https://id.heroku.com/login)
  - Heroku is the deployment source I used for this project. I'm also using it for the Postgres relational database
  
- [Django]()
  - Templating language I've used with Python to add logic to my html templates.

- [jQuery](https://jquery.com/)
  - I used jQuery to add functionality to MaterialiseCSS.

- [Google Fonts](https://fonts.google.com/)
  - Two fonts are imported from google fonts.
  
- [Font awesome](https://fontawesome.com/)
  - I used icons from font awesome on buttons.

- [Git](https://git-scm.com/)
  - Git was used as a version control in the terminal.

- [Github](https://github.com/)
  - Github was used to create and store the project repository.

- [Gitpod](https://gitpod.io/)
  - Gitpod was used to create my files and where I wrote the code.

- [Balsamiq](https://balsamiq.com/)
  - Balsamiq was used to create Wireframes for the project during the initial planning stage.

- [TinyPNG](https://tinypng.com/)
  - TinyPNG was used to compress images for a faster loading time.

- [Google Chrome Dev Tools](https://developer.chrome.com/docs/devtools/)
  - Google Chrome's Dev Tools were used while building the project to test responsiveness and for debugging.

- [LucydChart](https://lucid.app/)
  - Tool used to mock up database structure diagram.

# Testing
[Testing](/TESTING.md)
* *Note:  majority of performance and accessibility, were affected by the extensions I have on the browsers, affecting even on incognito mode.

Contact
| **Submit Button** |
|----------|

| **Submit button, keeps displaying the modal, even thought no form submition was triggered** | **![Submit-btn](/readMe/errors/submit-btn-error.png)** | **On the javascript to activate, display the modal i've set it up to keep the modal hidden, until the form gets submited but keeps on displaying regarless, as as soon the button is clicked.** |
|----------|----------|------------|

| **Code** |
|----------|
| ![code](/readMe/errors/contact-modal-error.png) |


# Deployment

## Creating a Gitpod Workspace

The project was created in Gitpod using the Code Institute Gitpod Full Template using these steps:

1. Log in to GitHub and go to the [Code Institute student template for Gitpod](https://github.com/Code-Institute-Org/gitpod-full-template)
2. Click 'Use this Template' next to the Green Gitpod button.
3. Add a repository name and click 'Create reposiory from template'.
4. This will create a copy of the template in your own repository. Now you can click the green 'Gitpod' button to open a workspace in Gitpod.


## **Project Setup**

1. Install **Django** and **gunicorn**:
   - `pip3 install pip3 install 'django<4'`
   - `pip3 install django gunicorn`
2. Install supporting **libraries**:
   - `pip3 install dj_database_url psycopg2`
   - 
3. Create **requirements.txt** file:
   - `pip3 freeze --local > requirements.txt`
4. Create a Django project:
   - `django-admin startproject <name> .`  (in my case `<name>` was *mini_m*)
5. Test to see if everything worked:
   - `python manage.py runserver`


## **Database Setup**

You can use a database of your choice, following are the instructions if you use [ElephantSQL](https://customer.elephantsql.com/).

1. Log in to your account
2. Click *Create New Instance*
3. Give the instance a name and select the plan of your choice, *Tiny Turtle* is the free plan.
4. Click *Select Region* and choose a data center near you
5. Click *Review* and if the details are correct click *Create instance*
6. Click on the created instance and copy the database URL


## Forking the GitHub Repository

Forks are used to propose changes to someone else's project or to use someone else's project as a starting point for your own idea. By forking the GitHub Repository you make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository.

To Fork a Github Repository:

1. Log in to GitHub and go to the [GitHub Repository](https://github.com/Esmael-Pinho/fourth-milestone-project)
2. Locate the Fork button in the top-right corner of the page, click Fork.
3. You should now have a copy of the original repository in your GitHub account.

## Making a Local Clone

You will now have a fork of the repository, but you don't have the files in that repository locally on your computer.

To make a local clone:

1. Log in to GitHub and go to the [GitHub Repository](https://github.com/Esmael-Pinho/fourth-milestone-project)
2. Above the list of files, click  Code.
3. To clone the repository using HTTPS, under "Clone with HTTPS", click the 'Copy' icon. To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click Use SSH, then click the 'Copy' icon. To clone a repository using GitHub CLI, click Use GitHub CLI, then click the 'Copy' icon.
4. Open Git Bash.
5. Change the current working directory to the location where you want the cloned directory.
6. Type git clone, and then paste the URL you copied earlier. It will look like this, with your GitHub AE username instead of YOUR-USERNAME:

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `Fourth-Milestone-Project`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

## Creating an application with Heroku

You will need to deploy the application using Heroku.

1. Create a requirements.txt file by typing ``` pip3 freeze --local > requirements.txt ``` into the Gitpod CLI. Ensure this is added to your .gitignore file.
2. Create a Procfile by typing ```web gunicorn mini_m.wsgi > Procfile```. Open it and ensure it doesn't have a new line, as this can create errors. Ensure it starts with a capital P.
3. Add and commit these files to Github.
4. Go to [Heroku](https://dashboard.heroku.com/apps). Log in or create an account
5. Click the 'New' button and click 'Create new app'.
6. Enter a unique name for your project with no capital letters or spaces and select your region. Click 'Create App'.
7. Inside your project, go to the 'Settings' tab. Scroll down and click 'Reveal Config Vars'.
8. Add in the following variables
  - **IP** : 0.0.0.0
  - **PORT** : 8000
  - **SECRET_KEY** : Your_secret_key
  - **DATABASE_URL** with the copied URL from ElephantSQL
  - **DISABLE_COLLECTSTATIC** with the value 1
9. Deploy your project by going to the Deploy tab and choose 'Connect to Github'
10. Find your repository name and select Connect.
11. Click on *Deploy Branch* at the bottom of the page


# Credits

## Code - Content

****

- [Bootstrap](https://getbootstrap.com/docs/5.3/layout/containers/): I used this library throughout the project. Particularly for the nav bar, cards, forms and buttons.

- [W3Schools](https://www.w3schools.com/sql/default.asp): I referred to guides.
- [Code Institute walkthrough Boutique Ado](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+FSF_102+Q1_2020/courseware/4201818c00aa4ba3a0dae243725f6e32/d3188bf68530497aa5fba55d07a9d7d7/) Used the lessons, a multiple couple of times, as I got super confused, with few topics and logic.
- [Pexels](https://www.pexels.com) and [Google images](https://images.google.co.uk/), for the images as well as the default one.
- Email.js: [Code Institute emailJs walkthrough project](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+IFD101+2017_T3/courseware/03d3f6524ad249d9b33e3336d156dfd0/e4710f80cdf34bffbd607bc102482d5c/?child=first)


## Acknowledgements

- [Code Institute](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+FSF_102+Q1_2020/courseware/4201818c00aa4ba3a0dae243725f6e32/565adb80d90e4a54b1f5966c5dae5dcb/?child=first) - for the walkthrough lessons, very helpful.
- [W3C](https://www.w3schools.com/django/django_server.php) - with guides regardig the server, as went back, far to many times in the understanding process. :(

Please note this is a personal project. This website is purely for the sake of the developer's portfolio and not for public consumption. 
The products were taken from [Tesco](https://www.tesco.com/), [Amazon](https://www.amazon.co.uk/), [Sainsbury's](https://www.sainsburys.co.uk/), as well as google images, for most of it. 
As theres no intentions of copyright, only demonstration, test purposes.

Esmael Pinho, 2024.