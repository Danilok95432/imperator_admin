import { type SelOption } from 'src/types/select'
import { type FC } from 'react'

import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import styles from './index.module.scss'
import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import { QuillEditor } from 'src/components/quill-editor/quill-editor'

type MainSectionProps = {
	parentsOption?: SelOption[]
}

export const MainSection: FC<MainSectionProps> = ({ parentsOption }) => {
	return (
		<AdminSection className={styles.mainSection} isBlock={false}>
			<ControlledInput name='title' label='Наименование категории *' margin='0 0 20px 0' />
			<QuillEditor
				name='short'
				label='Краткое описание категории'
				$heightEditor='150px'
				$maxWidth='1140px'
				className={styles.area}
			/>
			<QuillEditor
				name='full'
				label='Полное описание категории'
				$heightEditor='350px'
				$maxWidth='1140px'
				className={styles.area}
			/>
			<ReactDropzone
				label='Изображение (305x286)'
				name='mainphoto'
				prompt='PNG, JPG, JPEG. 1000 х1000px, не более 3 Мб'
				accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
				margin='20px 0 20px 0'
				previewVariant='sm-img'
				imgtype='category'
				fileImages={[]}
				className={styles.img}
			/>
			<ReactDropzone
				label='Картинка внутри раздела (485x285)'
				name='photo'
				prompt='PNG, JPG, JPEG. 1000 х1000px, не более 3 Мб'
				accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
				margin='20px 0 20px 0'
				previewVariant='sm-img'
				imgtype='category'
				fileImages={[]}
				className={styles.img}
			/>
		</AdminSection>
	)
}
