'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '@/data/projects'
import { FeatureCard } from '@/components/feature-card'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

// Ambiti (categorie principali)
const ambiti = [
	'Tutti',
	'Restauro',
	'Riqualificazione',
	'Edilizia',
	'Turismo',
	'Consulting',
]

// Attività svolte (per il consulting)
const attivitaSvolte = [
	'Tutti',
	'Sviluppo Territoriale',
	'Studi di Fattibilità',
	'Progetti Agevolati',
	'Sicurezza D.Lgs 81/2008',
]

export default function ProgettiPage() {
	const [activeCategory, setActiveCategory] = useState('Tutti')
	const [activeSubCategory, setActiveSubCategory] = useState('Tutti')

	const filteredProjects = projects.filter((project) => {
		// First filter by main category (ambiti)
		if (activeCategory !== 'Tutti' && project.category !== activeCategory) {
			return false
		}

		// If Consulting is active, filter by sub-category (attivita svolte)
		if (activeCategory === 'Consulting') {
			if (activeSubCategory === 'Tutti') return true
			return project.subCategory === activeSubCategory
		}

		return true
	})

	const handleCategoryChange = (category: string) => {
		setActiveCategory(category)
		setActiveSubCategory('Tutti') // Reset sub-category when changing main category
	}

	return (
		<div className='relative min-h-screen overflow-hidden pt-16 md:pt-24'>
			{/* Background Elements */}
			<div className='pointer-events-none absolute inset-0 -z-10 overflow-hidden'>
				<div className='absolute -top-[20%] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl' />
				<div className='absolute top-[10%] right-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl' />
			</div>

			<div className='container mx-auto px-4'>
				<div className='mb-16 flex flex-col items-center justify-center space-y-12 text-center'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className='space-y-4'
					>
						<h1 className='bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-4xl font-bold tracking-tight text-transparent leading-tight sm:text-5xl md:text-6xl'>
							I Nostri Progetti
						</h1>
						<p className='mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl'>
							Esplora il nostro portfolio filtrando per categoria
							di intervento. Ogni progetto racconta una storia di
							eccellenza e innovazione.
						</p>
					</motion.div>

					{/* Filters */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className='flex flex-col items-center gap-4 sm:flex-row'
					>
						{/* Ambiti Filter */}
						<Select
							value={activeCategory}
							onValueChange={handleCategoryChange}
						>
							<SelectTrigger className='w-[200px] rounded-full bg-background/60 backdrop-blur-sm'>
								<SelectValue placeholder='Ambiti' />
							</SelectTrigger>
							<SelectContent>
								{ambiti.map((ambito) => (
									<SelectItem key={ambito} value={ambito}>
										{ambito}
									</SelectItem>
								))}
							</SelectContent>
						</Select>

						{/* Attività Svolte Filter */}
						<Select
							value={activeSubCategory}
							onValueChange={setActiveSubCategory}
							disabled={activeCategory !== 'Consulting'}
						>
							<SelectTrigger className={`w-[240px] rounded-full bg-background/60 backdrop-blur-sm ${
								activeCategory !== 'Consulting' ? 'opacity-50 cursor-not-allowed' : ''
							}`}>
								<SelectValue placeholder='Attività svolte' />
							</SelectTrigger>
							<SelectContent>
								{attivitaSvolte.map((attivita) => (
									<SelectItem key={attivita} value={attivita}>
										{attivita}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</motion.div>
				</div>

				{/* Projects Grid */}
				<motion.div
					layout
					className='grid gap-8 pb-24 md:grid-cols-2'
				>
					<AnimatePresence mode='popLayout'>
						{filteredProjects.map((project) => (
							<motion.div
								layout
								initial={{ opacity: 0, scale: 0.9, y: 20 }}
								animate={{ opacity: 1, scale: 1, y: 0 }}
								exit={{ opacity: 0, scale: 0.9, y: 20 }}
								transition={{
									duration: 0.4,
									type: 'spring',
									stiffness: 100,
									damping: 15,
								}}
								key={project.slug}
							>
								<FeatureCard
									title={project.title}
									description={project.description}
									image={project.heroImage}
									href={`/progetti/${project.slug}`}
									icon={null}
								/>
							</motion.div>
						))}
					</AnimatePresence>
				</motion.div>

				{filteredProjects.length === 0 && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className='py-20 text-center'
					>
						<div className='mb-4 text-6xl'>🔍</div>
						<h3 className='mb-2 text-xl font-semibold'>
							Nessun progetto trovato
						</h3>
						<p className='text-muted-foreground'>
							Prova a selezionare un&apos;altra categoria o filtro.
						</p>
					</motion.div>
				)}
			</div>
		</div>
	)
}
