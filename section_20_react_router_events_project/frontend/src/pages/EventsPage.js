import EventsList from '../components/EventsList';
import {useLoaderData} from "react-router-dom";

export const EventsPage = () => {
  const data = useLoaderData();
  const events = data.events;
  return (
    <>
      {<EventsList events={events}/>}
    </>
  );
}

export const loader = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
  } else {
    return response;
  }
}