import React from "react";

export const MyParagraph = props => {
  console.log('MyParagraph OUTPUT');
  return (
    <p>{props.children}</p>
  )
}