import { useEffect } from "react";
import useIterator from "../hooks/useIterator";
import RepositoriesReadme from "./RepositoriesReadme";

export default function RepoMenu({ repositories, login, onSelect = f => f }) {

    const [{ name }, prev, next] = useIterator(repositories);

    useEffect(() => {
        if (!name) return;
        onSelect(name);
    }, [name]);

    return (
        <div style={{ display: "flex" }}>
            <button onClick={prev}>&lt;</button>
            <p>{name}</p>
            <button onClick={next}>&gt;</button>
            <RepositoriesReadme login={login} repo={name} />
        </div>
    );

}