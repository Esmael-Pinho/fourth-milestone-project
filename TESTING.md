# Manual Testing

## Navbar

|     Feature       |        Expectation          |        Action        |       Outcome      |
| ----------------- | --------------------------- | -------------------- | ------------------ |
| Logo name | When clicked it should bring back to Home page.| Click | When clicked it leads to Home page.|
| My Wishlist icon | When clicked it leads to  Wishlist page.| Click | Leads to Wishlist page.|
| My Account icon | When clicked a dropdown menu should open with the options 'Login' and 'Register'. Users who are logged in should see 'My Profile', and 'Logout'. The admin should additionally see 'Product Management'. | Click | When clicking on it, a dropdown menu is displayed with the options 'Login' and 'Register'. Logged in users see the options 'My Profile', and 'Logout'. Admin sees additionally the option 'Product Management'|
|Bag icon | When clicked, users should be directed to the Shopping Bag page. | Click | When clicking on it, users are directed to the Shopping Bag page. |
|Search bar | When clicking on it, typing in a search term und pressing the magnifying glass icon, this should lead to the products page with all found products that correspond to the search term. The text display under the 'Back to all Products' button should display the number of found products for the search term.| Click on search bar, type in search term, click on magnifying glas icon | The user is directed to the products page, displaying the found products that correspond to the search term. The text display under the 'Back to all Products' button displays the number of found products.|
 All products dropdown menu | When clicking on 'All products' and then on any of the five options 'By Price', 'By Rating', 'By Category', and 'All products', users should be directed to the corresponding page with products sorted accordingly. | Click | When clicking on 'All products' and then on any of the five options 'By Price', 'By Rating', 'By Category' and 'All Products', users are directed to the corresponding products page with products sorted accordingly.|
|Bakery dropdown menu  | When clicking on 'Bakery' and then on any of the options 'handmade', 'cakes', 'bread', 'pizzas', 'chocolates' users should be directed to the corresponding page with products sorted accordingly. | Click | When clicking on 'Bakery' and then on any of the options 'handmade', 'cakes', 'bread', 'pizzas', 'chocolates', users are directed to the corresponding products page with products sorted accordingly.|
|Contact | When clicking on 'Contact'users should be directed to the corresponding page with products sorted accordingly. | Click | When clicking on 'Contact' users are directed to the corresponding contact page, where they will be presented with a form to fill with their name, email, and message.|

## Footer

|     Feature       |        Expectation          |        Action        |       Outcome      |
| ----------------- | --------------------------- | -------------------- | ------------------ |
| Social media icons | When one of the social media icons is clicked it leads users to the respective social media page in a new tab.| Click | When clicked it leads to the respective social media page in a new tab.|

## Products Page

|     Feature       |        Expectation          |        Action        |       Outcome      |
| ----------------- | --------------------------- | -------------------- | ------------------ |
|Product items on Product page page  | On the products page, users should see each product along with its corresponding image. Below the image, there is the name, price, category (link) and rating of the product. When users click on the product image, they should be directed to the 'Product Details' page. When clicking on the category link, users are directed to the products page displaying all products that belong to that category. | Click on product image and category link | On the products page, users see each product along with its corresponding image. Below the image, there is the product name, price, category and rating. By clicking on the product image, users are directed to the product detail page. By clicking on the category link, users are directed to the products page displaying all products that belong to that category. |
| Products Home button | In the upper left corner, users should be able to click on 'Product Home,' which should direct them to the main Products page displaying all products. This button is available also on “Product information” page and “My favorites page” | Click | In the upper left corner, users can click on 'Product Home,' which directs them to the main Products page displaying all products. The buttons works on all pages it is present.|
| Sort by dropdown menu | When clicking on the 'Sort by' drop-down menu, users should see options to sort products by price, rating, name and category. Clicking on each of these options should sort the products on the page accordingly. | Click | When clicking on the 'Sort by' drop-down menu, users see options to sort products by price, rating, name and category. Clicking on each of these options sort the products on the page accordingly.|
| Back to all Products button | By clicking the 'Back to all Products' button, users are directed to a products page where all available products of the website will be displayed. | Click | After clicking the 'Back to all Products' button users are directed to a products page where all available products of the website are displayed.|
| Number of found products field | The 'Number of all products' field displays the number of products that are listed on the page | Observe | The 'Number of all products' field displays the number of products that are listed on the page. |

