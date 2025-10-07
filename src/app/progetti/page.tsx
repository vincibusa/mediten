'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
	Building2,
	Hammer,
	Recycle,
	Hotel,
	Droplet,
	Zap,
	Briefcase,
} from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { FeatureCard } from '@/components/feature-card'
import { Separator } from '@/components/ui/separator'

const architectureServices = [
	{
		title: 'Restauro',
		description:
			'Restauro conservativo e recupero di edifici' +
			' monumentali pubblici e privati',
		href: '/restauro',
		image:
			'https://images.unsplash.com/photo-1558618666-fcd25c85cd64' +
			'?w=800&h=600&fit=crop',
		icon: <Hammer className='h-7 w-7' />,
	},
	{
		title: 'Riqualificazione',
		description:
			'Riqualificazione urbana e valorizzazione delle' +
			' aree archeologiche e storiche',
		href: '/riqualificazione',
		image:
			'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab' +
			'?w=800&h=600&fit=crop',
		icon: <Recycle className='h-7 w-7' />,
	},
	{
		title: 'Edilizia',
		description:
			'Edilizia pubblica e privata, ristrutturazioni e' +
			' risanamento strutturale',
		href: '/edilizia',
		image:
			'https://images.unsplash.com/photo-1503387762-592deb58ef4e' +
			'?w=800&h=600&fit=crop',
		icon: <Building2 className='h-7 w-7' />,
	},
	{
		title: 'Turismo',
		description:
			'Valorizzazione turistica aree urbane e centri' +
			' storici',
		href: '/turismo',
		image:
			'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb' +
			'?w=800&h=600&fit=crop',
		icon: <Hotel className='h-7 w-7' />,
	},
	{
		title: 'Idraulica',
		description:
			'Opere idrauliche e gestione sostenibile delle' +
			' risorse idriche',
		href: '/idraulica',
		image:
			'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789' +
			'?w=800&h=600&fit=crop',
		icon: <Droplet className='h-7 w-7' />,
	},
	{
		title: 'Energia',
		description:
			'Energie rinnovabili, efficientamento e' +
			' sostenibilità energetica',
		href: '/energia',
		image:
			'https://images.unsplash.com/photo-1509391366360-2e959784a276' +
			'?w=800&h=600&fit=crop',
		icon: <Zap className='h-7 w-7' />,
	},
	{
		title: 'Consulting',
		description:
			'Consulenza tecnico-economica e sviluppo' +
			' territoriale integrato',
		href: '/consulting',
		image:
			'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40' +
			'?w=800&h=600&fit=crop',
		icon: <Briefcase className='h-7 w-7' />,
	},
]

export default function ProgettiPage() {
	return (
		<div className='flex flex-col'>
			<section
				className='relative overflow-hidden
					bg-gradient-to-br from-primary/5 via-background
					to-accent/5 py-20 md:py-32'
			>
				<div className='container relative z-10 mx-auto px-4'>
					<div className='mx-auto max-w-4xl text-center'>
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className='mb-6 text-4xl font-bold
								tracking-tight sm:text-5xl md:text-6xl'
						>
							I Nostri Progetti
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className='mx-auto max-w-2xl text-lg
								text-muted-foreground md:text-xl'
						>
							La Mediterranea Engineering S.r.l., opera nei
							settori della progettazione, direzione lavori e
							collaudo delle opere di ingegneria, architettura,
							urbanistica e della progettazione integrata.
						</motion.p>
					</div>
				</div>
			</section>

			<AnimatedSection className='py-16 md:py-24'>
				<div className='container mx-auto px-4'>
					<div className='mx-auto max-w-4xl text-center'>
						<h2 className='mb-6 text-3xl font-bold'>
							Architecture & Engineering
						</h2>
						<Separator className='mx-auto mb-8 w-24' />
						<p className='text-lg text-muted-foreground'>
							La Società si avvale di uno staff professionale di
							architetti, ingegneri ed altri esperti
							specializzati nelle varie discipline in grado di far
							fronte ai servizi richiesti per lo studio, la
							ricerca, la pianificazione, la progettazione, la
							costruzione ed il controllo qualità di progetti su
							vasta scala.
						</p>
					</div>
				</div>
			</AnimatedSection>

			<section className='bg-muted/30 py-16 md:py-24'>
				<div className='container mx-auto px-4'>
					<AnimatedSection className='mb-12 text-center'>
						<h2 className='mb-6 text-3xl font-bold'>
							Esplora i Progetti per Settore
						</h2>
						<Separator className='mx-auto mb-4 w-24' />
					</AnimatedSection>

				<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
					{architectureServices.map((service, index) => (
						<FeatureCard
							key={service.href}
							{...service}
							delay={index * 0.1}
						/>
					))}
				</div>
				</div>
			</section>

			<AnimatedSection className='py-16 md:py-24'>
				<div className='container mx-auto px-4'>
					<div className='mx-auto max-w-4xl text-center'>
						<h2 className='mb-6 text-3xl font-bold'>Consulting</h2>
						<Separator className='mx-auto mb-8 w-24' />
						<p className='mb-8 text-lg text-muted-foreground'>
							La Società svolge anche attività di consulenza ed
							assistenza di carattere tecnico, economico,
							finanziario, organizzativo nei confronti di soggetti
							pubblici e privati. I suoi interlocutori principali
							sono gli organi della Pubblica Amministrazione e le
							istituzioni nazionali impegnate nella
							programmazione e nella realizzazione di interventi a
							scala territoriale.
						</p>
						<Link
							href='/consulting'
							className='inline-block text-lg font-medium
								text-primary underline-offset-4
								hover:underline'
						>
							Scopri i nostri servizi di consulenza →
						</Link>
					</div>
				</div>
			</AnimatedSection>
		</div>
	)
}

