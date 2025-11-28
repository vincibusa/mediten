'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
	Menu,
	X,
	ChevronRight,
	Home,
	FolderOpen,
	Mail,
	Shield,
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



export function NavBar() {
	const [isOpen, setIsOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<motion.nav
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.6, ease: 'easeOut' }}
			className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled
				? 'border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
				: 'border-transparent bg-transparent'
				}`}
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
