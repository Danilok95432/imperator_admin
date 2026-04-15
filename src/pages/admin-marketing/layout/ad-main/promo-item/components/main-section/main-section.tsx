import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import styles from './index.module.scss'
import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'

export const MainSection = () => {
	return (
		<AdminSection className={styles.mainSection} isBlock={false}>
			<ControlledInput
				name='block_name'
				label='Основная надпись (крупными буквами) *'
				margin='0 0 20px 0'
			/>
			<ControlledInput name='block_desc' label='Вторая надпись (под главной)' margin='0 0 20px 0' />
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
