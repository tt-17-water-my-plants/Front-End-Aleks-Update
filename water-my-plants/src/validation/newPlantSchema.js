import * as yup from "yup";
 
export default yup.object().shape({
 nickName: yup
   .string()
   .required("nick name is required")
   .min(2, "must be at least 2 characters long"),
 species: yup
   .string()
   .required("please select one"),
 water: yup
   .string()
   .required("must fill out watering instructions")
   .min(5, "minimum of 5 characters"),
});
