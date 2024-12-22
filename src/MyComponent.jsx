import React from "react";

export default function MyComponent(props){
    console.log(props);
  return (
    <div>
        <h1>Welcome</h1>
        <h2>Your Age is {props.age}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime numquam delectus labore enim praesentium neque architecto doloremque odit, at soluta nobis nesciunt, beatae ratione quod necessitatibus! Dolorum fugiat repudiandae cupiditate.</p>
      <MyComponent/>
    </div>
  );
}
