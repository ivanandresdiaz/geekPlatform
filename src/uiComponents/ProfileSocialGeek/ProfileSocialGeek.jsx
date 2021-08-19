import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ProfileCover, ProfileCoverImg, ProfileInfo, ProfileInfoDesc, ProfileInfoName, ProfileUserImg } from '../../containers/ProfileGeek/ProfileStyles';
import { Button4, Button5, ButtonSocial } from '../../globalStyles';

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
        <div style={{ background: 'white', borderRadius: '10px' }}>
          <ProfileCover>
            <ProfileCoverImg
              style={{ borderRadius: '10px', border: '10px 10px 10px 10px' }}
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
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <ButtonSocial>
                <a href={facebook} target="_blank">
                  <FaFacebookSquare style={{ color: '#3b5998' }} size={32} />
                </a>
              </ButtonSocial>
              <ButtonSocial>
                <a href={instagram} target="_blank">
                  <FaInstagramSquare style={{ color: '#E1306C' }} size={32} />
                </a>
              </ButtonSocial>
              <ButtonSocial>
                <a href={twitter} target="_blank">
                  <FaTwitterSquare style={{ color: '#00acee' }} size={32} />
                </a>
              </ButtonSocial>
              <ButtonSocial>
                <a href={linkedin} target="_blank">
                  <FaLinkedin style={{ color: '#0e76a8' }} size={32} />
                </a>
              </ButtonSocial>
            </div>
            <p>{email}</p>
            <p>{whatsapp}</p>
          </ProfileInfo>

          <h4 />
          <p>{!active && 'Inactivo'}</p>
          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            {isUserAuth ? <Link to={`/socialGeek/${corteId}/${uid}/edit`}>
              <Button4>Editar</Button4>
            </Link> : null}
          </div>
          <p>{city}</p>
          <p style={{ padding: '20px', textAlign: 'center' }}>{bio}</p>
        </div>
        {skills > 0 && skills.map((skill) => <p key={skill}>{skill}</p>)}
      </div>
    </>
  );
};

export default ProfileSocialGeek;
