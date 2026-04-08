import { type SelOption } from 'src/types/select'
import * as yup from 'yup'

export type OneCustomerInputs = {
	fio: string
	email?: string
	phone?: string
	about?: string
	review?: string
	type: SelOption[] | string
	hidden?: boolean
	vip?: boolean
	reviewToggle?: boolean
}

export const oneCustomerSchema = yup.object().shape({
	fio: yup.string().required('ФИО обязателено').max(200, 'ФИО не может превышать 200 символов'),
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
