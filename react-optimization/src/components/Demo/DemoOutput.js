import React from "react";
import {MyParagraph} from "./MyParagraph";

export const DemoOutput = props => {
  console.log('DEMO OUTPUT');
  return (
    <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>
  )
}