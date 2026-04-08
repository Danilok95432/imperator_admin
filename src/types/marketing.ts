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
