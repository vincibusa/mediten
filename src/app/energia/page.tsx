'use client'

import { motion } from 'framer-motion'
import { Zap, CheckCircle, Building } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { FeatureCard } from '@/components/feature-card'
import { Separator } from '@/components/ui/separator'
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const features = [
	'Impianti di cogenerazione',
	'Impianti fotovoltaici',
	'Impianti eolici',
	'Impianti solari termici',
	'Produzione energia da biomassa',
	'Produzione di biogas',
	'Efficientamento energetico',
	'Diagnosi energetiche',
]

const mainProjects = [
	{
		title: 'Consulenza Iter Autorizzativo Impianto',
		description:
			'Vittoria - Consulenza per iter autorizzativo progetto' +
			' impianto fotovoltaico di grande scala 930 MWp.',
		href: '#',
		image:
			'https://images.unsplash.com/photo-1509391366360-2e959784a276' +
			'?w=800&h=600&fit=crop',
		icon: <Zap className='h-7 w-7' />,
	},
	{
		title: 'Parchi Fotovoltaici da 8 MWp',
		description:
			'Monreale, Scafani Bagni, Castellana Sicula - Tre' +
			' parchi fotovoltaici sperimentali da 8 MWp ciascuno' +
			' in diverse contrade.',
		href: '#',
		image:
			'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d' +
			'?w=800&h=600&fit=crop',
		icon: <Zap className='h-7 w-7' />,
	},
	{
		title: 'Impianto Fotovoltaico 9 MWp',
		description:
			'Naro - Progetto impianto fotovoltaico contrada La' +
			' Grazia. Produzione energia pulita su larga scala.',
		href: '#',
		image:
			'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d' +
			'?w=800&h=600&fit=crop',
		icon: <Zap className='h-7 w-7' />,
	},
]

const projects = [
	{
		title: 'Consulenza iter autorizzativo impianto',
		client: 'Comune di Vittoria',
		power: '930 MWp',
	},
	{
		title: 'Impianto fotovoltaico contrada La Grazia',
		client: 'Comune di Naro',
		power: '9 MWp',
	},
	{
		title: 'Parco fotovoltaico contrada Ducotto',
		client: 'Comune di Monreale',
		power: '8 MWp',
	},
	{
		title: 'Parco fotovoltaico contrada Mandranova',
		client: 'Comune di Scafani Bagni',
		power: '8 MWp',
	},
	{
		title: 'Parco fotovoltaico contrada Alberi',
		client: 'Comune di Castellana Sicula',
		power: '8 MWp',
	},
	{
		title: 'Impianto fotovoltaico contrada Brigadieci',
		client: 'Comune di Mazzarino',
		power: '6 MWp',
	},
	{
		title: 'Impianto fotovoltaico contrada Acci',
		client: 'Comune di Canicattì',
		power: '5 MWp',
	},
	{
		title: 'Parco fotovoltaico contrada Donna Amorosa',
		client: 'Comune di Bompietro',
		power: '3 MWp',
	},
	{
		title: 'Impianto fotovoltaico contrada Vallone',
		client: 'Comune di Racalmuto',
		power: '2 MWp',
	},
	{
		title: 'Impianto fotovoltaico',
		client: 'Comune di Bisignano',
		power: '2 MWp',
	},
	{
		title: 'Impianto fotovoltaico contrada Cimici',
		client: 'Comune di Milena',
		power: '1,5 MWp',
	},
	{
		title: 'Impianto fotovoltaico contrada Cugno del Bue',
		client: 'Comune di Canicattì',
		power: '1 MWp',
	},
	{
		title: 'Impianto fotovoltaico contrada Margiovitale',
		client: 'Comune di Castrofilippo',
		power: '1 MWp',
	},
	{
		title: 'Impianto fotovoltaico contrada Falzina',
		client: 'Comune di Naro',
		power: '1 MWp',
	},
	{
		title: 'Impianto fotovoltaico contrada Aquilata',
		client: 'Comune di Canicattì',
		power: '1 MWp',
	},
	{
		title: 'Impianto fotovoltaico',
		client: 'Comune di Lecce',
		power: '1 MWp',
	},
	{
		title: 'Impianto su ex sede Poste via Cirrincione',
		client: 'Comune di Palermo',
		power: '48,655 kWp',
	},
	{
		title: 'Impianto Grid Connected su scuole',
		client: 'Comune di Monreale',
		power: 'Multiplo',
	},
	{
		title: 'Impianto su stabilimento vitivinicolo',
		client: 'Comune di Marsala',
		power: '50 kWp',
	},
	{
		title: 'Impianto Tenuta Donna Fugata',
		client: 'Comune di Agrigento',
		power: '50 kWp',
	},
	{
		title: 'Studio prefattibilità 4 siti',
		client: 'Agriplast',
		power: 'Studio',
	},
	{
		title: 'Studio prefattibilità impianto',
		client: 'Viticultori Associati',
		power: '150 kWp',
	},
	{
		title: 'Stazione elettrica conversione MT/AT',
		client: 'FERA - Enel Distribuzione',
		power: 'MT/AT',
	},
	{
		title: 'Consulenza analisi tecnica siti',
		client: 'KPMG',
		power: 'Consulenza',
	},
]

