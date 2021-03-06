import React from 'react'

const Button = (props) => (
  <button className="button">
    {props.children}

    <style jsx>{`
      .button {
        background: #c8102e;
        border: 0;
        color: #fff;
        cursor: pointer;
        padding: 1em;
        text-transform: uppercase;
        transition: background ease .2s
      }

      .button:hover {
        background: #9e0c24
      }
    `}</style>
  </button>
)

export default Button
