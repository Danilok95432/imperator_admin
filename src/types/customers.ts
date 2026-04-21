import { type SelOption } from './select'

export type CustomerElement = {
	city_name: string
	email: string
	hidden: boolean
	id: string
	regdate: string
	summa_orders: string
	summa_return: string
	summa_sale: string
	telphone: string
	user_comment: string
	user_title: string
}

export type CustomerResponse = {
	siteusers: CustomerElement[]
	totalitems: string
}

export type CustomerNewIdResponse = {
	id: string
}

export type UserCartOrders = {
	id: string
	order_date: string
	order_status_name: string
	sostav: string
	count_items: string
	order_summ: string
}

export type CustomerInfoResponse = {
	fio: string
	email: string
	telphone: string
	type: SelOption[]
	user_comment: string
	review_text: string
	review_on_main: boolean
	hidden: boolean
	vip: boolean
	orders: UserCartOrders[]
}
