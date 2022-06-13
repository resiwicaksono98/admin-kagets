import * as yup from 'yup'

export const SchemaNews = () => yup.object({
        categoryId: yup.string().required('Category Harus Dipilih'),
        title: yup.string().required('Title Harus Diisi'),
        rate: yup.number('Harus Angka').required('Rating Wajib Diisi').max(5.0, 'Contoh : 4.2 (Max 5.0) ').test(
            'Wajib',
            'Wajib Angka desimal contoh 4.2 ',
            value => (value + "").match(/^\d(\.\d{1,2})?$/),
        ),
        description: yup.string().required('Description Harus Diisi')
    })
