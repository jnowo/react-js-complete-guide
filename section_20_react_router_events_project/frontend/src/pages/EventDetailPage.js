import {Await, defer, json, redirect, useRouteLoaderData} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import {Suspense} from "react";

export const EventDetailPage = () => {
  //we can use this hook to access the data that was loaded by the loader function with specific id
  //we can reuse loader function from EventsPage.js
  const {event, events} = useRouteLoaderData('event-detail');

  return (
    <>
      <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent}/>}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents}/>}
        </Await>
      </Suspense>
    </>
  );
}

const loadEvent = async (id) => {
  const response = await fetch('http://localhost:8080/events/' + id);

  if (!response.ok) {
    throw json({message: 'Could not fetch event!'}, {status: 500});
  } else {
    const respData = await response.json();
    return respData.event;
  }
}

const loadEvents = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // return {isError: true, message: 'Something went wrong!'};
    // throw new Error('Something went wrong!'); //react-router-dom will catch this error and display the closest errorElment (will bubble up)
    // throw new Response(JSON.stringify({message: 'Could not fetch events!'}), {status: 500});
    return json({message: 'Could not fetch events!'}, {status: 500});
  } else {
    const respData = await response.json();
    return respData.events;
  }
}

export const loader = async ({request, params}) => {
  const id = params.id;
  return defer({
    event: await loadEvent(id),
    events: loadEvents()
  });
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