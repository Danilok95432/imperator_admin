import { type SelOption } from 'src/types/select'
import { type FC } from 'react'

import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import styles from './index.module.scss'
import { ControlledSelect } from 'src/components/controlled-select/controlled-select'

type MainSectionProps = {
	parentsOption?: SelOption[]
}

export const MainSection: FC<MainSectionProps> = ({ parentsOption }) => {
	return (
		<AdminSection className={styles.mainSection} isBlock={false}>
			<ControlledSelect
				name='parent'
				label='Раздел-родитель *'
				selectOptions={parentsOption ?? [{ label: 'Выберите раздел', value: '0' }]}
				margin='0 0 20px 0'
			/>
			<ControlledInput name='title' label='Наименование типа товара *' margin='0 0 20px 0' />
		</AdminSection>
	)
}
