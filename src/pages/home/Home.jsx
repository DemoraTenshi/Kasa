import Banner from '../../components/Banner/Banner';
import Card from '../../components/Cards/Card';
import housing from '../../data/housing.json';
import './Home.scss'



function Home() {
  return (
    <main className='home'>
      <Banner page='home'/>
      <section className='gallery'>
        {housing.map((housing)=>
        <Card key={housing.id} data={housing}/>
        )}
      </section>
    </main>
  );
}

export default Home;
