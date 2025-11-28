'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const footerLinks = [
	{
		title: 'Architecture & Engineering',
		links: [
			{ href: '/progetti', label: 'Restauro' },
			{ href: '/progetti', label: 'Riqualificazione' },
			{ href: '/progetti', label: 'Edilizia' },
			{ href: '/progetti', label: 'Turismo' },
			{ href: '/progetti', label: 'Idraulica' },
			{ href: '/progetti', label: 'Energia' },
		],
	},
	{
		title: 'Consulting',
		links: [
			{
				href: '/progetti',
				label: 'Sviluppo Territoriale',
			},
			{
				href: '/progetti',
				label: 'Studi di Fattibilità',
			},
			{
				href: '/progetti',
				label: 'Progetti Agevolati',
			},
			{
				href: '/progetti',
				label: 'Sicurezza D.Lgs 81/2008',
			},
		],
	},
	{
		title: 'Azienda',
		links: [
			{ href: '/', label: 'Home' },
			{ href: '/progetti', label: 'Progetti' },
			{ href: '/contatti', label: 'Contatti' },
			{ href: '/policy', label: 'Policy' },
		],
	},
]

export function FooterSection() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className='border-t bg-muted/30'>
			<div className='container mx-auto px-4 py-12'>
				<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
					{/* Company Info */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className='space-y-4'
					>
						<div>
							<h3 className='text-lg font-bold text-primary'>
								MEDITERRANEA ENGINEERING
							</h3>
							<p className='mt-2 text-sm
								text-muted-foreground'
							>
								Società di ingegneria e consulenza
								tecnico-economica dal 1997
							</p>
						</div>
						<div className='text-sm text-muted-foreground'>
							<p>Via G. Alessi, 16</p>
							<p>90143 Palermo</p>
							<p className='mt-2'>P.IVA 04502560826</p>
							<p>Albo unico regionale n. 1771</p>
						</div>
					</motion.div>

					{/* Footer Links */}
					{footerLinks.map((section, index) => (
						<motion.div
							key={section.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.5,
								delay: index * 0.1,
							}}
							className='space-y-4'
						>
							<h4 className='text-sm font-semibold'>
								{section.title}
							</h4>
							<ul className='space-y-2'>
								{section.links.map((link) => (
									<li key={link.href + link.label}>
									<Link
										href={link.href}
										className='inline-block py-1 text-sm
											text-muted-foreground
											transition-colors
											hover:text-primary
											focus:outline-none focus:ring-2
											focus:ring-primary focus:ring-offset-1
											rounded-sm'
									>
										{link.label}
									</Link>
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>

				{/* Bottom Bar */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className='mt-12 border-t pt-8 text-center text-sm
						text-muted-foreground'
				>
					<p>
						© {currentYear} by Mediterranea Engineering. Tutti i
						diritti riservati.
					</p>
				</motion.div>
			</div>
		</footer>
	)
}

