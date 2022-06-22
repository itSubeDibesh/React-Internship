# All Concept merged using async await

[👈 Go Back](./../Readme.md)

**Note📓:** **_This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)._**

This Project is a demo project for the [Day-06-Self-Practice](./README.md) a part of [React Internship](../../Readme.md). This Project reveals a uncase of components, hooks (useState, useEffects, useNavigate, createContext, useContext), props. It also reveals an extension of [📂 Day-06-Self-Practice](../Day-06-Self-Practice/README.md) but using `async, await` instead of `promise`. Moreover a concept of caching is introduced, if data is not available in context then only fetching it from`mocked api`.

## Table of Content

- [All Concept merged using async await](#all-concept-merged-using-async-await)
  - [Table of Content](#table-of-content)
  - [Screenshots](#screenshots)
    - [Homepage](#homepage)
    - [Confirmation Page](#confirmation-page)
  - [Explanation](#explanation)

## Screenshots

Screenshots of application are shown below.

### Homepage

Loading Form.

!["Loading"](./docs/Loader-Basic-Info.jpeg)

After Loading

!["After Loading"](./docs/Basic-Info-Page.jpeg)

Details Not fount on Submit

!["Submit Empty"](./docs/Basic-Info-Page-Empty-Submit.jpeg)

Added Success
!["Added Success"](./docs/Basic-Info-Page-User-Added.jpeg)

Details Not fount on Delete

!["Delete Empty"](./docs/Basic-Info-Page-Delete-Details-Not-Found.jpeg)

Delete Success
!["Delete Success"](./docs/Basic-Info-Page-Delete-Success.jpeg)

### Confirmation Page

!["Confirmation Page"](./docs/Confirm-Page.jpeg)

## Explanation

When application lodes a form is shown and when details is filled and submitted it redirects to another page with the given information. when reset button in confirmation page is clicked it redirects to homepage resetting the details passed.  
