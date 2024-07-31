import React, { useState } from "react";
import PropTypes from "prop-types";
import Arrow from "../../assets/arrow-up.png";
import './Collapse.scss';

function Collapse({ title, content }) {
    const [active, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!active);
    };

    return (
        <div className={`collapse ${active ? 'active' : ''}`}>
            <div className="collapse__header" onClick={handleToggle}>
                <h2 className="collapse__heading">{title}</h2>
                <img
                    src={Arrow}
                    alt="Toggle arrow"
                    className={`arrow ${active ? 'arrow-up' : 'arrow-down'}`}
                />
            </div>
            {active && (
                <div className="collapse__content">
                    {content}
                </div>
            )}
        </div>
    );
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
};

export default Collapse;
