import { type ShortDocument } from './document'
import { type ImageItemWithText } from './photos'
import { type MultiSelOption, type SelOption } from './select'

export type TypesElement = {
	id: string
	category: string
	type: string
	date: string
	active: boolean
}

export type TypeResponse = {
	types: TypesElement[]
}

export type TypeNewIdResponse = {
	id: string
}

export type TypeInfoResponse = {
	title: string
	description: string
	keywords: string
	urlTitle: string
	url: string
	parent: SelOption[]
	titleSeo: string
	hidden: boolean
}

export type MakersElement = {
	id: string
	title: string
	country: string
	urlMaker: string
	active: boolean
}

export type MakerResponse = {
	makers: MakersElement[]
}

export type MakerNewIdResponse = {
	id: string
}

export type MakerInfoResponse = {
	title: string
	country: string
	urlMaker: string
	description: string
	mainphoto: ImageItemWithText[]
	titleSeo: string
	descriptionSeo: string
	keywords: string
	urlTitle: string
	url: string
	hidden: boolean
}

export type SubCategoryItem = { title: string; active: boolean; id: string }

export type CategoriesElement = {
	id: string
	title: string
	subCategories: SubCategoryItem[]
	active: boolean
}

export type CategoryResponse = {
	categories: CategoriesElement[]
}

export type CategoryNewIdResponse = {
	id: string
}

export type CategoryInfoResponse = {
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

export type GoodsElement = {
	id: string
	title: string
	articul: string
	type: string
	maker: string
	category: string
	price: string
	priceSite: string
	hit: boolean
	hidden: boolean
}

export type GoodsResponse = {
	goods: GoodsElement[]
}

export type GoodsNewIdResponse = {
	id: string
}

export type GoodsInfoResponse = {
	section: SelOption[]
	title: string
	types: MultiSelOption[]
	maker: SelOption[]
	weight: string
	width: string
	height: string
	length: string
	content: string
	pack: string
	availability: string
	price: string
	priceSale: string
	short: string
	full: string
	mainphoto: ImageItemWithText[]
	documents: ShortDocument[]
}
