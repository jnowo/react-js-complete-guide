import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      img='https://warsawtour.pl/wp-content/uploads/2018/07/Centrum-fot.-Zbigniew-Pan%C3%B3w-pzstudio.pl_.jpg'
      title="The First Meetup"
      address="Some Street 5, Some City"
      description="This is a firsy meetup"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: true, //tells next.js weather paths contains all supported values or just some of theme
    paths: [
      {
        params: {
          meetupId: 'm1'
        }
      },
      {
        params: {
          meetupId: 'm2'
        }
      },
    ]
  }
}

export async function getStaticProps(context) {
  //fetch data for single meetup

  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        img: 'https://warsawtour.pl/wp-content/uploads/2018/07/Centrum-fot.-Zbigniew-Pan%C3%B3w-pzstudio.pl_.jpg',
        title: 'The First Meetup',
        address: 'Some Street 5, Some City',
        description: 'This is a first meetup',
      }
    }
  }
}

export default MeetupDetails;