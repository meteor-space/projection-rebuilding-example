import NIN from './nin';

const Contact = Space.domain.ValueObject.extend('Contact', {
  fields() {
    return {
      name: String,
      email: EmailAddress,
      nationalIdentificationNumber: NIN
    };
  }
});

export default Contact;
