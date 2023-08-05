//this code runs only on server, not on client side!

// /api/new-meetup

export const handler = (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;

    const {title, image, address, description} = data;
  }
}