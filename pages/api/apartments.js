// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../../utils/dbConnect";
import apartment from "../../../models/Apartment";
dbConnect();

export default async function handler(req, res) {
  const apartments = await apartment.find();
  res.status(200).json(apartments);
}
