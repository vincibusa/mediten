'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		console.error(error)
	}, [error])

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
					className='mb-6 inline-flex h-20 w-20 items-center
						justify-center rounded-full bg-destructive/10'
				>
					<AlertCircle className='h-10 w-10 text-destructive' />
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					<h2 className='mb-4 text-3xl font-bold md:text-4xl'>
						Si è verificato un errore
					</h2>
					<p
						className='mb-8 text-lg text-muted-foreground
							md:text-xl'
					>
						Ci scusiamo per l&apos;inconveniente. Riprova o torna
						alla homepage.
					</p>

					<Button onClick={reset} size='lg'>
						<RefreshCw className='mr-2 h-5 w-5' />
						Riprova
					</Button>
				</motion.div>
			</div>
		</div>
	)
}

