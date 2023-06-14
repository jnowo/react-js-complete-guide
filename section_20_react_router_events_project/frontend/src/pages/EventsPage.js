import EventsList from '../components/EventsList';
import {useLoaderData} from "react-router-dom";

export const EventsPage = () => {
  const data = useLoaderData();

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }
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
    // return {isError: true, message: 'Something went wrong!'};
    throw new Error('Something went wrong!'); //react-router-dom will catch this error and display the closest errorElment (will bubble up)
  } else {
    return response;
  }
}