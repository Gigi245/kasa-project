import './Collapse.scss';
import { useState } from 'react';

function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="collapse">
            <button
                className="collapse-title"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                {title}
                <span className={`collapse-arrow ${isOpen ? 'open' : ''}`}>
                    ❯
                </span>
            </button>


            <div className={`collapse-panel ${isOpen ? 'open' : ''}`}>
                <div className="collapse-content">
                    {children}
                </div>
            </div>

        </div>
    );
}

export default Collapse;
