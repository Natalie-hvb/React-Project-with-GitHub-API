function Repositories({ userRepos }) {
    return (
        userRepos && userRepos.length > 0 && (
            <div id="user-repos">
                <h3>User Repositories</h3>
                <div id="repos">
                    <ul>
                        {userRepos.map(repo => (
                            <li key={repo.id}>
                                <a href={repo.html_url}>
                                    <p>{repo.name}</p>
                                </a>
                                <p>: {repo.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    );
}

export default Repositories;
