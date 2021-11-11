// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//import dbConnect from "../../../utils/dbConnect";
//import apartment from "../../../models/Apartment";
//dbConnect();

export default async function handler(req, res) {
  let { bbox } = req.query;
  bbox = bbox.split(",");
  bbox = [
    [bbox[0], bbox[1]],
    [bbox[2], bbox[3]],
  ];
  const apartments = await apartment.find({
    location: {
      $geoWithin: {
        $box: bbox,
      },
    },
  });
  console.log(apartments);
  res.status(200).json(apartments);
}
