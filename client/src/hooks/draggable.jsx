import React, { Children } from 'react';

export default class Draggable extends React.Component {
    state = {
        isDragging: false,

        originalX: 0,
        originalY: 0,
        
        translateX: 0,
        translateY: 0,

        lastTranslateX: 0,
        lastTranslateY: 0,
    };

    handleMouseDown = ({ clientX, clientY }) => {
        window.addEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('mouseup', this.handleMouseUp);
        
        this.setState({
            originalX: clientX,
            originalY: clientY,
            isDragging: true,
        })
    }

    handleMouseMove = ({ clientX, clientY }) => {
        const { isDragging } = this.state;

        if (!isDragging) {
            return;
        }
        this.setState(prevState => ({
            translateX: clientX -prevState.originalX + prevState.lastTranslateX,
            translateY: clientY - prevState.originalY + prevState.lastTranslateY
        }));
    }


    handleMouseUp = () => {
        window.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('mouseup', this.handleMouseUp);
        this.setState({
            originalX: 0,
            originalY: 0,
            lastTranslateX: this.state.translateX,
            lastTranslateY: this.state.translateY,
            isDragging: false
        })
    }

    render () {
        const { children } = this.props;
        const { translateX, translateY, isDragging } = this.state;
        return (
            <div
            onMouseDown={this.handleMouseDown}
            x={translateX}
            y={translateY}
            isDragging={isDragging}
            style={{tranform: `translate(${translateX}px, ${translateY}px)`}}
            >
                {Children}
            </div>
        )
    }
} 