## Product Details page

|     Feature       |        Expectation          |        Action        |       Outcome      |
| ----------------- | --------------------------- | -------------------- | ------------------ |
|Product Details page  | On the product details page, users should see the product image alongside with the product information like name, release date, short description, category link, rating, price, quantity selector, 'go back' and 'Add to Bag' buttons and down below, additonally, the website admin can see the links 'Edit' & 'Delete' next to the rating. | Observe | On the products page, users see the product image alongside with the product information like name, rating, short description, category link, rating, price, quantity selector, 'go back' and 'Add to Cart' buttons and down below additonally, the website admin sees the links 'Edit' & 'Delete' next to the rating.|
| Product Image | By clicking the product image, users will be directed to a seperate tab where the product image is displayed in full width. | Click | The product image is displayed in full width.  |
| Category link  | By clicking on the category link, users are directed to the products page displaying all products that belong to that category.| Click | Users are directed to the products page displaying all products that belong to that category.|
| Edit & Delete links ( admin only) | By clicking the 'Edit' button, admins are directed to the Product Management page. By clicking the 'Delete' button, admins willl delete the product | Click | By clicking the 'Edit' button, admins are directed to the Product Management page. By clicking the 'Delete' button, the product will be deleted. |
| Quantity increase/decrease buttons | The Quantity increase/decrease buttons should enable users to increase or decrease the product quantity. The default displayed quantity should be 1. | Click | Quantity increase/decrease buttons from the Product Information page enables the user to adjust the product quantity. The default displayed quantity is 1.|
| 'See more Products' button | Under the quantity increase/decrease buttons, the user should find the 'go back' button which should direct them to the 'All Products' page. | Click | Under the quantity increase/decrease buttons, the user finds the 'go back' button which directs them to the 'All Products' page. |
| 'Add to bag' button |  When clicking on the 'Add to bag' button, the product should be added to the bag. A success toast message for adding the product to the bag should be visible in the upper right corner along with the cart summary. | Click | When hovering over the 'Add to Cart' button, the buttons' color turns grey and the text white. By clicking on the 'Add to cart' button, the product is added to the bag. A success toast message for adding the product to the bag is visible in the upper right corner along with the bag summary.|
| 'Checkout' button (Bag summary toast)| After adding a product to the bag, a success toast message should pop up in the top right corner of the website, including the bag summary and the 'Checkout' button. After clicking on the button, the user should be directed to the Shopping bag page. | Click | After clicking on the button, the user is directed to the Shopping bag page. | 

# Shopping Cart & Checkout

