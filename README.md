In this assignment let's build a **Routing Practice App** 

### Refer to image below:
image link : -- https://assets.ccbp.in/frontend/content/react-js/routing-practice-output.gif --
<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/routing-practice-output.gif" alt="routing-practice-desktop-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

- [Extra Small (Size < 576px), Small (Size >= 576px), Medium (Size >= 768px)](https://assets.ccbp.in/frontend/content/react-js/routing-practice-sm-output.png)
- [Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/routing-practice-lg-output.png)

### Project Set Up Instructions

- Download dependencies by running `npm install`
- Start up the app using `npm start`

### Project Completion Instructions

#### Add Functionality

The app must have the following functionalities

- When the **About** link in the header is clicked then the page should navigate to the `AboutRoute`
- When the **Contact** link in the header is clicked then the page should navigate to the `ContactRoute`
- When the **Home** link in the header is clicked then the page should navigate back to the `HomeRoute`
- When an undefined path is entered in the URL then the page should navigate to the `NotFoundRoute`
  
- Your task is to complete the implementation of
  - `src/components/App.js`
  - `src/components/App.css`
  - `src/components/Header/index.js`
  - `src/components/Header/index.css`
  - `src/components/Home/index.js`
  - `src/components/Home/index.css`
  - `src/components/About/index.js`
  - `src/components/About/index.css`
  - `src/components/Contact/index.js`
  - `src/components/Contact/index.css`
  - `src/components/NotFound/index.js`
  - `src/components/NotFound/index.css`

> #### Important Note
>
> - `HomeRoute` should consist of "/" in URL path
> - `AboutRoute` should consist of "/about" in URL path
> - `ContactRoute` should consist of "/contact" in URL path
>
> - No need to use the `BrowserRouter` in `App.js` as we have already included in `index.js` file

### Resources

#### Images

- [https://assets.ccbp.in/frontend/react-js/wave-logo-img.png](https://assets.ccbp.in/frontend/react-js/wave-logo-img.png)
- [https://assets.ccbp.in/frontend/react-js/home-blog-img.png](https://assets.ccbp.in/frontend/react-js/home-blog-img.png)
- [https://assets.ccbp.in/frontend/react-js/about-blog-img.png](https://assets.ccbp.in/frontend/react-js/about-blog-img.png)
- [https://assets.ccbp.in/frontend/react-js/contact-blog-img.png](https://assets.ccbp.in/frontend/react-js/contact-blog-img.png)
- [https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png](https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png)

#### Colors

<div style="background-color: #6d396b; width: 150px; padding: 10px; color: white">Hex: #6d396b</div>
<div style="background-color: #555555; width: 150px; padding: 10px; color: white">Hex: #555555</div>
<div style="background-color: #551e53; width: 150px; padding: 10px; color: white">Hex: #551e53</div>
<div style="background-color: #12022f; width: 150px; padding: 10px; color: white">Hex: #12022f</div>

#### Font-families

- Roboto

#### Routing concepts using in this application : -
#### Routing using React Router
Web Apps
Web Apps are of two types, based on how we get content:
•	Multi-page application (MPA)
•	Single-page application (SPA)
#### Multi-page application (MPA)
•	Every URL is associated with corresponding resources (HTML, CSS, JS).
•	The browser downloads these resources when you access them or navigate between URLs.
#### Single-page application (SPA)
•	All URLs are associated with a single HTML page.
•	On navigating we only get the additional content (Component - HTML, CSS, JS).
#### Advantages of using Single-page application (SPA)
•	Faster Page loading - since they load only necessary Component (HTML, CSS, JS) resources on subsequent requests.
•	React is mainly used to build Single-page applications.

#### React Router
In React, we build Single-page applications using React Router.
To implement routing, React Router provides various components:
•	BrowserRouter
•	Link
•	Route
•	Switch

#### to install react router using : #### npm install react-router-dom --save

#### BrowserRouter
To add routing wrap all the Components with BrowserRouter.
   #### <BrowserRouter>
      <Component 1>
      <Component 2>
      ... 
    </BrowserRouter>
       
#### Link
Link Component creates hyperlinks that allows to navigate around in application.
<Link to="Path"> Display Text</Link>

#### Route
The Route component renders specific UI component when path matches current URL.
<Route path="Path" component={Component} />
#### Exact
Renders the route if path matches exactly the current url
<Route exact path="Path1" component={Component1} />

#### Switch
The Switch component will only render the first route that matches the path. If no path matches, it renders the Not Found component.

<Switch>
  <Route path="Path1" component={Component1} />
  <Route path="Path2" component={Component2} />
 <Route component={NotFound} />
</Switch>

#### here is the image explaing use of Switch , exact , Route, BrowserRouter
![image](https://user-images.githubusercontent.com/46521639/117102779-a9c6a680-ad96-11eb-95dc-52dfd8a0e494.png)

#### image explaing using the concepy of Link 
![image](https://user-images.githubusercontent.com/46521639/117102928-ee524200-ad96-11eb-9b74-67ad12cbc323.png)

#### need to import switch, Route, BrowserRouter, Link 
import {BrowserRouter, Route, Switch ,Link} from 'react-router-dom'
