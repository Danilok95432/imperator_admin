import { type AdItemInputs, adItemsSchema } from './schema'
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
import { useGetAdReklamaInfoQuery } from 'src/store/marketing/marketing.api'
import { AdSection } from './components/ad-section/ad-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'

export const AdItem = () => {
	const { data } = useGetAdReklamaInfoQuery(null)
	// const [saveNewsInfo] = useSaveTypeInfoMutation()
	const [, setAction] = useState<'apply' | 'save'>('apply')

	const methods = useForm<AdItemInputs>({
		mode: 'onBlur',
		resolver: yupResolver(adItemsSchema),
	})
	const { isSent } = useIsSent(methods.control)
	const onSubmit: SubmitHandler<AdItemInputs> = async (data) => {
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
			<h4 className={styles.titleNewsForm}>Блок «Реклама»</h4>
			<Container className={styles.cont}>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<div className={styles.oneNewsContent}>
							<div className={styles.oneNewsContentLeft}>
								<ControlledInput name='title' label='Название блока рекламы' margin=' 0 0 36px 0' />
								{sections.map((el, idx) => {
									return <AdSection number={String(el)} key={idx} />
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
