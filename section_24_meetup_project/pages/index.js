import MeetupList from "../components/meetups/MeetupList";
import {MongoClient} from "mongodb";
import {mongoCredentials} from "../data/mongo-utils";


const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://warsawtour.pl/wp-content/uploads/2018/07/Centrum-fot.-Zbigniew-Pan%C3%B3w-pzstudio.pl_.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!'
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://warsawtour.pl/wp-content/uploads/2018/07/Centrum-fot.-Zbigniew-Pan%C3%B3w-pzstudio.pl_.jpg',
    address: 'Some address 1, 12345 Some City',
    description: 'This is a second meetup!'
  },
  {
    id: 'm3',
    title: 'A Third Meetup',
    image: 'https://warsawtour.pl/wp-content/uploads/2018/07/Centrum-fot.-Zbigniew-Pan%C3%B3w-pzstudio.pl_.jpg',
    address: 'Some address 7, 12345 Some City',
    description: 'This is a third meetup!'
  },
]
const HomePage = (props) => {

  return (
    <MeetupList meetups={props.meetups}/>
  )
}

// export async function getServerSideProps(context) {
//   //page is re-generated for every incoming request
//
//   const req = context.req;
//   const res = context.res;
//
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

export async function getStaticProps() {
  //ex. fetch data from API.

  const client = await MongoClient.connect(mongoCredentials);
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  await client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.data.title,
        address: meetup.data.address,
        image: meetup.data.image,
        id: meetup._id.toString()
      }))
    },
    revalidate: 10
  };
}

export default HomePage;