import React, { useState } from "react"
import PropTypes from "prop-types"
import Arrow from "../../assets/arrow-up.png"
import './Collapse.scss'

function Collapse({ data }) {
    const [active, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!active);
    };

    const renderContent = () => {
        const { title, id, ...rest } = data
        return (
            <div>
                {Object.keys(rest).map(key => {
                    if (Array.isArray(rest[key])) {
                        return (
                            <ul key={key}>
                                {rest[key].map(item => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        );
                    } else {
                        return <p key={key}>{rest[key]}</p>;
                    }
                })}
            </div>
        );
    };

    return (
        <div className={`collapse ${active ? 'active' : ''}`}>
            <div className="collapse__header" onClick={handleToggle}>
                <h2 className="collapse__heading">{data.title}</h2>
                <img
                    src={Arrow}
                    alt="Toggle arrow"
                    className={`arrow ${active ? 'arrow-up' : 'arrow-down'}`}
                />
            </div>
            {active && (
                <div className="collapse__content">
                    {renderContent()}
                </div>
            )}
        </div>
    );
}

Collapse.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        equipments: PropTypes.arrayOf(PropTypes.string),
        tags: PropTypes.arrayOf(PropTypes.string),
        // Ajoutez d'autres propriétés ici si nécessaire
    }).isRequired,
};

export default Collapse