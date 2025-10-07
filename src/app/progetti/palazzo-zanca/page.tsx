'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
	ArrowLeft,
	MapPin,
	Calendar,
	Building,
} from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const projectDetails = {
	title: 'Efficientamento Energetico di Palazzo Zanca',
	location: 'Messina',
	category: 'Riqualificazione',
	status: 'Conclusa',
	year: '1914 (edificio storico)',
	client: 'Comune di Messina',
	description:
		'La sede municipale di Palazzo Zanca a Messina è' +
		' composto dal fabbricato monumentale, risalente al 1914,' +
		' e da un Palazzetto Uffici costruito nel 1970,' +
		' ricadenti nell\'attuale PRG in zona A1. Palazzo Zanca è' +
		' un bene architettonico vincolato ai sensi dell\'art. 10' +
		' del D.L. 22 gennaio 2004, n. 42. e presenta uno stile' +
		' neoclassico con una superficie di circa 12.000 m².',
}

const interventions = [
	{
		title: 'Isolamento termico involucro edilizio',
		description: 'Coibentazione pareti e coperture',
	},
	{
		title: 'Sostituzione impianti termici',
		description: 'Nuovi impianti ad alta efficienza',
	},
	{
		title: 'Sistema di climatizzazione',
		description: 'Ottimizzazione impianti meccanici',
	},
	{
		title: 'Impianti elettrici e tecnologici',
		description: 'Adeguamento e miglioramento standard',
	},
	{
		title: 'Building Management System',
		description: 'Telecontrollo e gestione centralizzata',
	},
	{
		title: 'Risparmio energetico',
		description: 'Riduzione consumi oltre 60%',
	},
]

const images = [
	{
		src: 'https://static.wixstatic.com/media/921ce7_274f2383c89346bfb73eaaa5d34c3d48~mv2.png/v1/fill/w_1600,h_400,al_c,q_90,enc_avif,quality_auto/921ce7_274f2383c89346bfb73eaaa5d34c3d48~mv2.png',
		alt: 'Palazzo Zanca - Vista esterna',
	},
	{
		src: 'https://static.wixstatic.com/media/921ce7_f0814d257f004c4eba3eee4f74604709~mv2.png/v1/fill/w_800,h_650,al_c,q_90,enc_avif,quality_auto/pianta%40300x.png',
		alt: 'Pianta dell\'edificio',
	},
	{
		src: 'https://static.wixstatic.com/media/921ce7_0b43ce24182c4bd2a5ee707e8a706769~mv2.jpg/v1/fill/w_800,h_700,al_c,q_80,enc_avif,quality_auto/921ce7_0b43ce24182c4bd2a5ee707e8a706769~mv2.jpg',
		alt: 'Dettaglio facciata',
	},
	{
		src: 'https://static.wixstatic.com/media/921ce7_07593da59d474ae18aaadb682e5d2fae~mv2.png/v1/fill/w_1600,h_800,al_c,q_90,enc_avif,quality_auto/921ce7_07593da59d474ae18aaadb682e5d2fae~mv2.png',
		alt: 'Prospetto completo',
	},
]

export default function PalazzoZancaPage() {
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
								Edificio Vincolato
							</Badge>
							<Badge variant='outline' className='text-white'>
								{projectDetails.status}
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
							className='mb-6 text-lg leading-relaxed
								text-muted-foreground'
						>
							{projectDetails.description}
						</p>

						<p className='mb-8 text-lg text-muted-foreground'>
							Nell&apos;ambito del Progetto Esecutivo per
							l&apos;efficientamento energetico di Palazzo Zanca
							e del Palazzetto Uffici, sono stati svolti i servizi
							di adeguamento e miglioramento degli standard di
							comfort abitativo degli ambienti uffici, di
							adeguamento e ottimizzazione degli impianti
							esistenti, la progettazione esecutiva dei nuovi
							impianti elettrici, tecnologici, di sicurezza,
							nonché degli impianti meccanici di climatizzazione.
						</p>

						<h3 className='mb-6 text-2xl font-bold'>
							Iter Progettuale
						</h3>
						<div
							className='mb-8 rounded-lg border bg-card p-6
								md:p-8'
						>
							<p className='leading-relaxed text-muted-foreground'>
								La destinazione funzionale e la valenza
								storico-architettonica dell&apos;edificio ha
								richiesto una progettazione mirata
								all&apos;efficientamento energetico nel rispetto
								dei vincoli architettonici e strutturali. L&apos;
								iter progettuale è stato condotto attraverso
								un&apos;analisi delle criticità presenti e
								individuazione di soluzioni integrative tali da
								assicurare sicurezza, qualità dello spazio,
								efficienza, contenimento dei consumi e
								ottimizzazione gestionale.
							</p>
						</div>

						<h3 className='mb-6 text-2xl font-bold'>
							Interventi Realizzati
						</h3>
						<div className='grid gap-4 sm:grid-cols-2'>
							{interventions.map((intervention, index) => (
								<motion.div
									key={intervention.title}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{
										duration: 0.5,
										delay: index * 0.1,
									}}
									className='rounded-lg border bg-card p-4'
								>
									<h4 className='mb-2 font-semibold'>
										{intervention.title}
									</h4>
									<p
										className='text-sm
											text-muted-foreground'
									>
										{intervention.description}
									</p>
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
						<h2 className='mb-4 text-3xl font-bold'>
							Documentazione Progettuale
						</h2>
						<Separator className='mb-4 w-24' />
						<p className='text-muted-foreground'>
							Piante, prospetti e modello BIM dell&apos;edificio
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
								className='group relative aspect-video
									overflow-hidden rounded-lg'
							>
								<Image
									src={image.src}
									alt={image.alt}
									fill
									className='object-cover transition-transform
										duration-500 group-hover:scale-110'
								/>
							</motion.div>
						))}
					</div>

					<AnimatedSection className='mt-12'>
						<div
							className='rounded-lg border bg-primary/5 p-6
								md:p-8'
						>
							<h3 className='mb-4 text-xl font-bold'>
								Modello BIM
							</h3>
							<p className='mb-4 text-muted-foreground'>
								Il progetto è stato sviluppato in ambiente BIM,
								eseguendo la modellazione 3D sulla base del
								rilievo geometrico, dal rilievo fotografico con
								foto 360, dal rilievo laser scanner con la
								restituzione di una nuvola di punti. Gli
								impianti di progetto sono stati posizionati in
								modo coordinato e georeferenziato rispetto al
								modello BIM architettonico ed alla scansione
								laser 3D.
							</p>
						</div>
					</AnimatedSection>
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
							riqualificazione energetica
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
