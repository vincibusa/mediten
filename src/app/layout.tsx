import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NavBar } from '@/components/nav-bar'
import { FooterSection } from '@/components/footer-section'

const inter = Inter({
	variable: '--font-sans',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title:
		'Mediterranea Engineering - Ingegneria e Consulenza dal 1997',
	description:
		'Società di ingegneria e consulenza tecnico-economica con' +
		' sede a Palermo. Servizi di architettura, restauro,' +
		' riqualificazione, edilizia e consulting.',
	keywords: [
		'ingegneria',
		'architettura',
		'restauro',
		'consulenza',
		'Palermo',
		'Sicilia',
	],
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='it' className='scroll-smooth'>
			<body className={`${inter.variable} font-sans antialiased`}>
				<a
					href='#main-content'
					className='sr-only focus:not-sr-only focus:absolute
						focus:left-4 focus:top-4 focus:z-50
						focus:rounded-md focus:bg-primary focus:px-4
						focus:py-2 focus:text-primary-foreground
						focus:outline-none focus:ring-2 focus:ring-ring
						focus:ring-offset-2'
				>
					Salta al contenuto
				</a>
				<NavBar />
				<main id='main-content' className='min-h-screen'>
					{children}
				</main>
				<FooterSection />
			</body>
		</html>
	)
}
