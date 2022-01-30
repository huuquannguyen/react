import { useCallback, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function RepositoriesReadme({ login, repo }) {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [markdown, setMarkdown] = useState("");

    const loadReadme = useCallback(async (login, repo) => {
        setLoading(true);
        const uri = `https://api.github.com/repos/${login}/${repo}/readme`;
        const { download_url } = await fetch(uri)
            .then(resp => resp.json());
        const markdown = await fetch(download_url).then(resp => resp.text);
        setMarkdown(markdown);
        setLoading(false);
    }, []);

    useEffect(() => {
        if (!repo || !login) {
            return;
        }
        loadReadme(login, repo).catch(setError);
    }, [repo]);
    if (error) {
        return <pre>{JSON.stringify(error, null, 2)}</pre>
    }
    if (loading) {
        return <p>loading...</p>
    }
    return <ReactMarkdown source={markdown} />

}