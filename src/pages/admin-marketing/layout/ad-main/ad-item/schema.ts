import * as yup from 'yup'

export type AdItemInputs = {
	title: string
	textSection1?: string
	textSection2?: string
	textSection3?: string
}

export const adItemsSchema = yup.object().shape({
	title: yup
		.string()
		.required('Название обязательно')
		.max(200, 'Название не может превышать 200 символов'),
})
