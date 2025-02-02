# ecommerce-website

1. Presentation tier is built using: Angular, HTML, CSS
2. Application tier is built using: API Gateway, Lambda
3. Data tier is built using: DynamoDB

Below is the general layout / features of the website:

The menu bar at the top has the ecommerce website icon on the left hand corner and a Cart icon on the right corner.
Product categories are listed on the side menu and products are listed in the main window.
The products displayed will vary based on the product category chosen.
You can click on the Add to cart button and see the cart icon getting updated - number of items and total price will be shown.
You can click on a product url or name to get more details about the product and you can Add to cart from this screen as well.
Next, when you click on the Cart icon, you will be taken to teh Cart details screen where you can see the list of items added to cart, value of each item and the totals.
From here, if you click on the "Checkout" button, you will be taken to a form, where you will have to provide name, address and credit card details.
Once valid input is provided in teh form, you will be able to click the "Purchase" button. When this is done, an entry is made in the DynamoDB table with all details captured above (name, address, cart items, total value etc) and a reference number (called Order Tracking number) is returned to the user.

Below enhancements will be done in the next phase:

Authentication implementation
Improving the Cart features - clear cart, add / remove item from cart etc
Credit Card Processing and Validation
Add more products, produc categories and Improve the Styling of the website.

How to run this project:

1. Once you have copied the source code on to your local machine, run the below command in a VS Code Editor Terminal. Change the path as needed:
D:\Vinod\Angular2024\retail-website-app\angular-retail-website-app> ng serve -o

2. You can use tools like AWS App Runner, point to your code repository and the tool will create the required setup. 
A public url will be provided which can then be used to access the website.

