'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
	ArrowLeft,
	MapPin,
	Building,
	Clock,
} from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const projectDetails = {
	title:
		'Chiesa di Sant\'Ignazio martire della' +
		' Congregazione di San Filippo Neri',
	location: 'Piazza Olivella, Palermo',
	category: 'Restauro',
	status: 'DL e CSE in corso',
	client: 'Soprintendenza BB.CC.AA. di Palermo',
	description:
		'L\'intervento, come previsto dal finanziamento del PNRR,' +
		' ha come scopo il restauro e il risanamento conservativo' +
		' della chiesa di Sant\'Ignazio, con particolare' +
		' attenzione alle strutture di torri e campanili.',
}

const interventions = [
	'Revisione delle coperture e dei sotto-tetti',
	'Consolidamento della struttura dei campanili',
	'Restauro della facciata',
	'Restauro della cupola',
	'Restauro dei prospetti laterali',
	'Rifacimento solaio navata laterale sud',
	'Ripristino impianto smaltimento acque meteoriche',
]

const images = [
	{
		src: 'https://static.wixstatic.com/media/921ce7_dbd488aa7ecd4bfbb4af82ee42f33510~mv2.png/v1/fill/w_800,h_1100,al_c,q_85,enc_avif,quality_auto/Chiesa%20di%20Sant\'Ignazio%20all\'Olivella_edited.png',
		alt: 'Chiesa Sant\'Ignazio - Ante restauro',
		label: 'ANTE RESTAURO',
	},
	{
		src: 'https://static.wixstatic.com/media/921ce7_9f90afcfe28847ea828ab49c3728ab96~mv2.png/v1/crop/x_0,y_65,w_639,h_800/fill/w_800,h_1000,al_c,q_85,enc_avif,quality_auto/Chiesa%20di%20Sant\'Ignazio%20all\'Olivella_edited.png',
		alt: 'Chiesa Sant\'Ignazio - Work in progress',
		label: 'WORK IN PROGRESS',
	},
	{
		src: 'https://static.wixstatic.com/media/921ce7_132f9033d7a247638b2f8f59a5af9af2~mv2.png/v1/fill/w_1311,h_958,al_c,q_90,enc_avif,quality_auto/921ce7_132f9033d7a247638b2f8f59a5af9af2~mv2.png',
		alt: 'Nuvola di punti laser scanner',
		label: 'LASER SCANNER - NUVOLA DI PUNTI',
	},
]