export default function EnergiaPage() {
	return (
		<div className='flex flex-col'>
			<section
				className='relative overflow-hidden
					bg-gradient-to-br from-primary/10 via-background
					to-primary/5 py-20 md:py-32'
			>
				<div className='container relative z-10 mx-auto px-4'>
					<div className='mx-auto max-w-4xl'>
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6 }}
							className='mb-6 inline-flex items-center gap-3'
						>
							<div
								className='flex h-16 w-16 items-center
									justify-center rounded-2xl bg-primary
									text-primary-foreground'
							>
								<Zap className='h-8 w-8' />
							</div>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className='mb-6 text-4xl font-bold
								tracking-tight sm:text-5xl md:text-6xl'
						>
							Energia
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className='text-lg leading-relaxed
								text-muted-foreground md:text-xl'
						>
							Impianti di cogenerazione, impianti di produzione di
							energia da fonti rinnovabili (fotovoltaico, eolico,
							solare termico), impianti per la produzione di
							energia da biomassa e produzione di biogas.
						</motion.p>
					</div>
				</div>
			</section>

			<AnimatedSection className='py-16 md:py-24'>
				<div className='container mx-auto px-4'>
					<div className='mx-auto max-w-4xl'>
						<h2 className='mb-6 text-3xl font-bold'>
							I Nostri Servizi
						</h2>
						<Separator className='mb-8 w-24' />
						<p
							className='mb-8 text-lg leading-relaxed
								text-muted-foreground'
						>
							Progettiamo impianti per la produzione di energia da
							fonti rinnovabili e soluzioni per l&apos;
							efficientamento energetico, contribuendo alla
							transizione ecologica.
						</p>

						<div className='grid gap-4 sm:grid-cols-2'>
							{features.map((feature, index) => (
								<motion.div
									key={feature}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{
										duration: 0.5,
										delay: index * 0.1,
									}}
									className='flex items-start gap-3'
								>
									<CheckCircle
										className='mt-1 h-5 w-5 flex-shrink-0
											text-primary'
									/>
									<span className='text-muted-foreground'>
										{feature}
									</span>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</AnimatedSection>

		<section className='bg-muted/30 py-16 md:py-24'>
			<div className='container mx-auto px-4'>
				<AnimatedSection className='mb-12'>
					<h2 className='mb-4 text-3xl font-bold'>
						Progetti Principali
					</h2>
					<Separator className='mb-4 w-24' />
					<p className='text-muted-foreground'>
						I nostri progetti di maggiore rilevanza nel settore
						delle energie rinnovabili
					</p>
				</AnimatedSection>

				<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
					{mainProjects.map((project, index) => (
						<FeatureCard
							key={project.title}
							{...project}
							delay={index * 0.1}
						/>
					))}
				</div>
			</div>
		</section>

		<AnimatedSection className='py-16 md:py-24'>
			<div className='container mx-auto px-4'>
				<h3 className='mb-6 text-2xl font-bold'>
					Altri Progetti Realizzati
				</h3>
				<Separator className='mb-8 w-24' />
				<p className='mb-8 text-muted-foreground'>
					Oltre 20 progetti fotovoltaici realizzati in tutta
					Italia
				</p>

				<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
						{projects.map((project, index) => (
							<motion.div
								key={project.client + project.title}
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.4,
									delay: index * 0.03,
								}}
							>
								<Card
									className='h-full transition-shadow
										hover:shadow-lg'
								>
									<CardHeader>
										<div className='mb-2 flex items-center
											justify-between'
										>
											<Badge variant='outline'>
												{project.power}
											</Badge>
										</div>
										<CardTitle className='text-base'>
											{project.title}
										</CardTitle>
									</CardHeader>
									<CardContent>
										<div
											className='flex items-center gap-2
												text-sm text-muted-foreground'
										>
											<Building className='h-4 w-4' />
											{project.client}
										</div>
									</CardContent>
								</Card>
							</motion.div>
					))}
				</div>
			</div>
		</AnimatedSection>
		</div>
	)
}
