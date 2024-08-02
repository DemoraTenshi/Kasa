import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import Slideshow from '../../components/Slideshow/Slideshow'
import Tags from '../../components/Tags/Tags'
import Collapse from '../../components/Collapse/Collapse'
import housingData from '../../data/housing.json'
import './Housing.scss'

function Housing() {
    const { id } = useParams();
    const housing = housingData.find(h => h.id === id);

    if (!housing) {
       return <Navigate to="/Error404"/>
    }
        const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
                    ★
                </span>
            );
        }
        return stars;
    }

    return (
        <main className='housing'>
            <Slideshow slides={housing.pictures} />
            <section className='housing__info'>
                <div className='housing__summary'>
                <h1 className='housing__tile'>{housing.title}</h1>
                <p className='housing__location'>{housing.location}</p>
                <div className='housing__tags'>
                    <Tags tags={housing.tags}/>
                </div>
                <div className='housing__host-rating'>
                    <div className='housing__rating'>
                    {renderStars(parseInt(housing.rating))}
                    </div>
                    <p>{housing.host.name}</p>
                    <img src={housing.host.picture} alt={housing.host.name} />
                </div>
                <Collapse data={{title:"Description", description:housing.description}}/>
                <Collapse data={{title:"Équipements", description:housing.equipments}}/>
                </div>
            </section>
        </main>
    );
}

export default Housing;