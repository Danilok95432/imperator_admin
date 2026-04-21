import { type SelOption } from 'src/types/select'
import { type GoodsCart } from 'src/types/trading'

export type OneOrderInputs = {
	delivery_address?: string
	delivery_time?: string
	hidden?: boolean
	id?: string
	order_date?: string
	order_delivery?: SelOption[] | string
	order_delivery_id?: string
	order_items?: GoodsCart[]
	order_status?: SelOption[] | string
	order_status_id?: string
	price_delivery?: string
	price_items?: string
	price_total?: string
	sdek_point?: SelOption[] | string
	sdek_point_id?: string
	telphone?: string
}
