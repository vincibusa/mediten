'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface ServiceCardProps {
	title: string
	description: string
	href: string
	icon?: React.ReactNode
	delay?: number
}

export function ServiceCard({
	title,
	description,
	href,
	icon,
	delay = 0,
}: ServiceCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay }}
			whileHover={{ y: -8, transition: { duration: 0.2 } }}
		>
			<Card
				className='group h-full overflow-hidden border-2
					transition-all hover:border-primary
					hover:shadow-lg'
			>
				<CardHeader>
					{icon && (
						<motion.div
							className='mb-4 inline-flex h-12 w-12
								items-center justify-center rounded-lg
								bg-primary/10 text-primary'
							whileHover={{ scale: 1.1, rotate: 5 }}
							transition={{
								type: 'spring',
								stiffness: 300,
							}}
						>
							{icon}
						</motion.div>
					)}
					<CardTitle className='text-xl'>{title}</CardTitle>
				</CardHeader>
				<CardContent>
					<CardDescription
						className='text-base leading-relaxed'
					>
						{description}
					</CardDescription>
				</CardContent>
				<CardFooter>
					<Button asChild variant='ghost' className='group/btn'>
						<Link href={href}>
							Scopri di più
							<motion.span
								className='ml-2 inline-block'
								initial={{ x: 0 }}
								whileHover={{ x: 5 }}
								transition={{
									type: 'spring',
									stiffness: 300,
								}}
							>
								<ArrowRight className='h-4 w-4' />
							</motion.span>
						</Link>
					</Button>
				</CardFooter>
			</Card>
		</motion.div>
	)
}
