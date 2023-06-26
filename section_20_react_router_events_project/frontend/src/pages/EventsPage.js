import EventsList from '../components/EventsList';
import {Await, defer, json, useLoaderData} from "react-router-dom";
import {Suspense} from "react";

export const EventsPage = () => {
  const data = useLoaderData();

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }
  const events = data.events;
  return (
    // <>
    //   {<EventsList events={events}/>}
    // </>
    <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents}/>}
      </Await>
    </Suspense>
  );
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

export const loader = () => {
  return defer({
    events: loadEvents()
  });
}