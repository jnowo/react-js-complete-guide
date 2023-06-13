import EventsList from '../components/EventsList';
import {useLoaderData} from "react-router-dom";

export const EventsPage = () => {
  const events = useLoaderData();
  return (
    <>
      {<EventsList events={events}/>}
    </>
  );
}