import { type ImageItemWithText } from './photos'
import { type SelOption } from './select'

export type PageInfoElement = {
	id: string
	pageName: string
	type: string
	hidden: boolean
}

export type PageInfoResponse = {
	pages: PageInfoElement[]
}

export type PageInfoNewIdResponse = {
	id: string
}

export type PageInfoInfoResponse = {
	type: SelOption[]
	pageName: string
	desc: string
	hidden: boolean
}

export type AdPromoInfoResponse = {
	block_name: string
	block_desc: string
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
