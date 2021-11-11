const { Schema, model, models } = require("mongoose");

const ApartmentSchema = new Schema({
  price: { type: Schema.Types.Number, required: true },
  title: { type: Schema.Types.String, required: true },
  img: { type: Schema.Types.String },
  location: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ["Point"], // 'location.type' must be 'Point'
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});

export default models.Apartment || model("Apartment", ApartmentSchema);
