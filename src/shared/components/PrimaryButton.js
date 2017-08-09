import React from 'react'

const Button = (props) => (
  <button className="button">
    {props.children}

    <style jsx>{`
      .button {
        background: #0a3565;
        border: 0;
        color: #fff;
        cursor: pointer;
        font-size: .8em;
        padding: 1em;
        text-transform: uppercase;
        transition: background ease .2s
        width: 100%;
      }

      .button:hover {
        background: #c8102e
      }
    `}</style>
  </button>
)

export default Button
