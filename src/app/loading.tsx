import { Spinner } from '@/components/ui/spinner'

export default function Loading() {
	return (
		<div
			className='flex min-h-[calc(100vh-80px)] items-center
				justify-center'
		>
			<div className='text-center'>
				<Spinner className='mx-auto mb-4 h-12 w-12' />
				<p className='text-muted-foreground'>
					Caricamento in corso...
				</p>
			</div>
		</div>
	)
}

