import { type SelOption } from 'src/types/select'
import { type FC } from 'react'

import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import styles from './index.module.scss'
import { ControlledSelect } from 'src/components/controlled-select/controlled-select'

type MainSectionProps = {
	customerOption?: SelOption[]
}

export const MainSection: FC<MainSectionProps> = ({ customerOption }) => {
	return (
		<AdminSection className={styles.mainSection} isBlock={false}>
			<ControlledSelect
				name='type'
				label='Тип покупателя'
				selectOptions={customerOption ?? [{ label: 'Выберите тип', value: '0' }]}
				margin='0 0 20px 0'
			/>
			<ControlledInput
				name='fio'
				label='Наименование (ФИО или название организации)'
				margin='0 0 20px 0'
			/>
			<ControlledInput name='email' label='E-mail' margin='0 0 20px 0' />
			<ControlledInput name='phone' label='Телефон' margin='0 0 20px 0' isPhone />
			<ControlledInput
				name='about'
				label='Примечание «О покупателе»'
				margin='0 0 20px 0'
				isTextarea
				height='54px'
			/>
			<ControlledInput
				name='review'
				label='Отзыв покупателя'
				margin='0 0 20px 0'
				isTextarea
				height='54px'
			/>
		</AdminSection>
	)
}
