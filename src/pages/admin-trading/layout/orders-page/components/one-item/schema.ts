import { type SelOption } from 'src/types/select'
import { type GoodsCart } from 'src/types/trading'
import * as yup from 'yup'

export type OneOrderInputs = {
	deliver?: SelOption[]
	sdek: string
	status?: SelOption[]
	customer?: string
	phone?: string
	address?: string
	time?: string
	date?: string
	sum?: string
	priceDeliver?: string
	totalSum?: string
	goods?: GoodsCart[]
}

export const oneOrderSchema = yup.object().shape({
	sdek: yup
		.string()
		.required('Заголовок обязателен')
		.max(200, 'Заголовок не может превышать 200 символов'),
})
