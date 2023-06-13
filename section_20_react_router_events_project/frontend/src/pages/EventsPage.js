import {NavLink} from "react-router-dom";

const DUMMY_EVENTS = [
  {id: '1', name: 'Test event 1'},
  {id: '2', name: 'Test event 2'},
  {id: '3', name: 'Test event 3'},
  {id: '4', name: 'Test event 4'},
];

export const EventsPage = () => {
  return (
    <section>
      <h1>Events Page</h1>
      <ul>
        {DUMMY_EVENTS.map(event => <li key={event.id}><NavLink to={event.id}> {event.name}</NavLink></li>)}
      </ul>
    </section>
  );
}