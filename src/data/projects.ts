export interface ProjectImage {
	src: string
	alt: string
}

export interface ProjectGalleryCategory {
	title: string
	images: ProjectImage[]
}

export interface ProjectFeature {
	title: string
	description: string
}

export interface BeforeAfterImages {
	before: string
	after: string
	beforeLabel?: string
	afterLabel?: string
}

export interface ProjectData {
	slug: string
	title: string
	heroTitle?: string
	location: string
	category: 'Restauro' | 'Riqualificazione' | 'Edilizia' | 'Turismo'
	year?: string
	status?: string
	client: string
	description: string
	secondaryDescription?: string
	highlightText?: string
	backLink: string
	badges: string[]
	heroImage: string
	beforeAfter?: BeforeAfterImages
	features?: ProjectFeature[]
	gallery?: ProjectImage[]
	galleryCategories?: ProjectGalleryCategory[]
}

export const projects: ProjectData[] = [
	{
		slug: 'martorana',
		title: 'Chiesa di Santa Maria dell\'Ammiraglio [Martorana]',
		location: 'Palermo',
		category: 'Restauro',
		status: 'Conclusa',
		client: 'Comune di Palermo',
		description:
			'Il servizio svolto dalla Mediterranea Engineering per il' +
			' Restauro e Consolidamento della Chiesa si Santa Maria' +
			' dell\'Ammiraglio - Martorana - a Palermo, è stato' +
			' condotto mediante una sensibilità storico-critica e' +
			' competenza tecnica, elaborando strategie mirate a' +
			' molteplici tipologie di manufatti risalenti a periodi' +
			' storici differenti.',
		secondaryDescription:
			'La Martorana, bene vincolato ope legis e facente' +
			' parte della World Heritage List - UNESCO, è' +
			' caratterizzato da un forte sincretismo culturale, le' +
			' cui operazioni di restauro e di consolidamento hanno' +
			' interessato il monumento nella sua globalità,' +
			' intervenendo sia sugli apparati musivi, che' +
			' caratterizzano l\'originario nucleo di epoca' +
			' normanna (1143), sia le decorazioni parietali del' +
			' XVII sec., sia gli apparati a marmi mischi e' +
			' tramischi, le pavimentazioni normanne e barocche.',
		highlightText:
			'Tutte le operazioni sono state effettuate per' +
			' singole fasi, articolate in microcantieri in' +
			' modo tale da non interrompere la fruizione del' +
			' sito e di operare di concerto con i consulenti,' +
			' i funzionari preposti. Il servizio è stato' +
			' svolto in regime di qualità, pianificando di' +
			' concerto alla Soprintendenza, le sequenze, le' +
			' modalità, i test, le strumentazioni, i mezzi' +
			' d\'opera atti a garantire l\'effettiva' +
			' esecuzione a regola d\'arte.',
		backLink: '/restauro',
		badges: ['Restauro', 'UNESCO', 'Conclusa'],
		heroImage:
			'https://static.wixstatic.com/media/921ce7_a517969c5b1846f5b53c45db3b2c50e2~mv2.png/v1/crop/x_41,y_0,w_662,h_631/fill/w_1600,h_1200,al_c,q_85,enc_avif,quality_auto/martorana_edited.png',
		beforeAfter: {
			before:
				'https://static.wixstatic.com/media/921ce7_cd794249f05f4d7c8f8c80260fd0b801~mv2.png/v1/fill/w_800,h_1000,al_c,q_85,enc_avif,quality_auto/921ce7_cd794249f05f4d7c8f8c80260fd0b801~mv2.png',
			after:
				'https://static.wixstatic.com/media/921ce7_f540619c62444cdb951151a5279b2a7d~mv2.png/v1/fill/w_800,h_1000,al_c,q_85,enc_avif,quality_auto/921ce7_f540619c62444cdb951151a5279b2a7d~mv2.png',
		},
		galleryCategories: [
			{
				title: 'Mosaici Nucleo Normanno',
				images: [
					{
						src: 'https://static.wixstatic.com/media/921ce7_cd794249f05f4d7c8f8c80260fd0b801~mv2.png/v1/fill/w_800,h_1000,al_c,q_85,enc_avif,quality_auto/921ce7_cd794249f05f4d7c8f8c80260fd0b801~mv2.png',
						alt: 'Mosaici Nucleo Normanno - 1',
					},
					{
						src: 'https://static.wixstatic.com/media/921ce7_f540619c62444cdb951151a5279b2a7d~mv2.png/v1/fill/w_800,h_1000,al_c,q_85,enc_avif,quality_auto/921ce7_f540619c62444cdb951151a5279b2a7d~mv2.png',
						alt: 'Mosaici Nucleo Normanno - 2',
					},
					{
						src: 'https://static.wixstatic.com/media/921ce7_720b5b6b57b449fdafd0f8c3fd2e5172~mv2.jpg/v1/fill/w_800,h_1000,al_c,q_80,enc_avif,quality_auto/921ce7_720b5b6b57b449fdafd0f8c3fd2e5172~mv2.jpg',
						alt: 'Mosaici Nucleo Normanno - 3',
					},
				],
			},
			{
				title: 'Affreschi Borremans',
				images: [
					{
						src: 'https://static.wixstatic.com/media/921ce7_ada1295d7fb344b7bfe1d8d750afeb1c~mv2.png/v1/fill/w_800,h_1000,al_c,q_85,enc_avif,quality_auto/921ce7_ada1295d7fb344b7bfe1d8d750afeb1c~mv2.png',
						alt: 'Affreschi Borremans - 1',
					},
					{
						src: 'https://static.wixstatic.com/media/921ce7_dc0d4e3cb11141dabeafa6727181a2c8~mv2.png/v1/fill/w_800,h_1000,al_c,q_85,enc_avif,quality_auto/921ce7_dc0d4e3cb11141dabeafa6727181a2c8~mv2.png',
						alt: 'Affreschi Borremans - 2',
					},
				],
			},
			{
				title: 'Pavimentazioni',
				images: [
					{
						src: 'https://static.wixstatic.com/media/921ce7_092b69044d9c4557b69d010a443e3a3a~mv2.png/v1/fill/w_800,h_600,al_c,q_85,enc_avif,quality_auto/921ce7_092b69044d9c4557b69d010a443e3a3a~mv2.png',
						alt: 'Pavimentazioni - 1',
					},
					{
						src: 'https://static.wixstatic.com/media/921ce7_39b0d0d0da8b4eeabfa76f4fbd4e3dae~mv2.png/v1/fill/w_800,h_600,al_c,q_85,enc_avif,quality_auto/921ce7_39b0d0d0da8b4eeabfa76f4fbd4e3dae~mv2.png',
						alt: 'Pavimentazioni - 2',
					},
				],
			},
		],
	},
	{
		slug: 'hotel-wagner',
		title:
			'Risanamento conservativo Hotel Wagner' +
			' - Struttura Turistico-Alberghiera 5 Stelle Superior',
		heroTitle: 'Hotel Wagner',
		location: 'Palermo',
		category: 'Turismo',
		status: 'Conclusa',
		client: 'Coretur Hotels SRL',
		description:
			'Rifunzionalizzazione dell\'edificio in albergo' +
			' condotta attraverso lo studio dei flussi orizzontali e' +
			' verticali, verificando la compatibilità delle nuove' +
			' destinazioni con la distribuzione dell\'impianto' +
			' originario del corpo di fabbrica, utilizzato come sede' +
			' degli uffici amministrativi della Fondazione Teatro' +
			' Massimo.',
		highlightText:
			'Ciò ha permesso di ridurre al minimo gli' +
			' interventi sulle murature portanti per le' +
			' aperture e/o chiusure di nuovi vani e passaggi,' +
			' conservando le caratteristiche strutturali,' +
			' storiche e statiche dell\'edificio.',
		backLink: '/turismo',
		badges: ['Turismo', '5 Stelle Superior', 'Conclusa'],
		heroImage:
			'https://static.wixstatic.com/media/921ce7_6cfcc0c506f04d6d8693d5399677bcc1~mv2.jpg/v1/crop/x_47,y_0,w_2730,h_2600/fill/w_800,h_800,al_c,q_80,enc_avif,quality_auto/P1060789_JPG.jpg',
		beforeAfter: {
			before:
				'https://static.wixstatic.com/media/921ce7_6cfcc0c506f04d6d8693d5399677bcc1~mv2.jpg/v1/crop/x_47,y_0,w_2730,h_2600/fill/w_800,h_800,al_c,q_80,enc_avif,quality_auto/P1060789_JPG.jpg',
			after:
				'https://static.wixstatic.com/media/921ce7_0995438341aa48cdbe0e87121f409eaf~mv2.jpg/v1/fill/w_1600,h_800,al_c,q_85,enc_avif,quality_auto/921ce7_0995438341aa48cdbe0e87121f409eaf~mv2.jpg',
		},
		features: [
			{
				title: 'Piano Rialzato',
				description:
					'Accesso principale con scalinata in marmo di' +
					' Billiemi, reception, hall, bar e camere per disabili.',
			},
			{
				title: 'Piano Seminterrato',
				description:
					'Sala colazione, ristorante, cucina, magazzini e' +
					' locali tecnici con compartimentazione REI.',
			},
			{
				title: 'Piani 1°, 2° e 3°',
				description:
					'Camere singole, doppie, suites e junior suites con' +
					' servizio di piano dedicato.',
			},
			{
				title: 'Piano 4° - Terrazza',
				description:
					'Bar panoramico, sale eventi e accesso alla terrazza' +
					' con vista su Palermo.',
			},
		],
		gallery: [
			{
				src: 'https://static.wixstatic.com/media/921ce7_6cfcc0c506f04d6d8693d5399677bcc1~mv2.jpg/v1/crop/x_47,y_0,w_2730,h_2600/fill/w_800,h_800,al_c,q_80,enc_avif,quality_auto/P1060789_JPG.jpg',
				alt: 'Hotel Wagner - Facciata principale',
			},
			{
				src: 'https://static.wixstatic.com/media/921ce7_b809a82ebe104e2db6ba3ac40801b149~mv2.png/v1/fill/w_800,h_600,al_c,q_85,enc_avif,quality_auto/PROSPETTO%40300x.png',
				alt: 'Prospetto architettonico',
			},
			{
				src: 'https://static.wixstatic.com/media/921ce7_0995438341aa48cdbe0e87121f409eaf~mv2.jpg/v1/fill/w_1600,h_800,al_c,q_85,enc_avif,quality_auto/921ce7_0995438341aa48cdbe0e87121f409eaf~mv2.jpg',
				alt: 'Interior design - Hall',
			},
			{
				src: 'https://static.wixstatic.com/media/921ce7_68ab1ba90ccf4b2dbb75793dbfaf72a3~mv2.jpg/v1/fill/w_1000,h_850,al_c,q_85,enc_avif,quality_auto/921ce7_68ab1ba90ccf4b2dbb75793dbfaf72a3~mv2.jpg',
				alt: 'Interior design - Dettagli',
			},
		],
	},
	{
		slug: 'palazzolo-acreide',
		title:
			'Riqualificazione urbana del quartiere' +
			' Lenza-Orologio, Sito UNESCO',
		location: 'Siracusa',
		category: 'Riqualificazione',
		year: '2020',
		client: 'Comune di Siracusa',
		description:
			'Progetto di riqualificazione urbana del quartiere' +
			' storico Lenza-Orologio, inserito nella lista del' +
			' Patrimonio UNESCO. Interventi di recupero e' +
			' valorizzazione del tessuto urbano storico.',
		secondaryDescription:
			'Il quartiere Lenza-Orologio rappresenta una delle' +
			' aree più significative del centro storico di' +
			' Siracusa. Il progetto ha previsto un intervento' +
			' integrato di riqualificazione urbana nel pieno' +
			' rispetto dei vincoli UNESCO, valorizzando' +
			' l\'identità storica e culturale del luogo.',
		backLink: '/riqualificazione',
		badges: ['Riqualificazione', 'UNESCO', '2020'],
		heroImage:
			'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?w=1600&h=900&fit=crop',
		features: [
			{
				title: 'Recupero edifici storici',
				description: '',
			},
			{
				title: 'Riqualificazione spazi pubblici',
				description: '',
			},
			{
				title: 'Valorizzazione sito UNESCO',
				description: '',
			},
			{
				title: 'Rifacimento pavimentazioni storiche',
				description: '',
			},
			{
				title: 'Illuminazione artistica',
				description: '',
			},
			{
				title: 'Accessibilità e mobilità sostenibile',
				description: '',
			},
		],
		gallery: [
			{
				src: 'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?w=800&h=600&fit=crop&q=80&auto=format&sig=1',
				alt: 'Riqualificazione Lenza-Orologio - 1',
			},
			{
				src: 'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?w=800&h=600&fit=crop&q=80&auto=format&sig=2',
				alt: 'Riqualificazione Lenza-Orologio - 2',
			},
			{
				src: 'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?w=800&h=600&fit=crop&q=80&auto=format&sig=3',
				alt: 'Riqualificazione Lenza-Orologio - 3',
			},
		],
	},
	{
		slug: 'centro-del-marmo',
		title:
			'Centro di Addestramento Professionale' +
			' della Lavorazione del Marmo',
		location: 'Custonaci, Trapani',
		category: 'Edilizia',
		year: '2021',
		client: 'Regione Siciliana',
		description:
			'Lavori di completamento e adeguamento del centro di' +
			' addestramento professionale per la lavorazione del' +
			' marmo. Un polo formativo di eccellenza per la' +
			' valorizzazione del patrimonio lapideo locale.',
		secondaryDescription:
			'Il progetto ha previsto la realizzazione di spazi' +
			' dedicati alla formazione professionale nella' +
			' lavorazione del marmo, con laboratori attrezzati con' +
			' macchinari all\'avanguardia. La struttura si' +
			' configura come un centro di eccellenza per la' +
			' valorizzazione della tradizione lapidea siciliana.',
		backLink: '/edilizia',
		badges: ['Edilizia', '2021'],
		heroImage:
			'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&h=900&fit=crop',
		features: [
			{
				title: 'Completamento strutture edilizie',
				description: '',
			},
			{
				title: 'Laboratori didattici specializzati',
				description: '',
			},
			{
				title: 'Aree espositive e showroom',
				description: '',
			},
			{
				title: 'Impianti tecnologici avanzati',
				description: '',
			},
			{
				title: 'Spazi esterni e viabilità',
				description: '',
			},
			{
				title: 'Certificazione energetica',
				description: '',
			},
		],
		gallery: [
			{
				src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop&q=80&auto=format&sig=1',
				alt: 'Centro del Marmo - 1',
			},
			{
				src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop&q=80&auto=format&sig=2',
				alt: 'Centro del Marmo - 2',
			},
			{
				src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop&q=80&auto=format&sig=3',
				alt: 'Centro del Marmo - 3',
			},
		],
	},
	{
		slug: 'sant-ignazio-olivella',
		title: 'Restauro Chiesa di Sant\'Ignazio all\'Olivella',
		location: 'Palermo',
		category: 'Restauro',
		year: '2019',
		client: 'Soprintendenza BB.CC.AA. Palermo',
		description:
			'Intervento di restauro conservativo della Chiesa di' +
			' Sant\'Ignazio all\'Olivella, con consolidamento' +
			' strutturale e recupero degli apparati decorativi' +
			' barocchi.',
		backLink: '/restauro',
		badges: ['Restauro', '2019'],
		heroImage:
			'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=900&fit=crop',
		gallery: [
			{
				src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80&auto=format&sig=1',
				alt: 'Chiesa Sant\'Ignazio - 1',
			},
			{
				src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80&auto=format&sig=2',
				alt: 'Chiesa Sant\'Ignazio - 2',
			},
			{
				src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80&auto=format&sig=3',
				alt: 'Chiesa Sant\'Ignazio - 3',
			},
		],
	},
	{
		slug: 'palazzo-zanca',
		title: 'Restauro Palazzo Zanca - Municipio di Messina',
		location: 'Messina',
		category: 'Restauro',
		year: '2018',
		client: 'Comune di Messina',
		description:
			'Interventi di restauro e consolidamento strutturale del' +
			' Palazzo Zanca, sede del Municipio di Messina. Recupero' +
			' delle facciate e degli spazi interni istituzionali.',
		backLink: '/restauro',
		badges: ['Restauro', '2018'],
		heroImage:
			'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop',
		gallery: [
			{
				src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80&auto=format&sig=1',
				alt: 'Palazzo Zanca - 1',
			},
			{
				src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80&auto=format&sig=2',
				alt: 'Palazzo Zanca - 2',
			},
			{
				src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80&auto=format&sig=3',
				alt: 'Palazzo Zanca - 3',
			},
		],
	},
]

export function getProjectBySlug(slug: string): ProjectData | undefined {
	return projects.find((project) => project.slug === slug)
}

export function getProjectsByCategory(
	category: ProjectData['category']
): ProjectData[] {
	return projects.filter((project) => project.category === category)
}
