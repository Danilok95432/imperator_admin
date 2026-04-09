import { type ImageItemWithText } from './photos'
import { type SelOption } from './select'

export type OrdersElement = {
	id: string
	status: string
	source: string
	customer: string
	comment: string
	sum: string
	priceDeliver: string
	totalSum: string
	phone: string
	date: string
	amount: string
}

export type OrderResponse = {
	orders: OrdersElement[]
}

export type OrderNewIdResponse = {
	id: string
}

export type GoodsCart = {
	id: string
	category: string
	maker: string
	name: string
	price: string
	amount: string
	sum: string
}

export type OrderInfoResponse = {
	deliver: SelOption[]
	sdek: string
	status: SelOption[]
	customer: string
	phone: string
	address: string
	time: string
	date: string
	sum: string
	priceDeliver: string
	totalSum: string
	goods: GoodsCart[]
}

export type SalesElement = {
	id: string
	status: string
	customer: string
	order: string
	deliver: string
	sum: string
	phone: string
	dateOrder: string
	dateSales: string
	amount: string
}

export type SalesResponse = {
	sales: SalesElement[]
}

export type SaleNewIdResponse = {
	id: string
}

export type SaleInfoResponse = {
	title: string
	country: string
	urlMaker: string
	description: string
	mainphoto: ImageItemWithText[]
	seo_title: string
	seo_description: string
	seo_keywords: string
	seo_virtual: string
	url: string
	hidden: boolean
}

export type RefundsElement = {
	id: string
	status: string
	customer: string
	sumSale: string
	sumRefund: string
	sumPause: string
	phone: string
	dateOrder: string
	dateRefund: string
}

export type RefundResponse = {
	refunds: RefundsElement[]
}

export type RefundNewIdResponse = {
	id: string
}

export type RefundInfoResponse = {
	title: string
	short: string
	full: string
	mainphoto: ImageItemWithText[]
	photo: ImageItemWithText[]
	titleSeo: string
	descriptionSeo: string
	keywords: string
	urlTitle: string
	url: string
	hidden: boolean
}
