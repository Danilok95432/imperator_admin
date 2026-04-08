import { type OneTypeInputs, oneTypeSchema } from './schema'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'

import { useIsSent } from 'src/hooks/sent-mark/sent-mark'

import { Container } from 'src/UI/Container/Container'
import { SwitchedRadioBtns } from 'src/components/switched-radio-btns/switched-radio-btns'
import { SwitchedHiddenSvg } from 'src/UI/icons/switchedHiddenSVG'
import { SwitchedShowSvg } from 'src/UI/icons/switchedShowSVG'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'
import { AdminRoute } from 'src/routes/admin-routes/consts'

import styles from './index.module.scss'
import { useGetTypeInfoQuery } from 'src/store/catalog/catalog.api'
import { MainSection } from './components/main-section/main-section'
import { SeoSection } from 'src/modules/seo-section/seo-section'
import adminStyles from 'src/routes/admin-layout/index.module.scss'
import classNames from 'classnames'

export const OneType = () => {
	const { id = '0' } = useParams()

	const { data } = useGetTypeInfoQuery(id)
	// const [saveNewsInfo] = useSaveTypeInfoMutation()
	const [, setAction] = useState<'apply' | 'save'>('apply')

	const methods = useForm<OneTypeInputs>({
		mode: 'onBlur',
		resolver: yupResolver(oneTypeSchema),
		defaultValues: {
			hidden: false,
		},
	})
	const { isSent } = useIsSent(methods.control)
	const onSubmit: SubmitHandler<OneTypeInputs> = async (data) => {
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
				to={`/${AdminRoute.Catalog}/${AdminRoute.CatalogTypes}`}
				className={classNames(adminStyles.adminReturnLink, styles.linkBack)}
			>
				Возврат к списку
			</Link>
			<h4 className={styles.titleNewsForm}>Тип товара: Кофе в зернах</h4>
			<Container className={styles.cont}>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<div className={styles.oneNewsContent}>
							<div className={styles.oneNewsContentLeft}>
								<MainSection />
								<SeoSection />
							</div>
							<div className={styles.oneNewsContentRight}>
								<SwitchedRadioBtns
									name='hidden'
									label='Спрятать'
									$variant='switcher'
									contentRadio1={
										<>
											<SwitchedShowSvg />
											Показать
										</>
									}
									contentRadio2={
										<>
											<SwitchedHiddenSvg />
											Спрятать
										</>
									}
								/>
							</div>
						</div>
						<AdminControllers
							variant='4'
							outLink={`/${AdminRoute.Catalog}/${AdminRoute.CatalogTypes}`}
							isSent={isSent}
							actionHandler={setAction}
						/>
					</form>
				</FormProvider>
			</Container>
			<Link
				to={`/${AdminRoute.Catalog}/${AdminRoute.CatalogTypes}`}
				className={classNames(adminStyles.adminReturnLink, styles.linkBack)}
			>
				Возврат к списку
			</Link>
		</>
	)
}
