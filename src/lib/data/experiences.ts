import type { IExperience } from '$lib/component/experience.svelte';

export const experience: IExperience[] = [
	{
		enterprise: 'Netapsys Lyon',
		position: 'Développeur web - Stage',
		description: `Netapsys est une société d'ingénierie informatique, spécialisée dans les nouvelles technologies et diverses solutions de gestion. Elle propose la conception, le développement et la maintenance d'applications informatiques et de systèmes d'information.`,
		startDate: new Date('2015-04-01'),
		endDate: new Date('2015-07-01'),
		missions: [
			{
				skills: [
					{ name: 'c++', category: 'backend' },
					{ name: 'qt', category: 'other' }
				],

				description: `Participation au développement de l'application de diagnostic HaulotteDiag pour Haulotte (chariots élévateurs), optimisation de sa compatibilité avec leurs véhicules.`,
				title: `HaulotteDiag`
			}
		]
	},
	{
		enterprise: 'Netapsys Paris',
		position: 'Développeur web',
		description: `Participation à deux projets : Si-LAV (Système d'information - Lutte Anti-Vectorielle) pour le ministère de la santé et Osiris pour le ministère de la Jeunesse et des Sports.`,
		startDate: new Date('2016-09-01'),
		endDate: new Date('2017-07-01'),
		missions: [
			{
				title: `Si-LAV`,
				description: `Travail sur le système Si-LAV avec migration vers une V2 qui inclut migration de GeoServer vers Leaflet, gestion des habilitations dans la base de données SI-LAV, et autres améliorations.`,
				skills: [
					{ name: 'java j2e', category: 'backend' },
					{ name: 'hibernate', category: 'backend' },
					{ name: 'log4j', category: 'backend' },
					{ name: 'JUnits', category: 'backend' },
					{ name: 'Primefaces', category: 'frontend' },
					{ name: 'sql', category: 'data' },
					{ name: 'maven', category: 'other' },
					{ name: 'jenkins', category: 'devops' },
					{ name: 'leaflet', category: 'other', color: 'gray' }
				]
			},
			{
				title: 'Osiris',
				description: `Participation à l'évolution du site Osiris pour le ministère de la Jeunesse et des Sports, incluant l'intégration des modalités du CNDS, ajout de nouveaux champs, adaptation du système de budget de trois à cinq ans, et création de nouvelles pages.`,
				skills: [
					{ name: 'c# .net', category: 'backend' },
					{ name: 'razorhtml', category: 'frontend' },
					{ name: 'mssql ', category: 'data' }
				]
			}
		]
	},
	{
		enterprise: 'Eudonet',
		position: 'Développeur web - Stage',
		description: `Eudonet produit et propose l'intégration d'un CRM (Customer Relationship Management).`,
		startDate: new Date('2018-04-01'),
		endDate: new Date('2018-07-01'),
		missions: [
			{
				description: `Développement d'un système permettant aux utilisateurs d'effectuer des demandes. Création d'un algorithme calculant les créneaux disponibles sur un planning. Création des pages frontend.`,
				skills: [
					{ name: 'c# .net', category: 'backend' },
					{ name: 'vuejs', category: 'frontend' }
				],
				title: `GRU (Gestion des Relations Utilisateurs)`
			},
			{
				title: 'Formation',
				description: 'Formation donnée en VueX (Redux pour VueJS)',
				skills: [
					{ name: 'vuejs', category: 'frontend' },
					{ name: 'redux', category: 'other', color: 'gray' }
				]
			}
		]
	},
	{
		enterprise: 'Gymglish',
		position: 'Développeur web',
		description: `Gymglish est une société de formation professionnelle, spécialisée dans les langues européennes. J'étais affecté au Studio, la plateforme de création des cours`,
		startDate: new Date('2019-09-01'),
		endDate: new Date('2020-12-01'),
		missions: [
			{
				title: 'Export CSV',
				description: `Amélioration de l'export CSV des cours. Optimisation des requêtes NoSQL et du traitement en javascript des données.`,
				skills: [
					// { name: 'nodejs', category: 'backend', },
					// { name: 'Express', category: 'backend', },
					// { name: 'ReactJS', category: 'frontend' },
					// { name: 'MongoDB', category: 'data' }
				]
			},
			{
				title: 'Ajout de champs',
				description: `Création de plusieurs champs en full-stack`,
				skills: [
					{ name: 'nodejs', category: 'backend' },
					{ name: 'express', category: 'backend' },
					{ name: 'reactjs', category: 'frontend' },
					{ name: 'mongodb', category: 'data' }
				]
			},
			{
				title: 'Optimisation entre Studio et Cours',
				description: `Amélioration du processus de livraison des cours entre la plateforme studio et la plateforme de cours`,
				skills: [
					{ name: 'nodejs', category: 'backend' },
					{ name: 'python', category: 'backend' }
				]
			},
			{
				title: 'Réécriture Studio V2',
				description: `Recréation from scratch de la plateforme Studio pour un développement 100% en interne avec les technologies similaires avec la plateforme de cours`,
				skills: [
					{ name: 'python', category: 'backend' },
					{ name: 'flask', category: 'backend' },
					{ name: 'angularjs', category: 'frontend' },
					{ name: 'mongodb', category: 'data' }
				]
			}
		]
	},
	{
		enterprise: 'Fastory',
		startDate: new Date('2021-01-01'),
		endDate: new Date('2021-07-01'),
		description:
			'Entreprise de création de micro-sites avec chatbot, jeux concours et dashboard analytics.',
		position: 'Développeur web',
		missions: [
			{
				title: 'Webhook',
				description: `Développement d'un plugin webhook afin de récupérer sur un serveur client les données du chatbot en temps réél (ou en batch).`,
				skills: [
					{ name: 'nodejs', category: 'backend' },
					{ name: 'hapi', category: 'backend' },
					{ name: 'reactjs', category: 'frontend' },
					{ name: 'mongodb', category: 'data' }
				],
				snapshot: true
			},
			{
				title: 'Visuel',
				description: `Résolution de bug et amélioration visuelles sur l'ensemble du site (WYSIWYG & dashboard).`,
				skills: [{ name: 'reactjs', category: 'frontend' }]
			},
			{
				title: 'Leaderboard',
				description: `Développement d'un leaderboard en temps réél pour les jeux concours.`,
				skills: [
					{ name: 'nodejs', category: 'backend' },
					{ name: 'hapi', category: 'backend' },
					{ name: 'reactjs', category: 'frontend' },
					{ name: 'redis', category: 'data' }
				],
				snapshot: true
			},
			{
				title: 'MAJ React',
				description: `Passage de l'ensemble des composants écrits comme des class vers des composants de type fonction.`,
				skills: [{ name: 'reactjs', category: 'frontend' }]
			}
		]
	},
	{
		enterprise: 'ESGI (Paris & Lyon) - NextU',
		position: 'Intervenant',
		startDate: new Date('2021-09-01'),
		endDate: new Date('2024-02-01'),
		description: `Cours sur les technologies web donnés au sein de différentes écoles pour des Master 1 et 2.`,
		missions: [
			{
				title: 'Microservices',
				description: `Présentation de l'univers microservices, introduction aux technologies utilisées, et à l'architecture des microservices.`,
				skills: [
					{ name: 'nestjs', category: 'backend' },
					{ name: 'golang', category: 'backend' },
					{ name: 'grpc', category: 'devops' },
					{ name: 'rest', category: 'devops' },
					{ name: 'architecture', category: 'devops' },
					{ name: 'microservices', category: 'devops' },
					{ name: 'kubernetes', category: 'devops' },
					{ name: 'docker', category: 'devops' },
					{ name: 'gcp', category: 'system' }
				],
				snapshot: true
			},
			{
				title: 'Solutions CI/CD',
				description: `Présentation des solutions de CI/CD, et des outils de gestion de versioning.`,
				skills: [
					{ name: 'git', category: 'other' },
					{ name: 'jenkins', category: 'devops' },
					{ name: 'github action', category: 'devops' },
					{ name: 'circleci', category: 'devops' },
					{ name: 'docker', category: 'devops' },
					{ name: 'ansible', category: 'devops' },
					{ name: 'gcp', category: 'system' }
				],
				snapshot: true
			},
			{
				title: 'Golang',
				description: `Introduction au langage de programation Golang.`,
				skills: [{ name: 'golang', category: 'backend' }],
				snapshot: true
			},
			{
				title: 'React',
				description: `Introduction au langage de programation React via NextJS.`,
				skills: [
					{ name: 'reactjs', category: 'frontend' },
					{ name: 'nextjs', category: 'frontend' }
				]
			},
			{
				title: "Intégration d'IA",
				description: `Intégration de modèle d'intelligence artificielle via API. Construction d'espace vectoriel, connexion aux moteurs de recherches pour créer des IA spécifiques.`,
				skills: [{ name: 'python', category: 'backend' }]
			},
			{
				title: 'Web realtime',
				description: `Présentation des différentes technologies permettant le temps réel pour le web. Implémentation de projets en temps réel.`,
				skills: [
					{ name: 'redis', category: 'data' },
					{ name: 'websocket', category: 'backend' },
					{ name: 'socket.io', category: 'backend' },
					{ name: 'webRTC', category: 'frontend' }
				]
			},
			{
				title: 'Autres',
				description: `Participation à l'organisation des examens communs entre les matières, accompagnement des étudiants dans la conception et réalisation d'un cours type udemy, cours sur le test de performance, intégration des IA au web via API.`,
				skills: []
			}
		]
	},
	{
		enterprise: 'Voc On Steroid',
		position: 'Entrepreneur',
		startDate: new Date('2020-09-01'),
		endDate: new Date('2030-07-01'),
		description: `Création d'une application permettant d'enrichir son vocabulaire en apprenant de nouveaux mots.  <a href="https://voconsteroid.com" class="link ml-4"><img src="https://voconsteroid.com/voconsteroidLogoNT384.png" alt="voconsteroid" class="inline w-10" /> voconsteroid.com</a>`,
		missions: [
			{
				title: 'Architecture',
				description: `Création de l'architecture du projet.`,
				skills: [
					{ name: 'microservices', category: 'devops' },
					{ name: 'gcp', category: 'system' },
					{ name: 'bare metal', category: 'system' }
				],
				snapshot: true
			},
			{
				title: 'Développement',
				description: `Développement de l'ensemble de l'application.`,
				skills: [
					{ name: 'nodejs', category: 'backend' },
					{ name: 'nestjs', category: 'backend' },
					{ name: 'golang', category: 'backend' },
					{ name: 'sveltekit', category: 'frontend' },
					{ name: 'mongodb', category: 'data' },
					{ name: 'mysql', category: 'data' },
					{ name: 'elk', category: 'data' }
				],
				snapshot: true
			},
			{
				title: 'DevOps',
				description: `Prise en charge du déploiement de l'application.`,
				skills: [
					{ name: 'docker', category: 'devops' },
					{ name: 'kubernetes', category: 'devops' },
					{ name: 'github action', category: 'devops' },
					{ name: 'linux', category: 'system' },
					{ name: 'tls', category: 'devops' },
					{ name: 'kong', category: 'devops' },
					{ name: 'traefik', category: 'devops' }
				],
				snapshot: true
			},
			{
				title: 'Management',
				description: `Prise en charge du management de l'équipe (1 personne). Gestion des ressources, priorisation des tâches.`,
				skills: [
					{ name: 'git', category: 'other' },
					{ name: 'kanban', category: 'other' }
				]
			}
		]
	}
];
