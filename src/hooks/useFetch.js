import { useEffect, useState } from "react";

export default function useFetch(uri) {

    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        if (!uri)
            return;
        fetch(uri)
            .then(resp => resp.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError)
    }, [uri])

    return {
        data,
        loading,
        error
    }
}