|     Feature       |        Expectation          |        Action        |       Outcome      |
| ----------------- | --------------------------- | -------------------- | ------------------ |
| Quantity increase/decrease buttons | The Quantity increase/decrease buttons should enable users to increase or decrease the product quantity. | Click | Quantity increase/decrease buttons enable the user to adjust the product quantity. |
| Update & Remove buttons | After increasing or decreasing the quantity of a product, users can either click on the 'Update' button to update the quantity or the 'Remove' button to remove a product. After updating or deleting a product a success toast message should pop up in the op right corner, informing about the successful update or removal | Click | After clicking the 'Update' button, the quantity gets updated and a success toast message pops up in the top right corner, informing about the successful update. After clicking the 'Delete' button, the product gets removed from the shopping cart and a success toast message pops up in the top right corner, informing about the successful removal of the product. |
| 'go back' button | Under the Grand Total Amount a 'go back' button should be displayed. Clicking on this button should redirect the user to the 'All products' page. | Hover & Click | Under the Grand Total Amount a 'go back' button is displayed. Clicking on this button redirects the user to the 'All products' page. When hovering over the 'go back' button, the buttons' color turns grey and the text white. |
| 'Checkout' button | After clicking this button, the user should be directed to the 'Checkout' page. | Hover & Click | 'Checkout' button directs the user to the 'Checkout' page. When hovering over the 'Secure Checkout' button, the buttons' color turns grey and the text white. |
| Checkout form | After clicking the 'checkout' button, users should be directed to the 'Checkout' page and see the checkout form. For logged in users, the delivery information received from their profile should be prefilled. All mandatory fields of the form should be marked in the placeholders with a *. | Observe | Users can see the checkout form and for logged in users the delivery information is prefilled. |
| 'go back' ckeckout button | After clicking the 'go back' button users should be redirected to the 'Shopping Bag' page where they should bea able to adjust the contents of their shopping bag.| Click | Users are redirected to the 'Shopping Bag' page where they are able to adjust the contents of their shopping bag. |
| 'Complete Order' button | After filling in the delivery information and credit cart number, users should be able to checkout by clicking the 'Complete Order' button and should be directed to the 'Order Confirmation' page, where they should see their order information. A success toast message should pop up in the top right corner of the website, stating that the order has been processed successfully. | Click | Users are able to checkout after filling in the delivery information and credit cart number correctly by clicking the 'Complete Order' button and are directed to the 'Order Confirmation' page, where they can see their order information. A success toast message pops up in the top right corner of the website, stating that the order has been processed successfully. |
| 'Keep Shopping' button | On the 'Order Confirmation' page, users should see a 'Keep Shopping' button, that by clicking it should redirect them to the 'All products' page. | Hover & Click | Users can see a 'Find more Products' button on the 'Order Confirmation' page, that by clicking it redirects them to the 'All products' page. |

# My Profile Page(logged in users)

|     Feature       |        Expectation          |        Action        |       Outcome      |
| ----------------- | --------------------------- | -------------------- | ------------------ |
| 'Default delivery information' form | On the 'My Profile' page, users should find their saved delivery information displayed on the left side. They should be able to modify existing data and input new information as required. When hovering over the 'Update Information' button, the buttons' color should turn grey and the text white. After clicking the 'Update Information' button, the information should be updated and a success toast message in the top right corner should pop up, stating that the profile has been updated successfully. | Enter data, hover over and click 'Update Information' button | On the 'My Profile' page, users find their saved delivery information displayed on the left side. They can modify existing data and input new information as required. When hovering over the 'Update Information' button, the buttons' color turns grey and the text white. After clicking the 'Update Information' button, the information is updated and a success toast message in the top right corner pops up, stating that the profile has been updated successfully.|
| Order history – Order number link | On the right side of the "Default Delivery Information," users should find the order history, listing all their previous orders. Clicking on the order number should redirect the user to the corresponding Order Confirmation page, where they can view detailed order information. In the top right corner of the website there should be an info toast message, informing the user that this is a past confirmation for the order.| Click | On the right side of the 'Default Delivery Information', users can find the order history, listing all their previous orders. Clicking on the order number redirects the user to the corresponding Order Confirmation page, where they can view detailed order information. In the top right corner of the website there is an info toast message, informing the user that this is a past confirmation for the order. |
| 'go back' button | Under the order information on the Order Confirmation page a 'go back' button should be displayed. Clicking on this button should redirect the user back to their profile. | Hover & Click | Under the order information on the Order Confirmation page a 'go back' button is displayed. Clicking on this button redirects the user back to their profile. |


# Product Management (admin)

