import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import TodoItem from '../components/todo-item';
import AppFrame from './_frames/app';

import {selectTodos} from '../modules/todo/selectors';
import * as todoActions from '../modules/todo';

const Todo = React.createClass({
    propTypes: {
        todos: React.PropTypes.array,
        dispatch: React.PropTypes.func,
    },
    getInitialState() {
        return {
            todoToAdd: '',
        };
    },
    addTodo() {
        const {dispatch} = this.props;
        const {todoToAdd} = this.state;

        if (!todoToAdd) {
            return;
        }

        const addTodo = todoToAdd;

        this.setState({todoToAdd: ''}, () => {
            dispatch(todoActions.addTodo(addTodo));
        });
    },
    render() {
        const {todos, dispatch} = this.props;
        const {todoToAdd} = this.state;
        return (
            <AppFrame>
                <div>
                    <Link to="/">Back to the landing page</Link>
                </div>
                Todos to do!
                <ul>
                    {todos.map((todo, index) => {
                        return (
                            <TodoItem
                                key={`todo-${index}`}
                                todo={todo}
                                deleteAction={() => dispatch(todoActions.removeTodo(todo.id))}
                                toggleAction={() => dispatch(todoActions.toggleTodo(todo.id))} />
                        );
                    })}
                </ul>
                <input
                    type="text"
                    value={todoToAdd}
                    onChange={e => this.setState({todoToAdd: e.target.value})}/>
                <button onClick={this.addTodo}>Add todo</button>
            </AppFrame>
        );
    },
});

const mapStateToProps = ({todo}) => {
    return {
        todos: selectTodos(todo),
    }
};

export default connect(mapStateToProps)(Todo);
