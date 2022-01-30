import useFetch from "../hooks/useFetch";

function Fetch({ uri,
    renderSuccess,
    loadingFallback = <p>loading...</p>,
    renderError = error => (
        <pre>{JSON.stringify(error, null, 2)}</pre>
    )
}) {
    const { data, loading, error } = useFetch(uri);
    if (loading) {
        return loadingFallback;
    }
    if (error) {
        return renderError(error);
    }
    return renderSuccess({ test: data });
}

export default Fetch;