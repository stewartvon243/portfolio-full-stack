import { FaAndroid, FaLaravel, FaNodeJs, FaPhp, FaReact } from 'react-icons/fa';
import { SiDotnet, SiMongodb, SiMysql, SiNextdotjs, SiSharp, SiThreedotjs, SiVuedotjs } from 'react-icons/si';

import { GlowBox } from '../components/glow-box';
import { SectionTitle } from '../components/section-title.component';

const techs = [
	{
		heading: 'Tech Stack',
		items: [
			{
				title: 'PHP',
				icon: <FaPhp color='#777bb4' />,
				color: 'rgba(119, 123, 180, 0.6)',
			},
			{
				title: 'Node.js',
				icon: <FaNodeJs color='#68a063' />,
				color: 'rgba(104, 160, 99, 0.7)',
			},
			{
				title: 'React',
				icon: <FaReact color='#61dafb' />,
				color: 'rgba(97, 218, 251, 0.7)',
			},
			{
				title: 'Vue.js',
				icon: <SiVuedotjs color='#42b883' />,
				color: 'rgba(66, 184, 131, 0.7)',
			},
			{
				title: 'Next.js',
				icon: <SiNextdotjs color='#fff' />,
				color: 'rgba(255, 255, 255, 0.4)',
			},
			{
				title: 'Three.js',
				icon: <SiThreedotjs color='#fff' />,
				color: 'rgba(255, 255, 255, 0.4)',
			},
			{
				title: 'Laravel',
				icon: <FaLaravel color='#ff2d20' />,
				color: 'rgba(255, 45, 32, 0.7)',
			},
			{
				title: 'ASP.NET',
				icon: <SiDotnet color='#512bd4' />,
				color: 'rgba(81, 43, 212, 0.7)',
			},
			{
				title: 'C#',
				icon: <SiSharp color='#239120' />,
				color: 'rgba(35, 145, 32, 0.7)',
			},
			{
				title: 'Android',
				icon: <FaAndroid color='#3ddc84' />,
				color: 'rgba(61, 220, 132, 0.7)',
			},
			{
				title: 'MySQL',
				icon: <SiMysql color='#007a9e' />,
				color: 'rgba(0, 122, 158, 0.75)',
			},
			{
				title: 'MongoDB',
				icon: <SiMongodb color='#00ed64' />,
				color: 'rgba(0, 237, 100, 0.7)',
			},
		],
	},
];

export const TechStack = () => {
	return (
		<section className='tech-stack' id='tech-stack'>
			<div className='tech-grid'>
				{techs.map((tech, index) => (
					<div key={index}>
						<p>{tech.heading}</p>
						<div className='tech-row'>
							{tech.items.map((item, index) => (
								<GlowBox
									key={index}
									icon={item.icon}
									color={item.color}
									title={item.title}
								/>
							))}
						</div>
					</div>
				))}
			</div>
			<div>
				<SectionTitle title='Tech' subTitle='SET' />
			</div>
		</section>
	);
};
