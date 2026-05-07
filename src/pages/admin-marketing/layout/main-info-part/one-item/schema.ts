import { type SelOption } from 'src/types/select'
import * as yup from 'yup'

export type OneInfoItemInputs = {
	id?: string
	page_name: string
	page_text?: string
	parents: SelOption[] | string
	parents_id?: string
	hidden?: boolean
}

export const oneInfoItemSchema = yup.object().shape({
	page_name: yup
		.string()
		.required('Наименование обязательно')
		.max(200, 'Наименование не может превышать 200 символов'),
	parents: yup
		.mixed<string | SelOption[]>()
		.test('is-event-selected', 'Выберите страницу', (value) => {
			if (typeof value === 'string') {
				return true
			} else if (Array.isArray(value) && value.length > 0) {
				const firstElement = value[0]
				if (
					typeof firstElement === 'object' &&
					firstElement !== null &&
					'label' in firstElement &&
					'value' in firstElement &&
					firstElement.label === 'Связанная страница не выбрана'
				) {
					return false
				} else {
					return true
				}
			} else {
				return false
			}
		})
		.required('Выберите страницу'),
})
