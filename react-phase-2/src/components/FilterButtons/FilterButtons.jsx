import React, { useState } from 'react';
import './FilterButtons.css';

export default function FilterButtons({ onFilterChange }) {
    const [isActive, setIsActive] = useState('all');

    return (
        <>
            <section id="filter-btns">
                <div className="container">
                    <button 
                        onClick={() => { onFilterChange('all'); setIsActive('all'); }} 
                        className={isActive === 'all' ? 'active' : ''}>
                        ALL
                    </button>
                    <button 
                        onClick={() => { onFilterChange('jackets'); setIsActive('jackets'); }} 
                        className={isActive === 'jackets' ? 'active' : ''}>
                        JACKETS
                    </button>
                    <button 
                        onClick={() => { onFilterChange('t-shirts'); setIsActive('t-shirts'); }} 
                        className={isActive === 't-shirts' ? 'active' : ''}>
                        T-SHIRTS
                    </button>
                    <button 
                        onClick={() => { onFilterChange('shoes'); setIsActive('shoes'); }} 
                        className={isActive === 'shoes' ? 'active' : ''}>
                        SHOES
                    </button>
                    <button 
                        onClick={() => { onFilterChange('jeans'); setIsActive('jeans'); }} 
                        className={isActive === 'jeans' ? 'active' : ''}>
                        JEANS
                    </button>
                </div>
            </section>
        </>
    );
}

