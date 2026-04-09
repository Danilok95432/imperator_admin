import { type SelOption } from 'src/types/select'
import { type FC } from 'react'

import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import styles from './index.module.scss'
import { ControlledSelect } from 'src/components/controlled-select/controlled-select'
import { ControlledDateInput } from 'src/components/controlled-date-input/controlled-date-input'
import adminStyles from 'src/routes/admin-layout/index.module.scss'
import classNames from 'classnames'

type MainSectionProps = {
	deliverOption?: SelOption[]
	statusOption?: SelOption[]
}

export const MainSection: FC<MainSectionProps> = ({ deliverOption, statusOption }) => {
	return (
		<AdminSection className={styles.mainSection} isBlock={false}>
			<ControlledSelect
				name='deliver'
				label='Получение заказа'
				selectOptions={deliverOption ?? [{ label: 'Доставка до двери', value: '0' }]}
				margin='0 0 20px 0'
			/>
			<ControlledInput name='sdek' label='Пункт доставки СДЭК' margin='0 0 20px 0' />
			<ControlledSelect
				name='status'
				label='Статус заказа'
				selectOptions={statusOption ?? [{ label: 'Ожидание', value: '0' }]}
				margin='0 0 20px 0'
				className={styles.select}
			/>
			<ControlledInput
				name='customer'
				label='Заказчик'
				margin='0 0 20px 0'
				isTextarea
				height='54px'
			/>
			<ControlledInput name='phone' label='Телефон' margin='0 0 20px 0' isPhone />
			<ControlledInput
				name='address'
				label='Точный адрес доставки (если выбран вариант «До двери»'
				margin='0 0 20px 0'
				isTextarea
				height='54px'
			/>
			<ControlledInput name='time' label='Время доставки' margin='0 0 20px 0' />
			<ControlledDateInput
				className={classNames(adminStyles.adminDateTimeInput, adminStyles.adminDateTimeInputFull)}
				label='Дата и время заказа'
				name='date'
				placeholder='гггг-мм-дд чч:мм'
				showTimeSelect
				dateFormat='yyyy-MM-dd HH:mm'
				timeFormat='HH:mm'
			/>
			<ControlledInput name='price' label='Стоимость товаров' margin='0 0 20px 0' />
			<ControlledInput name='priceDeliver' label='Стоимость доставки' margin='0 0 20px 0' />
			<ControlledInput name='totalSum' label='Общая стоимость' margin='0 0 20px 0' />
		</AdminSection>
	)
}
