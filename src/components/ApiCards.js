import React from 'react';
import ApiCardRow from './ApiCardRow';

const ApiCards = ({ data }) => {
    return (
        <>
            <p>Region: {data.region}</p>
            {
                data.length === 0 ? (
                    <p colSpan="3">No hay datos disponibles</p>
                ) : (
                    data.map((el) => (
                        <ApiCardRow
                            key={el.id}
                            el={el}
                        />
                    ))
                )
            }

        </>
    );
};

export default ApiCards;