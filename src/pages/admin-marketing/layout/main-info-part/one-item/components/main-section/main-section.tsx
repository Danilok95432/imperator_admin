import { type SelOption } from 'src/types/select'
import { type FC } from 'react'

import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import styles from './index.module.scss'
import { ControlledSelect } from 'src/components/controlled-select/controlled-select'
import { QuillEditor } from 'src/components/quill-editor/quill-editor'

type MainSectionProps = {
	pageOption?: SelOption[]
}

export const MainSection: FC<MainSectionProps> = ({ pageOption }) => {
	return (
		<AdminSection className={styles.mainSection} isBlock={false}>
			<ControlledSelect
				name='type'
				label='Тип страницы *'
				selectOptions={pageOption ?? [{ label: 'Выберите тип', value: '0' }]}
				margin='0 0 20px 0'
			/>
			<ControlledInput name='pageName' label='Наименование *' margin='0 0 20px 0' />
			<QuillEditor name='desc' label='Текст для страницы' $heightEditor='150px' />
		</AdminSection>
	)
}
