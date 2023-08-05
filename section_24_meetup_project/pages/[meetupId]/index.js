import MeetupDetail from "../../components/meetups/MeetupDetail";
import {MongoClient, ObjectId} from "mongodb";
import {mongoCredentials} from "../../data/mongo-utils";

function MeetupDetails(props) {
  return (
    <MeetupDetail
      img={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(mongoCredentials);
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();

  await client.close();

  return {
    fallback: false, //tells next.js weather paths contains all supported values or just some of theme
    paths: meetups.map(meetup => ({
      params: {meetupId: meetup._id.toString()}
    })),
  }
}

export async function getStaticProps(context) {
  const meetupId = new ObjectId(context.params.meetupId);
  const client = await MongoClient.connect(mongoCredentials);
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const selectedMeetup = await meetupsCollection.findOne({_id: meetupId});

  await client.close();

  return {
    props: {
      meetupData: {
        ...selectedMeetup.data,
        id: selectedMeetup._id.toString(),
      }
    }
  }
}

export default MeetupDetails;