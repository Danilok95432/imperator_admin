import { type OneOrderInputs, oneOrderSchema } from './schema'
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
import { MainSection } from './components/main-section/main-section'
import adminStyles from 'src/routes/admin-layout/index.module.scss'
import classNames from 'classnames'
import { useGetOrderInfoQuery } from 'src/store/trading/trading.api'
import { type GoodsCart } from 'src/types/trading'
import { CustomTable } from 'src/components/custom-table/custom-table'

export const OneOrder = () => {
	const { id = '0' } = useParams()

	const { data } = useGetOrderInfoQuery(id)
	// const [saveNewsInfo] = useSaveTypeInfoMutation()
	const [, setAction] = useState<'apply' | 'save'>('apply')

	const methods = useForm<OneOrderInputs>({
		mode: 'onBlur',
		resolver: yupResolver(oneOrderSchema),
	})
	const { isSent } = useIsSent(methods.control)
	const onSubmit: SubmitHandler<OneOrderInputs> = async (data) => {
		console.log(data)
	}

	useEffect(() => {
		if (data) {
			methods.reset({ ...data })
		}
	}, [data])

	const tableTitles = [
		'№',
		'Категория',
		'Производитель',
		'Название товара',
		'Цена товара',
		'Количество',
		'Сумма',
	]
	const formatObjectsTableData = (ordersData: GoodsCart[]) => {
		return ordersData.map((orderEl) => {
			return {
				rowId: orderEl.id,
				cells: [
					<p key='0'>{orderEl.id}</p>,
					<p key='1'>{orderEl.category}</p>,
					<p key='2'>{orderEl.maker}</p>,
					<p key='3'>{orderEl.name}</p>,
					<p key='4'>{orderEl.price}</p>,
					<p key='5'>{orderEl.amount}</p>,
					<p key='6'>{orderEl.sum}</p>,
				],
			}
		})
	}

	return (
		<>
			<Link
				to={`/${AdminRoute.Trading}/${AdminRoute.TradingOrder}`}
				className={classNames(adminStyles.adminReturnLink, styles.linkBack)}
			>
				Возврат к списку заказов
			</Link>
			<h4 className={styles.titleNewsForm}>Заказ</h4>
			<Container className={styles.cont}>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<div className={styles.oneNewsContent}>
							<div className={styles.oneNewsContentLeft}>
								<MainSection deliverOption={data?.deliver} statusOption={data?.status} />
								<CustomTable
									className={styles.ordersTable}
									rowData={formatObjectsTableData(data?.goods ?? [])}
									colTitles={tableTitles}
								/>
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
							outLink={`/${AdminRoute.Trading}/${AdminRoute.TradingOrder}`}
							isSent={isSent}
							actionHandler={setAction}
						/>
					</form>
				</FormProvider>
			</Container>
			<Link
				to={`/${AdminRoute.Trading}/${AdminRoute.TradingOrder}`}
				className={classNames(adminStyles.adminReturnLink, styles.linkBack)}
			>
				Возврат к списку заказов
			</Link>
		</>
	)
}
