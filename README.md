# Brickstreet

## INTRODUCTION

The moment is HERE: Welcome all! At Brickstreet, Buyers, Sellers, and Spectators alike can enjoy a fully MERN Development 
experience with one of the World's most favorite hobby's: LEGOS! We have an amazing team of Web Developers that have created an ecstatic application, 
utilizing some of the most popular Web Development tools and packages in the industry today including: The MERN Stack (Mongo, Express, REACT, Node), Mongoose
GraphQL API, and the list continues)! At Brickstreet, the developers envisioned a website where LEGO beginners and enthusiast of all kinds
can share their passions, and at the same, enjoy a seamless bid and sell LEGO experience, all in one place. Connect with other LEGO
LOVERs & have fun at the same time: WELCOME TO BRICKSTREET!!!

## USER STORY

As a USER, I want to have be able to upload my LEGO sets for bid (as a Seller), and be able to bid on LEGO sets 
(as a Buyer), across different Category Themes.

As a USER, I want to be able to Create a Post to send to BUYERS and/or SELLERS using my UserID across the application.

As a USER, I want to be able to View Posts from other SELLERS using my UserID across the application.


## ACCEPTANCE CRITERIA

When a user visits the website

  They see the option to log in or sign up

  Include some information regarding meetups, etc. - fun things to fill out the rest of the page

When a user signs up

  Username and password only

  Select avatar from pre-set list

Then they are taken to the home page

When a user is logged in, they see these available options in the Nav
  Home 
  About
  Also contains FAQ
  Messages
  Create Post
  Account
  See all user’s posts (dashboard)
  Log Out
  My wishlist (post-MVP)
  
When a user logs in, they are taken to the HOME page (VIEW ALL POSTS) :) 
  See most recent posts from all users
  Buttons with popular categories will be available
  Not using search feature for MVP
  
When the Home page is selected
  All unsold posts are listed (indicated via flag on back end)
  Each post (clickable) consists of:
  Photo, 
  title, 
  price, 
  seller’s name (clickable)
  
When I click on a single post
  I am taken to page for the post
  I see the 
    Product ID
    photo, 
    name, 
    price, 
    Description,
    seller’s name  (clickable)
Created at, 
  message button (clickable)
  Unavailable/available badge
  categories
  
When i click on a seller’s name
  I am taken to seller’s profile
  I see the photo/avatar, username and all posts for the seller
  Each post consists of the following:
    Photo, 
    title, 
    price, 
    seller’s name (clickable)
When I click on the “message seller” button on a post
  If there are currently no chats existing between buyer and seller 
  New chat is created and empty single chat is rendered
  Top of messages container will have conditional text along the lines of “you have no messages with this user”
  If there are already existing chats between buyer and seller 
  Render the existing chat
  
When I click on “Create Post”
  I am taken to the create post page
  Is essentially a form
    Title
    Description
    Categories (can accept multiple)
    Attach image
    Starting bid
    Time until sale cutoff
    
When on the Messages page
  List of all chats
  Each chat in list will show username for other user in the chat and name (or something else) of post
  
When timer runs out
   If it has been bid on
    If there have been no bids
    
Back end flag changes to unavailable

## Screenshot

![image](https://user-images.githubusercontent.com/71394743/214976771-60d1a829-a7e2-4dde-b000-c737fb1d12ed.png)

