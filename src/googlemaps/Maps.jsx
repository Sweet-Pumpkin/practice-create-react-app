// react
import React from "react";
// google maps
import { Wrapper, Status } from "@googlemaps/react-wrapper";
// components
import MyMapComponent from "./MyMapComponent";

const render = (status) => {
  if (status === Status.FAILURE) return (<div>ERROR</div>);
  return (<div>LOADING</div>);
};

export default function Maps() {
  return (
    <Wrapper apiKey={process.env.REACT_APP_MAPS_KEY} render={render}>
      <MyMapComponent />
    </Wrapper>
  )
}

