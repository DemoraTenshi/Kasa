import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Slideshow from '../../components/Slideshow/Slideshow';
import Tags from '../../components/Tags/Tags';
import Collapse from '../../components/Collapse/Collapse';
import housingData from '../../data/housing.json';
import neutralStar from '../../assets/star-shadow-modif.png';
import redStar from '../../assets/star-color.png';
import './Housing.scss';

function Housing() {
    const { id } = useParams();
    const housing = housingData.find(h => h.id === id);

    if (!housing) {
        return <Navigate to="/Error404" />;
    }

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <span key={i} className='star'>
                    <img src={i < rating ? redStar : neutralStar} alt="star" />
                </span>
            );
        }
        return stars;
    };

    return (
        <main className='housing'>
            <Slideshow slides={housing.pictures} />
            <section className='housing__info'>
                <div className='housing__summary'>
                    <div className='housing__header'>
                        <div className='housing__header-left'>
                            <h1 className='housing__tile'>{housing.title}</h1>
                            <p className='housing__location'>{housing.location}</p>
                        </div>
                        <div className='housing__host'>
                            <div className='housing__host-name'>
                                <p className='housing__host-firstname'>{housing.host.name.split(' ')[0]}</p>
                                <p className='housing__host-lastname'>{housing.host.name.split(' ')[1]}</p>
                            </div>
                            <img src={housing.host.picture} alt={housing.host.name} />
                        </div>
                    </div>

                    <div className='housing__tags-rating'>
                        <div className='housing__tags'>
                            <Tags tags={housing.tags} />
                        </div>
                        <div className='housing__rating'>
                            {renderStars(parseInt(housing.rating))}
                        </div>
                    </div>
                    <div className='housing__collapse'>
                        <Collapse data={{ id: 'description', title: "Description", description: housing.description }} titleFontSize="1.12rem" />
                        <Collapse data={{ id: 'equipments', title: "Équipements", equipments: housing.equipments }} titleFontSize="1.12rem" />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Housing;
