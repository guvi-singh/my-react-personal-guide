import React from "react";

function MapUssage(props) {
  //   const updatedArr = () => {
  //     return props.arr.map((item) => (item > 2 ? item : "nq"));
  //     // const updatedArr = props.map((item) => (item > 2 ? item : "nq"));
  //   };
  const getIndiviualItem = (item) => (item > 2 ? item : "nq");

  const updatedArr = props.arr.map(getIndiviualItem);

  return <div>MapUssage {updatedArr}</div>;
}

export default MapUssage;
