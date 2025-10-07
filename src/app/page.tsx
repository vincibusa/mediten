'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
	Building2,
	Hammer,
	Recycle,
	Hotel,
	Droplet,
	Zap,
	Briefcase,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FeatureCard } from '@/components/feature-card'
import { AnimatedSection } from '@/components/animated-section'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'

const services = [
	{
		title: 'Restauro',
		description:
			'Restauro conservativo, consolidamento e recupero' +
			' di edifici monumentali pubblici e privati, con' +
			' particolare attenzione alle superfici murarie dipinte.',
		href: '/restauro',
		image:
			'https://images.unsplash.com/photo-1558618666-fcd25c85cd64' +
			'?w=800&h=600&fit=crop',
		icon: <Hammer className='h-7 w-7' />,
	},
	{
		title: 'Riqualificazione',
		description:
			'Recupero e riqualificazione dei Centri Storici;' +
			' Riqualificazione aree urbane e archeologiche' +
			' terrestri e marine.',
		href: '/riqualificazione',
		image:
			'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab' +
			'?w=800&h=600&fit=crop',
		icon: <Recycle className='h-7 w-7' />,
	},
	{
		title: 'Edilizia',
		description:
			'Edilizia scolastica, teatri, centri congressi,' +
			' centri sportivi, sedi e uffici, edifici industriali,' +
			' risanamento strutturale.',
		href: '/edilizia',
		image:
			'https://images.unsplash.com/photo-1503387762-592deb58ef4e' +
			'?w=800&h=600&fit=crop',
		icon: <Building2 className='h-7 w-7' />,
	},
	{
		title: 'Turismo',
		description:
			'Recupero, riqualificazione e rifunzionalizzazione' +
			' immobili da destinare ad attività turistica;' +
			' Valorizzazione turistica aree urbane.',
		href: '/turismo',
		image:
			'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb' +
			'?w=800&h=600&fit=crop',
		icon: <Hotel className='h-7 w-7' />,
	},
	{
		title: 'Idraulica',
		description:
			'Acquedotti, fognature, impianti irrigui, bonifiche,' +
			' sistemazioni montane e fluviali, impianti di' +
			' depurazione, riutilizzo acque reflue.',
		href: '/idraulica',
		image:
			'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789' +
			'?w=800&h=600&fit=crop',
		icon: <Droplet className='h-7 w-7' />,
	},
	{
		title: 'Energia',
		description:
			'Impianti di cogenerazione, produzione di energia da' +
			' fonti rinnovabili (fotovoltaico, eolico, solare' +
			' termico), produzione di energia da biomassa.',
		href: '/energia',
		image:
			'https://images.unsplash.com/photo-1509391366360-2e959784a276' +
			'?w=800&h=600&fit=crop',
		icon: <Zap className='h-7 w-7' />,
	},
	{
		title: 'Consulting',
		description:
			'Consulenza ed assistenza tecnico-economica, sviluppo' +
			' territoriale, studi di fattibilità, progetti' +
			' agevolati, sicurezza aziendale.',
		href: '/consulting',
		image:
			'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40' +
			'?w=800&h=600&fit=crop',
		icon: <Briefcase className='h-7 w-7' />,
	},
]

