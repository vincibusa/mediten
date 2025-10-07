'use client'

import { motion } from 'framer-motion'
import { Recycle, CheckCircle } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { FeatureCard } from '@/components/feature-card'
import { Separator } from '@/components/ui/separator'

const projects = [
	{
		title:
			'Riqualificazione urbana del quartiere' +
			' Lenza-Orologio, Sito UNESCO',
		description:
			'Siracusa - Recupero patrimonio abitativo urbano e' +
			' rilancio funzionale. 10 alloggi edilizia sociale.' +
			' Committente: Comune di Palazzolo Acreide.',
		href: '/progetti/palazzolo-acreide',
		image:
			'https://static.wixstatic.com/media/921ce7_894c2f6ca524455fad7d33f2a24dd19a~mv2.png/v1/crop/x_73,y_0,w_2041,h_1944/fill/w_800,h_800,al_c,q_85,enc_avif,quality_auto/Alloggi3-2%5B1%5D%20copia.png',
		icon: <Recycle className='h-7 w-7' />,
	},
	{
		title: 'Efficientamento Energetico di Palazzo Zanca',
		description:
			'Messina - Riqualificazione energetica edificio' +
			' monumentale 12.000 mq. Progetto BIM e tecnologie' +
			' avanzate. Committente: Comune di Messina.',
		href: '/progetti/palazzo-zanca',
		image:
			'https://static.wixstatic.com/media/921ce7_f91f5418f60e4bd0a5a82de18d788559~mv2.png/v1/crop/x_0,y_0,w_1268,h_1208/fill/w_800,h_800,al_c,q_85,enc_avif,quality_auto/IMG_8453_edited_edited.png',
		icon: <Recycle className='h-7 w-7' />,
	},
]

const features = [
	'Recupero e riqualificazione dei Centri Storici',
	'Riqualificazione aree urbane',
	'Riqualificazione aree archeologiche terrestri',
	'Valorizzazione aree archeologiche marine',
	'Riqualificazione ambientale di aree compromesse',
	'Recupero di aree degradate',
]

export default function RiqualificazionePage() {
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
								<Recycle className='h-8 w-8' />
							</div>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className='mb-6 text-4xl font-bold
								tracking-tight sm:text-5xl md:text-6xl'
						>
							Riqualificazione
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className='text-lg leading-relaxed
								text-muted-foreground md:text-xl'
						>
							Recupero e riqualificazione dei Centri Storici;
							Riqualificazione aree urbane; Riqualificazione e
							valorizzazione delle aree archeologiche terrestri e
							marine; Riqualificazione ambientale di aree
							compromesse e degradate.
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
							Progettiamo interventi integrati di
							riqualificazione urbana e ambientale, valorizzando
							il patrimonio storico-culturale e promuovendo lo
							sviluppo sostenibile del territorio.
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
						Progetti in Evidenza
					</h2>
					<Separator className='mb-4 w-24' />
					<p className='max-w-2xl text-lg text-muted-foreground'>
						Alcuni dei nostri progetti più significativi nel
						settore della riqualificazione urbana e ambientale
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
