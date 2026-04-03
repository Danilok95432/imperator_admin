import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'

import styles from './index.module.scss'

export const SeoSection = () => {
	return (
		<AdminSection className={styles.seoSection} isBlock={false}>
			<h5 className={styles.seoSectionTitle}>SEO (продвижение сайта)</h5>
			<ControlledInput
				name='titleSeo'
				label='Заголок (title)'
				placeholder='Заголовок'
				margin='0 0 20px 0'
			/>
			<ControlledInput
				name='descriptionSeo'
				label='Описание (description)'
				placeholder='Описание'
				margin='0 0 20px 0'
			/>
			<ControlledInput
				name='keywords'
				label='Ключевые слова (keywords)'
				placeholder='Ключевые слова'
				margin='0 0 20px 0'
			/>
			<ControlledInput
				name='urlTitle'
				label='Виртуальный заголовок латиницей без пробелов'
				placeholder='Виртуальный заголовок'
				margin='0 0 20px 0'
			/>
			<ControlledInput name='url' label='URL:' margin='0 0 20px 0' isLogin />
		</AdminSection>
	)
}
