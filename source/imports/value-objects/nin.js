const NIN = Space.domain.ValueObject.extend('NIN', {
  fields() {
    return {
      nin: String,
      countryCode: String
    };
  }
});

export default NIN;
