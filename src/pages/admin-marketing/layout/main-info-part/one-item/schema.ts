import { type SelOption } from 'src/types/select'
import * as yup from 'yup'

export type OneInfoItemInputs = {
	type: SelOption[] | string
	pageName: string
	desc?: string
	hidden?: boolean
}

export const oneInfoItemSchema = yup.object().shape({
	pageName: yup
		.string()
		.required('Наименование обязательно')
		.max(200, 'Наименование не может превышать 200 символов'),
	type: yup
		.mixed<string | SelOption[]>()
		.test('is-event-selected', 'Выберите тип', (value) => {
			if (typeof value === 'string') {
				return true
			} else if (Array.isArray(value) && value.length > 0) {
				const firstElement = value[0]
				if (
					typeof firstElement === 'object' &&
					firstElement !== null &&
					'label' in firstElement &&
					'value' in firstElement &&
					firstElement.label === 'Тип не выбран'
				) {
					return false
				} else {
					return true
				}
			} else {
				return false
			}
		})
		.required('Выберите тип'),
})
