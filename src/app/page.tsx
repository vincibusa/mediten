'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
	Hammer,
	Recycle,
	Hotel,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/components/animated-section'
import { Separator } from '@/components/ui/separator'
import Autoplay from 'embla-carousel-autoplay'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { Badge } from '@/components/ui/badge'


const ongoingProjects = [
	{
		title: 'Palazzo Zanca',
		description:
			'Progetto di restauro conservativo e consolidamento ' +
			'strutturale del Palazzo Zanca, sede del Comune di Messina.',
		image:
			'https://images.unsplash.com/photo-1511818966892-d7d671e672a2' +
			'?w=800&h=600&fit=crop',
		href: '/progetti/palazzo-zanca',
		icon: <Hammer className='h-7 w-7' />,
	},
	{
		title: 'Hotel Wagner',
		description:
			'Riqualificazione e rifunzionalizzazione dell\'Hotel ' +
			'Wagner nel centro storico di Palermo.',
		image:
			'https://images.unsplash.com/photo-1566073771259-6a8506099945' +
			'?w=800&h=600&fit=crop',
		href: '/progetti/hotel-wagner',
		icon: <Hotel className='h-7 w-7' />,
	},
	{
		title: 'Sant\'Ignazio all\'Olivella',
		description:
			'Intervento di restauro e valorizzazione della Chiesa ' +
			'di Sant\'Ignazio all\'Olivella a Palermo.',
		image:
			'https://images.unsplash.com/photo-1502602898657-3e91760cbb34' +
			'?w=800&h=600&fit=crop',
		href: '/progetti/sant-ignazio-olivella',
		icon: <Hammer className='h-7 w-7' />,
	},
	{
		title: 'Centro del Marmo',
		description:
			'Riqualificazione area industriale dismessa per la ' +
			'creazione di un centro espositivo e formativo.',
		image:
			'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab' +
			'?w=800&h=600&fit=crop',
		href: '/progetti/centro-del-marmo',
		icon: <Recycle className='h-7 w-7' />,
	},
]

export default function HomePage() {
	return (
		<div className='flex flex-col'>
			{/* Hero Section */}
			<section className='relative flex min-h-screen items-center justify-center overflow-hidden py-20 md:py-32'>
				{/* Background Image */}
				<div className='absolute inset-0 z-0'>
					<Image
						src='/hero.avif'
						alt='Mediterranea Engineering'
						fill
						className='object-cover'
						priority
						quality={90}
					/>
				</div>

				<div className='container relative z-10 mx-auto px-4'>
					<div className='mx-auto max-w-4xl text-center'>
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6 }}
							className='mb-6 inline-flex items-center gap-2'
						>
							<Badge
								variant='outline'
								className='border-white/40 bg-black/30
									text-sm text-white backdrop-blur-sm'
							>
								Dal 1997
							</Badge>
							<Badge
								variant='outline'
								className='border-white/40 bg-black/30
									text-sm text-white backdrop-blur-sm'
							>
								ISO 9001:2015
							</Badge>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className='mb-6 text-4xl font-bold
								tracking-tight sm:text-5xl md:text-6xl
								lg:text-7xl'
							style={{
								textShadow: '2px 2px 4px rgba(0,0,0,0.3), 0 0 40px rgba(0,0,0,0.2)'
							}}
						>
							<span className='text-white'>
								MEDITERRANEA
							</span>
							<br />
							<span className='text-white'>ENGINEERING</span>
						</motion.h1>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className='mb-8'
							style={{
								textShadow: '1px 1px 3px rgba(0,0,0,0.5), 0 0 20px rgba(0,0,0,0.3)'
							}}
						>
							<p
								className='mx-auto max-w-2xl text-lg
									text-white/90 md:text-xl'
							>
								L&apos;arte è ricerca continua, assimilazione
								delle esperienze passate, aggiunta di
								esperienze nuove, nella forma, nel contenuto,
								nella materia, nella tecnica, nei mezzi.
							</p>
							<p className='mt-4 text-sm italic text-white/80'>
								— Bruno Munari
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.3 }}
							className='flex flex-col items-center
								justify-center gap-4 sm:flex-row'
						>
							<Button asChild size='lg' className='min-w-[200px]'>
								<Link href='/progetti'>
									Scopri i nostri progetti
								</Link>
							</Button>
							<Button
								asChild
								variant='outline'
								size='lg'
								className='min-w-[200px]'
							>
								<Link href='/contatti'>Contattaci</Link>
							</Button>
						</motion.div>
					</div>
				</div>
			</section>


			{/* Progetti in Corso Section */}
			<section className='py-16 md:py-24'>
				<div className='container mx-auto px-4'>
					<AnimatedSection className='mb-12 text-center'>
						<h2 className='mb-6 text-3xl font-bold md:text-4xl'>
							Progetti in Corso
						</h2>
						<Separator className='mx-auto mb-4 w-24' />
						<p
							className='mx-auto max-w-2xl text-lg
								text-muted-foreground'
						>
							I nostri progetti attualmente in fase di realizzazione
						</p>
					</AnimatedSection>

					{/* Carousel Section */}
					<div className='relative mx-auto w-full max-w-[90vw]'>
						<Carousel
							plugins={[
								Autoplay({
									delay: 4000,
								}),
							]}
							className='w-full'
							opts={{
								align: 'center',
								loop: true,
							}}
						>
							<CarouselContent>
								{ongoingProjects.map((project) => (
									<CarouselItem key={project.href}>
										<div className='relative h-[80vh] w-full overflow-hidden rounded-3xl'>
											<Image
												src={project.image}
												alt={project.title}
												fill
												className='object-cover transition-transform duration-700 hover:scale-105'
											/>
											<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent' />
											<div className='absolute bottom-0 left-0 p-8 md:p-12'>
												<motion.div
													initial={{ opacity: 0, y: 20 }}
													whileInView={{ opacity: 1, y: 0 }}
													transition={{ delay: 0.2 }}
												>
													<div className='mb-4 flex items-center gap-2 text-primary'>
														{project.icon}
														<span className='text-sm font-medium uppercase tracking-wider text-white/80'>
															In Corso
														</span>
													</div>
													<h3 className='mb-4 text-3xl font-bold text-white md:text-5xl'>
														{project.title}
													</h3>
													<p className='max-w-xl text-lg text-white/90 md:text-xl'>
														{project.description}
													</p>
													<Button
														asChild
														className='mt-6'
														variant='secondary'
													>
														<Link href={project.href}>
															Vedi Progetto
														</Link>
													</Button>
												</motion.div>
											</div>
										</div>
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselPrevious className='left-4 hidden md:flex' />
							<CarouselNext className='right-4 hidden md:flex' />
						</Carousel>
					</div>

					{/* View All Projects Button */}
					<AnimatedSection className='mt-8 text-center'>
						<Button asChild size='lg' variant='outline'>
							<Link href='/progetti'>
								Vedi tutti i progetti
								<motion.span
									className='ml-2 inline-block'
									animate={{ x: [0, 5, 0] }}
									transition={{
										duration: 1.5,
										repeat: Infinity,
										ease: 'easeInOut',
									}}
								>
									→
								</motion.span>
							</Link>
						</Button>
					</AnimatedSection>
				</div>
			</section>


		</div>
	)
}
