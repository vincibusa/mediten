'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
	Menu,
	X,
	ChevronRight,
	Home,
	FolderOpen,
	Mail,
	Shield,
	Hammer,
	Recycle,
	Building2,
	Hotel,
	Droplet,
	Zap,
	Briefcase,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
	Sheet,
	SheetContent,
	SheetTrigger,
	SheetTitle,
	SheetHeader,
} from '@/components/ui/sheet'

const navItems = [
	{ href: '/', label: 'Home', icon: Home },
	{ href: '/progetti', label: 'Progetti', icon: FolderOpen },
	{ href: '/contatti', label: 'Contatti', icon: Mail },
	{ href: '/policy', label: 'Policy', icon: Shield },
]

const servicesItems = [
	{ href: '/restauro', label: 'Restauro', icon: Hammer },
	{
		href: '/riqualificazione',
		label: 'Riqualificazione',
		icon: Recycle,
	},
	{ href: '/edilizia', label: 'Edilizia', icon: Building2 },
	{ href: '/turismo', label: 'Turismo', icon: Hotel },
	{ href: '/idraulica', label: 'Idraulica', icon: Droplet },
	{ href: '/energia', label: 'Energia', icon: Zap },
	{ href: '/consulting', label: 'Consulting', icon: Briefcase },
]

export function NavBar() {
	const [isOpen, setIsOpen] = useState(false)
	const [servicesOpen, setServicesOpen] = useState(false)

	return (
		<motion.nav
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.6, ease: 'easeOut' }}
			className='sticky top-0 z-50 w-full border-b
				bg-background/95 backdrop-blur
				supports-[backdrop-filter]:bg-background/60'
		>
			<div className='container mx-auto px-4'>
				<div className='flex h-20 items-center justify-between'>
					{/* Logo */}
					<Link href='/' className='flex items-center'>
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className='relative h-12 w-40'
						>
							<Image
								src='/logo.avif'
								alt='Mediterranea Engineering Logo'
								fill
								className='object-contain object-left'
								priority
							/>
						</motion.div>
					</Link>

					{/* Desktop Navigation */}
					<div className='hidden items-center gap-6 md:flex'>
				{navItems.map((item) => (
					<Link
						key={item.href}
						href={item.href}
						className='text-sm font-medium
							transition-colors hover:text-primary'
					>
						{item.label}
					</Link>
				))}

					{/* Services Dropdown */}
					<div className='relative'>
						<button
							onMouseEnter={() => setServicesOpen(true)}
							onMouseLeave={() => setServicesOpen(false)}
							onFocus={() => setServicesOpen(true)}
							onBlur={(e) => {
								if (!e.currentTarget.contains(e.relatedTarget)) {
									setServicesOpen(false)
								}
							}}
							aria-expanded={servicesOpen}
							aria-haspopup='true'
							aria-label='Menu servizi'
							className='text-sm font-medium
								transition-colors hover:text-primary'
						>
							Servizi
						</button>
						<AnimatePresence>
							{servicesOpen && (
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: 10 }}
									transition={{ duration: 0.2 }}
									onMouseEnter={() => setServicesOpen(true)}
									onMouseLeave={() => setServicesOpen(false)}
									role='menu'
									aria-label='Elenco servizi'
									className='absolute left-0 top-full mt-2
										w-48 rounded-md border bg-popover p-2
										shadow-lg'
								>
									{servicesItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								role='menuitem'
								className='block px-3 py-2
									text-sm transition-colors
									hover:bg-accent
									hover:text-accent-foreground
									focus:bg-accent
									focus:text-accent-foreground'
							>
								{item.label}
							</Link>
									))}
								</motion.div>
							)}
						</AnimatePresence>
					</div>

						<Button asChild>
							<Link href='/contatti'>Contattaci</Link>
						</Button>
					</div>

					{/* Mobile Navigation */}
					<Sheet open={isOpen} onOpenChange={setIsOpen}>
				<SheetTrigger asChild className='md:hidden'>
					<Button
						variant='ghost'
						size='icon'
						aria-label={isOpen ? 'Chiudi menu' : 'Apri menu'}
						aria-expanded={isOpen}
					>
						{isOpen ? (
							<X className='h-6 w-6' />
						) : (
							<Menu className='h-6 w-6' />
						)}
					</Button>
				</SheetTrigger>
						<SheetContent side='right' className='w-80'>
							<SheetHeader>
								<SheetTitle className='text-left'>
									<div className='relative h-10 w-36'>
										<Image
											src='/logo.avif'
											alt='Mediterranea Engineering Logo'
											fill
											className='object-contain object-left'
										/>
									</div>
								</SheetTitle>
							</SheetHeader>

							<div className='flex h-full flex-col justify-between'>
							<div className='mt-8 flex flex-col gap-1'>
								{/* Main Navigation */}
								{navItems.map((item) => {
									const Icon = item.icon
									return (
										<Link
											key={item.href}
											href={item.href}
											onClick={() => setIsOpen(false)}
											className='group flex items-center
												gap-3 rounded-lg px-4 py-3
												text-base font-medium
												transition-all hover:bg-accent
												hover:text-accent-foreground'
										>
											<Icon className='h-5 w-5 flex-shrink-0' />
											<span className='flex-1'>{item.label}</span>
											<ChevronRight
												className='h-4 w-4 opacity-0
													transition-opacity
													group-hover:opacity-100'
											/>
										</Link>
									)
								})}

									{/* Services Section */}
									<div className='mt-6 border-t pt-6'>
										<p
											className='mb-3 px-4 text-xs font-semibold
												uppercase tracking-wider
												text-muted-foreground'
										>
											I Nostri Servizi
										</p>
										{servicesItems.map((item) => {
											const Icon = item.icon
											return (
												<Link
													key={item.href}
													href={item.href}
													onClick={() => setIsOpen(false)}
													className='group flex items-center
														gap-3 rounded-lg px-4 py-2.5
														text-sm transition-all
														hover:bg-accent
														hover:text-accent-foreground'
												>
													<Icon
														className='h-4 w-4 flex-shrink-0'
													/>
													<span className='flex-1'>
														{item.label}
													</span>
													<ChevronRight
														className='h-4 w-4 opacity-0
															transition-opacity
															group-hover:opacity-100'
													/>
												</Link>
											)
										})}
									</div>
								</div>

							{/* CTA Button - Fixed at bottom */}
							<div className='border-t px-4 pb-8 pt-6'>
								<Button
									asChild
									className='w-full'
									size='lg'
								>
									<Link
										href='/contatti'
										onClick={() => setIsOpen(false)}
									>
										Contattaci
									</Link>
								</Button>
							</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</motion.nav>
	)
}
