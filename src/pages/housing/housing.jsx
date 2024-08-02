import React from 'react'
import { useParams } from 'react-router-dom'
import Slideshow from '../../components/Slideshow/Slideshow'
import housingData from '../../data/housing.json'
import './Housing.scss'

function Housing() {
    const { id } = useParams();
    const housing = housingData.find(h => h.id === id);

    if (!housing) {
        return <div>Appartement non trouvé</div>;
    }

    return (
        <main className='housing'>
            <Slideshow slides={housing.pictures} />
            <section className='housing__details'>
                <h1>{housing.title}</h1>
                <p>{housing.location}</p>
                <ul>
                    {housing.tags.map((tag, index) => (
                        <li key={index}>{tag}</li>
                    ))}
                </ul>
                <div className='housing__host'>
                    <p>{housing.host.name}</p>
                    <img src={housing.host.picture} alt={housing.host.name} />
                </div>
                <p>{housing.description}</p>
                <ul>
                    {housing.equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Housing;