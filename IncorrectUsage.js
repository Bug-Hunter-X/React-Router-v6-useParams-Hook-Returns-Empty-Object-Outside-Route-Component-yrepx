In React Router Dom v6, if you are using the `useParams` hook inside a component that is not directly a child of a route, it will return an empty object. This is because `useParams` only works within route components.  For example:

```javascript
// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import UserProfile from './UserProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/user/:id" element={<UserProfile/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

// UserProfile.js
import { useParams } from 'react-router-dom';

function UserProfile() {
  const params = useParams();
  console.log(params); // {id: 'someId'}
  return (
    <div>User Profile: {params.id}</div>
  );
}
export default UserProfile;

//Incorrect usage, returns empty object
// NestedComponent.js
import { useParams } from 'react-router-dom';

function NestedComponent(){
    const params = useParams();
    console.log(params); // {} 
    return (
        <div>NestedComponent</div>
    );
}
export default NestedComponent;
```

This is because NestedComponent is not a child of a route component, so `useParams` does not have access to the route parameters.