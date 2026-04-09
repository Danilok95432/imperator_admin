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
	text: SelOption[]
	subText: string
	img: ImageItemWithText[]
}

export type AdReklamaInfoResponse = {
	title: string
	textSection1: string
	textSection2: string
	textSection3: string
}

export type AdRewardInfoResponse = {
	title: string
	rewardName1: string
	colorReward1: SelOption[]
	mainText1: string
	concurs_name1: string
	rewardName2: string
	colorReward2: SelOption[]
	mainText2: string
	concurs_name2: string
	rewardName3: string
	colorReward3: SelOption[]
	mainText3: string
	concurs_name3: string
}
