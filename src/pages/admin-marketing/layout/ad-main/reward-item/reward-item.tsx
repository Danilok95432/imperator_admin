import { type RewardItemInputs, rewardItemsSchema } from './schema'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'

import { useIsSent } from 'src/hooks/sent-mark/sent-mark'

import { Container } from 'src/UI/Container/Container'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'
import { AdminRoute } from 'src/routes/admin-routes/consts'

import styles from './index.module.scss'
import adminStyles from 'src/routes/admin-layout/index.module.scss'
import classNames from 'classnames'
import { useGetAdRewardInfoQuery } from 'src/store/marketing/marketing.api'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { RewardSection } from './components/reward-section/reward-section'

export const RewardItem = () => {
	const { data } = useGetAdRewardInfoQuery(null)
	// const [saveNewsInfo] = useSaveTypeInfoMutation()
	const [, setAction] = useState<'apply' | 'save'>('apply')

	const methods = useForm<RewardItemInputs>({
		mode: 'onBlur',
		resolver: yupResolver(rewardItemsSchema),
	})
	const { isSent } = useIsSent(methods.control)
	const onSubmit: SubmitHandler<RewardItemInputs> = async (data) => {
		console.log(data)
	}

	useEffect(() => {
		if (data) {
			methods.reset({ ...data })
		}
	}, [data])

	const sections = [1, 2, 3]

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
								<ControlledInput name='title' label='Название блока рекламы' margin=' 0 0 36px 0' />
								{sections.map((el, idx) => {
									return (
										<RewardSection
											number={String(el)}
											key={idx}
											colorOptions={data?.colorReward1}
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
