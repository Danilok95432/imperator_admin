import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

export const AdMainPage = () => {
	return (
		<>
			<Helmet>
				<title>Реклама на главной</title>
			</Helmet>
			<h2 style={{ margin: '0 0 0 28px' }}>Реклама на главной</h2>
			<Outlet />
		</>
	)
}
