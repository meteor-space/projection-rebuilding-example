// National Identification Number
// https://en.wikipedia.org/wiki/National_identification_number

const NIN = Space.domain.ValueObject.extend('NIN', {
  fields() {
    return {
      nin: String,
      countryCode: String
    };
  }
});

export default NIN;
