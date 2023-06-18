import {json, redirect, useRouteLoaderData} from "react-router-dom";
import EventItem from "../components/EventItem";

export const EventDetailPage = () => {
  //we can use this hook to access the data that was loaded by the loader function with specific id
  //we can reuse loader function from EventsPage.js
  const data = useRouteLoaderData('event-detail');

  return (
    <EventItem event={data.event}/>
  );
}

export const loader = async ({request, params}) => {
  const id = params.id;
  const response = await fetch('http://localhost:8080/events/' + id);

  if (!response.ok) {
    throw json({message: 'Could not fetch event!'}, {status: 500});
  } else {
    return response;
  }
}

export const action = async ({request, params}) => {
  const response = await fetch('http://localhost:8080/events/' + params.id, {
    method: request.method
  });

  if (!response.ok) {
    throw json({message: 'Could not delete event!'}, {status: 500});
  }
  return redirect('/events');
}