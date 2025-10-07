'use client'

import { motion } from 'framer-motion'
import { Hotel, CheckCircle } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { FeatureCard } from '@/components/feature-card'
import { Separator } from '@/components/ui/separator'

const projects = [
	{
		title:
			'Risanamento conservativo Hotel Wagner - Struttura' +
			' Turistico-Alberghiera 5 Stelle Superior',
		description:
			'Palermo - Rifunzionalizzazione edificio da uffici' +
			' della Fondazione Teatro Massimo a hotel di lusso.' +
			' Studio flussi e compatibilità nuove destinazioni.',
		href: '/progetti/hotel-wagner',
		image:
			'https://static.wixstatic.com/media/921ce7_6cfcc0c506f04d6d8693d5399677bcc1~mv2.jpg/v1/crop/x_47,y_0,w_2730,h_2600/fill/w_800,h_800,al_c,q_80,enc_avif,quality_auto/P1060789_JPG.jpg',
		icon: <Hotel className='h-7 w-7' />,
	},
]

const features = [
	'Recupero immobili per attività turistica',
	'Riqualificazione strutture ricettive',
	'Rifunzionalizzazione immobili storici',
	'Valorizzazione turistica aree urbane',
	'Valorizzazione centri storici',
	'Progetti integrati turismo-cultura',
]

export default function TurismoPage() {
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
								<Hotel className='h-8 w-8' />
							</div>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className='mb-6 text-4xl font-bold
								tracking-tight sm:text-5xl md:text-6xl'
						>
							Turismo
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className='text-lg leading-relaxed
								text-muted-foreground md:text-xl'
						>
							Recupero, riqualificazione e rifunzionalizzazione
							immobili da destinare ad attività turistica;
							Valorizzazione turistica aree urbane e centri
							storici.
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
							Sviluppiamo progetti di valorizzazione turistica
							del patrimonio culturale e ambientale, favorendo lo
							sviluppo economico e sociale del territorio.
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
						settore del turismo
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

