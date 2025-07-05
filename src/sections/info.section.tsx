import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';

import { GlowLink } from '../components/glow-box-link';
import { TextHover } from '../components/text-hover.component';

export const InfoSection = () => {
	return (
		<div className='hero-section'>
      <div className='hero-photo-col'>
        <img src='/images/stewart.png' alt='Stewart Von' className='profile-photo' />
        <div className='bottom-bar'>
          <GlowLink
            href='https://github.com/stewartvon'
            color='rgba(255, 255, 255, 0.4)'
            icon={<FaGithub color='rgba(255, 255, 255,0.9)' />}
            aria-label='github'
          />
          <GlowLink
            href='https://www.linkedin.com/in/stewart-von-210336372/'
            color='rgb(0, 160, 220, 0.6)'
            icon={<FaLinkedinIn color='rgb(0, 160, 220)' />}
            aria-label='linkedin'
          />
          <GlowLink
            href='mailto:stewartvon975@gmail.com'
            icon={<IoMailOutline color='rgb(18, 122, 209)' />}
            color=' rgb(18, 122, 209,0.7)'
            aria-label='mail'
          />
          <GlowLink
            href='/resume.pdf'
            color='rgba(255, 255, 255, 0.7)'
            icon={<span style={{fontWeight:600, fontSize:'1.1em', color:'white', fontFamily:'inherit'}}>CV</span>}
            aria-label='resume'
            target='_blank'
            rel='noopener noreferrer'
          />
        </div>
      </div>
      <div className='hero-info-col'>
        <p>Hi, I am</p>
        <TextHover
          text='Stewart Von'
          className='name'
        />
        <p>Full Stack Developer</p>
        <div className='blur'></div>
      </div>
		</div>
	);
};
