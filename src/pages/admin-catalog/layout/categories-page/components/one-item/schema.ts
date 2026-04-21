import { type ImageItemWithText } from 'src/types/photos'
import { type SelOption } from 'src/types/select'
import * as yup from 'yup'

export type OneCategoryInputs = {
	title: string
	use_main?: boolean
	main_button?: string
	short?: string
	full?: string
	img?: ImageItemWithText[]
	img_inside?: ImageItemWithText[]
	seo_title?: string
	seo_description?: string
	seo_keywords?: string
	seo_virtual?: string
	url?: string
	hidden?: boolean
	parent: SelOption[] | string
}

export const oneCategorySchema = yup.object().shape({
	title: yup
		.string()
		.required('Наименование обязательно')
		.max(200, 'Наименование не может превышать 200 символов'),
	parent: yup
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
})
