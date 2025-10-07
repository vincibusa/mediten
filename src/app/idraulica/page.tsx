'use client'

import { motion } from 'framer-motion'
import { Droplet, CheckCircle, MapPin } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { FeatureCard } from '@/components/feature-card'
import { Separator } from '@/components/ui/separator'
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
} from '@/components/ui/card'

const features = [
	'Acquedotti e reti idriche',
	'Fognature e sistemi di drenaggio',
	'Impianti irrigui',
	'Bonifiche',
	'Sistemazioni montane e fluviali',
	'Piani di utilizzo delle risorse idriche',
	'Risanamento reti idriche',
	'Impianti di depurazione',
	'Riutilizzo acque reflue',
	'Discariche e trattamento R.S.U.',
]

const mainProjects = [
	{
		title: 'Realizzazione Rete Idrica Urbana',
		description:
			'San Cipirello - Opere di realizzazione della rete' +
			' idrica comunale per l\'approvvigionamento idrico' +
			' della popolazione.',
		href: '#',
		image:
			'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789' +
			'?w=800&h=600&fit=crop',
		icon: <Droplet className='h-7 w-7' />,
	},
	{
		title: 'Rete Fognaria Frazione Blandino',
		description:
			'Altofonte - Progetto realizzazione rete fognaria' +
			' Piano Miglio. Sistema integrato di raccolta e' +
			' smaltimento acque reflue.',
		href: '#',
		image:
			'https://images.unsplash.com/photo-1581092160562-40aa08e78837' +
			'?w=800&h=600&fit=crop',
		icon: <Droplet className='h-7 w-7' />,
	},
	{
		title: 'Opere di Drenaggio - IACP',
		description:
			'Corleone - Sistemazione esterna lotto 262 contrada' +
			' San Marco. Opere di drenaggio per 26 alloggi' +
			' residenziali.',
		href: '#',
		image:
			'https://images.unsplash.com/photo-1581092583537-20d51876c1e3' +
			'?w=800&h=600&fit=crop',
		icon: <Droplet className='h-7 w-7' />,
	},
]

const otherProjects = [
	{
		title: 'Realizzazione rete idrica urbana',
		client: 'Comune di Santa Flavia',
	},
	{
		title: 'Realizzazione rete idrica urbana',
		client: 'Ventimiglia di Sicilia',
	},
]

export default function IdraulicaPage() {
	return (
		<div className='flex flex-col'>
			<section
				className='relative overflow-hidden
					bg-gradient-to-br from-accent/10 via-background
					to-accent/5 py-20 md:py-32'
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
									justify-center rounded-2xl bg-accent
									text-accent-foreground'
							>
								<Droplet className='h-8 w-8' />
							</div>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className='mb-6 text-4xl font-bold
								tracking-tight sm:text-5xl md:text-6xl'
						>
							Idraulica
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className='text-lg leading-relaxed
								text-muted-foreground md:text-xl'
						>
							Acquedotti, fognature, impianti irrigui, bonifiche,
							sistemazioni montane e fluviali, piani di
							utilizzazione delle risorse idriche, risanamento
							reti idriche, impianti di depurazione, riutilizzo
							acque reflue.
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
							Progettiamo e realizziamo opere idrauliche e
							infrastrutture per la gestione sostenibile delle
							risorse idriche, garantendo efficienza e rispetto
							dell&apos;ambiente.
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
											text-accent'
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
							Interventi su reti idriche e fognarie nei comuni
							siciliani
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

					<div className='grid gap-4 md:grid-cols-2'>
						{otherProjects.map((project, index) => (
							<motion.div
								key={project.client}
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.4,
									delay: index * 0.05,
								}}
							>
								<Card
									className='h-full transition-shadow
										hover:shadow-lg'
								>
									<CardHeader>
										<CardTitle className='text-lg'>
											{project.title}
										</CardTitle>
									</CardHeader>
									<CardContent>
										<div
											className='flex items-center gap-2
												text-sm text-muted-foreground'
										>
											<MapPin className='h-4 w-4' />
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
