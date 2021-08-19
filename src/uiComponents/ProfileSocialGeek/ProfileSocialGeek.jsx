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
            alt='Foto de portada'
          />
          {photoURL ? (
            <ProfileUserImg
              src={photoURL}
              alt='Foto de perfil'
            />
          ) : <img src='https://firebasestorage.googleapis.com/v0/b/geekplatform-dc705.appspot.com/o/default-profile.png?alt=media&token=0f8bf7f6-acc2-451c-be86-c7800e3ca059' alt='foto perfil' />}

        </ProfileCover>
        <ProfileInfo>
          <ProfileInfoName>{fullName}</ProfileInfoName>
          <ProfileInfoDesc>Hello my friends!</ProfileInfoDesc>
        </ProfileInfo>
      </div>

      <h4 />
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
