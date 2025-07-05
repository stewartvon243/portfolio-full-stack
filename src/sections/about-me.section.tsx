import { SectionTitle } from '../components/section-title.component';

const timeline = [
	{
		title: 'Experience',
		items: [
			{
				title: 'SENIOR FULL-STACK DEVELOPER',
				place: 'Smart Outsourcing Solution (Verified Company) – Hong Kong',
				timePeriod: 'Jun 2023 – 2024',
				description: (
					<ul>
						<li>Leading enterprise web application development using Laravel, React, and .NET. Mentoring junior developers and architecting scalable solutions.</li>
						<li><strong>Technologies Used:</strong> Laravel, React, TypeScript, .NET Core, PostgreSQL, Docker</li>
						<li><strong>Key Achievements:</strong></li>
						<ul>
							<li>Improved application performance by 40%</li>
							<li>Led a team of 5 developers</li>
							<li>Delivered 3 major projects on time</li>
						</ul>
					</ul>
				),
			},
			{
				title: 'FULL-STACK DEVELOPER',
				place: 'Prizm Group – Global Digital Marketing Agency – Hong Kong',
				timePeriod: 'Oct 2020 – May 2023',
				description: (
					<ul>
						<li>Built and maintained web applications using MERN stack and PHP. Delivered responsive Android mobile apps.</li>
						<li><strong>Technologies Used:</strong> MERN Stack, PHP, Android, MySQL, AWS</li>
						<li><strong>Key Achievements:</strong></li>
						<ul>
							<li>Developed 10+ web applications</li>
							<li>Built mobile app with 50k+ downloads</li>
							<li>Reduced server costs by 30%</li>
						</ul>
					</ul>
				),
			},
			{
				title: 'JUNIOR DEVELOPER',
				place: 'Teloz – Remote',
				timePeriod: 'Apr 2019 – Sep 2020',
				description: (
					<ul>
						<li>Worked on various client projects using different tech stacks. Gained experience in both frontend and backend development.</li>
						<li><strong>Technologies Used:</strong> JavaScript, PHP, MySQL, HTML/CSS, jQuery</li>
						<li><strong>Key Achievements:</strong></li>
						<ul>
							<li>Completed 20+ client projects</li>
							<li>Learned multiple tech stacks</li>
							<li>Contributed to open source projects</li>
						</ul>
					</ul>
				),
			},
			{
				title: 'JUNIOR FRONT-END DEVELOPER',
				place: 'Zühlke Engineering – Hong Kong',
				timePeriod: 'Jan 2017 – Mar 2019',
				description: (
					<ul>
						<li>Worked on various client projects using different tech stacks. Gained experience in both frontend and backend development.</li>
						<li><strong>Technologies Used:</strong> JavaScript, PHP, MySQL, HTML/CSS, jQuery</li>
						<li>Assisted in building complex single-page applications (SPAs) in AngularJS.</li>
						<li>Refactored legacy JavaScript modules into React components.</li>
						<li>Contributed to a collaborative codebase with strict version control and code review policies.</li>
						<li>Participated in Agile sprints, stand-ups, and retrospectives, improving team efficiency</li>
					</ul>
				),
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
