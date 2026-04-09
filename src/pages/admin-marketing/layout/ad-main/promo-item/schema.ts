import { type ImageItemWithText } from 'src/types/photos'
import { type SelOption } from 'src/types/select'
import * as yup from 'yup'

export type PromoItemInputs = {
	text: SelOption[] | string
	subText: string
	img?: ImageItemWithText[]
}

export const promoItemsSchema = yup.object().shape({
	subText: yup
		.string()
		.required('Надпись обязательна')
		.max(200, 'Надпись не может превышать 200 символов'),
	text: yup
		.mixed<string | SelOption[]>()
		.test('is-event-selected', 'Выберите надпись', (value) => {
			if (typeof value === 'string') {
				return true
			} else if (Array.isArray(value) && value.length > 0) {
				const firstElement = value[0]
				if (
					typeof firstElement === 'object' &&
					firstElement !== null &&
					'label' in firstElement &&
					'value' in firstElement &&
					firstElement.label === 'Надпись не выбрана'
				) {
					return false
				} else {
					return true
				}
			} else {
				return false
			}
		})
		.required('Выберите надпись'),
})
