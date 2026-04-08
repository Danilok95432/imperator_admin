import { type ShortDocument } from 'src/types/document'
import { type ImageItemWithText } from 'src/types/photos'
import { type SelOption, type MultiSelOption } from 'src/types/select'
import * as yup from 'yup'

export type OneGoodsInputs = {
	section: SelOption[] | string
	title: string
	types?: MultiSelOption[] | string
	maker: SelOption[] | string
	weight: string
	width: string
	height: string
	length: string
	content?: string
	pack?: string
	availability?: string
	price?: string
	priceSale?: string
	short?: string
	full?: string
	mainphoto?: ImageItemWithText[]
	documents?: ShortDocument[]
	hidden?: boolean
	hit?: boolean
	slider?: boolean
	closed?: boolean
}

export const oneGoodsSchema = yup.object().shape({
	title: yup
		.string()
		.required('Наименование обязательно')
		.max(200, 'Наименование не может превышать 200 символов'),
	weight: yup
		.string()
		.required('Наименование обязательно')
		.max(200, 'Наименование не может превышать 200 символов'),
	height: yup
		.string()
		.required('Наименование обязательно')
		.max(200, 'Наименование не может превышать 200 символов'),
	width: yup
		.string()
		.required('Наименование обязательно')
		.max(200, 'Наименование не может превышать 200 символов'),
	length: yup
		.string()
		.required('Наименование обязательно')
		.max(200, 'Наименование не может превышать 200 символов'),
	section: yup
		.mixed<string | SelOption[]>()
		.test('is-event-selected', 'Выберите раздел', (value) => {
			if (typeof value === 'string') {
				return true
			} else if (Array.isArray(value) && value.length > 0) {
				const firstElement = value[0]
				if (
					typeof firstElement === 'object' &&
					firstElement !== null &&
					'label' in firstElement &&
					'value' in firstElement &&
					firstElement.label === 'Раздел не выбран'
				) {
					return false
				} else {
					return true
				}
			} else {
				return false
			}
		})
		.required('Выберите раздел'),
	maker: yup
		.mixed<string | SelOption[]>()
		.test('is-event-selected', 'Выберите производителя', (value) => {
			if (typeof value === 'string') {
				return true
			} else if (Array.isArray(value) && value.length > 0) {
				const firstElement = value[0]
				if (
					typeof firstElement === 'object' &&
					firstElement !== null &&
					'label' in firstElement &&
					'value' in firstElement &&
					firstElement.label === 'Производитель не выбран'
				) {
					return false
				} else {
					return true
				}
			} else {
				return false
			}
		})
		.required('Выберите производителя'),
})
