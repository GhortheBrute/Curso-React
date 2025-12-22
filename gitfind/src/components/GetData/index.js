const handleGetUserData = async (userName) => {
    const userData = await fetch(`https://api.github.com/users/${userName}`);
    const user = await userData.json();

    const userRepositories = await fetch(`https://api.github.com/users/${user}/repos`);
    const userRepos = await userRepositories.json();
    return { user, userRepos};
}


export default handleGetUserData;