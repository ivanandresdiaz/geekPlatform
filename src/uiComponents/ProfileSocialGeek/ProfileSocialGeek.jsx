import React from 'react';
import { Link } from 'react-router-dom';
import { ProfileCover, ProfileCoverImg, ProfileInfo, ProfileInfoDesc, ProfileInfoName, ProfileUserImg } from '../../containers/ProfileGeek/ProfileStyles';

const ProfileSocialGeek = (props) => {
  const { profileSocialGeek, corteId, isUserAuth } = props;
  const { active, bio, city, codelingoChallengesDone, cover, displayName,
    email, facebook, fullName, geekyPuntos, github, graduated, id,
    instagram, linkedin, password, photoURL, role, skills, sprintsAssigned,
    tutorialsRequired, twitter, uid, wakatime, website, whatsapp,
  } = profileSocialGeek;
  return (
    <>
      <div>
        <ProfileCover>
          <ProfileCoverImg
            src={cover}
            alt="Foto de portada"
          />
          <ProfileUserImg
            src={photoURL}
            alt="Foto de perfil"
          />
        </ProfileCover>
        <ProfileInfo>
          <ProfileInfoName >{fullName}</ProfileInfoName>
          <ProfileInfoDesc >Hello my friends!</ProfileInfoDesc>
        </ProfileInfo>
      </div>
      <h1>Ya estan los datos ahora falta maquetarlos</h1>

      <h4></h4>
      <p>{!active && 'Inactivo'}</p>
      {isUserAuth ? <Link to={`/socialGeek/${corteId}/${uid}/edit`}>Editar</Link> : null}
      <p>{city}</p>
      <p>
        {bio}
      </p>
      {skills > 0 && skills.map((skill) => <p key={skill}>{skill}</p>)}
    </>
  );
};

export default ProfileSocialGeek;
