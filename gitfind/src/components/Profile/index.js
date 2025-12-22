import "./styles.css";

const Profile = ({ user }) => {

    return (
        <>
            <div className="profile">
                <img className="profile-picture" src={user.avatar_url} alt="Foto de perfil"/>
                <div className="profile-info">
                    <h3>{user.name}</h3>
                    <span> @{user.login}</span>
                    <p>{user.bio}</p>
                </div>
            </div>
            <hr/>
        </>
    )
}

export default Profile;