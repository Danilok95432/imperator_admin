import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import styles from './index.module.scss'
import { QuillEditor } from 'src/components/quill-editor/quill-editor'

export const AdditionalSection = () => {
	return (
		<AdminSection
			className={styles.mainSection}
			isBlock={false}
			titleText='Дополнительно'
			titleStyleClass={styles.title}
		>
			<ControlledInput
				name='content'
				label='Состав через запятую'
				margin='0 0 20px 0'
				isTextarea
				height='58px'
			/>
			<ControlledInput name='pack' label='Упаковка' margin='0 0 20px 0' />
			<ControlledInput name='availability' label='Наличие' margin='0 0 20px 0' />
			<ControlledInput name='price' label='Цена' margin='0 0 20px 0' />
			<ControlledInput name='priceSale' label='Скидочная цена' margin='0 0 20px 0' />
			<ControlledInput name='short' label='Краткое описание' margin='0 0 20px 0' />
			<QuillEditor
				name='full'
				label='Текст для страницы'
				$heightEditor='150px'
				$maxWidth='1140px'
				className={styles.area}
			/>
		</AdminSection>
	)
}
