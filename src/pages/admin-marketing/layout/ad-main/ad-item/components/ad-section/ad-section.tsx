import { type FC } from 'react'

import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import styles from './index.module.scss'

type AdSectionProps = {
	number?: string
}

export const AdSection: FC<AdSectionProps> = ({ number }) => {
	return (
		<AdminSection
			className={styles.adSection}
			isBlock={false}
			titleText={`Секция ${number}`}
			noBorder
		>
			<ControlledInput
				name={`textSection${number}`}
				label='Текст секции'
				margin='0 0 20px 0'
				isTextarea
				height='77px'
			/>
		</AdminSection>
	)
}
