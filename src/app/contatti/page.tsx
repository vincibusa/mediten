'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
	Mail,
	Phone,
	MapPin,
	Send,
	CheckCircle,
	AlertCircle,
} from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

const contactSchema = z.object({
	name: z
		.string()
		.min(2, 'Il nome deve contenere almeno 2 caratteri')
		.max(100, 'Il nome è troppo lungo'),
	email: z
		.string()
		.email('Inserisci un indirizzo email valido')
		.min(1, 'L\'email è obbligatoria'),
	phone: z
		.string()
		.min(10, 'Inserisci un numero di telefono valido')
		.optional()
		.or(z.literal('')),
	message: z
		.string()
		.min(10, 'Il messaggio deve contenere almeno 10 caratteri')
		.max(1000, 'Il messaggio è troppo lungo'),
})

type ContactFormData = z.infer<typeof contactSchema>

const contactInfo = [
	{
		icon: <MapPin className='h-6 w-6' />,
		title: 'Indirizzo',
		details: ['Via G. Alessi, 16', '90143 Palermo'],
	},
	{
		icon: <Phone className='h-6 w-6' />,
		title: 'Telefono',
		details: ['339 8562152'],
	},
	{
		icon: <Mail className='h-6 w-6' />,
		title: 'Email',
		details: ['me@mediten.it'],
	},
]

