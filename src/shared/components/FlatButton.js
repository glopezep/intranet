import React from 'react'

const Button = (props) => (
  <button className="button">
    {props.children}

    <style jsx>{`
      .button {
        background: transparent;
        border: 1px solid #c8102e;
        color: #c8102e;
        cursor: pointer;
        padding: .25em 1em;
        text-transform: uppercase;
        transition: background ease .2s
      }

      .button:hover {
        background: #9e0c24
        color: #fff;
      }
    `}</style>
  </button>
)

export default Button
