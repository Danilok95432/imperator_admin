import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import styles from './index.module.scss'

export const ReqSection = () => {
	return (
		<AdminSection
			className={styles.mainSection}
			isBlock={false}
			titleText='Обязательные данные товара'
			titleStyleClass={styles.title}
		>
			<ControlledInput name='weight' label='Вес нетто, г * *' margin='0 0 20px 0' />
			<ControlledInput name='width' label='Ширина, мм *' margin='0 0 20px 0' />
			<ControlledInput name='length' label='Длина, мм *' margin='0 0 20px 0' />
			<ControlledInput name='height' label='Высота, мм *' margin='0 0 20px 0' />
		</AdminSection>
	)
}