export default function HomePage() {
  return (
		<div className='flex flex-col'>
			{/* Hero Section */}
			<section
				className='relative overflow-hidden
					bg-gradient-to-br from-primary/5 via-background
					to-accent/5 py-20 md:py-32'
			>
				<div className='container relative z-10 mx-auto px-4'>
					<div className='mx-auto max-w-4xl text-center'>
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6 }}
							className='mb-6 inline-flex items-center gap-2'
						>
							<Badge variant='outline' className='text-sm'>
								Dal 1997
							</Badge>
							<Badge variant='outline' className='text-sm'>
								ISO 9001:2015
							</Badge>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className='mb-6 text-4xl font-bold
								tracking-tight sm:text-5xl md:text-6xl
								lg:text-7xl'
						>
							<span
								className='bg-gradient-to-r from-primary
									to-accent bg-clip-text
									text-transparent'
							>
								MEDITERRANEA
							</span>
							<br />
							<span className='text-foreground'>ENGINEERING</span>
						</motion.h1>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className='mb-8'
						>
							<p
								className='mx-auto max-w-2xl text-lg
									text-muted-foreground md:text-xl'
							>
								L&apos;arte è ricerca continua, assimilazione
								delle esperienze passate, aggiunta di
								esperienze nuove, nella forma, nel contenuto,
								nella materia, nella tecnica, nei mezzi.
							</p>
							<p
								className='mt-4 text-sm italic
									text-muted-foreground'
							>
								— Bruno Munari
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.3 }}
							className='flex flex-col items-center
								justify-center gap-4 sm:flex-row'
						>
							<Button asChild size='lg' className='min-w-[200px]'>
								<Link href='/progetti'>
									Scopri i nostri progetti
								</Link>
							</Button>
							<Button
								asChild
								variant='outline'
								size='lg'
								className='min-w-[200px]'
							>
								<Link href='/contatti'>Contattaci</Link>
							</Button>
						</motion.div>
					</div>
				</div>

				{/* Decorative Elements */}
				<div
					className='absolute left-0 top-0 -z-0 h-full w-full
						opacity-20'
				>
					<motion.div
						animate={{
							scale: [1, 1.2, 1],
							rotate: [0, 90, 0],
						}}
						transition={{
							duration: 20,
							repeat: Infinity,
							ease: 'linear',
						}}
						className='absolute -left-20 -top-20 h-96 w-96
							rounded-full bg-primary/10 blur-3xl'
					/>
					<motion.div
						animate={{
							scale: [1, 1.3, 1],
							rotate: [0, -90, 0],
						}}
						transition={{
							duration: 25,
							repeat: Infinity,
							ease: 'linear',
						}}
						className='absolute -bottom-20 -right-20 h-96
							w-96 rounded-full bg-accent/10 blur-3xl'
					/>
				</div>
			</section>

			{/* About Section */}
			<AnimatedSection className='py-16 md:py-24'>
				<div className='container mx-auto px-4'>
					<div className='mx-auto max-w-4xl text-center'>
						<h2 className='mb-6 text-3xl font-bold md:text-4xl'>
							Chi Siamo
						</h2>
						<Separator className='mx-auto mb-8 w-24' />
						<div
							className='space-y-4 text-lg leading-relaxed
								text-muted-foreground'
						>
							<p>
								La{' '}
								<strong className='text-foreground'>
									Mediterranea Engineering
								</strong>{' '}
								è una società di ingegneria e consulenza
								tecnico-economica con sede legale ed
								amministrativa in Piazza Leoni, 3, Palermo.
							</p>
							<p>
								La Società, nata nel 1997, fornisce servizi di
								ingegneria, architettura e consulenza,
								sfruttando al massimo l&apos;integrazione
								delle singole e specifiche capacità
								professionali.
							</p>
							<p>
								La Mediterranea Engineering per la realizzazione
								delle attività commissionatele si avvale delle
								competenze multidisciplinari, presenti
								nell&apos;attuale compagine societaria e di una
								rete di professionisti con competenze
								specifiche che vengono coinvolti sui singoli
								progetti in funzione delle caratteristiche degli
								stessi.
							</p>
						</div>
					</div>
        </div>
			</AnimatedSection>

			{/* Services Section */}
			<section className='bg-muted/30 py-16 md:py-24'>
				<div className='container mx-auto px-4'>
					<AnimatedSection className='mb-12 text-center'>
						<h2 className='mb-6 text-3xl font-bold md:text-4xl'>
							Settori d&apos;Intervento
						</h2>
						<Separator className='mx-auto mb-4 w-24' />
						<p
							className='mx-auto max-w-2xl text-lg
								text-muted-foreground'
						>
							Offriamo soluzioni integrate nei principali settori
							dell&apos;ingegneria e dell&apos;architettura
						</p>
					</AnimatedSection>

				<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
					{services.map((service, index) => (
						<FeatureCard
							key={service.href}
							{...service}
							delay={index * 0.1}
						/>
					))}
				</div>
				</div>
			</section>

			{/* CTA Section */}
			<AnimatedSection className='py-16 md:py-24'>
				<div className='container mx-auto px-4'>
					<div
						className='mx-auto max-w-4xl rounded-2xl
							bg-gradient-to-r from-primary to-accent p-8
							text-center text-primary-foreground md:p-12'
					>
						<h2 className='mb-4 text-3xl font-bold md:text-4xl'>
							Hai un progetto in mente?
						</h2>
						<p className='mb-8 text-lg opacity-90'>
							Contattaci per una consulenza personalizzata e
							scopri come possiamo aiutarti a realizzare le tue
							idee.
						</p>
						<Button
							asChild
							size='lg'
							variant='secondary'
							className='min-w-[200px]'
						>
							<Link href='/contatti'>
								Richiedi una consulenza
							</Link>
						</Button>
					</div>
				</div>
			</AnimatedSection>
    </div>
	)
}
