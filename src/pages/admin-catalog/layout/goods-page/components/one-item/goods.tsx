import { type OneGoodsInputs, oneGoodsSchema } from './schema'
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
import { useGetCategoryInfoQuery } from 'src/store/catalog/catalog.api'
import adminStyles from 'src/routes/admin-layout/index.module.scss'
import classNames from 'classnames'
import { MainSection } from './components/main-section/main-section'
import { ReqSection } from './components/req-section/req-section'
import { AdditionalSection } from './components/additional-section/additional-section'
import { MediaSection } from './components/media-section/media-section'

export const OneGoods = () => {
	const { id = '0' } = useParams()

	const { data } = useGetCategoryInfoQuery(id)
	// const [saveNewsInfo] = useSaveCategoryInfoMutation()
	const [, setAction] = useState<'apply' | 'save'>('apply')

	const methods = useForm<OneGoodsInputs>({
		mode: 'onBlur',
		resolver: yupResolver(oneGoodsSchema),
		defaultValues: {
			hidden: false,
		},
	})
	const { isSent } = useIsSent(methods.control)
	const onSubmit: SubmitHandler<OneGoodsInputs> = async (data) => {
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
				to={`/${AdminRoute.Catalog}/${AdminRoute.CatalogCategories}`}
				className={classNames(adminStyles.adminReturnLink, styles.linkBack)}
			>
				Возврат к списку
			</Link>
			<h4 className={styles.titleNewsForm}>Товар: </h4>
			<Container className={styles.cont}>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<div className={styles.oneNewsContent}>
							<div className={styles.oneNewsContentLeft}>
								<MainSection />
								<ReqSection />
								<AdditionalSection />
								<MediaSection />
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
								<SwitchedRadioBtns
									name='hit'
									label='Хит'
									$variant='switcher'
									contentRadio1={<>Да</>}
									contentRadio2={<>Нет</>}
								/>
								<SwitchedRadioBtns
									name='closed'
									label='Снято с производства'
									$variant='switcher'
									contentRadio1={<>Да</>}
									contentRadio2={<>Нет</>}
								/>
							</div>
						</div>
						<AdminControllers
							variant='4'
							outLink={`/${AdminRoute.Catalog}/${AdminRoute.CatalogGoods}`}
							isSent={isSent}
							actionHandler={setAction}
						/>
					</form>
				</FormProvider>
			</Container>
			<Link
				to={`/${AdminRoute.Catalog}/${AdminRoute.CatalogGoods}`}
				className={classNames(adminStyles.adminReturnLink, styles.linkBack)}
			>
				Возврат к списку
			</Link>
		</>
	)
}
