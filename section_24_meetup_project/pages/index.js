import MeetupList from "../components/meetups/MeetupList";
import {useEffect, useState} from "react";


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
const HomePage = () => {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {

    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return (
    <MeetupList meetups={loadedMeetups}/>
  )
}

export default HomePage;