import * as Yup from "yup";

export const TASK_BODY_VALIDATION_SCHEMA = Yup.object({
  body: Yup.string()
    .trim()
    .min(2, "Body must be at least 2 characters long")
    .required("Body is required"),
});
