import React from 'react';
import { Link } from 'react-router-dom';

const ProfileSocialGeek = (props) => {
  const { profileSocialGeek, corteId, isUserAuth } = props;
  const { active, bio, city, codelingoChallengesDone, cover, displayName,
    email, facebook, fullName, geekyPuntos, github, graduated, id,
    instagram, linkedin, password, photoURL, role, skills, sprintsAssigned,
    tutorialsRequired, twitter, uid, wakatime, website, whatsapp,
  } = profileSocialGeek;
  return (
    <div>
      <h1>Ya estan los datos ahora falta maquetarlos</h1>
      <div>
        <img src={cover} alt='foto de portada' />
      </div>
      <p>{corteId}</p>
      <div>
        <img src={photoURL} alt='foto de perfil' />
      </div>
      <h4>{fullName}</h4>
      <p>{!active && 'Inactivo'}</p>
      {isUserAuth ? <Link to={`/socialGeek/${corteId}/${uid}/edit`}>Editar</Link> : null}
      <p>{city}</p>
      <p>
        {bio}
      </p>
      {skills > 0 && skills.map((skill) => <p key={skill}>{skill}</p>)}
    </div>
  );
};

export default ProfileSocialGeek;
