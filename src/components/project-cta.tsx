'use client'

import Link from 'next/link'
import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'

interface ProjectCTAProps {
	title?: string
	description: string
	buttonText?: string
	buttonLink?: string
}

export function ProjectCTA({
	title = 'Interessato ai nostri servizi?',
	description,
	buttonText = 'Richiedi un preventivo',
	buttonLink = '/contatti',
}: ProjectCTAProps) {
	return (
		<AnimatedSection className='py-16 md:py-24'>
			<div className='container mx-auto px-4'>
				<div className='mx-auto max-w-2xl text-center'>
					<h2 className='mb-4 text-3xl font-bold'>{title}</h2>
					<p className='mb-8 text-lg text-muted-foreground'>
						{description}
					</p>
					<Button asChild size='lg'>
						<Link href={buttonLink}>{buttonText}</Link>
					</Button>
				</div>
			</div>
		</AnimatedSection>
	)
}
