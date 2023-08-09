import {render, screen} from "@testing-library/react";
import {Greeting} from "./Greeting";
import userEvent from "@testing-library/user-event";
import {act} from "react-dom/test-utils";

describe('Greeting component tests', () => {
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

  test('renders good to see you if the button was NOT clicked', () => {
    render(<Greeting/>);

    const outputElement = screen.getByText('good to see you', {exact: false});
    expect(outputElement).toBeInTheDocument();
  });

  test('render "Changed!" if the button was clicked', () => {
    render(<Greeting/>);

    //Act
    const buttonElement = screen.getByRole('button');
    act(() => {
      userEvent.click(buttonElement)
    });

    //Assert
    const outputElement = screen.getByText('Changed!', {exact: false});
    expect(outputElement).toBeInTheDocument();
  });

  test('greeting component does not render "Good to see you!" when button was clicked', () => {
    render(<Greeting/>);

    //Act
    const buttonElement = screen.getByRole('button');
    act(() => {
      userEvent.click(buttonElement)
    });

    //Assert
    const outputElement = screen.queryByText('good to see you!', {exact: false});
    expect(outputElement).toBeNull();
  });
});

