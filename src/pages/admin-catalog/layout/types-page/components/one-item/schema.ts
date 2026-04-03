import { type SelOption } from 'src/types/select'
import * as yup from 'yup'

export type OneTypeInputs = {
	title: string
	descriptionSeo?: string
	keywords?: string
	urlTitle?: string
	url?: string
	parent: SelOption[] | string
	titleSeo?: string
	hidden?: boolean
}

export const oneTypeSchema = yup.object().shape({
	title: yup
		.string()
		.required('Заголовок обязателен')
		.max(200, 'Заголовок не может превышать 200 символов'),
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
