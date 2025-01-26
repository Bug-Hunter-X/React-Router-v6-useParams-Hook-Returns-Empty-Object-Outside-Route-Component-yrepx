To fix this, ensure that `useParams` is used only within components rendered directly by a route.  You can pass the params from the route component down as props to nested components.

```javascript
// Correct Usage
// UserProfile.js
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams();
  return (
    <div>
      <h1>User Profile</h1>
      <p>ID: {id}</p>
      <NestedComponent id={id}/>
    </div>
  );
}

function NestedComponent({id}){
    console.log(id); //Correctly logs the ID
    return(
        <div>NestedComponent</div>
    );
}
export default UserProfile;
```
By passing the parameter value as a prop to `NestedComponent`, it accesses the parameter value correctly.  This is the most common and recommended solution to avoid this issue.