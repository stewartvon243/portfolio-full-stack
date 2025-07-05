import { SectionTitle } from '../components/section-title.component';

const timeline = [
	{
		title: 'Experience',
		items: [
			{
				title: 'Senior Full-Stack Developer',
				place: 'Freelance / Remote',
				timePeriod: '2021 – Present',
				description: (
					<ul>
						<li>Delivered over 30+ client projects across FinTech, eCommerce, and SaaS sectors.</li>
						<li>Built and maintained complex Laravel & React-based web platforms with RESTful APIs.</li>
						<li>Integrated crypto wallets (MetaMask, WalletConnect) and smart contract interactions for blockchain-based applications.</li>
						<li>Modernized legacy systems in .NET with performance improvements and UI upgrades using AngularJS and Bootstrap.</li>
					</ul>
				),
			},
			{
				title: 'Full-Stack Developer',
				place: 'TechNova Solutions, Hong Kong',
				timePeriod: '2017 – 2021',
				description: (
					<ul>
						<li>Led a 5-member dev team in building a cloud-based CRM system using ASP.NET MVC and SQL Server.</li>
						<li>Developed Android apps for internal tools used by logistics and service departments.</li>
						<li>Implemented secure authentication and role-based access systems across multiple projects.</li>
					</ul>
				),
			},
			{
				title: 'Junior Web Developer',
				place: 'BrightApps Studio, Hong Kong',
				timePeriod: '2015 – 2017',
				description: (
					<ul>
						<li>Assisted in developing responsive websites and dashboards using Laravel and jQuery.</li>
						<li>Conducted frontend optimization and basic SEO enhancements.</li>
					</ul>
				),
			},
		],
	},
	{
		title: 'Certification',
		items: [
			{
				title: 'Certified Laravel Developer',
				place: 'Laracasts',
				timePeriod: '',
				description: null,
			},
			{
				title: 'Microsoft Certified: Azure Fundamentals',
				place: '',
				timePeriod: '',
				description: null,
			},
			{
				title: 'Blockchain Development Bootcamp',
				place: 'ConsenSys Academy (Online)',
				timePeriod: '',
				description: null,
			},
		],
	},
	{
		title: 'Education',
		items: [
			{
				title: 'Bachelor of Information Technology',
				place: 'Hong Kong University of Science and Technology',
				timePeriod: '2014 – 2018',
				description: null,
			},
		],
	},
];

export const AboutMe = () => {
	return (
		<section
			className='about-me container'
			id='about-me'
		>
			<div>
				<SectionTitle
					title='About'
					subTitle='ME'
				/>
			</div>
			<div>
				<div className='intro luxury-intro'>
					<p style={{ marginTop: '20px', fontSize: '1.45rem', fontWeight: 600, letterSpacing: '0.02em', color: 'rgba(255,255,255,0.96)', textShadow: '0 2px 16px rgba(31,195,255,0.12)' }}>
						<span style={{fontSize: '2.1rem', verticalAlign: 'middle', marginRight: '0.5rem'}}>✨</span>
						<strong>Experienced Full-Stack Developer</strong> with <strong>7+ years</strong> of hands-on expertise in building <span style={{color:'#1fc3ff'}}>scalable</span>, <span style={{color:'#1fc3ff'}}>secure</span>, and <span style={{color:'#1fc3ff'}}>high-performance</span> web and mobile applications.<br/><br/>
						Proficient in both frontend and backend technologies, with a strong grasp of <strong>PHP (Laravel)</strong>, <strong>ASP.NET</strong>, <strong>.NET</strong>, <strong>C#</strong>, JavaScript frameworks (<strong>React</strong>, <strong>AngularJS</strong>, <strong>Vue.js</strong>, <strong>Next.js</strong>, <strong>Three.js</strong>), <strong>Android</strong> development.<br/><br/>
						Adept at delivering tailored systems—whether from scratch or through optimization of existing platforms—with a focus on <span style={{color:'#ffd700'}}>reliability</span>, <span style={{color:'#ffd700'}}>code quality</span>, and <span style={{color:'#ffd700'}}>performance</span>.
					</p>
				</div>
				<div>
					{timeline.map(({ items, title }, idx) => (
						<div
							className='timeline'
							key={idx}
						>
							<h1>{title}</h1>
							{items.map(({ title, place, timePeriod, description }, idx) => (
								<div
									className='timeline-list'
									key={idx}
								>
									<div className='timeline-item'>
										<p className='designation'>{title}</p>
										<p className='place'>
											{place} | {timePeriod}
										</p>
										<div className='timeline-description'>{description}</div>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
