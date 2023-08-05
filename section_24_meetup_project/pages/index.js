import MeetupList from "../components/meetups/MeetupList";


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

export async function getServerSideProps(context) {
  //page is re-generated for every incoming request

  const req = context.req;
  const res = context.res;

  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  }
}

// export function getStaticProps() {
//   //ex. fetch data from API.
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     },
//     revalidate: 10
//   };
// }

export default HomePage;