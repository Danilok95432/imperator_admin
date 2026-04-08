import { type TabNavigationItem } from 'src/types/navigation'
import { VipIconSVG } from 'src/UI/icons/vipIconSVG'

export const CustomersTabNavigation: TabNavigationItem[] = [
	{
		title: 'Все',
		link: '/customers/all',
	},
	{
		title: 'Постоянные',
		link: '/customers/regular',
	},
	{
		title: 'VIP-персоны',
		link: '/customers/vip',
		icon: <VipIconSVG />,
	},
]
