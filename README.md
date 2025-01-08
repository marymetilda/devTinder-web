# DevTinder

# Component Design

Body
NavBar
Route = / => Feed
Route = /login => Login
Route = /connections => Connections
Route = /profile => Profile

1. Create a Vite + React application
2. Remove unnecessary code
3. Install tailwind css
4. Install Daisy UI
5. Create NavBar component
6. Add NavBar component to App.jsx
7. Install react router dom
8. Create BrowserRouter > Routes > Route = / Body > RouteChildren
9. Create an outlet in Body component
10. Create a footer
11. Create Login
12. Install axios
13. CORS - install cors in backend => add middleware with configurations: origin and credentials: true
14. When ever making API calls pass axios = {withCredentials: true}
15. Install react-redux + @reduxjs/toolkit (Redux Toolkit)
16. ConfigureStore => Provider => createSlice => add reducer to store
17. Add redux devtools in chrome
18. Update the navbar as soon as user login
19. Refactor code with constants folder
20. User should not be able to access other routes without login
21. If token is not present, redirect user to login page.
22. profile
23. logout
24. Build UserCard component and call it inside feed
25. Edit profile feature
26. Show toast message on save of profile
27. New page to see all connections
28. New page to see all requests
