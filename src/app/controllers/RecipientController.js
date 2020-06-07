import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const {
      id,
      name,
      street,
      complement,
      state,
      city,
      postalCode,
    } = await Recipient.create(req.body);

    return res.json({
      id,
      name,
      street,
      complement,
      state,
      city,
      postalCode,
    });
  }
}

export default new RecipientController();
