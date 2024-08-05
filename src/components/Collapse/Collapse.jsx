import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Arrow from "../../assets/arrow-up.png";
import './Collapse.scss';

function Collapse({ data, className, titleFontSize, contentFontSize }) {
    const [active, setActive] = useState(false);
    const contentRef = useRef(null);

    const handleToggle = () => {
        setActive(!active);
    };

    useEffect(() => {
        if (active) {
            const contentHeight = contentRef.current.scrollHeight;
            contentRef.current.style.height = `${contentHeight}px`;
        } else {
            contentRef.current.style.height = '0';
        }
    }, [active]);

    const renderContent = () => {
        const { title, id, ...rest } = data;
        return (
            <div ref={contentRef}>
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
        <div className={`collapse ${active ? 'active' : ''} ${className}`}>
            <div className="collapse__header" onClick={handleToggle}>
                <h2 className="collapse__heading" style={{ fontSize: titleFontSize }}>{data.title}</h2>
                <img
                    src={Arrow}
                    alt="Toggle arrow"
                    className={`arrow ${active ? 'arrow-up' : 'arrow-down'}`}
                />
            </div>
            <div className="collapse__content" style={{ fontSize: contentFontSize }}>
                {renderContent()}
            </div>
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
    }).isRequired,
    className: PropTypes.string,
    titleFontSize: PropTypes.string,
    contentFontSize: PropTypes.string,
};

export default Collapse;
