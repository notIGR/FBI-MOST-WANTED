import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext()

const API_ENDPOINT = "https://api.fbi.gov/wanted/v1/list";

const WantedPage = () => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch(API_ENDPOINT)
        .then((response) => response.json())
        .then((result) => result.items.slice(0,10))
        .then((result) => setData(result))
    }, [])

    return (
        <main>
            <h1>No, YOUR dirty dan</h1>
            <DataContext.Provider value={data}>
                <DisplayWantedResults />
            </DataContext.Provider>
            <pre>
                {data && JSON.stringify(data, undefined, 2)}
            </pre>
        </main>
    )
}

function DisplayWantedResults() {
    const mostWantedData = useContext(DataContext);

    return mostWantedData && mostWantedData.map((wantedPerson) => (
        <div key={wantedPerson.uid} >
            <h2>
                {wantedPerson.title}
            </h2>
            <p>
                {wantedPerson.description}
            </p>
        </div>
    ))
}

export default WantedPage