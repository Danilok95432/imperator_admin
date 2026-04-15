import { type RewardItemInputs, rewardItemsSchema } from './schema'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'

import { useIsSent } from 'src/hooks/sent-mark/sent-mark'

import { Container } from 'src/UI/Container/Container'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'
import { AdminRoute } from 'src/routes/admin-routes/consts'

import styles from './index.module.scss'
import adminStyles from 'src/routes/admin-layout/index.module.scss'
import classNames from 'classnames'
import {
	useGetAdRewardInfoQuery,
	useSaveAdRewardInfoMutation,
} from 'src/store/marketing/marketing.api'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { RewardSection } from './components/reward-section/reward-section'

export const RewardItem = () => {
	const { data } = useGetAdRewardInfoQuery(null)
	const [saveRewardInfo] = useSaveAdRewardInfoMutation()
	const [action, setAction] = useState<'apply' | 'save'>('apply')
	const navigate = useNavigate()

	const methods = useForm<RewardItemInputs>({
		mode: 'onBlur',
		resolver: yupResolver(rewardItemsSchema),
	})
	const { isSent, markAsSent } = useIsSent(methods.control)
	const onSubmit: SubmitHandler<RewardItemInputs> = async (data) => {
		console.log(1)
		const formData = new FormData()

		formData.append('block_name', data.block_name ?? '')
		if (data.awards) {
			data?.awards.forEach((award, index) => {
				formData.append(`awards[${index}][id]`, award.id ?? '')
				formData.append(`awards[${index}][title]`, award.title ?? '')
				formData.append(`awards[${index}][itemname]`, award.itemname ?? '')
				formData.append(`awards[${index}][itemdesc]`, award.itemdesc ?? '')
				formData.append(`awards[${index}][colors_list_id]`, String(award.color?.[0]?.value ?? ''))
			})
		}
		const res = await saveRewardInfo(formData)
		if (res) {
			markAsSent(true)
			if (action === 'save') {
				navigate(`/${AdminRoute.Marketing}/${AdminRoute.MarketingAd}`)
			}
		}
	}

	useEffect(() => {
		if (!data) return

		const colorsOptions = data.colors_list ?? []

		methods.reset({
			block_name: data.block_name ?? '',
			awards: (data.awards ?? []).map((award) => ({
				id: award.id,
				title: award.title,
				itemname: award.itemname,
				itemdesc: award.itemdesc,
				color: [
					colorsOptions.find((el) => String(el.value) === String(award.colors_list_id)),
				].filter(Boolean),
			})),
		})
	}, [data, methods])

	return (
		<>
			<Link
				to={`/${AdminRoute.Marketing}/${AdminRoute.MarketingAd}`}
				className={classNames(adminStyles.adminReturnLink, styles.linkBack)}
			>
				Возврат к списку рекламных блоков
			</Link>
			<h4 className={styles.titleNewsForm}>Блок «Награды»</h4>
			<Container className={styles.cont}>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<div className={styles.oneNewsContent}>
							<div className={styles.oneNewsContentLeft}>
								<ControlledInput
									name='block_name'
									label='Название блока рекламы'
									margin=' 0 0 36px 0'
								/>
								{data?.awards.map((el, idx) => {
									return (
										<RewardSection
											number={Number(idx)}
											key={idx}
											colorOptions={data?.colors_list}
										/>
									)
								})}
							</div>
						</div>
						<AdminControllers
							variant='4'
							outLink={`/${AdminRoute.Marketing}/${AdminRoute.MarketingAd}`}
							isSent={isSent}
							actionHandler={setAction}
						/>
					</form>
				</FormProvider>
			</Container>
			<Link
				to={`/${AdminRoute.Marketing}/${AdminRoute.MarketingAd}`}
				className={classNames(adminStyles.adminReturnLink, styles.linkBack)}
			>
				Возврат к списку рекламных блоков
			</Link>
		</>
	)
}
