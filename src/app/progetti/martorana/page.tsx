'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MapPin, Calendar, Building } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const projectDetails = {
	title:
		'Chiesa di Santa Maria dell\'Ammiraglio' +
		' [Martorana]',
	location: 'Palermo',
	category: 'Restauro',
	status: 'Conclusa',
	client: 'Comune di Palermo',
	description:
		'Il servizio svolto dalla Mediterranea Engineering per il' +
		' Restauro e Consolidamento della Chiesa si Santa Maria' +
		' dell\'Ammiraglio - Martorana - a Palermo, è stato' +
		' condotto mediante una sensibilità storico-critica e' +
		' competenza tecnica, elaborando strategie mirate a' +
		' molteplici tipologie di manufatti risalenti a periodi' +
		' storici differenti.',
}

const galleryCategories = [
	{
		title: 'Mosaici Nucleo Normanno',
		images: [
			'https://static.wixstatic.com/media/921ce7_cd794249f05f4d7c8f8c80260fd0b801~mv2.png/v1/fill/w_800,h_1000,al_c,q_85,enc_avif,quality_auto/921ce7_cd794249f05f4d7c8f8c80260fd0b801~mv2.png',
			'https://static.wixstatic.com/media/921ce7_f540619c62444cdb951151a5279b2a7d~mv2.png/v1/fill/w_800,h_1000,al_c,q_85,enc_avif,quality_auto/921ce7_f540619c62444cdb951151a5279b2a7d~mv2.png',
			'https://static.wixstatic.com/media/921ce7_720b5b6b57b449fdafd0f8c3fd2e5172~mv2.jpg/v1/fill/w_800,h_1000,al_c,q_80,enc_avif,quality_auto/921ce7_720b5b6b57b449fdafd0f8c3fd2e5172~mv2.jpg',
		],
	},
	{
		title: 'Affreschi Borremans',
		images: [
			'https://static.wixstatic.com/media/921ce7_ada1295d7fb344b7bfe1d8d750afeb1c~mv2.png/v1/fill/w_800,h_1000,al_c,q_85,enc_avif,quality_auto/921ce7_ada1295d7fb344b7bfe1d8d750afeb1c~mv2.png',
			'https://static.wixstatic.com/media/921ce7_dc0d4e3cb11141dabeafa6727181a2c8~mv2.png/v1/fill/w_800,h_1000,al_c,q_85,enc_avif,quality_auto/921ce7_dc0d4e3cb11141dabeafa6727181a2c8~mv2.png',
		],
	},
	{
		title: 'Pavimentazioni',
		images: [
			'https://static.wixstatic.com/media/921ce7_092b69044d9c4557b69d010a443e3a3a~mv2.png/v1/fill/w_800,h_600,al_c,q_85,enc_avif,quality_auto/921ce7_092b69044d9c4557b69d010a443e3a3a~mv2.png',
			'https://static.wixstatic.com/media/921ce7_39b0d0d0da8b4eeabfa76f4fbd4e3dae~mv2.png/v1/fill/w_800,h_600,al_c,q_85,enc_avif,quality_auto/921ce7_39b0d0d0da8b4eeabfa76f4fbd4e3dae~mv2.png',
		],
	},
]

export default function MartoranaPage() {
	return (
		<div className='flex flex-col'>
			{/* Hero Section */}
			<section className='relative h-[60vh] min-h-[500px]'>
				<Image
					src='https://static.wixstatic.com/media/921ce7_a517969c5b1846f5b53c45db3b2c50e2~mv2.png/v1/crop/x_41,y_0,w_662,h_631/fill/w_1600,h_1200,al_c,q_85,enc_avif,quality_auto/martorana_edited.png'
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
							<Link href='/restauro'>
								<ArrowLeft className='mr-2 h-4 w-4' />
								Torna ai progetti di Restauro
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
							La Martorana, bene vincolato ope legis e facente
							parte della World Heritage List - UNESCO, è
							caratterizzato da un forte sincretismo culturale, le
							cui operazioni di restauro e di consolidamento hanno
							interessato il monumento nella sua globalità,
							intervenendo sia sugli apparati musivi, che
							caratterizzano l&apos;originario nucleo di epoca
							normanna (1143), sia le decorazioni parietali del
							XVII sec., sia gli apparati a marmi mischi e
							tramischi, le pavimentazioni normanne e barocche.
						</p>

						<div
							className='rounded-lg border bg-accent/10 p-6
								md:p-8'
						>
							<p className='text-base leading-relaxed'>
								Tutte le operazioni sono state effettuate per
								singole fasi, articolate in microcantieri in
								modo tale da non interrompere la fruizione del
								sito e di operare di concerto con i consulenti,
								i funzionari preposti. Il servizio è stato
								svolto in regime di qualità, pianificando di
								concerto alla Soprintendenza, le sequenze, le
								modalità, i test, le strumentazioni, i mezzi
								d&apos;opera atti a garantire l&apos;effettiva
								esecuzione a regola d&apos;arte.
							</p>
						</div>
					</div>
				</div>
			</AnimatedSection>

			{/* Gallery Section */}
			<section className='bg-muted/30 py-16 md:py-24'>
				<div className='container mx-auto px-4'>
					<AnimatedSection className='mb-12'>
						<h2 className='mb-4 text-3xl font-bold'>
							Gallery dei Lavori
						</h2>
						<Separator className='mb-4 w-24' />
						<p className='text-muted-foreground'>
							Documentazione fotografica degli interventi di
							restauro
						</p>
					</AnimatedSection>

					<Tabs defaultValue='mosaici' className='w-full'>
						<TabsList className='mb-8 grid w-full
							md:w-auto md:inline-grid md:grid-cols-3'
						>
							<TabsTrigger value='mosaici'>
								Mosaici Normanni
							</TabsTrigger>
							<TabsTrigger value='affreschi'>
								Affreschi Borremans
							</TabsTrigger>
							<TabsTrigger value='pavimenti'>
								Pavimentazioni
							</TabsTrigger>
						</TabsList>

						{galleryCategories.map((category) => (
							<TabsContent
								key={category.title}
								value={category.title
									.toLowerCase()
									.split(' ')[0]}
								className='mt-0'
							>
								<div
									className='grid gap-6 md:grid-cols-2
										lg:grid-cols-3'
								>
									{category.images.map((image, idx) => (
										<motion.div
											key={idx}
											initial={{ opacity: 0, scale: 0.9 }}
											whileInView={{ opacity: 1, scale: 1 }}
											viewport={{ once: true }}
											transition={{
												duration: 0.5,
												delay: idx * 0.1,
											}}
											className='group relative aspect-[4/5]
												overflow-hidden rounded-lg'
										>
											<Image
												src={image}
												alt={`${category.title} - ${idx + 1}`}
												fill
												className='object-cover
													transition-transform
													duration-500
													group-hover:scale-110'
											/>
										</motion.div>
									))}
								</div>
							</TabsContent>
						))}
					</Tabs>
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
							restauro conservativo
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
