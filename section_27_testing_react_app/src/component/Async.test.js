import Async from "./Async";
import {render, screen} from "@testing-library/react";

describe('Async component', () => {

  test('renders posts if request succeeds', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{id: 'p1', title: 'First post'}]
    });
    render(<Async/>);

    // const listItemElements = screen.getByRole('listitem');
    const listItemElements = await screen.findAllByRole('listitem'); //return Promise, it waits for result
    expect(listItemElements).not.toHaveLength(0);
  });

});