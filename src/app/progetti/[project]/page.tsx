import { notFound } from 'next/navigation'
import { getProjectBySlug, projects } from '@/data/projects'
import { ProjectHero } from '@/components/project-hero'
import { ProjectDescription } from '@/components/project-description'
import { ImageComparisonSlider } from '@/components/image-comparison-slider'
import { ProjectFeatures } from '@/components/project-features'
import { ProjectGallery } from '@/components/project-gallery'
import { ProjectCTA } from '@/components/project-cta'

interface ProjectPageProps {
	params: Promise<{
		project: string
	}>
}

export async function generateStaticParams() {
	return projects.map((project) => ({
		project: project.slug,
	}))
}

export async function generateMetadata({ params }: ProjectPageProps) {
	const { project: projectSlug } = await params
	const project = getProjectBySlug(projectSlug)

	if (!project) {
		return {
			title: 'Progetto non trovato',
		}
	}

	return {
		title: `${project.title} | Mediterranea Engineering`,
		description: project.description,
	}
}

export default async function ProjectPage({ params }: ProjectPageProps) {
	const { project: projectSlug } = await params
	const project = getProjectBySlug(projectSlug)

	if (!project) {
		notFound()
	}


	const ctaDescriptions = {
		Restauro: 'Contattaci per discutere del tuo progetto di restauro conservativo',
		Riqualificazione:
			'Contattaci per discutere del tuo progetto di riqualificazione urbana',
		Edilizia: 'Contattaci per discutere del tuo progetto edilizio',
		Turismo:
			'Contattaci per discutere del tuo progetto di riqualificazione turistica',
		Consulting: 'Contattaci per discutere del tuo progetto di consulenza',
	}

	const featuresTitles: Record<string, string> = {
		Restauro: 'Interventi Realizzati',
		Riqualificazione: 'Interventi Realizzati',
		Edilizia: 'Interventi Realizzati',
		Turismo: 'Distribuzione Funzionale',
		Consulting: 'Interventi Realizzati',
	}

	const featuresSubtitles = {
		Turismo: 'Organizzazione degli spazi e percorsi dell\' hotel',
	}

	const galleryTitles = {
		Restauro: 'Gallery dei Lavori',
		Riqualificazione: 'Gallery',
		Edilizia: 'Gallery',
		Turismo: 'Gallery del Progetto',
		Consulting: 'Gallery',
	}

	const gallerySubtitles = {
		Restauro: 'Documentazione fotografica degli interventi di restauro',
	}

	return (
		<div className='flex flex-col'>
			<ProjectHero
				title={project.title}
				heroTitle={project.heroTitle}
				location={project.location}
				client={project.client}
				year={project.year}
			
				heroImage={project.heroImage}
			
			/>

			<ProjectDescription
				description={project.description}
				secondaryDescription={project.secondaryDescription}
				highlightText={project.highlightText}
			/>

			{project.beforeAfter && (
				<ImageComparisonSlider
					beforeImage={project.beforeAfter.before}
					afterImage={project.beforeAfter.after}
					beforeLabel={project.beforeAfter.beforeLabel}
					afterLabel={project.beforeAfter.afterLabel}
				/>
			)}

			{project.features && project.features.length > 0 && (
				<ProjectFeatures
					title={featuresTitles[project.category]}
					subtitle={
						featuresSubtitles[
							project.category as keyof typeof featuresSubtitles
						]
					}
					features={project.features}
				/>
			)}

			<ProjectGallery
				title={galleryTitles[project.category]}
				subtitle={
					gallerySubtitles[
						project.category as keyof typeof gallerySubtitles
					]
				}
				images={project.gallery}
				categories={project.galleryCategories}
				backgroundColor={
					project.features && project.features.length > 0
						? 'default'
						: 'muted'
				}
			/>

			<ProjectCTA description={ctaDescriptions[project.category]} />
		</div>
	)
}
