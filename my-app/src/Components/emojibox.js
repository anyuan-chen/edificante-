import React, { Component } from 'react'
import "./emojibox.css"

export default class Emojibox extends Component {
    render() {
        return (
            <div>
                <h1 id = "emojiText">{this.props.text}</h1>
            </div>
        )
    }
}
