import * as yup from 'yup'

export const NewsYupSchema = yup.object({
    title: yup.string().required(),
    description: yup.string().required()
}).required()

