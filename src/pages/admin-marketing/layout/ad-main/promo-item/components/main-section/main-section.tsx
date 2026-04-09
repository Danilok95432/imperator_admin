import { type SelOption } from 'src/types/select'
import { type FC } from 'react'

import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import styles from './index.module.scss'
import { ControlledSelect } from 'src/components/controlled-select/controlled-select'
import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'

type MainSectionProps = {
	textOption?: SelOption[]
}

export const MainSection: FC<MainSectionProps> = ({ textOption }) => {
	return (
		<AdminSection className={styles.mainSection} isBlock={false}>
			<ControlledSelect
				name='text'
				label='Основная надпись (крупными буквами) *'
				selectOptions={textOption ?? [{ label: 'Выберите надпись', value: '0' }]}
				margin='0 0 20px 0'
			/>
			<ControlledInput name='subText' label='Вторая надпись (под главной)' margin='0 0 20px 0' />
			<ReactDropzone
				label='Изображение (размер 1220x550 px)'
				name='img'
				prompt='PNG, JPG, JPEG. 1220x550px, не , не более ... Мб'
				accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
				margin='20px 0 20px 0'
				previewVariant='sm-img'
				imgtype='goods'
				fileImages={[]}
				className={styles.img}
			/>
		</AdminSection>
	)
}
