import React from 'react';
import ReactDOM from 'react-dom';
import style from './Notes.module.css'
import Draggable from 'react-draggable'; // The default


const Notes = (props) => {
    let Draggable = require('react-draggable');
    let DraggableCore = Draggable.DraggableCore;
    return (
        <div className={style.notesInner}>
            <Draggable
                axis="x"
                handle=".handle"
                defaultPosition={{x: 0, y: 0}}
                position={null}
                grid={[25, 25]}
                scale={1}>
                <div>
                    <div className="handle">Drag from here</div>
                    <div>This readme is really dragging on...</div>
                </div>
            </Draggable>
        </div>
    )
}

export default Notes;