export default function ContattiPage() {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState<
		'idle' | 'success' | 'error'
	>('idle')

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ContactFormData>({
		resolver: zodResolver(contactSchema),
		mode: 'onBlur',
	})

	const onSubmit = async (data: ContactFormData) => {
		setIsSubmitting(true)
		setSubmitStatus('idle')

		try {
			// Simula invio (sostituire con API reale)
			await new Promise((resolve) => setTimeout(resolve, 2000))
			console.log('Form data:', data)
			setSubmitStatus('success')
			reset()
		} catch (error) {
			console.error('Error:', error)
			setSubmitStatus('error')
		} finally {
			setIsSubmitting(false)
		}
	}

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
							Contattaci
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className='mx-auto max-w-2xl text-lg
								text-muted-foreground md:text-xl'
						>
							Siamo a tua disposizione per qualsiasi informazione
							o per discutere del tuo prossimo progetto
						</motion.p>
					</div>
				</div>
			</section>

			<section className='py-16 md:py-24'>
				<div className='container mx-auto px-4'>
					<div
						className='mx-auto grid max-w-6xl gap-12
							lg:grid-cols-2'
					>
						{/* Contact Information */}
						<AnimatedSection>
							<h2 className='mb-6 text-3xl font-bold'>
								Informazioni di Contatto
							</h2>
							<Separator className='mb-8 w-24' />

							<div className='space-y-6'>
								{contactInfo.map((info, index) => (
									<motion.div
										key={info.title}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{
											duration: 0.5,
											delay: index * 0.1,
										}}
										className='flex items-start gap-4'
									>
										<div
											className='flex h-12 w-12
												items-center justify-center
												rounded-lg bg-primary/10
												text-primary'
										>
											{info.icon}
										</div>
										<div>
											<h3 className='mb-2 font-semibold'>
												{info.title}
											</h3>
											{info.details.map((detail) => (
												<p
													key={detail}
													className='text-muted-foreground'
												>
													{detail}
												</p>
											))}
										</div>
									</motion.div>
								))}

								<div
									className='mt-8 rounded-lg border bg-muted/30
										p-6'
								>
									<h3 className='mb-4 font-semibold'>
										Informazioni Societarie
									</h3>
									<div
										className='space-y-2 text-sm
											text-muted-foreground'
									>
										<p>
											<strong>P.IVA:</strong> 04502560826
										</p>
										<p>
											<strong>Albo unico regionale:</strong>{' '}
											n. 1771
										</p>
										<p>
											<strong>Certificazioni:</strong> ISO
											9001:2015
										</p>
									</div>
								</div>
							</div>
						</AnimatedSection>

						{/* Contact Form */}
						<AnimatedSection delay={0.2}>
							<Card>
								<CardContent className='pt-6'>
									<h2 className='mb-6 text-2xl font-bold'>
										Invia un Messaggio
									</h2>

									<form
										onSubmit={handleSubmit(onSubmit)}
										className='space-y-6'
										noValidate
									>
										<div className='space-y-2'>
											<Label htmlFor='name'>
												Nome{' '}
												<span
													className='text-destructive'
													aria-label='obbligatorio'
												>
													*
												</span>
											</Label>
											<Input
												id='name'
												placeholder='Il tuo nome'
												{...register('name')}
												aria-invalid={!!errors.name}
												aria-describedby={
													errors.name
														? 'name-error'
														: undefined
												}
												className={
													errors.name
														? 'border-destructive'
														: ''
												}
											/>
											{errors.name && (
												<p
													id='name-error'
													className='flex items-center gap-2
														text-sm text-destructive'
													role='alert'
												>
													<AlertCircle className='h-4 w-4' />
													{errors.name.message}
												</p>
											)}
										</div>

										<div className='space-y-2'>
											<Label htmlFor='email'>
												Email{' '}
												<span
													className='text-destructive'
													aria-label='obbligatorio'
												>
													*
												</span>
											</Label>
											<Input
												id='email'
												type='email'
												placeholder='la.tua.email@esempio.it'
												{...register('email')}
												aria-invalid={!!errors.email}
												aria-describedby={
													errors.email
														? 'email-error'
														: undefined
												}
												className={
													errors.email
														? 'border-destructive'
														: ''
												}
											/>
											{errors.email && (
												<p
													id='email-error'
													className='flex items-center gap-2
														text-sm text-destructive'
													role='alert'
												>
													<AlertCircle className='h-4 w-4' />
													{errors.email.message}
												</p>
											)}
										</div>

										<div className='space-y-2'>
											<Label htmlFor='phone'>
												Telefono{' '}
												<span className='text-sm
													text-muted-foreground'
												>
													(opzionale)
												</span>
											</Label>
											<Input
												id='phone'
												type='tel'
												placeholder='+39 123 456 7890'
												{...register('phone')}
												aria-invalid={!!errors.phone}
												aria-describedby={
													errors.phone
														? 'phone-error'
														: undefined
												}
												className={
													errors.phone
														? 'border-destructive'
														: ''
												}
											/>
											{errors.phone && (
												<p
													id='phone-error'
													className='flex items-center gap-2
														text-sm text-destructive'
													role='alert'
												>
													<AlertCircle className='h-4 w-4' />
													{errors.phone.message}
												</p>
											)}
										</div>

										<div className='space-y-2'>
											<Label htmlFor='message'>
												Messaggio{' '}
												<span
													className='text-destructive'
													aria-label='obbligatorio'
												>
													*
												</span>
											</Label>
											<Textarea
												id='message'
												placeholder='Descrivi il tuo progetto o la tua richiesta...'
												rows={6}
												{...register('message')}
												aria-invalid={!!errors.message}
												aria-describedby={
													errors.message
														? 'message-error'
														: undefined
												}
												className={
													errors.message
														? 'border-destructive'
														: ''
												}
											/>
											{errors.message && (
												<p
													id='message-error'
													className='flex items-center gap-2
														text-sm text-destructive'
													role='alert'
												>
													<AlertCircle className='h-4 w-4' />
													{errors.message.message}
												</p>
											)}
										</div>

										{/* Success Message */}
										{submitStatus === 'success' && (
											<motion.div
												initial={{ opacity: 0, y: 10 }}
												animate={{ opacity: 1, y: 0 }}
												className='flex items-center gap-2
													rounded-lg bg-green-500/10 p-4
													text-green-700'
												role='status'
												aria-live='polite'
											>
												<CheckCircle className='h-5 w-5' />
												<p className='text-sm font-medium'>
													Messaggio inviato con successo! Ti
													risponderemo presto.
												</p>
											</motion.div>
										)}

										{/* Error Message */}
										{submitStatus === 'error' && (
											<motion.div
												initial={{ opacity: 0, y: 10 }}
												animate={{ opacity: 1, y: 0 }}
												className='flex items-center gap-2
													rounded-lg bg-destructive/10 p-4
													text-destructive'
												role='alert'
												aria-live='assertive'
											>
												<AlertCircle className='h-5 w-5' />
												<p className='text-sm font-medium'>
													Errore nell&apos;invio. Riprova o
													contattaci via email.
												</p>
											</motion.div>
										)}

										<Button
											type='submit'
											className='w-full'
											disabled={isSubmitting}
											aria-label='Invia messaggio'
										>
											{isSubmitting ? (
												<>
													<motion.div
														animate={{ rotate: 360 }}
														transition={{
															duration: 1,
															repeat: Infinity,
															ease: 'linear',
														}}
														className='mr-2'
													>
														<Send className='h-4 w-4' />
													</motion.div>
													Invio in corso...
												</>
											) : (
												<>
													<Send className='mr-2 h-4 w-4' />
													Invia Messaggio
												</>
											)}
										</Button>
									</form>
								</CardContent>
							</Card>
						</AnimatedSection>
					</div>
				</div>
			</section>

			{/* Map Section */}
			<section className='bg-muted/30 py-16'>
				<div className='container mx-auto px-4'>
					<AnimatedSection className='text-center'>
						<h2 className='mb-6 text-3xl font-bold'>
							Come Raggiungerci
						</h2>
						<Separator className='mx-auto mb-8 w-24' />
						<div
							className='mx-auto max-w-4xl overflow-hidden
								rounded-lg border bg-background shadow-lg'
						>
							<iframe
								title='Mediterranea Engineering Location'
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.0!2d13.3!3d38.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDA2JzAwLjAiTiAxM8KwMTgnMDAuMCJF!5e0!3m2!1sit!2sit!4v1234567890'
								width='100%'
								height='450'
								style={{ border: 0 }}
								allowFullScreen={false}
								loading='lazy'
								referrerPolicy='no-referrer-when-downgrade'
							/>
						</div>
					</AnimatedSection>
				</div>
			</section>
		</div>
	)
}
