import { type SelOption } from 'src/types/select'
import { type FC } from 'react'

import { AdminSection } from 'src/components/admin-section/admin-section'
import styles from './index.module.scss'
import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import { ReactDropzoneFiles } from 'src/components/react-dropzone-files/react-dropzone-files'
import { RemoveFileSvg } from 'src/UI/icons/removeFileSVG'
import { AddButton } from 'src/UI/AddButton/AddButton'
import { type ImageItemWithText } from 'src/types/photos'
import { type FileItem } from 'src/types/files'

type MainSectionProps = {
	parentsOption?: SelOption[]
	images?: ImageItemWithText[]
	documents?: FileItem[]
}

export const MediaSection: FC<MainSectionProps> = ({ parentsOption, images, documents }) => {
	return (
		<AdminSection
			className={styles.mainSection}
			isBlock={false}
			titleText='Изображения товара. Первое в списке — основное'
			titleStyleClass={styles.title}
		>
			<ReactDropzone
				label='Изображение (305x286)'
				name='img'
				prompt='PNG, JPG, JPEG. 1000 х1000px, не более 3 Мб'
				accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
				margin='20px 0 20px 0'
				previewVariant='sm-img'
				imgtype='item'
				fileImages={images}
				className={styles.img}
			/>
			<h2 className={styles.subTitle}>Документы</h2>
			<ReactDropzoneFiles
				previewVariant='text'
				variant='text'
				removeIcon={<RemoveFileSvg />}
				name='documents'
				accept={{
					'application/pdf': ['.pdf'],
					'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
				}}
				maxFiles={7}
				files={documents}
				fileType='item'
				multiple
				customUploadBtn={<AddButton>Добавить файл</AddButton>}
				className={styles.img}
			/>
		</AdminSection>
	)
}
