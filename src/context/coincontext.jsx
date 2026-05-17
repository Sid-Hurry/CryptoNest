import { createContext, useEffect, useState } from "react";

export const coincontext = createContext();

const CoinContextProvider = (props) => {
    const [allcoins, setAllcoins] = useState([]);
    const [currency, setCurrency] = useState({
        name: "INR",
        symbol: "₹",
    });

    const fetchCoins = async () => {
        const options = { method: 'GET', headers: { 'x-cg-demo-api-key': 'CG-Yt4JicJ1vX4pWGnnL6ZDhZ4D' } };

        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&order=market_cap_desc&per_page=100&page=1&sparkline=false`, options)
            .then(res => res.json())
            .then(res => setAllcoins(res))
            .catch(err => console.error(err));
    }
    // Name changed to currency to trigger useEffect on currency change

    useEffect(() => {
        fetchCoins();
    }, [currency]); 

    const contextvalue = {
        allcoins,
        currency,
        setCurrency,
    };
    return (
        <coincontext.Provider value={ contextvalue }>
            {props.children}
        </coincontext.Provider>
    )
}
export default CoinContextProvider;