import React from 'react'

const Profile = (props) => (
  <article className="profile">
    <img className="avatar" src="/public/img/user.png" />
    <div>
      <div className="row">
        <strong className="strong">Nombre Completo:</strong>
        <span className="value">Abel López</span>
      </div>
      <div className="row">
        <strong className="strong">Oficina:</strong>
        <span className="value">Abel López</span>
      </div>
      <div className="row">
        <strong className="strong">Cargo:</strong>
        <span className="value">Soporte TI</span>
      </div>
      <div className="row">
        <strong className="strong">Teléfono:</strong>
        <span className="value">809-807-6444</span>
      </div>
      <div className="row">
        <strong className="strong">Extensión:</strong>
        <span className="value">1013</span>
      </div>
      <div className="row">
        <strong className="strong">Mobile:</strong>
        <span className="value">829-345-4569</span>
      </div>
      <div className="row">
        <strong className="strong">Email:</strong>
        <span className="value">abel.lopez@pawadominicana.com</span>
      </div>
    </div>

    <style jsx>{`
      .avatar {
        border-radius: 50%;
        height: 160px;
        margin-right: 2em;
      }

      .profile {
        align-items: center;
        border-top: 2px solid #7f9bb7;
        display: flex;
        padding-top: 2.5em;
      }

      .row {
        margin-bottom: .5em;
      }

      .strong {
        margin-right: .3em;
      }

      .value {
        font-weight: 300;
      }
    `}</style>
  </article>
)

export default Profile
