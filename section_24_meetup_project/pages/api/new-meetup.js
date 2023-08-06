//this code runs only on server, not on client side!

// /api/new-meetup

import {MongoClient} from "mongodb";
import {mongoCredentials} from "../../data/mongo-utils";

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(mongoCredentials);
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne({data});

    console.log(result);

    await client.close();

    res.status(201).json({message: 'Meetup inserted!'});

  }
}

export default handler;