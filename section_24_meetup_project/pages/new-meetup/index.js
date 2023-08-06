import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import {useRouter} from "next/navigation";
import Head from "next/head";

function NewMeetupPage() {

  const router = useRouter();

  const addMeetupHandler = async (enteredMeetupData) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    console.log(data);

    router.push('/');
  }

  return (
    <>
      <Head>
        <title>Add a New Meetup</title>
        <meta name='Add your own meetup!' content='Browse a huge list of highly active React meetups!'/>
        /*for SEO*/
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </>
  );
}

export default NewMeetupPage;