'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
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

const ongoingProjects = [
	{
		title: 'Palazzo Zanca',
		description:
			'Progetto di restauro conservativo e consolidamento ' +
			'strutturale del Palazzo Zanca, sede del Comune di Messina.',
		image:
			'https://images.unsplash.com/photo-1511818966892-d7d671e672a2' +
			'?w=800&h=600&fit=crop',
		href: '/progetti/palazzo-zanca',
		icon: <Hammer className='h-7 w-7' />,
	},
	{
		title: 'Hotel Wagner',
		description:
			'Riqualificazione e rifunzionalizzazione dell\'Hotel ' +
			'Wagner nel centro storico di Palermo.',
		image:
			'https://images.unsplash.com/photo-1566073771259-6a8506099945' +
			'?w=800&h=600&fit=crop',
		href: '/progetti/hotel-wagner',
		icon: <Hotel className='h-7 w-7' />,
	},
	{
		title: 'Sant\'Ignazio all\'Olivella',
		description:
			'Intervento di restauro e valorizzazione della Chiesa ' +
			'di Sant\'Ignazio all\'Olivella a Palermo.',
		image:
			'https://images.unsplash.com/photo-1502602898657-3e91760cbb34' +
			'?w=800&h=600&fit=crop',
		href: '/progetti/sant-ignazio-olivella',
		icon: <Hammer className='h-7 w-7' />,
	},
	{
		title: 'Centro del Marmo',
		description:
			'Riqualificazione area industriale dismessa per la ' +
			'creazione di un centro espositivo e formativo.',
		image:
			'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab' +
			'?w=800&h=600&fit=crop',
		href: '/progetti/centro-del-marmo',
		icon: <Recycle className='h-7 w-7' />,
	},
]

export default function HomePage() {
  return (
		<div className='flex flex-col'>
			{/* Hero Section */}
			<section className='relative overflow-hidden py-20 md:py-32'>
				{/* Background Image */}
				<div className='absolute inset-0 z-0'>
					<Image
						src='/hero.avif'
						alt='Mediterranea Engineering'
						fill
						className='object-cover'
						priority
						quality={90}
					/>
				</div>

				<div className='container relative z-10 mx-auto px-4'>
					<div className='mx-auto max-w-4xl text-center'>
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6 }}
							className='mb-6 inline-flex items-center gap-2'
						>
							<Badge
								variant='outline'
								className='border-white/40 bg-black/30
									text-sm text-white backdrop-blur-sm'
							>
								Dal 1997
							</Badge>
							<Badge
								variant='outline'
								className='border-white/40 bg-black/30
									text-sm text-white backdrop-blur-sm'
							>
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
							style={{
								textShadow: '2px 2px 4px rgba(0,0,0,0.3), 0 0 40px rgba(0,0,0,0.2)'
							}}
						>
							<span className='text-white'>
								MEDITERRANEA
							</span>
							<br />
							<span className='text-white'>ENGINEERING</span>
						</motion.h1>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className='mb-8'
							style={{
								textShadow: '1px 1px 3px rgba(0,0,0,0.5), 0 0 20px rgba(0,0,0,0.3)'
							}}
						>
							<p
								className='mx-auto max-w-2xl text-lg
									text-white/90 md:text-xl'
							>
								L&apos;arte è ricerca continua, assimilazione
								delle esperienze passate, aggiunta di
								esperienze nuove, nella forma, nel contenuto,
								nella materia, nella tecnica, nei mezzi.
							</p>
							<p className='mt-4 text-sm italic text-white/80'>
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
			</section>

			{/* About Section */}
			<AnimatedSection className='py-16 md:py-24'>
				<div className='container mx-auto px-4'>
					<div className='mx-auto max-w-7xl'>
						<div
							className='grid gap-8 lg:grid-cols-2 lg:gap-12
								xl:gap-16'
						>
							{/* Text Content */}
							<div className='flex flex-col justify-center'>
								<h2
									className='mb-6 text-3xl font-bold
										md:text-4xl'
								>
									Chi Siamo
								</h2>
								<Separator className='mb-8 w-24' />
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
										amministrativa in Piazza Leoni, 3,
										Palermo.
									</p>
									<p>
										La Società, nata nel 1997, fornisce
										servizi di ingegneria, architettura e
										consulenza, sfruttando al massimo
										l&apos;integrazione delle singole e
										specifiche capacità professionali.
									</p>
									<p>
										La Mediterranea Engineering per la
										realizzazione delle attività
										commissionatele si avvale delle
										competenze multidisciplinari, presenti
										nell&apos;attuale compagine societaria e
										di una rete di professionisti con
										competenze specifiche che vengono
										coinvolti sui singoli progetti in
										funzione delle caratteristiche degli
										stessi.
									</p>
								</div>
							</div>

							{/* Image */}
							<div className='relative h-[400px] lg:h-full'>
								<Image
									src='https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop'
									alt='Team di ingegneria al lavoro'
									fill
									className='rounded-lg object-cover
										shadow-xl'
								/>
							</div>
						</div>
					</div>
				</div>
			</AnimatedSection>

			{/* Progetti in Corso Section */}
			<section className='py-16 md:py-24'>
				<div className='container mx-auto px-4'>
					<AnimatedSection className='mb-12 text-center'>
						<h2 className='mb-6 text-3xl font-bold md:text-4xl'>
							Progetti in Corso
						</h2>
						<Separator className='mx-auto mb-4 w-24' />
						<p
							className='mx-auto max-w-2xl text-lg
								text-muted-foreground'
						>
							I nostri progetti attualmente in fase di realizzazione
						</p>
					</AnimatedSection>

					{/* Horizontal Scrollable Container */}
					<div className='relative -mx-4 px-4'>
						<div
							className='flex gap-6 overflow-x-auto py-4 pb-8
								scrollbar-thin scrollbar-thumb-primary/20
								scrollbar-track-transparent hover:scrollbar-thumb-primary/40
								md:gap-8'
							style={{
								scrollSnapType: 'x mandatory',
								WebkitOverflowScrolling: 'touch',
							}}
						>
							{ongoingProjects.map((project, index) => (
								<div
									key={project.href}
									className='flex-none w-[85vw] sm:w-[70vw]
										md:w-[45vw] lg:w-[30vw]'
									style={{ scrollSnapAlign: 'start' }}
								>
									<FeatureCard
										{...project}
										delay={index * 0.1}
									/>
								</div>
							))}
						</div>
					</div>

					{/* View All Projects Button */}
					<AnimatedSection className='mt-8 text-center'>
						<Button asChild size='lg' variant='outline'>
							<Link href='/progetti'>
								Vedi tutti i progetti
								<motion.span
									className='ml-2 inline-block'
									animate={{ x: [0, 5, 0] }}
									transition={{
										duration: 1.5,
										repeat: Infinity,
										ease: 'easeInOut',
									}}
								>
									→
								</motion.span>
							</Link>
						</Button>
					</AnimatedSection>
				</div>
			</section>

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
    </div>
	)
}
