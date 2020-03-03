export const nameRules =  [
  v => !!v || "Name is required",
  v => (v && v.length <= 10) || "Name must be less than 10 characters"
];
export const emailRules = [
  v => !!v || "E-mail is required",
  v => /.+@.+\..+/.test(v) || "E-mail must be valid"
]
