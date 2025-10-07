'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MapPin, Calendar, Building } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const projectDetails = {
	title:
		'Riqualificazione urbana del quartiere' +
		' Lenza-Orologio, Sito UNESCO',
	location: 'Siracusa',
	category: 'Riqualificazione',
	year: '2020',
	client: 'Comune di Siracusa',
	description:
		'Progetto di riqualificazione urbana del quartiere' +
		' storico Lenza-Orologio, inserito nella lista del' +
		' Patrimonio UNESCO. Interventi di recupero e' +
		' valorizzazione del tessuto urbano storico.',
}

const features = [
	'Recupero edifici storici',
	'Riqualificazione spazi pubblici',
	'Valorizzazione sito UNESCO',
	'Rifacimento pavimentazioni storiche',
	'Illuminazione artistica',
	'Accessibilità e mobilità sostenibile',
]

export default function PalazzoloAcreidePage() {
	return (
		<div className='flex flex-col'>
			{/* Hero Section */}
			<section className='relative h-[60vh] min-h-[500px]'>
				<Image
					src='https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?w=1600&h=900&fit=crop'
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
							<Link href='/riqualificazione'>
								<ArrowLeft className='mr-2 h-4 w-4' />
								Torna ai progetti di Riqualificazione
							</Link>
						</Button>

						<div className='mb-4 flex flex-wrap gap-2'>
							<Badge variant='secondary'>
								{projectDetails.category}
							</Badge>
							<Badge variant='outline' className='text-white'>
								UNESCO
							</Badge>
							<Badge variant='outline' className='text-white'>
								{projectDetails.year}
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
								<Calendar className='h-4 w-4' />
								{projectDetails.year}
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
							className='mb-8 text-lg leading-relaxed
								text-muted-foreground'
						>
							{projectDetails.description}
						</p>

						<p className='mb-8 text-lg text-muted-foreground'>
							Il quartiere Lenza-Orologio rappresenta una delle
							aree più significative del centro storico di
							Siracusa. Il progetto ha previsto un intervento
							integrato di riqualificazione urbana nel pieno
							rispetto dei vincoli UNESCO, valorizzando
							l&apos;identità storica e culturale del luogo.
						</p>

						<h3 className='mb-6 text-2xl font-bold'>
							Interventi Realizzati
						</h3>
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
									className='flex items-start gap-3
										rounded-lg border bg-card p-4'
								>
									<div
										className='mt-1 h-2 w-2 flex-shrink-0
											rounded-full bg-accent'
									/>
									<span className='font-medium'>{feature}</span>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</AnimatedSection>

			{/* Gallery Section */}
			<section className='bg-muted/30 py-16 md:py-24'>
				<div className='container mx-auto px-4'>
					<AnimatedSection className='mb-12'>
						<h2 className='mb-4 text-3xl font-bold'>Gallery</h2>
						<Separator className='mb-4 w-24' />
					</AnimatedSection>

					<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
						{[1, 2, 3].map((item) => (
							<motion.div
								key={item}
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.5,
									delay: item * 0.1,
								}}
								className='group relative aspect-video
									overflow-hidden rounded-lg'
							>
								<Image
									src={`https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?w=800&h=600&fit=crop&q=80&auto=format&sig=${item}`}
									alt={`${projectDetails.title} - Immagine ${item}`}
									fill
									className='object-cover transition-transform
										duration-500 group-hover:scale-110'
								/>
							</motion.div>
						))}
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
							riqualificazione urbana
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

