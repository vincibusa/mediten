'use client'

import { motion } from 'framer-motion'
import { Hammer, CheckCircle } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { FeatureCard } from '@/components/feature-card'
import { Separator } from '@/components/ui/separator'

const projects = [
	{
		title:
			'Restauro e consolidamento della Chiesa di Santa' +
			' Maria dell\'Ammiraglio [Martorana]',
		description:
			'Palermo - Restauro conservativo mosaici bizantini' +
			' patrimonio UNESCO, superfici murarie dipinte e' +
			' decorazioni a stucco. Committente: Comune di Palermo.',
		href: '/progetti/martorana',
		image:
			'https://static.wixstatic.com/media/921ce7_a517969c5b1846f5b53c45db3b2c50e2~mv2.png/v1/crop/x_41,y_0,w_662,h_631/fill/w_800,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/martorana_edited.png',
		icon: <Hammer className='h-7 w-7' />,
	},
	{
		title:
			'Chiesa di Sant\'Ignazio martire della' +
			' Congregazione di San Filippo Neri',
		description:
			'Palermo - Restauro e risanamento conservativo' +
			' finanziato dal PNRR. Consolidamento campanili,' +
			' restauro facciata e cupola. Work in progress.',
		href: '/progetti/sant-ignazio-olivella',
		image:
			'https://static.wixstatic.com/media/921ce7_dbd488aa7ecd4bfbb4af82ee42f33510~mv2.png/v1/fill/w_800,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Chiesa%20di%20Sant\'Ignazio%20all\'Olivella_edited.png',
		icon: <Hammer className='h-7 w-7' />,
	},
	{
		title: 'Efficientamento Energetico di Palazzo Zanca',
		description:
			'Messina - Riqualificazione energetica edificio' +
			' monumentale neoclassico del 1914, sede del Comune.' +
			' Committente: Comune di Messina.',
		href: '/progetti/palazzo-zanca',
		image:
			'https://static.wixstatic.com/media/921ce7_274f2383c89346bfb73eaaa5d34c3d48~mv2.png/v1/fill/w_800,h_600,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/921ce7_274f2383c89346bfb73eaaa5d34c3d48~mv2.png',
		icon: <Hammer className='h-7 w-7' />,
	},
]

const features = [
	'Restauro conservativo di edifici monumentali',
	'Consolidamento strutturale',
	'Recupero di superfici murarie dipinte',
	'Restauro decorazioni a stucco',
	'Trattamento materiale lapideo',
	'Analisi e indagini tematiche preliminari',
]

export default function RestauroPage() {
	return (
		<div className='flex flex-col'>
			{/* Hero Section */}
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
								<Hammer className='h-8 w-8' />
							</div>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className='mb-6 text-4xl font-bold
								tracking-tight sm:text-5xl md:text-6xl'
						>
							Restauro
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className='text-lg leading-relaxed
								text-muted-foreground md:text-xl'
						>
							Restauro conservativo, consolidamento e recupero di
							edifici monumentali pubblici e privati, con
							particolare attenzione alle superfici murarie
							dipinte, decorazioni a stucco e materiale lapideo.
						</motion.p>
					</div>
				</div>
			</section>

			{/* Description Section */}
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
							Analisi e indagini tematiche preliminari
							propedeutiche alle operazioni di intervento. Il
							nostro approccio si basa su metodologie
							scientifiche e tecnologie avanzate per garantire il
							massimo rispetto del patrimonio storico e
							artistico.
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

		{/* Projects Section */}
		<section className='bg-muted/30 py-16 md:py-24'>
			<div className='container mx-auto px-4'>
				<AnimatedSection className='mb-12'>
					<h2 className='mb-4 text-3xl font-bold'>
						Progetti in Evidenza
					</h2>
					<Separator className='mb-4 w-24' />
					<p className='max-w-2xl text-lg text-muted-foreground'>
						Alcuni dei nostri progetti più significativi nel
						settore del restauro conservativo
					</p>
				</AnimatedSection>

				<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
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
