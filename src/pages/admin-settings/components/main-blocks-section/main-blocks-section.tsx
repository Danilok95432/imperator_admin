import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledCheckbox } from 'src/components/controlled-checkbox/controlled-checkbox'

import styles from './index.module.scss'

export const MainBlocksSection = () => {
	return (
		<AdminSection className={styles.mainBlocksSection} noBorder>
			<h2>Блоки главной страницы</h2>
			<ControlledCheckbox
				name='isShowPromo'
				label='Показать блок «Промо» (главное изображение с надписью)'
				$margin='0 0 20px 0'
				type='checkbox'
			/>
			<ControlledCheckbox
				name='isShowAwards'
				label='Показать блок «Награды»'
				$margin='0 0 20px 0'
				type='checkbox'
			/>
			<ControlledCheckbox
				name='isShowMainSlider'
				label='Показать блок «Главный слайдер» (слайдер с одним товаром на страницу)'
				$margin='0 0 20px 0'
				type='checkbox'
			/>
			<ControlledCheckbox
				name='isShowBest'
				label='Показать блок «Наше лучшее» (слайдер с несколькими товарами)'
				$margin='0 0 20px 0'
				type='checkbox'
			/>
			<ControlledCheckbox
				name='isShowAd'
				label='Показать блок «Реклама»'
				$margin='0 0 20px 0'
				type='checkbox'
			/>
			<ControlledCheckbox
				name='isShowCatalog'
				label='Показать блок «Каталог продукции» (товарные группы со ссылками на товары)'
				$margin='0 0 20px 0'
				type='checkbox'
			/>
			<ControlledCheckbox
				name='isShowReview'
				label='Показать блок «Отзывы покупателей»'
				type='checkbox'
				$margin='0 0 20px 0'
			/>
		</AdminSection>
	)
}