export default function SantIgnazioOlivellaPage() {
	return (
		<div className='flex flex-col'>
			{/* Hero Section */}
			<section className='relative h-[60vh] min-h-[500px]'>
				<Image
					src={images[0].src}
					alt={projectDetails.title}
					fill
					className='object-cover'
					priority
				/>
				<div
					className='absolute inset-0 bg-gradient-to-t
						from-black/80 via-black/40 to-black/20'
				/>

				<div
					className='container relative z-10 mx-auto flex h-full
						flex-col justify-end px-4 pb-12'
				>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<Button
							asChild
							variant='ghost'
							className='mb-6 text-white hover:bg-white/10
								hover:text-white'
						>
							<Link href='/restauro'>
								<ArrowLeft className='mr-2 h-4 w-4' />
								Torna ai progetti di Restauro
							</Link>
						</Button>

						<div className='mb-4 flex flex-wrap gap-2'>
							<Badge variant='secondary'>
								{projectDetails.category}
							</Badge>
							<Badge variant='outline' className='text-white'>
								PNRR
							</Badge>
							<Badge
								variant='outline'
								className='border-yellow-400 bg-yellow-400/20
									text-white'
							>
								In corso
							</Badge>
						</div>

						<h1
							className='mb-4 text-4xl font-bold text-white
								md:text-5xl lg:text-6xl'
						>
							{projectDetails.title}
						</h1>

						<div
							className='flex flex-wrap gap-4 text-sm text-white/90
								md:text-base'
						>
							<div className='flex items-center gap-2'>
								<MapPin className='h-4 w-4' />
								{projectDetails.location}
							</div>
							<div className='flex items-center gap-2'>
								<Building className='h-4 w-4' />
								{projectDetails.client}
							</div>
							<div className='flex items-center gap-2'>
								<Clock className='h-4 w-4' />
								{projectDetails.status}
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Description Section */}
			<AnimatedSection className='py-16 md:py-24'>
				<div className='container mx-auto px-4'>
					<div className='mx-auto max-w-4xl'>
						<h2 className='mb-6 text-3xl font-bold'>
							Il Progetto
						</h2>
						<Separator className='mb-8 w-24' />
						<p
							className='mb-6 text-lg leading-relaxed
								text-muted-foreground'
						>
							{projectDetails.description}
						</p>

						<div
							className='mb-8 rounded-lg border bg-accent/10 p-6
								md:p-8'
						>
							<h3 className='mb-4 text-xl font-bold'>
								Finanziamento PNRR
							</h3>
							<p className='text-muted-foreground'>
								L&apos;analisi delle criticità dell&apos;
								organismo chiesastico ha portato all&apos;
								individuazione delle principali categorie
								d&apos;intervento necessarie per la
								conservazione e valorizzazione di questo
								importante patrimonio storico-religioso.
							</p>
						</div>

						<h3 className='mb-6 text-2xl font-bold'>
							Categorie di Intervento
						</h3>
						<div className='space-y-3'>
							{interventions.map((intervention, index) => (
								<motion.div
									key={intervention}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{
										duration: 0.5,
										delay: index * 0.1,
									}}
									className='flex items-center gap-3
										rounded-lg border bg-card p-4'
								>
									<div
										className='flex h-8 w-8 flex-shrink-0
											items-center justify-center
											rounded-full bg-primary/10
											text-sm font-bold text-primary'
									>
										{index + 1}
									</div>
									<span className='font-medium'>
										{intervention}
									</span>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</AnimatedSection>

			{/* Methodology Section */}
			<section className='bg-muted/30 py-16 md:py-24'>
				<div className='container mx-auto px-4'>
					<div className='mx-auto max-w-4xl'>
						<AnimatedSection className='mb-12'>
							<h2 className='mb-4 text-3xl font-bold'>
								Metodologia BIM e Laser Scanner
							</h2>
							<Separator className='mb-4 w-24' />
							<p className='text-lg text-muted-foreground'>
								Utilizzo di tecnologie avanzate per rilievo e
								progettazione
							</p>
						</AnimatedSection>

						<div className='grid gap-6 md:grid-cols-2'>
							{images.slice(1).map((image, idx) => (
								<motion.div
									key={idx}
									initial={{ opacity: 0, scale: 0.9 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									transition={{
										duration: 0.5,
										delay: idx * 0.1,
									}}
									className='space-y-3'
								>
									<div
										className='group relative aspect-[4/3]
											overflow-hidden rounded-lg'
									>
										<Image
											src={image.src}
											alt={image.alt}
											fill
											className='object-cover
												transition-transform
												duration-500
												group-hover:scale-110'
										/>
									</div>
									<p
										className='text-center text-sm font-medium
											text-muted-foreground'
									>
										{image.label}
									</p>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<AnimatedSection className='py-16 md:py-24'>
				<div className='container mx-auto px-4'>
					<div className='mx-auto max-w-2xl text-center'>
						<h2 className='mb-4 text-3xl font-bold'>
							Interessato ai nostri servizi?
						</h2>
						<p className='mb-8 text-lg text-muted-foreground'>
							Contattaci per discutere del tuo progetto di
							restauro conservativo
						</p>
						<Button asChild size='lg'>
							<Link href='/contatti'>Richiedi un preventivo</Link>
						</Button>
					</div>
				</div>
			</AnimatedSection>
		</div>
	)
}

