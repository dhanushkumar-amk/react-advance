import { useMemo, useState } from "react";
import useFetch from "./useFetchHook";

const UseMemoHook = () => {
    const [flag, setFlag] = useState(false);
    const { data, loading } = useFetch('https://dummyjson.com/products');

    // Memoized filter function
    const memorizedVersion = useMemo(() => {
        console.log("Filter function recalculated");
        return filterProductByPrice(data?.products);
    }, [data?.products]);

    function filterProductByPrice(products) {
        console.log("Filtering products");
        return products?.filter(singleProductItem => singleProductItem.price > 10) || [];
    }

    if (loading)
        return <h1>Data is Loading...</h1>;

    return (
        <div>
            <h1 style={{ color: flag ? "red" : "black" }}>useMemoHook</h1>
            <button onClick={() => setFlag(!flag)}>Toggle flag</button>
            <ul>
                {
                    memorizedVersion.map(item => (
                        <li key={item.id}>{item.title} : {item.price}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default UseMemoHook;
