import emoji from "react-easy-emoji";

export const greetings = {
	name: "Ryan Strasser",
	title: "Hi everyone, I'm Ryan",
	description:
		"I'm a passionate Senior Solutions Architect with extensive experience designing, building, and deploying web applications with React.js, Node.js, PHP and cloud service platforms such as AWS.",
	resumeLink:
		"https://drive.google.com/file/d/1nECX1WySdo6VDJ2Lq-Yxhca1Xemn-8fk/view?usp=sharing",
};

export const openSource = {
	githubUserName: "rstrasser04",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/RyanAStrasser",
	instagram: "https://www.instagram.com/ryan_strasser/",
	github: "https://github.com/rstrasser04",
	linkedin: "https://www.linkedin.com/in/ryanastrasser",
	email: "mailto:strasserra04@gmail.com"
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"I'M AN ENTHUSIASTIC SOLUTIONS ARCHITECT WHO LIKES TO LEAD NEW DEVELOPMENT PROJECTS WITH THE NEWEST AND BEST TECH STACKS",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
				)
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nodejs",
					fontAwesomeClassname: "vscode-icons:file-type-node",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
				{
					skillName: "OBS Studio",
					fontAwesomeClassname: "simple-icons:obsstudio"
				},
				{
					skillName: "Adobe Creative Cloud",
					fontAwesomeClassname: "cib:adobe-creative-cloud"
				}
			],
		},
		{
			title: "Cloud Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Experience hosting and maintaining virtual conference sites through AWS virtual machine instances along with integration of databases"
				)
			],
			softwareSkills: [
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				{
					skillName: "Netlify",
					fontAwesomeClassname: "logos:netlify",
				},

			],
		},
		
	],
};

export const SkillBars = [
	{
		Stack: "Frontend", //Insert stack or technology you have experience in
		progressPercentage: "80", //Insert relative proficiency in percentage
	},
	{
		Stack: "UI/UX", //Insert stack or technology you have experience in
		progressPercentage: "80", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "50",
	},
	{
		Stack: "Programming",
		progressPercentage: "50",
	},
];

export const educationInfo = [
	{
		schoolName: "University of Wisconsin - Whitewater",
		subHeader: "BA Communications and Media Arts",
		duration: "Graduated December 2012",
		descBullets: [
			"Involved with the Association of Information Technology Professionals",
			"Worked with Gamezombie.tv - a student lead, original video game interview site - as informational director in internet marketing and media",
			"Implemented a client-to-student media outreach website and social media campaign, Whitewater Media Outreach, for the University of Wisconsin-Whitewater MAGD program"
		],
	},
];

export const experience = [
	{
		role: "Senior Solutions Architect",
		company: "Fiserv",
		companylogo: "/img/icons/common/fiserv.png",
		date: "OCT 2020 – PRESENT",
		desc: "Designed and created multiple projects for automation and educational purposes using React.js and AWS Web Services.",
		descBullets: [
			"Automation tool for creating online banking profiles/sites quickly and accurately.",
		 	"Full-stack creation of virtual online conference",
		 ],
	},
	{
		role: "Solutions Architect",
		company: "Fiserv",
		companylogo: "/img/icons/common/fiserv.png",
		date: "MAY 2015 - OCTOBER 2020",
		descBullets: [
			"Installation, support, and branding of our online banking software products",
			"Design and develop internal tools to increase productivity and automation"
		 ],
	},
	{
		role: "Junior Developer",
		company: "Cygnus Business Media",
		companylogo: "/img/icons/common/cygnus.png",
		date: "JANUARY 2014 – MAY 2015",
		descBullets: [
			"Develop web programs and apps in PHP, HTML, CSS, and JavaScript",
			"Redesigning and development of corporate e-newsletters in responsive design layouts",
			"Collaborating with other developers to relaunch in-house CMS program"
		 ],
	},
	{
		role: "Site Operations Coordinator",
		company: "Cygnus Business Media",
		companylogo: "/img/icons/common/cygnus.png",
		date: "JANUARY 2013 – JANUARY 2014,",
		descBullets: [
			"Managed developmental & functionality changes to web pages in B2B publishing",
			"Processed email marketing material to opt-in subscribers and advertisers",
		 ],
	},
];

export const projects = [
	{
		name: "Fall and Spring Education Seminar",
		desc: "Fully online eduction seminars that delivered informative education lessons on new products while also engaging end users within live video and chat",
		link: "https://premier.fiservseminars.com/",
	},
	{
		name: "Meatloaf & Meatloaf 2.0",
		desc: "Automation tool to pick colors and generate themed online banking websites",
		link: "https://branding3.secureinternetbank.com/meatloaf/",
	},
	{
		name: "Wasco Inc (Archived)",
		desc: "Website redesign and graphic creation. This design has since changed",
		link: "https://web.archive.org/web/20140915045131/http://www.wascoinc.com/",
	},
	{
		name: "Original Portfolio",
		desc: "Originally built to house my work with other concepts such as design, video and photography",
		// github: "https://github.com/1hanzla100",
		link: "https://ryanstrasser.wixsite.com/home",
	},
];