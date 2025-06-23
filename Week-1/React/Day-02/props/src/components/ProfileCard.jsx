import React from 'react';
import './ProfileCard.css';

function ProfileCard({
  name = 'Anonymous',
  title = 'No Title',
  avatar = 'https://via.placeholder.com/150',
  bio,
  skills = [],
  email,
  socials = [],
  layout = 'detailed',
}) {
  const isCompact = layout === 'compact';

  return (
    <div className={`profile-card ${isCompact ? 'compact' : 'detailed'}`}>
      {/* Header */}
      <header className="profile-header">
        <img src={avatar} alt={`${name}'s avatar`} className="avatar" />
        <div>
          <h2>{name}</h2>
          <p>{title}</p>
        </div>
      </header>

      {/* Bio */}
      {bio && (
        <section className="profile-bio">
          <h3>About</h3>
          <p>{bio}</p>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="profile-skills">
          <h3>Skills</h3>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Contact */}
      {(email || socials.length > 0) && (
        <section className="profile-contact">
          <h3>Contact</h3>
          {email && <p>Email: <a href={`mailto:${email}`}>{email}</a></p>}
          {socials.length > 0 && (
            <ul className="social-links">
              {socials.map((link, index) => (
                <li key={index}>
                  <a href={link.url} target="_blank" rel="noreferrer">{link.platform}</a>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}
    </div>
  );
}

export default ProfileCard;
