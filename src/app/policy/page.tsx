'use client'

import { motion } from 'framer-motion'
import { Shield, CheckCircle } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'

const certifications = [
	'ISO 9001:2015 - Sistema di Gestione Qualità',
	'ISO 14001 - Sistema di Gestione Ambientale',
	'ISO 37001 - Sistema di Gestione Anticorruzione',
	'ISO 45001 - Sistema di Gestione Salute e Sicurezza',
	'PdR 125 - Parità di Genere',
]

export default function PolicyPage() {
	return (
		<div className='flex flex-col'>
			<section
				className='relative overflow-hidden
					bg-gradient-to-br from-primary/5 via-background
					to-accent/5 py-20 md:py-32'
			>
				<div className='container relative z-10 mx-auto px-4'>
					<div className='mx-auto max-w-4xl text-center'>
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
								<Shield className='h-8 w-8' />
							</div>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className='mb-6 text-4xl font-bold
								tracking-tight sm:text-5xl md:text-6xl'
						>
							Policy e Certificazioni
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className='mx-auto max-w-2xl text-lg
								text-muted-foreground md:text-xl'
						>
							La Mediterranea Engineering srl è conforme alle
							principali normative internazionali per qualità,
							ambiente, sicurezza e parità di genere
						</motion.p>
					</div>
				</div>
			</section>

			<AnimatedSection className='py-16 md:py-24'>
				<div className='container mx-auto px-4'>
					<div className='mx-auto max-w-4xl'>
						<h2 className='mb-6 text-3xl font-bold'>
							Certificazioni
						</h2>
						<Separator className='mb-8 w-24' />
						<p className='mb-8 text-lg text-muted-foreground'>
							La nostra azienda è certificata secondo i più
							elevati standard internazionali, garantendo qualità,
							sicurezza e trasparenza in tutti i nostri processi.
						</p>

						<div className='grid gap-4 sm:grid-cols-2'>
							{certifications.map((cert, index) => (
								<motion.div
									key={cert}
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
									<CheckCircle
										className='mt-1 h-5 w-5 flex-shrink-0
											text-primary'
									/>
									<span className='font-medium'>{cert}</span>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</AnimatedSection>

			<section className='bg-muted/30 py-16 md:py-24'>
				<div className='container mx-auto px-4'>
					<AnimatedSection className='mx-auto max-w-4xl'>
						<h2 className='mb-6 text-3xl font-bold'>
							Impegno per la Qualità
						</h2>
						<Separator className='mb-8 w-24' />
						<div className='space-y-6 text-lg
							text-muted-foreground'
						>
							<p>
								Mediterranea Engineering si impegna a fornire
								servizi di alta qualità nel rispetto dei più
								elevati standard professionali ed etici. Le
								nostre certificazioni attestano il nostro
								impegno continuo verso l&apos;eccellenza.
							</p>
							<p>
								Operiamo in conformità con tutte le normative
								vigenti e adottiamo best practices
								internazionali per garantire la massima
								soddisfazione dei nostri clienti e la tutela
								dell&apos;ambiente.
							</p>
						</div>

						<div className='mt-12 flex flex-wrap gap-3'>
							<Badge variant='outline' className='text-sm'>
								Qualità
							</Badge>
							<Badge variant='outline' className='text-sm'>
								Ambiente
							</Badge>
							<Badge variant='outline' className='text-sm'>
								Sicurezza
							</Badge>
							<Badge variant='outline' className='text-sm'>
								Anticorruzione
							</Badge>
							<Badge variant='outline' className='text-sm'>
								Parità di Genere
							</Badge>
						</div>
					</AnimatedSection>
				</div>
			</section>
		</div>
	)
}

