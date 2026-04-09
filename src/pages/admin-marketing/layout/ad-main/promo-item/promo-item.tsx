import { type PromoItemInputs, promoItemsSchema } from './schema'
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
import { MainSection } from './components/main-section/main-section'
import { useGetAdPromoInfoQuery } from 'src/store/marketing/marketing.api'

export const PromoItem = () => {
	const { data } = useGetAdPromoInfoQuery(null)
	// const [saveNewsInfo] = useSaveTypeInfoMutation()
	const [, setAction] = useState<'apply' | 'save'>('apply')

	const methods = useForm<PromoItemInputs>({
		mode: 'onBlur',
		resolver: yupResolver(promoItemsSchema),
	})
	const { isSent } = useIsSent(methods.control)
	const onSubmit: SubmitHandler<PromoItemInputs> = async (data) => {
		console.log(data)
	}

	useEffect(() => {
		if (data) {
			methods.reset({ ...data })
		}
	}, [data])

	return (
		<>
			<Link
				to={`/${AdminRoute.Marketing}/${AdminRoute.MarketingAd}`}
				className={classNames(adminStyles.adminReturnLink, styles.linkBack)}
			>
				Возврат к списку рекламных блоков
			</Link>
			<h4 className={styles.titleNewsForm}>Блок «Промо» (главное изображение с надписью)</h4>
			<Container className={styles.cont}>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<div className={styles.oneNewsContent}>
							<div className={styles.oneNewsContentLeft}>
								<MainSection textOption={data?.text} />
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
