import {json, useLoaderData, useParams} from "react-router-dom";
import EventItem from "../components/EventItem";

export const EventDetailPage = () => {
  const data = useLoaderData();

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