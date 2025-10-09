'use client'

import { AnimatedSection } from '@/components/animated-section'
import { Separator } from '@/components/ui/separator'

interface ProjectDescriptionProps {
	title?: string
	description: string
	secondaryDescription?: string
	highlightText?: string
}

export function ProjectDescription({
	title = 'Il Progetto',
	description,
	secondaryDescription,
	highlightText,
}: ProjectDescriptionProps) {
	return (
		<AnimatedSection className='py-16 md:py-24'>
			<div className='container mx-auto px-4'>
				<div className='mx-auto max-w-4xl'>
					<h2 className='mb-6 text-3xl font-bold'>{title}</h2>
					<Separator className='mb-8 w-24' />
					<p
						className='mb-6 text-lg leading-relaxed
							text-muted-foreground'
					>
						{description}
					</p>

					{secondaryDescription && (
						<p className='mb-8 text-lg text-muted-foreground'>
							{secondaryDescription}
						</p>
					)}

					{highlightText && (
						<div
							className='rounded-lg border bg-accent/10 p-6
								md:p-8'
						>
							<p className='text-base leading-relaxed'>
								{highlightText}
							</p>
						</div>
					)}
				</div>
			</div>
		</AnimatedSection>
	)
}
