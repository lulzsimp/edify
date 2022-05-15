const Joi = require("joi");
const cjoi = Joi.extend(require("joi-phone-number"));
const schema = cjoi.object({
  name: cjoi.string().required().min(3).max(30),
  mail: cjoi
    .string()
    .email({ tlds: { allow: false } })
    .required(),
  ced: cjoi.string().min(3).max(30).required(),
  school: cjoi.string().min(7).max(60).required(),
  smail: cjoi
    .string()
    .email({ tlds: { allow: false } })
    .required(),
  sphnum: cjoi.string().phoneNumber(),
});

export const validate = (vobj) => schema.validate(vobj);
