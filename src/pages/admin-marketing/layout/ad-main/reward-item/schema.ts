import { type SelOption } from 'src/types/select'
import * as yup from 'yup'

export type RewardItemInputs = {
	title: string
	rewardName1?: string
	colorReward1?: SelOption[]
	mainText1?: string
	concurs_name1?: string
	rewardName2?: string
	colorReward2?: SelOption[]
	mainText2?: string
	concurs_name2?: string
	rewardName3?: string
	colorReward3?: SelOption[]
	mainText3?: string
	concurs_name3?: string
}

export const rewardItemsSchema = yup.object().shape({
	title: yup
		.string()
		.required('Название обязательно')
		.max(200, 'Название не может превышать 200 символов'),
})
