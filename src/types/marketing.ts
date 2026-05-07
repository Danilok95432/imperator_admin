import { type ImageItemWithText } from './photos'
import { type SelOption } from './select'

export type PageInfoElement = {
	id: string
	page_name: string
	parent_name: string
	hidden: boolean
}

export type PageInfoResponse = {
	pages: PageInfoElement[]
	totalitems: string
}

export type PageInfoNewIdResponse = {
	id: string
}

export type PageInfoInfoResponse = {
	id: string
	page_name: string
	page_text: string
	parents: SelOption[]
	parents_id: string
	hidden: boolean
}

export type AdPromoInfoResponse = {
	block_name: string
	block_desc: string
	block_link: string
	img: ImageItemWithText[]
}

export type AdItem = {
	id: string
	adv_text: string
}

export type AdReklamaInfoResponse = {
	block_name: string
	advs: AdItem[]
}

export type AwardItem = {
	id: string
	title: string
	colors_list_id: string
	itemname: string
	itemdesc: string
	color: SelOption[]
}

export type AdRewardInfoResponse = {
	block_name: string
	colors_list: SelOption[]
	awards: AwardItem[]
}