|     Feature       |        Expectation          |        Action        |       Outcome      |
| ----------------- | --------------------------- | -------------------- | ------------------ |
| 'Add a product' form  | The admin should be able to access the 'Add a Product' form from 'Product Management', which should be available in the dropdown menu displayed when clicking on the 'My Account' icon in the upper right corner. Admins should have the capability to add a product from the frontend by completing the form. Mandatory fields should include a placeholder marked by *. The submission of the new product should be restricted until valid data is provided in all the required fields. | Input data | The admin can access the 'Add Product' form from 'Product Management', which is available in the dropdown menu displayed when clicking on the 'My Account' icon in the upper right corner. Admins can add a product from the frontend by completing the form. Mandatory fields include a placeholder marked by *. The submission of the new product is restricted until valid data is provided in all the required fields. |
| Select image button (on 'Add a product form)  | When the admin clicks on the 'Select Image' button, they should be able to choose and upload an image. Upon selecting the image, a notification text should appear below the button stating 'Image will be set to:...' | Click | When the admin clicks on the 'Select Image' button, they are able to choose and upload an image. Upon selecting the image, a notification text appears below the button stating 'Image will be set to:...'.  |
| Cancel button | When clicking on 'Cancel' button, the admin should be redirected back to “Products” page. | Click | When clicking on “Cancel” button, the admin is redirected back to “Products” page. |
| 'Add Product' button  | When clicking on the 'Add Product' button, the admin should be directed to the Product Details page for the product they just added. A info toast message should pop up in the top right corner of the website, stating that the product has been added successfully. | Click |  When the admin clicks on 'Add Product', they are redirected to the Product Details page for the product they just added. A info toast message pops up in the top right corner of the website, stating that the product has been added successfully.|

# Register, Login, Logout and Reset Password

|     Feature       |        Expectation          |        Action        |       Outcome      |
| ----------------- | --------------------------- | -------------------- | ------------------ |
|Register dropdown menu option of 'My Account' | When clicked it should lead to the 'Register' page. | Click | When clicked it directs to 'Register' page. |
|Register form  | To register the user should have 'Email', 'Username' and 'Password' as mandatory fields. The conditions indicated must be met to create a password.  | Enter data | 'Email', 'Username' and 'Password' are mandatory fields. If the conditions are not met the account is not created|
|'Register' button  | After entering the data and clicking the 'Register' button, the user should be directed to the page 'Verify your email address' which states that a link has been sent to the email adress to finish the signup process. On the top right corner a info toast message shoud pop up, stating that a confirmation email has been sent to the email address.| Click | The user is directed to the page 'Verify your email address' which states that a link has been sent to the email adress to finish the signup process. On the top right corner a info toast message pops up, stating that a confirmation email has been sent to the email address. |
|'Confirm' button (Confirm E-mail Address) | After following the link in the email, the user should be directed to the 'Confirm E-mail Address' page and is asked to confirm their email address by clicking the green 'Confirm' button, which should direct the user to the Login page. | Click | The user is directed to the 'Confirm E-mail Address' page and is asked to confirm their email address by clicking the green 'Confirm' button, which directs the user to the Login page. 
| 'Login' button (Login) | After entering their valid credentials and clicking the Login button, the user should be logged in. A success toast message should pop up in the top right corner of the website, stating that the user successfully signed it. If the user enters wrong username or password, they should be prompted with the message 'The username and/or password you specified are not correct'. | Click | After entering their valid credentials and clicking the Login button, the user is logged in. A success toast message pops up in the top right corner of the website, stating that the user successfully signed it. If the user enters wrong username or password, they are prompted with the message 'The username and/or password you specified are not correct'. |
| 'Home' button | When clicking the 'Home' button, users should be redirected to the 'Home' page. When hovering over the 'Home' button, the buttons' color should turn grey and the text white. | Click | After clicking the 'Home' button, users should are redirected to the 'Home' page. When hovering over the 'Home' button, the buttons' color turns grey and the text white. |
| 'Logout' button (Logout) | To logout, the user should click on the dropdown menu option 'Logout' under 'My Account' and be redirected to the 'Log Out' page. When clicking on 'Log Out' they should be redirected to the 'Home' page. When hovering over the 'Logout' button, the buttons' color should turn grey and the text white.  | Click | When clicking on Logout, the user is redirected to the 'Log Out' page. When clicking on 'Log Out', they are redirected to the 'Home' page. When hovering over the 'Log Out' button, the buttons' color turns grey and the text white. |
|'Reset password' link ( Login) | Users should be able to reset their passwords by clicking on 'Forgot Password?' on the Login page. User should be directed to the 'Password Reset' page, where they can enter their email address and confirm it by pressing the 'Reset My Password' button. When hovering over the 'Forgot password?' link it should turn from light to dark blue. | Click | Users are directed to the 'Password Reset' page. |
| 'Password Reset' form and 'Reset My Password' button | After entering the email address and pressing the 'Reset my Password' button, an email should be send to the user, containing a link to follow to reset the password. | Enter email address and click | An email is sent to the email address provided, including a link to reset the password. |
| 'Password Reset' form and 'Reset My Password' button | After following the link in the email, users should be directed to the 'Password Reset' page, where they can enter their email and click the 'Reset My Password' button to reset their password. A link should be sent to their email to reset their password. | Enter email address and click | Users receive  an email to reset their password.|

## Code Validation

### HTML

| Page       | Result|
| ---------- | ----- |
| Home page  | Pass |
| Products - Sort by price   | Pass |
| Products - Sort by rating   | Pass |
| Products – Sorting by category | Pass |
| Products – Sorting by name | Pass |
| Products - All Products  | Pass |
| Search results | Pass |
| Product Details page  | Pass |
| Product Management – Add product  | Pass |
| Product Management – Edit product   | Pass|
| My profile page  | Pass |
| Order confirmation  | Pass |
| Shopping cart  | Pass |
| Checkout page  | Pass |
| Checkout Success page  | Pass |
| Login page  | Pass |
| Logout page  | Pass |
| Register page  | Pass |

### CSS
The Jigsaw CSS-Validator found no error for the CSS files present in the project.
![Jigzaw Results](/readMe/testing/css/base-css.png)

### Javascript
No errors were found for JavaScript code when passing through the official Jshin validator.

#### Checkout
![checkout jshint](/readMe/testing/js/checkout-js.png)

#### Products
![Products jshint](/readMe/testing/js/products-js.png)

#### Profile
![Profile jshint](/readMe/testing/js/profile-js.png)

#### Contact
![Contact jshint](/readMe/testing/js/profile-js.png)

#### Base-JS
![Base-js jshint](/readMe/testing/js/profile-js.png)


### Python
All other python files from all apps were successfully passed through the PEP8 validator.
- Warning were about adding whitespace around operators: (+,-,/,==...)

## Lighthouse
 - Main pages 

| **Login** | **Register** | **Home** | **Products** | **Contact** |
|-----------|--------------|-------------|----------|--------------|
| ![Login]() | ![Register]() | ![Home]() | ![Products]() | ![Contact]() |
|* No issues found |* No issues found |* No issues found |* No issues found |* No issues found |
---
- Add/Edit Product Management

| **Add_Product** | **Edit_Product** | **Product_Details** |
|-----------------|------------------|---------------------|
| ![Add_Product]() | ![Edit_Product]() | ![Product_Details]() |
|* No issues found  |* No issues found  |* No issues found  |

- Bag - Checkout - Checkout-Success - Profile Pages

| **Bag** | **Checkout** | **Checkout-Success** | **Profile** |
|---------|--------------|----------------------|-------------|
| ![Bag]() | ![Checkout]() | ![Checjout-Success]() | ![Profile]() |
|* No issues found  |* No issues found  |* No issues found  |* No issues found  |

 *Note:  majority of performance and accessibility, were affected my the extensions I have on the browsers.


## Browser Compatibility

* I tested the website on different browsers, including Google Chrome, Edge, and Mozilla. The site operates as intended, with all functionalities working on the tested browsers. The images are presented accurately.


| Browser       | Layout rendered as expected | Features and buttons work as expected | Images displayed as expected |
| ------------- | --------------------------- | -------------------- | ------------------ |
| Google Chrome | ✔                         | ✔                  | ✔                |
| Edge          | ✔                         | ✔                  | ✔                |
| Mozilla       | ✔                         | ✔s                 | ✔                |

## Issues 
Search-Bbar
- When submitting an empty search, the toast hides on the right conner for some reason, no message get's displayed.
[Search-bar](/readMe/errors/searc-bar-error.png)
- (Issue sorted, as needed to change elements as was using a different version, and was causing erros.)