import "./styles.css";

const Profile = () => {

    const profileName = 'Ghor the Brute';
    const descricao = 'Desenvolvedor Front-End';
    const userName = '@ghorthebrute';
    return (
        <>
            <div className="profile">
                <img className="profile-picture" src="https://avatars.githubusercontent.com/u/85532828?v=4" alt="Foto de perfil"/>
                <div className="profile-info">
                    <h3>{ profileName }</h3>
                    <span> { userName }</span>
                    <p>{ descricao }</p>
                </div>
            </div>
            <hr/>
        </>
    )
}

export default Profile;