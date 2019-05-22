import React, { Component } from 'react';
import produce from 'immer';
import { ButtonDiv } from '../widget/button';

export default class Page2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'pink',
            name: 'click',
        };
    }

    changeColor = () => {
        this.setState(
            produce(draft => {
                draft.color = '#000';
                draft.name = 'yoyoyo';
            })
        );
    };

    render() {
        const { color, name } = this.state;
        return (
            <div className="wrapper-col index">
                <h1 style={{ borderColor: `${color}`, borderWidth: '3px', borderStyle: 'solid' }}>Page3</h1>
                <ButtonDiv onClick={this.changeColor}>{name}</ButtonDiv>
            </div>
        );
    }
}
