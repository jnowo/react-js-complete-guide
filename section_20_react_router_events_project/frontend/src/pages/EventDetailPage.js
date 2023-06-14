import {useParams} from "react-router-dom";

export const EventDetailPage = () => {
  const params = useParams();

  return (
    <section>
      <h1>Event Detail Page</h1>
      <p>Event id: {params.id}</p>
    </section>
  );
}