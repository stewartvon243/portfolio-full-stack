import { SectionTitle } from '../components/section-title.component';

export const ProjectsSection = () => {
  const projects = [
    {
      title: 'Kapsule',
      image: '/images/kapsule.png',
      url: 'https://Kapsule.me',
      description: 'Kapsule (short for time capsule) is a future messaging app that allows users to record and share video messages with anyone in the future. Not in hours, days, or weeks - but in months, years, or even decades.'
    },
    {
      title: 'NeedNect',
      image: '/images/neednect.png',
      url: 'https://neednect.com',
      description: 'NeedNect is a mobile app that allows you to create a personal profile detailing your travel preferences, including amenities, dietary requirements, room setup and much more.'
    },
    {
      title: 'Owlity',
      image: '/images/owlity.jpg',
      url: 'https://owlity.ai/',
      description: `Owlity put our 15 years of experience in AI QA SaaS that is better than your QA department. It clearly knows what, when and how to test. You don't have to have any QA knowledge.`
    },
    {
      title: 'Roam Around',
      image: '/images/roamaround.png',
      url: 'https://roamaround.app/',
      description: 'Roam Around creates personalised travel plans for any place on earth! Saves hours in planning!'
    },
    {
      title: 'Bravemark',
      image: '/images/bravemark.png',
      url: 'https://www.bravemark.co/',
      description: 'Bravemark is a branding presentation builder that allows brand designers to create stylish logo presentations with downloadable assets. Designers can use these presentations to hand off their work to clients while displaying their work.'
    },
    {
      title: 'GPTLift',
      image: '/images/gptlift.png',
      url: 'https://www.gptlift.com/',
      description: 'GPTLift is an AI-powered visibility platform that helps brands reclaim, and expand their presence in the next generation of search: chatbots and AI answer engines.'
    },
    {
      title: 'Pensil',
      image: '/images/pensil.png',
      url: 'https://www.pensil.in/',
      description: 'Pensil is a simple, easy-to-use platform to build online communities, cohort-based courses, or micro-schools.'
    },
    {
      title: 'SwapScan',
      image: '/images/swapscan.png',
      url: 'https://www.swapscan.com/',
      description: 'SwapScan is a location-based web and mobile marketplace redefining how you buy and sell. Posting a classified ad takes seconds. Sending or receiving payments is as simple as swiping a phone or scanning a QR code.'
    }
  ];

  return (
    <section className='projects-section container' id='projects'>
      <div className='projects-title-wrapper'>
        <SectionTitle title='Projects' />
      </div>
      <div className='projects-list'>
        {projects.map((project, idx) => (
          <a
            className='project-card'
            key={idx}
            href={project.url}
            target='_blank'
            rel='noopener noreferrer'
            tabIndex={0}
            aria-label={`Open project: ${project.title}`}
          >
            <div className='project-image-wrapper'>
              <img src={project.image} alt={project.title} className='project-image' />
            </div>
            <h2 className='project-title'>{project.title}</h2>
            <p className='project-description'>{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}; 