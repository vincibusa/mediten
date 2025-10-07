'use client'

import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { FeatureCard } from '@/components/feature-card'
import { Separator } from '@/components/ui/separator'
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
} from '@/components/ui/card'

const consultingServices = [
	{
		title: 'Sviluppo Territoriale',
		description:
			'Assistenza tecnica a programmi di sviluppo e' +
			' Progettazione integrata territoriale. Analisi SWOT e' +
			' individuazione linee strategiche.',
		href: '/consulting#sviluppo',
		image:
			'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab' +
			'?w=800&h=600&fit=crop',
		icon: <Briefcase className='h-7 w-7' />,
	},
	{
		title: 'Studi di Fattibilità',
		description:
			'Analisi Tecnico-Economiche. Proposizione soluzioni.' +
			' Analisi costi benefici. Percorsi amministrativi e' +
			' canali di finanziamento.',
		href: '/consulting#fattibilita',
		image:
			'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40' +
			'?w=800&h=600&fit=crop',
		icon: <Briefcase className='h-7 w-7' />,
	},
	{
		title: 'Progetti Agevolati',
		description:
			'Analisi per Istituti bancari. Valutazione ex-ante' +
			' progetti. Monitoraggio e collaudo interventi in' +
			' corso di realizzazione.',
		href: '/consulting#agevolati',
		image:
			'https://images.unsplash.com/photo-1554224155-6726b3ff858f' +
			'?w=800&h=600&fit=crop',
		icon: <Briefcase className='h-7 w-7' />,
	},
	{
		title: 'Sicurezza D.Lgs 81/2008',
		description:
			'Gestione prevenzione e protezione aziendale.' +
			' Coordinamento sicurezza cantieri. DVR e piani' +
			' emergenza ed evacuazione.',
		href: '/consulting#sicurezza',
		image:
			'https://images.unsplash.com/photo-1507537362848-9c7e70b7b5c1' +
			'?w=800&h=600&fit=crop',
		icon: <Briefcase className='h-7 w-7' />,
	},
]

const projects = [
	{
		client: 'MIUR',
		description:
			'Controllo di I livello con verifiche in loco degli' +
			' interventi sugli edifici scolastici selezionati' +
			' nell\'ambito del PON FESR "ambienti per' +
			' l\'apprendimento" 2007-2013.',
	},
	{
		client: 'S.A.CAL',
		description:
			'S.A.CAL - Società di gestione dell\'areoporto di' +
			' Lamezia Terme. Stima del ciclo di vita utile delle' +
			' infrastrutture aeroportuali per revisione piano di' +
			' ammortamento.',
	},
	{
		client: 'Piano Battaglia srl',
		description:
			'Progettazione e assistenza alle procedure di finanza' +
			' di progetto relative al Piano di sviluppo integrato' +
			' del comprensorio di Piano Battaglia.',
	},
	{
		client: 'Regione Siciliana',
		description:
			'Coordinamento attività di gestione, valutazione,' +
			' monitoraggio, controllo ed erogazione per SICILIA' +
			' FUTURO - Organismo Intermedio. Programma Operativo' +
			' Convergenza 2007-2013 - Fondo Sociale Europeo.',
	},
	{
		client: 'Misura 1.17 POR Sicilia',
		description:
			'Coordinamento attività di valutazione' +
			' tecnica economica, monitoraggio ed erogazione delle' +
			' iniziative imprenditoriali in Sicilia a valere sul I' +
			' Bando Misura 1.17 soggetti privati.',
	},
	{
		client: 'Istruttoria Legge 488/92',
		description:
			'Coordinamento attività istruttoria Legge 488/92 19°' +
			' bando Turismo e 20° bando Commercio. Coordinamento' +
			' verifiche tecniche per Programmi Complessi (Patti' +
			' territoriali e Contratti d\'area).',
	},
	{
		client: 'KPMG',
		description:
			'Servizio di inventariazione dei beni mobili e' +
			' immobili dell\'A.O.O.R. Papardo – Piemonte di' +
			' Messina per certificabilità dei bilanci.',
	},
	{
		client: 'Regione Sicilia - KPMG',
		description:
			'Assistenza tecnica per l\'attuazione del PRUSST della' +
			' città di Palermo e redazione studi di fattibilità' +
			' (Mercato Ortofrutticolo, Centro Congressi, Costa' +
			' Sud).',
	},
]

export default function ConsultingPage() {
	return (
		<div className='flex flex-col'>
			<section
				className='relative overflow-hidden
					bg-gradient-to-br from-primary/10 via-background
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
									justify-center rounded-2xl bg-primary
									text-primary-foreground'
							>
								<Briefcase className='h-8 w-8' />
							</div>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className='mb-6 text-4xl font-bold
								tracking-tight sm:text-5xl md:text-6xl'
						>
							Consulting
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className='text-lg leading-relaxed
								text-muted-foreground md:text-xl'
						>
							Consulenza ed assistenza di carattere tecnico,
							economico, finanziario, organizzativo nei confronti
							di soggetti pubblici e privati.
						</motion.p>
					</div>
				</div>
			</section>

			<section className='bg-muted/30 py-16 md:py-24'>
				<div className='container mx-auto px-4'>
					<AnimatedSection className='mb-12 text-center'>
						<h2 className='mb-6 text-3xl font-bold'>
							I Nostri Servizi
						</h2>
						<Separator className='mx-auto mb-4 w-24' />
						<p
							className='mx-auto max-w-2xl text-lg
								text-muted-foreground'
						>
							Soluzioni integrate per lo sviluppo territoriale e
							la consulenza specialistica
						</p>
					</AnimatedSection>

					<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
						{consultingServices.map((service, index) => (
							<FeatureCard
								key={service.title}
								{...service}
								delay={index * 0.1}
							/>
						))}
					</div>
				</div>
			</section>

			<AnimatedSection className='py-16 md:py-24'>
				<div className='container mx-auto px-4'>
					<div className='mb-12'>
						<h2 className='mb-4 text-3xl font-bold'>
							Principali Committenti e Progetti
						</h2>
						<Separator className='mb-4 w-24' />
						<p className='max-w-2xl text-lg text-muted-foreground'>
							Abbiamo collaborato con importanti enti pubblici e
							privati su progetti complessi di sviluppo
							territoriale e consulenza tecnica
						</p>
					</div>

					<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
						{projects.map((project, index) => (
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
											{project.client}
										</CardTitle>
									</CardHeader>
									<CardContent>
										<p
											className='text-sm
												text-muted-foreground'
										>
											{project.description}
										</p>
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
