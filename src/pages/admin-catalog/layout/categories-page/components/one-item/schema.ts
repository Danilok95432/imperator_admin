import { type ImageItemWithText } from 'src/types/photos'
import * as yup from 'yup'

export type OneCategoryInputs = {
	title: string
	short?: string
	full?: string
	mainphoto?: ImageItemWithText[]
	photo?: ImageItemWithText[]
	titleSeo?: string
	descriptionSeo?: string
	keywords?: string
	urlTitle?: string
	url?: string
	hidden?: boolean
}

export const oneCategorySchema = yup.object().shape({
	title: yup
		.string()
		.required('Наименование обязательно')
		.max(200, 'Наименование не может превышать 200 символов'),
})
