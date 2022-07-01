import React, { useEffect, useState } from 'react';
import ApiCardRow from './ApiCardRow';


const ApiApp = () => {

    const [list, setList] = useState([]);

    const [query, setQuery] = useState("");


    useEffect(() => {
        const url = 'https://run.mocky.io/v3/2ef02d3a-e851-44e6-8310-6e0085cc198c';
        fetch(url).then((response) => {
            return response.json();
        }).then((list) => {
            setList(list);
        });

    }, [query]);

    const handleChange = (e) => {
        setQuery({
            [e.target.name]: e.target.value,
        });
    };

    //console.log(query);

    //Filtrado:
    let results = [];
    if (!query) {
        results = list;
    } else {
        results = list.filter((dato) =>
            console.log(dato.city)
        );
    }




    /* useEffect(() => {
        const url = 'https://run.mocky.io/v3/2ef02d3a-e851-44e6-8310-6e0085cc198c';
        const urlLondon = `https://weatherdbi.herokuapp.com/data/weather/'${query}'`;
        const fetchData = async () => {
            try {
                const response = await fetch(urlLondon);
                const json = await response.json();
                console.log(json);
                //setList(json);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [query]); */

    return (
        <>
            <hr />
            <form>
                <input type="text" name="city" placeholder='Ciudad' onChange={handleChange} />
                <input type="submit" value="Usar mi ubicacion" />
                <input type="submit" value="Buscar" />
            </form>
            <p>Region: {list.region}</p>
            {
                results.length === 0 ? (
                    <p colSpan="3">No hay datos disponibles</p>
                ) : (
                    list.map((el) => (
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

export default ApiApp;