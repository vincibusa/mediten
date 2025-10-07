'use client'

import { motion } from 'framer-motion'
import { Building2, CheckCircle } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { FeatureCard } from '@/components/feature-card'
import { Separator } from '@/components/ui/separator'

const projects = [
	{
		title:
			'Centro di Addestramento Professionale' +
			' della Lavorazione del Marmo',
		description:
			'Custonaci, TP - Recupero ed adeguamento funzionale.' +
			' Struttura di 1.692 mq su 2 livelli per 125 allievi.' +
			' Committente: Comune di Custonaci.',
		href: '/progetti/centro-del-marmo',
		image:
			'https://static.wixstatic.com/media/921ce7_5298300b9d4c49328f08be8d163e4b48~mv2.jpg/v1/crop/x_0,y_0,w_2421,h_2304/fill/w_800,h_800,al_c,q_80,enc_avif,quality_auto/CENTRO%20DEL%20MARMO%20CUSTONACI.jpg',
		icon: <Building2 className='h-7 w-7' />,
	},
]

const features = [
	'Edilizia scolastica',
	'Teatri e centri congressi',
	'Centri sportivi',
	'Sedi e uffici di società ed enti',
	'Edifici industriali',
	'Risanamento strutturale',
	'Ristrutturazioni',
]

export default function EdiliziaPage() {
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
								<Building2 className='h-8 w-8' />
							</div>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className='mb-6 text-4xl font-bold
								tracking-tight sm:text-5xl md:text-6xl'
						>
							Edilizia
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className='text-lg leading-relaxed
								text-muted-foreground md:text-xl'
						>
							Edilizia scolastica, teatri, centri congressi,
							centri sportivi, sedi e uffici di società ed enti,
							edifici industriali, risanamento strutturale,
							ristrutturazioni.
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
							Realizziamo progetti di edilizia pubblica e
							privata, dalla progettazione alla direzione lavori,
							garantendo qualità, sicurezza e rispetto dei tempi.
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
						Progetti in Evidenza
					</h2>
					<Separator className='mb-4 w-24' />
					<p className='max-w-2xl text-lg text-muted-foreground'>
						Alcuni dei nostri progetti più significativi nel
						settore dell&apos;edilizia
					</p>
				</AnimatedSection>

				<div
					className='grid gap-6 md:grid-cols-2
						lg:grid-cols-3'
				>
					{projects.map((project, index) => (
						<FeatureCard
							key={project.href}
							{...project}
							delay={index * 0.1}
						/>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className='mt-12 text-center'
				>
					<p className='text-muted-foreground'>
						Altri contenuti presto disponibili
					</p>
				</motion.div>
			</div>
			</section>
		</div>
	)
}
