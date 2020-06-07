import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      complement: Yup.string(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      postal_code: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Bad request' });
    }

    const {
      id,
      name,
      street,
      complement,
      state,
      city,
      postal_code,
    } = await Recipient.create(req.body);

    return res.json({
      id,
      name,
      street,
      complement,
      state,
      city,
      postal_code,
    });
  }
}

export default new RecipientController();
