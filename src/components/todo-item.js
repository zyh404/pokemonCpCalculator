import React from 'react';

const TodoItem = ({todo, toggleAction, deleteAction}) => {
    const style = {
        textDecoration: todo.isComplete ? 'line-through' : 'none',
        color: todo.isComplete ? '#0F0' : '#000',
    };
    return (
        <li style={style}>
            <img style={{display: 'inline-block'}} src={todo.gif} alt={todo.text} />
            <br />
            {todo.text}
            {' '}
            <button onClick={toggleAction}>
                {todo.isComplete ? 'unresolve' : 'resolve'}
            </button>
            {' '}
            <button onClick={deleteAction}>
                delete
            </button>
        </li>
    );
};

TodoItem.propTypes = {
    todos: React.PropTypes.object,
    toggleAction: React.PropTypes.func,
    deleteAction: React.PropTypes.func,
};

export default TodoItem
