'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
	return (
		<div
			className='flex min-h-[calc(100vh-80px)] items-center
				justify-center px-4 py-16'
		>
			<div className='mx-auto max-w-2xl text-center'>
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
				>
					<h1
						className='mb-4 bg-gradient-to-r from-primary
							to-accent bg-clip-text text-8xl font-bold
							text-transparent md:text-9xl'
					>
						404
					</h1>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					<h2 className='mb-4 text-3xl font-bold md:text-4xl'>
						Pagina Non Trovata
					</h2>
					<p
						className='mb-8 text-lg text-muted-foreground
							md:text-xl'
					>
						La pagina che stai cercando non esiste o è stata
						spostata.
					</p>

					<div
						className='flex flex-col items-center justify-center
							gap-4 sm:flex-row'
					>
						<Button asChild size='lg'>
							<Link href='/'>
								<Home className='mr-2 h-5 w-5' />
								Torna alla Home
							</Link>
						</Button>
						<Button asChild variant='outline' size='lg'>
							<Link href='/progetti'>
								<ArrowLeft className='mr-2 h-5 w-5' />
								Vedi i Progetti
							</Link>
						</Button>
					</div>
				</motion.div>
			</div>
		</div>
	)
}

