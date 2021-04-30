import * as yup from "yup";

export default yup.object().shape({
  nickname: yup
    .string()
    .required("nick name is required")
    .min(2, "must be at least 2 characters long"),
  species: yup.string().required("please select one"),
  frequency: yup
    .string()
    .required("how many times should we water this plant?"),
  lengthOfTime: yup.string().required("and how often should we water?"),
  image_url: yup.string(),
});
