import { type ShortDocument } from './document'
import { type ImageItemWithText } from './photos'
import { type MultiSelOption, type SelOption } from './select'

export type TypesElement = {
	id: string
	category: string
	title: string
	createdate: string
	hidden: boolean
}

export type TypeResponse = {
	types: TypesElement[]
}

export type TypeNewIdResponse = {
	id: string
}

export type TypeInfoResponse = {
	title: string
	seo_title: string
	seo_description: string
	seo_keywords: string
	seo_virtual: string
	url: string
	hidden: boolean
}

export type MakersElement = {
	id: string
	title: string
	country: string
	brand_link: string
	hidden: boolean
}

export type MakerResponse = {
	brands: MakersElement[]
}

export type MakerNewIdResponse = {
	id: string
}

export type MakerInfoResponse = {
	title: string
	country: string
	brand_link: string
	brand_text: string
	mainphoto: ImageItemWithText[]
	seo_title: string
	seo_description: string
	seo_keywords: string
	seo_virtual: string
	url: string
	hidden: boolean
}

export type SubCategoryItem = { title: string; hidden: boolean; id: string }

export type CategoriesElement = {
	id: string
	title: string
	subcats: SubCategoryItem[]
	use_main: boolean
	main_button: string
	hidden: boolean
}

export type CategoryResponse = {
	contents: CategoriesElement[]
}

export type CategoryNewIdResponse = {
	id: string
}

export type CategoryInfoResponse = {
	title: string
	use_main: boolean
	main_button: string
	short: string
	full: string
	img: ImageItemWithText[]
	seo_title: string
	seo_description: string
	seo_keywords: string
	seo_virtual: string
	url: string
	hidden: boolean
	parent: SelOption[]
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
	hidden: boolean
	hit: boolean
	closed: boolean
}
