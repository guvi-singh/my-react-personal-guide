import React from "react";

//point to be noted here
// if i am just passing props here in parenthesis like (props)
//props will be consider as array and we have to access values in it by using props.props
// but if i want to get props directly then i have to destruct like i have to recieve props variable as
//{props}

//without destructing
function SampleComponent(props) {
  return <div>SampleComponent {props.name}</div>;
}

export default SampleComponent;

//with destructing
// function SampleComponent({ name }) {
//   return <div>SampleComponent {name}</div>;
// }
