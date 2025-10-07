'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
	ArrowLeft,
	MapPin,
	Building,
	CheckCircle,
} from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const projectDetails = {
	title:
		'Risanamento conservativo Hotel Wagner' +
		' - Struttura Turistico-Alberghiera 5 Stelle Superior',
	location: 'Palermo',
	category: 'Turismo',
	status: 'Conclusa',
	client: 'Coretur Hotels SRL',
	description:
		'Rifunzionalizzazione dell\'edificio in albergo' +
		' condotta attraverso lo studio dei flussi orizzontali e' +
		' verticali, verificando la compatibilità delle nuove' +
		' destinazioni con la distribuzione dell\'impianto' +
		' originario del corpo di fabbrica, utilizzato come sede' +
		' degli uffici amministrativi della Fondazione Teatro' +
		' Massimo.',
}

const floors = [
	{
		title: 'Piano Rialzato',
		description:
			'Accesso principale con scalinata in marmo di' +
			' Billiemi, reception, hall, bar e camere per disabili.',
	},
	{
		title: 'Piano Seminterrato',
		description:
			'Sala colazione, ristorante, cucina, magazzini e' +
			' locali tecnici con compartimentazione REI.',
	},
	{
		title: 'Piani 1°, 2° e 3°',
		description:
			'Camere singole, doppie, suites e junior suites con' +
			' servizio di piano dedicato.',
	},
	{
		title: 'Piano 4° - Terrazza',
		description:
			'Bar panoramico, sale eventi e accesso alla terrazza' +
			' con vista su Palermo.',
	},
]

const images = [
	{
		src: 'https://static.wixstatic.com/media/921ce7_6cfcc0c506f04d6d8693d5399677bcc1~mv2.jpg/v1/crop/x_47,y_0,w_2730,h_2600/fill/w_800,h_800,al_c,q_80,enc_avif,quality_auto/P1060789_JPG.jpg',
		alt: 'Hotel Wagner - Facciata principale',
	},
	{
		src: 'https://static.wixstatic.com/media/921ce7_b809a82ebe104e2db6ba3ac40801b149~mv2.png/v1/fill/w_800,h_600,al_c,q_85,enc_avif,quality_auto/PROSPETTO%40300x.png',
		alt: 'Prospetto architettonico',
	},
	{
		src: 'https://static.wixstatic.com/media/921ce7_0995438341aa48cdbe0e87121f409eaf~mv2.jpg/v1/fill/w_1600,h_800,al_c,q_85,enc_avif,quality_auto/921ce7_0995438341aa48cdbe0e87121f409eaf~mv2.jpg',
		alt: 'Interior design - Hall',
	},
	{
		src: 'https://static.wixstatic.com/media/921ce7_68ab1ba90ccf4b2dbb75793dbfaf72a3~mv2.jpg/v1/fill/w_1000,h_850,al_c,q_85,enc_avif,quality_auto/921ce7_68ab1ba90ccf4b2dbb75793dbfaf72a3~mv2.jpg',
		alt: 'Interior design - Dettagli',
	},
]

export default function HotelWagnerPage() {
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
							<Link href='/turismo'>
								<ArrowLeft className='mr-2 h-4 w-4' />
								Torna ai progetti di Turismo
							</Link>
						</Button>

						<div className='mb-4 flex flex-wrap gap-2'>
							<Badge variant='secondary'>
								{projectDetails.category}
							</Badge>
							<Badge variant='outline' className='text-white'>
								5 Stelle Superior
							</Badge>
							<Badge variant='outline' className='text-white'>
								{projectDetails.status}
							</Badge>
						</div>

						<h1
							className='mb-4 text-4xl font-bold text-white
								md:text-5xl lg:text-6xl'
						>
							Hotel Wagner
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
							className='rounded-lg border bg-primary/5 p-6
								md:p-8'
						>
							<p className='leading-relaxed'>
								Ciò ha permesso di ridurre al minimo gli
								interventi sulle murature portanti per le
								aperture e/o chiusure di nuovi vani e passaggi,
								conservando le caratteristiche strutturali,
								storiche e statiche dell&apos;edificio.
							</p>
						</div>
					</div>
				</div>
			</AnimatedSection>

			{/* Floors Section */}
			<section className='bg-muted/30 py-16 md:py-24'>
				<div className='container mx-auto px-4'>
					<AnimatedSection className='mb-12'>
						<h2 className='mb-4 text-3xl font-bold'>
							Distribuzione Funzionale
						</h2>
						<Separator className='mb-4 w-24' />
						<p className='text-muted-foreground'>
							Organizzazione degli spazi e percorsi dell&apos;
							hotel
						</p>
					</AnimatedSection>

					<div className='grid gap-6 md:grid-cols-2'>
						{floors.map((floor, index) => (
							<motion.div
								key={floor.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.5,
									delay: index * 0.1,
								}}
								className='rounded-lg border bg-card p-6'
							>
								<div className='mb-3 flex items-center gap-3'>
									<CheckCircle
										className='h-5 w-5 text-primary'
									/>
									<h3 className='text-lg font-bold'>
										{floor.title}
									</h3>
								</div>
								<p className='text-muted-foreground'>
									{floor.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Gallery Section */}
			<section className='py-16 md:py-24'>
				<div className='container mx-auto px-4'>
					<AnimatedSection className='mb-12'>
						<h2 className='mb-4 text-3xl font-bold'>
							Gallery del Progetto
						</h2>
						<Separator className='mb-4 w-24' />
					</AnimatedSection>

					<div className='grid gap-6 md:grid-cols-2'>
						{images.map((image, idx) => (
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
							riqualificazione turistica
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
