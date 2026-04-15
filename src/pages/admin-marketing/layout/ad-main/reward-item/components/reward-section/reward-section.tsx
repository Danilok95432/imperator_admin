import { type FC } from 'react'

import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import styles from './index.module.scss'
import { type SelOption } from 'src/types/select'
import { QuillEditor } from 'src/components/quill-editor/quill-editor'
import { ControlledSelect } from 'src/components/controlled-select/controlled-select'

type RewardSectionProps = {
	number?: number
	colorOptions?: SelOption[]
}

export const RewardSection: FC<RewardSectionProps> = ({ number = 0, colorOptions }) => {
	return (
		<AdminSection
			className={styles.adSection}
			isBlock={false}
			titleText={`Секция ${number + 1}`}
			noBorder
		>
			<ControlledInput
				name={`awards[${number}].title`}
				label='Название награды'
				margin='0 0 20px 0'
			/>
			<ControlledSelect
				name={`awards[${number}].color`}
				className={styles.select}
				label='Цвет названия награды'
				selectOptions={colorOptions ?? [{ label: 'Бронза', value: '0' }]}
				margin='0 0 20px 0'
			/>
			<QuillEditor
				name={`awards[${number}].itemname`}
				label='Основной текст'
				$heightEditor='150px'
				className={styles.editor}
			/>
			<ControlledInput
				name={`awards[${number}].itemdesc`}
				label='Название конкурса'
				margin='0 0 20px 0'
				isTextarea
				height='77px'
			/>
		</AdminSection>
	)
}
