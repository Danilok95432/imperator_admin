import { type SelOption } from './select'

export type CustomerElement = {
	id: string
	customer: string
	about: string
	sumOrder: string
	sumSale: string
	sumRefund: string
	phone: string
	date: string
	location: string
}

export type CustomerResponse = {
	customers: CustomerElement[]
}

export type CustomerNewIdResponse = {
	id: string
}

export type UserCartOrders = {
	id: string
	date: string
	status: string
	sostav: string
	amount: string
	sum: string
}

export type CustomerInfoResponse = {
	fio: string
	email: string
	phone: string
	type: SelOption[]
	about: string
	review: string
	reviewToggle: boolean
	hidden: boolean
	vip: boolean
	orders: UserCartOrders[]
}
