import RepoMenu from "./RepoMenu";
import Fetch from "./Fetch"

export default function UserRepositories({ login, selectedRepo, onSelect = f => f }) {
    return (
        <Fetch
            uri={`https://api.github.com/users/${login}/repos`}
            renderSuccess={({ test }) => (
                <RepoMenu
                    login={login}
                    repositories={test}
                    selectedRepo={selectedRepo}
                    onSelect={onSelect}
                />
            )}
        />
    )
}