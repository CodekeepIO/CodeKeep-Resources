const CourseData = [
	{
		name: 'Pluralsight',
		cover:
			'https://www.pluralsight.com/content/pluralsight/en/jcr:content/image-res/file.transform/share-image/image.img.cb030118-d1e7-464b-8a41-617b2d10a222.jpg',
		logo: 'https://pbs.twimg.com/profile_images/1233102158393774080/Ue07scDW_400x400.jpg',
		description:
			'Stay Home! Skill Up! Get FREE access to 7,000+ Pluralsight courses during the month of April. THE technology skills platform with expert-led, online courses for web development, IT training and more! Start learning today!',
		link: 'https://www.pluralsight.com/',
		tags: [
			'machine learning',
			'software development',
			'cyber security',
			'artificial intelligence',
			'cloud computing',
			'web development'
		],
		category: 'all',
		entireWebsite: true,
		specificCourse: false
	},
	{
		name: 'FullstackAcademy',
		cover: 'https://cloud.fullstackacademy.com/_centerCrop/FSA-blog-header-code-from-home.jpg?mtime=20200330123415',
		logo: 'https://pbs.twimg.com/profile_images/1145685694238605312/q4JCNy_X_400x400.jpg',
		description: 'Maximize Your Time During a Global Pandemic: Code from Home',
		link: 'https://www.fullstackacademy.com/blog/code-from-home',
		tags: ['html', 'css', 'javascript'],
		category: 'web development',
		entireWebsite: false,
		specificCourse: true
	},
	{
		name: 'Automate the Boring Stuff with Python Programming',
		cover: 'https://img-a.udemycdn.com/course/480x270/543600_64d1_4.jpg',
		logo: '',
		description:
			'A practical programming course for office workers, academics, and administrators who want to improve their productivity.',
		link: 'https://img-a.udemycdn.com/course/480x270/543600_64d1_4.jpg',
		tags: ['python'],
		category: 'software development',
		entireWebsite: false,
		specificCourse: true
	},

	{
		name: 'Web Development Bootcamp',
		cover: 'https://static.frontendmasters.com/assets/fm/med/bootcamp/open-graph.jpg',
		logo: 'https://pbs.twimg.com/profile_images/911069740164108289/ZiVAi6zG_400x400.jpg',
		description: `Get access to everything you need to get started developing websites.
Learn HTML, CSS and JavaScript through project- based learning.`,
		link: 'https://frontendmasters.com/bootcamp/',
		tags: ['html', 'css', 'js'],
		category: 'web development',
		entireWebsite: false,
		specificCourse: true
	},
	{
		name: 'Complete Python Course: Zero to Hero',
		cover: 'https://img-a.udemycdn.com/course/480x270/2548315_a907.jpg',
		logo: '',
		description: 'Ultimate Python course',
		link: 'https://www.udemy.com/course/complete-python-course-zero-to-hero-e/?couponCode=KIOJAUIU991',
		tags: ['python'],
		category: 'software development',
		entireWebsite: false,
		specificCourse: true
	},
	{
		name: 'Python for Penetration Testers',
		cover: 'https://img-a.udemycdn.com/course/480x270/2824623_18a7_3.jpg',
		logo: '',
		description: 'Hacking with Python',
		link: 'https://www.udemy.com/course/python-for-pentesters/?couponCode=FREEEDUCATION',
		tags: ['pen testing', 'python'],
		category: 'cyber security',
		entireWebsite: false,
		specificCourse: true
	},

	{
		name: 'Complete Cyber Security Course: Beginner to Advanced',
		cover: 'https://img-a.udemycdn.com/course/480x270/2459840_76a3_2.jpg',
		logo: '',
		description:
			'Learn WiFi Hacking, Anonymity, Denial Of Service Attack, Buffer Overflow, Cryptography, Password Hacking and much more!',
		link:
			'https://www.udemy.com/course/complete-cyber-security-course-beginner-to-advanced-u/?couponCode=CYBER91L2',
		tags: ['security'],
		category: 'cyber security',
		entireWebsite: false,
		specificCourse: true
	},

	{
		name: 'Adobe Photoshop CC: Your Complete Beginner to Advanced Class',
		cover: 'https://img-a.udemycdn.com/course/480x270/927356_8108_4.jpg',
		logo: '',
		description:
			'Learn the essential tools of Adobe Photoshop CC to jump right in and design beautiful graphics and photos in Photoshop.',
		link: 'https://www.udemy.com/course/adobe-photoshop-course/?couponCode=STAYHOME1',
		tags: ['photoshop'],
		category: 'design',
		entireWebsite: false,
		specificCourse: true
	},
	{
		name: 'Learn JavaScript From Scratch',
		cover: 'https://img-a.udemycdn.com/course/480x270/2663864_073c.jpg',
		logo: '',
		description: 'Complete JavaScript course. Learn basics and advanced of JavaScript from scratch.',
		link: 'https://www.udemy.com/course/learn-javascript-from-scratch-z/?couponCode=KIOWU1231',
		tags: ['javaScript'],
		category: 'programming languages',
		entireWebsite: false,
		specificCourse: true
	},
	{
		name: 'Facebook Ads And Marketing - Lead Generation Pro - 2020',
		cover: 'https://img-a.udemycdn.com/course/480x270/2647940_c3fa.jpg',
		logo: '',
		description: 'Generate Leads Like A Pro Using Facebook Advertising strategy for your business or clients.',
		link: 'https://www.udemy.com/course/facebook-marketing-for-lead-generation-2020/?couponCode=MARCH20',
		tags: ['marketing'],
		category: 'marketing',
		entireWebsite: false,
		specificCourse: true
	},
	{
		name: 'Digital Marketing Masterclass - 23 Courses in 1',
		cover: 'https://img-a.udemycdn.com/course/480x270/1270870_8e95_13.jpg',
		logo: '',
		description:
			'Grow Your Business with Digital Marketing: Social Media Marketing, Facebook, Content, YouTube, Email Marketing, Websites',
		link: 'https://www.udemy.com/course/digital-marketing-masterclass/?couponCode=STAYHOME1',
		tags: ['Digital Marketing'],
		category: 'marketing',
		entireWebsite: false,
		specificCourse: true
	},
	{
		name: 'Adobe Lightroom CC Photo Editing: Your Lightroom Masterclass',
		cover: 'https://img-a.udemycdn.com/course/480x270/1699008_051e_6.jpg',
		logo: '',
		description:
			'Learn how to make your photos look amazing with this Adobe Lightroom Classic CC and Lightroom CC photo editing course.',
		link: 'https://www.udemy.com/course/adobe-lightroom-classic-cc-photo-editing-course/?couponCode=STAYHOME1',
		tags: ['Photography Tools'],
		category: 'design',
		entireWebsite: false,
		specificCourse: true
	},

	{
		name: 'Content Marketing: Grow Your Business with Content Marketing',
		cover: 'https://img-a.udemycdn.com/course/480x270/2295965_720a_2.jpg',
		logo: '',
		description:
			'Learn how to use modern content marketing to grow your business and brand! Come up with your own Content Marketing plan!',
		link: 'https://www.udemy.com/course/content-marketing-for-beginners/?couponCode=STAYHOME1',
		tags: ['Content Marketing'],
		category: 'marketing',
		entireWebsite: false,
		specificCourse: true
	},
	{
		name: 'Adobe InDesign CC: Your Complete Guide to InDesign',
		cover: 'https://img-a.udemycdn.com/course/480x270/1351634_7dc7_4.jpg',
		logo: '',
		description:
			'Become an Adobe InDesign CC Master: Learn the complete InDesign workflow to create PDFs, eBooks, pamphlets, and more!',
		link: 'https://www.udemy.com/course/adobe-indesign-course/?couponCode=STAYHOME1',
		tags: ['Design Tools'],
		category: 'design',
		entireWebsite: false,
		specificCourse: true
	},
	{
		name: 'Artificial Intelligence Exposed: Future 1.0 Extreme Edition',
		cover: 'https://img-a.udemycdn.com/course/480x270/2767208_818e.jpg',
		logo: '',
		description: `Learn and explore 100's of secretive tools, technologies and websites covering Artificial Intelligence and beyond`,
		link:
			'https://www.udemy.com/course/artificial-intelligence-exposed-future-10-extreme-edition/?couponCode=C8C3530EA1A47ECF1ECE',
		tags: ['artificial intelligence'],
		category: 'artificial intelligence',
		entireWebsite: false,
		specificCourse: true
	},
	{
		name: 'Home Business Basic Sales & Marketing Tools',
		cover: 'https://img-a.udemycdn.com/course/480x270/2442852_36f8_2.jpg',
		logo: '',
		description: 'Learn About Some Of The Basic Sales & Marketing Tools For A Home Business',
		link: 'https://www.udemy.com/course/home-business-basic-sales-marketing-tools/?couponCode=F2E1F204C7735CA51A7B',
		tags: ['marketing'],
		category: 'marketing',
		entireWebsite: false,
		specificCourse: true
	},
	{
		name: 'The SQL and MySQL Master',
		cover: 'https://img-a.udemycdn.com/course/480x270/2404298_5aa3_2.jpg',
		logo: '',
		description: 'MySQL database, SQL complete, best practices, Learn now!',
		link: 'https://www.udemy.com/course/sql-mysql-database-sql/',
		tags: ['sql'],
		category: 'database',
		entireWebsite: false,
		specificCourse: true
	},
	{
		name: 'Responsive Web Design with HTML5 and CSS3 - Introduction',
		cover: 'https://img-a.udemycdn.com/course/480x270/152244_8cc9_5.jpg',
		logo: '',
		description:
			'An introduction to the code snippets necessary to make a web page responsive, including media queries, jQuery, and CSS.',
		link: 'https://www.udemy.com/course/responsive-web-design-with-html5-and-css3-introduction/',
		tags: ['responsive design'],
		category: 'web development',
		entireWebsite: false,
		specificCourse: true
	},

	{
		name: 'Responsive Web Design with HTML5 and CSS3 - Intermediate',
		cover: 'https://img-a.udemycdn.com/course/480x270/152246_464a_4.jpg',
		logo: '',
		description: 'Learn about HTML5 Forms, Image Sliders, Flexible Video, Lazy Loading, and Image Sprites',
		link: 'https://www.udemy.com/course/responsive-web-design-intermediate/',
		tags: ['responsive design'],
		category: 'web development',
		entireWebsite: false,
		specificCourse: true
	},
	{
		name: '[NEW] React + Firebase: For Beginners',
		cover: 'https://img-a.udemycdn.com/course/480x270/2655532_1d0b_2.jpg',
		logo: '',
		description:
			'Learn how to build and launch React & Firebase real time applications using React, Parcel, Babel, React-Router, & more!',
		link: 'https://www.udemy.com/course/new-react-firebase-real-time-serverless-apps/',
		tags: ['react hooks'],
		category: 'web development',
		entireWebsite: false,
		specificCourse: true
	},
	{
		name: 'The Growth Hacker Interviews',
		cover: 'https://img-a.udemycdn.com/course/480x270/79756_3275_6.jpg',
		logo: '',
		description: 'Learn what Dropbox, Twitter, & other successful startups do to acquire millions of users.',
		link: 'https://www.udemy.com/course/the-growth-hacker-interviews/',
		tags: ['marketing'],
		category: 'marketing',
		entireWebsite: false,
		specificCourse: true
	},

	{
		name: 'Your last Intro to Programming Course',
		cover: 'https://img-a.udemycdn.com/course/480x270/2580638_b517_3.jpg',
		logo: '',
		description:
			'Learn for free the essential tools of real software developers and get out of the web based coding windows',
		link: 'https://www.udemy.com/course/your-last-intro-to-programming-course/',
		tags: ['web development'],
		category: 'web development',
		entireWebsite: false,
		specificCourse: true
	},
	{
		name: 'JavaScript for QA Engineers and SDETs',
		cover: 'https://img-a.udemycdn.com/course/480x270/2081086_b472_2.jpg',
		logo: '',
		description:
			'Learn to code in JavaScript so you can pass your coding interview. Specifically designed for QA. No experience required!',
		link: 'https://www.udemy.com/course/javascript-for-qa-engineers-and-sdets/',
		tags: ['javascript'],
		category: 'web development',
		entireWebsite: false,
		specificCourse: true
	},
	{
		name: 'Database Design',
		cover: 'https://img-a.udemycdn.com/course/480x270/268632_7a4b_4.jpg',
		logo: '',
		description:
			'Learn relational database Design with practical concepts and examples. This series works with any database system!',
		link: 'https://www.udemy.com/course/database-design/',
		tags: ['database'],
		category: 'databases',
		entireWebsite: false,
		specificCourse: true
	},
	{
		name: 'The Comprehensive Unity Bootcamp - Build Games and UI',
		cover: 'https://img-a.udemycdn.com/course/480x270/1633120_62df_4.jpg',
		logo: '',
		description: 'From UI Inventory Systems to Retro Rogue Frogs',
		link: 'https://www.udemy.com/course/complete-unity-bootcamp-build-games-and-ui/',
		tags: ['game development'],
		category: 'game development',
		entireWebsite: false,
		specificCourse: true
	},
	{
		name: 'Mobile ML and Data Science with nitroproc',
		cover: 'https://img-a.udemycdn.com/course/480x270/1381906_b48b.jpg',
		logo: '',
		description: 'Use nitroproc to process and model big data, do machine learning and statistics using any device',
		link: 'https://www.udemy.com/course/work-with-big-data-locally-with-nitroproc/',
		tags: ['machine learning'],
		category: 'machine learning',
		entireWebsite: false,
		specificCourse: true
	},
	{
		name: 'Free AWS Certified Cloud Practitioner 2019',
		cover: 'https://img-a.udemycdn.com/course/480x270/2602414_89d1_2.jpg',
		logo: '',
		description: 'Get your first AWS Certification and Learn the AWS Fundamentals.',
		link: 'https://www.udemy.com/course/free-aws-certified-cloud-practitioner/',
		tags: ['aws'],
		category: 'cloud computing',
		entireWebsite: false,
		specificCourse: true
	},
	{
		name: 'Adobe Illustrator form beginner to expert',
		cover: 'https://img-a.udemycdn.com/course/480x270/2287919_cac6_3.jpg',
		logo: '',
		description: 'Learn detailed and comprehensive Adobe Illustrator in 15 hours',
		link: 'https://www.udemy.com/course/adobe-illustrator-comprehensive-training/',
		tags: ['adobe illustrator'],
		category: 'design',
		entireWebsite: false,
		specificCourse: true
	},
	{
		name: 'Database Design and MySQL',
		cover: 'https://img-a.udemycdn.com/course/480x270/64404_eb10_5.jpg',
		logo: '',
		description:
			'Database Design, MySQL Fundamentals and more advanced programming concepts. Learn how to program banks, libraries, etc.',
		link: 'https://www.udemy.com/course/calebthevideomaker2-database-and-mysql-classes/',
		tags: ['mysql'],
		category: 'databases',
		entireWebsite: false,
		specificCourse: true
	},

	{
		name: 'RabbitMQ and Messaging Concepts',
		cover: 'https://img-a.udemycdn.com/course/480x270/2526432_6e10.jpg',
		logo: '',
		description:
			'Learn RabbitMQ message broker, general messaging concepts and RabbitMQ .Net client library with samples',
		link: 'https://www.udemy.com/course/rabbitmq-and-messaging-concepts/',
		tags: ['rabbitmq'],
		category: 'software development',
		entireWebsite: false,
		specificCourse: true
	},
	{
		name: 'Learn JavaScript - For Beginners',
		cover: 'https://img-a.udemycdn.com/course/480x270/2337802_1793.jpg',
		logo: '',
		description: 'Learn how to Code Web Pages using JavaScript',
		link: 'https://www.udemy.com/course/learn-javascript-for-beginners-v/',
		tags: ['web development'],
		category: 'web development',
		entireWebsite: false,
		specificCourse: true
	},
	{
		name: 'Startup BoostCamp: Useful tools for 1st time entrepreneurs',
		cover: 'https://img-a.udemycdn.com/course/480x270/1561834_2c43.jpg',
		logo: '',
		description: 'All you need to boost your startup project',
		link: 'https://www.udemy.com/course/startup-boostcamp-useful-tools-for-1st-time-entrepreneurs/',
		tags: ['startup'],
		category: 'entrepreneurship',
		entireWebsite: false,
		specificCourse: true
	},
	{
		name: 'Photoshop Basics: For Beginners',
		cover: 'https://img-a.udemycdn.com/course/480x270/2299172_8aa0_3.jpg',
		logo: '',
		description: 'How to make easy icons',
		link: 'https://www.udemy.com/course/-mobile-app-design/?couponCode=PHOTOSHOPDESIGN',
		tags: ['mobile app design'],
		category: 'design',
		entireWebsite: false,
		specificCourse: true
	},

	{
		name: 'Start Kali Linux, Ethical Hacking and Penetration Testing!',
		cover: 'https://img-a.udemycdn.com/course/480x270/605006_c578_3.jpg',
		logo: '',
		description:
			'Learn the basics of ethical hacking, penetration testing, web testing and wifi hacking in kali linux!',
		link: 'https://www.udemy.com/course/ethical-hacker/',
		tags: ['kali linux'],
		category: 'cyber security',
		entireWebsite: false,
		specificCourse: true
	},
	{
		name: 'React Fullstack with node/express, PostgreSQL and AWS',
		cover: 'https://img-a.udemycdn.com/course/480x270/2542078_6708_3.jpg',
		logo: '',
		description: 'Learn how to setup a React Fullstack app on AWS with a PostgreSQL database',
		link: 'https://www.udemy.com/course/react-fullstack-with-nodeexpress-psql-and-aws/',
		tags: ['react'],
		category: 'web development',
		entireWebsite: false,
		specificCourse: true
	},
	{
		name: 'Build OLX Clone With Python & Django',
		cover: 'https://img-a.udemycdn.com/course/480x270/2323392_cdda_3.jpg',
		logo: '',
		description: 'Learn to build websites like OLX with Python3 & Django',
		link: 'https://www.udemy.com/course/build-olx-clone-with-python-django/?couponCode=STAYATHOME',
		tags: ['web development'],
		category: 'web development',
		entireWebsite: false,
		specificCourse: true
	},
	{
		name: 'Android Game Development Crash Course For Beginners',
		cover: 'https://img-a.udemycdn.com/course/480x270/2868044_5dd9_2.jpg',
		logo: '',
		description:
			'Learn Android Game Development with Android Studio and Java. Create your First Mobile Game and Publish it to Play Store',
		link:
			'https://www.udemy.com/course/android-game-development-crash-course-for-beginners/?couponCode=STAYSAFE2020',
		tags: ['android'],
		category: 'mobile development',
		entireWebsite: false,
		specificCourse: true
	}
];

export default CourseData;
