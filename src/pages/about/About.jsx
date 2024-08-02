import Banner from '../../components/Banner/Banner';
import Collapse from '../../components/Collapse/Collapse';
import about from '../../data/about.json';
import './About.scss';


function About() {
  return (
    <main className='about'>
      <Banner page='about' />
      <section className='collapse'>
        {about.map((item) => (
          <Collapse key={item.id} data={item} />
        ))}
      </section>
    </main>
  );
}

export default About;