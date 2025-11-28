'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { Separator } from '@/components/ui/separator'

interface ImageComparisonSliderProps {
	beforeImage: string
	afterImage: string
	beforeLabel?: string
	afterLabel?: string
	title?: string
	subtitle?: string
}

export function ImageComparisonSlider({
	beforeImage,
	afterImage,
	beforeLabel = 'Prima',
	afterLabel = 'Dopo',
	title = 'Trasformazione del Progetto',
	subtitle = 'Trascina il cursore per confrontare',
}: ImageComparisonSliderProps) {
	const [sliderPosition, setSliderPosition] = useState(50)
	const [isDragging, setIsDragging] = useState(false)
	const containerRef = useRef<HTMLDivElement>(null)

	const handleMove = useCallback((clientX: number) => {
		if (!containerRef.current) return

		const rect = containerRef.current.getBoundingClientRect()
		const x = clientX - rect.left
		const percentage = (x / rect.width) * 100

		setSliderPosition(Math.min(Math.max(percentage, 0), 100))
	}, [])

	const handleMouseDown = () => {
		setIsDragging(true)
	}

	const handleMouseUp = useCallback(() => {
		setIsDragging(false)
	}, [])

	const handleMouseMove = useCallback((e: MouseEvent) => {
		if (!isDragging) return
		handleMove(e.clientX)
	}, [isDragging, handleMove])

	const handleTouchMove = useCallback((e: TouchEvent) => {
		if (!isDragging) return
		handleMove(e.touches[0].clientX)
	}, [isDragging, handleMove])

	useEffect(() => {
		if (isDragging) {
			document.addEventListener('mousemove', handleMouseMove)
			document.addEventListener('mouseup', handleMouseUp)
			document.addEventListener('touchmove', handleTouchMove)
			document.addEventListener('touchend', handleMouseUp)
		}

		return () => {
			document.removeEventListener('mousemove', handleMouseMove)
			document.removeEventListener('mouseup', handleMouseUp)
			document.removeEventListener('touchmove', handleTouchMove)
			document.removeEventListener('touchend', handleMouseUp)
		}
	}, [isDragging, handleMouseMove, handleTouchMove, handleMouseUp])

	return (
		<AnimatedSection className='py-20 md:py-32'>
			<div className='container mx-auto px-4'>
				<div className='mb-12 text-center'>
					<h2 className='mb-4 text-3xl font-bold md:text-4xl'>{title}</h2>
					<Separator className='mx-auto mb-4 w-24' />
					{subtitle && (
						<p className='text-muted-foreground'>{subtitle}</p>
					)}
				</div>

				<div className='mx-auto max-w-5xl'>
					<div
						ref={containerRef}
						className='relative aspect-video w-full
							cursor-ew-resize select-none overflow-hidden
							rounded-lg'
						onMouseDown={handleMouseDown}
						onTouchStart={handleMouseDown}
					>
						{/* After Image (Base) */}
						<div className='absolute inset-0'>
							<Image
								src={afterImage}
								alt={afterLabel}
								fill
								className='object-cover'
								priority
							/>
							<div
								className='absolute right-4 top-4 rounded-full
									bg-primary px-3 py-1 text-sm font-medium
									text-primary-foreground shadow-lg'
							>
								{afterLabel}
							</div>
						</div>

						{/* Before Image (Clipped) */}
						<div
							className='absolute inset-0'
							style={{
								clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
							}}
						>
							<Image
								src={beforeImage}
								alt={beforeLabel}
								fill
								className='object-cover'
								priority
							/>
							<div
								className='absolute left-4 top-4 rounded-full
									bg-secondary px-3 py-1 text-sm font-medium
									text-secondary-foreground shadow-lg'
							>
								{beforeLabel}
							</div>
						</div>

						{/* Slider Line and Handle */}
						<div
							className='absolute inset-y-0 w-1 bg-white
								shadow-xl'
							style={{ left: `${sliderPosition}%` }}
						>
							{/* Handle */}
							<div
								className='absolute left-1/2 top-1/2
									flex h-12 w-12 -translate-x-1/2
									-translate-y-1/2 items-center
									justify-center rounded-full bg-white
									shadow-2xl ring-4 ring-primary/20
									transition-transform hover:scale-110'
							>
								<ChevronLeft className='h-4 w-4 text-primary' />
								<ChevronRight className='h-4 w-4 text-primary' />
							</div>
						</div>

						{/* Hover instruction */}
						{!isDragging && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								className='pointer-events-none absolute
									bottom-4 left-1/2 -translate-x-1/2
									rounded-full bg-black/60 px-4 py-2
									text-sm text-white backdrop-blur-sm'
							>
								Trascina per confrontare
							</motion.div>
						)}
					</div>
				</div>
			</div>
		</AnimatedSection>
	)
}
