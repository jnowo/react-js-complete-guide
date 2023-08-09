import {render, screen} from "@testing-library/react";
import {Greeting} from "./Greeting";

test('renders Hello World as a text', () => {
  //Arrange
  render(<Greeting/>);

  //Act
  // ...nothing

  //Assert
  //Access to virtual DOM
  const helloWorldElement = screen.getByText('Hello world!', {exact: true});
  expect(helloWorldElement).toBeInTheDocument();
});