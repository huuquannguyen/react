import Fetch from "./Fetch";
import UserRepositories from "./UserRepositories";

export default function GithubUser({ login }) {

    return (
        <Fetch
            uri={`https://api.github.com/users/${login}`}
            renderSuccess={UserDetails}
        />
    );
}

function UserDetails({ test }) {
    return (
        <div className="githubUser">
            <img src={test.avatar_url}
                alt={test.login}
                style={{ width: 200 }}
            />
            <div>
                <h1>{test.login}</h1>
                {test.name && <p>{test.name}</p>}
                {test.location && <p>{test.location}</p>}
            </div>
            <UserRepositories
                login={test.login}
                onSelect={repoName => console.log(`${repoName} is selected`)}
            />
        </div>
    )
}

