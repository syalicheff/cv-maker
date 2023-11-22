import type { IExperience } from '$lib/component/experience.svelte';

export const experience: IExperience[] = [
	{
		enterprise: 'Netapsys Lyon',
		position: 'Web developer - Internship',
		description: `Netapsys is an IT engineering company, specializing in new technologies and various management solutions. It offers design, development and maintenance of computer applications and information systems.`,
		startDate: new Date('2015-04-01'),
		endDate: new Date('2015-07-01'),
		missions: [
			{
				skills: [
					{ name: 'c++', category: 'backend' },
					{ name: 'qt', category: 'other' }
				],

				description: `Participation in the development of the HaulotteDiag diagnostic application for Haulotte (forklifts), optimizing its compatibility with their vehicles.`,
				title: `HaulotteDiag`
			}
		]
	},
	{
		enterprise: 'Netapsys Paris',
		position: 'Web developer',
		description: `Participation in two projects: Si-LAV (Information System - Vectorial Anti-Fight) for the Ministry of Health and Osiris for the Ministry of Youth and Sports.`,
		startDate: new Date('2016-09-01'),
		endDate: new Date('2017-07-01'),
		missions: [
			{
				title: `Si-LAV`,
				description: `Working on the Si-LAV system with migration to a V2 which includes migration from GeoServer to Leaflet, management of authorizations in the SI-LAV database, and other improvements.`,
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
				description: `Participation in the evolution of the Osiris site for the Ministry of Youth and Sports, including the integration of the CNDS methods, addition of new fields, adaptation of the budget system from three to five years, and creation of new pages.`,
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
		position: 'Web developer - Internship',
		description: `Eudonet produces and offers the integration of a CRM (Customer Relationship Management).`,
		startDate: new Date('2018-04-01'),
		endDate: new Date('2018-07-01'),
		missions: [
			{
				description: `Development of a system allowing users to make requests. Creation of an algorithm calculating the available slots on a schedule. Creation of frontend pages.`,
				skills: [
					{ name: 'c# .net', category: 'backend' },
					{ name: 'vuejs', category: 'frontend' }
				],
				title: `GRU (User Relationship Management)`
			},
			{
				title: 'Training',
				description: 'Training given in VueX (Redux for VueJS)',
				skills: [
					{ name: 'vuejs', category: 'frontend' },
					{ name: 'redux', category: 'other', color: 'gray' }
				]
			}
		]
	},
	{
		enterprise: 'Gymglish',
		position: 'Web developer',
		description: `Gymglish is a professional training company, specializing in European languages. I was assigned to the Studio, the platform for creating courses.`,
		startDate: new Date('2019-09-01'),
		endDate: new Date('2020-12-01'),
		missions: [
			{
				title: 'CSV Export',
				description: `Improvement of the CSV export of courses. Optimization of NoSQL queries and javascript data processing.`,
				skills: [
					{ name: 'nodejs', category: 'backend' },
					{ name: 'express', category: 'backend' },
					{ name: 'reactjs', category: 'frontend' },
					{ name: 'mongodb', category: 'data' }
				],
				snapshot: true
			},
			{
				title: 'Addition of fields',
				description: `Creation of multiple fields in full-stack.`,
				skills: [
					{ name: 'nodejs', category: 'backend' },
					{ name: 'express', category: 'backend' },
					{ name: 'reactjs', category: 'frontend' },
					{ name: 'mongodb', category: 'data' }
				]
			},
			{
				title: 'Optimization between Studio and Course',
				description: `Improvement of the course delivery process between the studio platform and the course platform.`,
				skills: [
					{ name: 'nodejs', category: 'backend' },
					{ name: 'python', category: 'backend' }
				]
			},
			{
				title: 'Rewriting Studio V2',
				description: `Recreation from scratch of the Studio platform for 100% in-house development with similar technologies to the course platform.`,
				skills: [
					{ name: 'python', category: 'backend' },
					{ name: 'flask', category: 'backend' },
					{ name: 'angularjs', category: 'frontend' },
					{ name: 'mongodb', category: 'data' }
				],
				snapshot: true
			}
		]
	},
	{
		enterprise: 'Fastory',
		startDate: new Date('2021-01-01'),
		endDate: new Date('2021-07-01'),
		description:
			'Enterprise of creation of micro-sites with chatbot, contests and analytics dashboard.',
		position: 'Web developer',
		missions: [
			{
				title: 'Webhook',
				description: `Development of a webhook plugin to retrieve chatbot data in real time (or in batch) on a client server.`,
				skills: [
					{ name: 'nodejs', category: 'backend' },
					{ name: 'hapi', category: 'backend' },
					{ name: 'reactjs', category: 'frontend' },
					{ name: 'mongodb', category: 'data' }
				],
				snapshot: true
			},
			{
				title: 'Visual',
				description: `Bug fix and visual improvement on the entire site (WYSIWYG & dashboard).`,
				skills: [{ name: 'reactjs', category: 'frontend' }]
			},
			{
				title: 'Leaderboard',
				description: `Development of a real-time leaderboard for contests.`,
				skills: [
					{ name: 'nodejs', category: 'backend' },
					{ name: 'hapi', category: 'backend' },
					{ name: 'reactjs', category: 'frontend' },
					{ name: 'redis', category: 'data' }
				],
				snapshot: true
			},
			{
				title: 'React Update',
				description: `Conversion of all components written as classes to function type components.`,
				skills: [{ name: 'reactjs', category: 'frontend' }]
			}
		]
	},
	{
		enterprise: 'ESGI (Paris & Lyon) - NextU',
		position: 'Lecturer',
		startDate: new Date('2021-09-01'),
		endDate: new Date('2024-02-01'),
		description: `Courses on web technologies given to different schools for master's degrees.`,
		missions: [
			{
				title: 'Microservices',
				description: `Introduction to the world of microservices, introduction to the technologies used, and to the architecture of microservices.`,
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
				title: 'CI/CD Solutions',
				description: `Presentation of CI/CD solutions, and version management tools.`,
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
				description: `Introduction to the Golang programming language.`,
				skills: [{ name: 'golang', category: 'backend' }],
				snapshot: true
			},
			{
				title: 'React',
				description: `Introduction to React programming language.`,
				skills: [{ name: 'reactjs', category: 'frontend' }],
				snapshot: true
			},
			{
				title: 'AI Integration',
				description: `Integration of artificial intelligence model via API. Construction of vector space, connection to search engines to create specific AI.`,
				skills: [{ name: 'python', category: 'backend' }]
			},
			{
				title: 'Web realtime',
				description: `Presentation of different technologies enabling real-time for the web. Implementation of real-time projects.`,
				skills: [
					{ name: 'redis', category: 'data' },
					{ name: 'websocket', category: 'backend' },
					{ name: 'socket.io', category: 'backend' },
					{ name: 'webRTC', category: 'frontend' }
				],
				snapshot: true
			},
			{
				title: 'Other',
				description: `Participation in the organization of joint exams between the subjects, accompanying students in the design and realization of a Udemy type course, course on performance testing, integration of AI to the web via API.`,
				skills: []
			}
		]
	},
	{
		enterprise: 'Voc On Steroid',
		position: 'Entrepreneur',
		startDate: new Date('2020-09-01'),
		endDate: new Date('2030-07-01'),
		description: `Creation of an application to enrich vocabulary by learning new words.   <a href="https://voconsteroid.com" class="link ml-4"><img src="https://voconsteroid.com/voconsteroidLogoNT384.png" alt="voconsteroid" class="inline w-10" /> voconsteroid.com</a>`,
		missions: [
			{
				title: 'Architecture',
				description: `Creation of the project's architecture.`,
				skills: [
					{ name: 'microservices', category: 'devops' },
					{ name: 'gcp', category: 'system' },
					{ name: 'bare metal', category: 'system' }
				],
				snapshot: true
			},
			{
				title: 'Development',
				description: `Development of the entire application.`,
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
				description: `Responsibility for application deployment.`,
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
				description: `In charge of managing the team (1 person). Management of resources, prioritization of tasks.`,
				skills: [
					{ name: 'git', category: 'other' },
					{ name: 'kanban', category: 'other' }
				]
			}
		]
	}
];
