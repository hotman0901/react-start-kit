import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as todoActions from '../redux/actions/todo';
import '../App.css';
import { strim } from '../utils.js/string';

class Page1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
        };
    }

    handleInput = e => {
        this.setState({
            todo: e.target.value,
        });
    };

    addTodosubmit = () => {
        const { todo } = this.state;
        if (strim(todo) === '') {
            return;
        }

        const { todoAction } = this.props;

        todoAction.addTodo({ id: new Date() / 1, text: todo });

        this.setState({
            todo: '',
        });
    };

    deletTodoSubmit = id => {
        const { todoAction } = this.props;
        todoAction.deleteTodo(id);
    };

    renderTodoList() {
        const { todo } = this.props;
        const { todos } = todo;
        if (todos.length > 0) {
            const todoList = todos.map((o, index) => (
                <div key={o.id} className="wrapper-row list">
                    <h5>
                        {index + 1}. {o.text}
                    </h5>
                    <div className="delete" onClick={() => this.deletTodoSubmit(o.id)} role="presentation">
                        x
                    </div>
                </div>
            ));
            return <div className="wrapper-col">{todoList}</div>;
        }
    }

    render() {
        const { todo } = this.state;
        return (
            <div className="wrapper-col index">
                <h1>Redux Todo List</h1>
                <div className="wrapper-row">
                    <input type="text" onChange={this.handleInput} value={todo} />
                    <div className="button" onClick={this.addTodosubmit} role="presentation">
                        sumbit
                    </div>
                </div>
                {this.renderTodoList()}
            </div>
        );
    }
}

Page1.defaultProps = {
    todo: {},
    todoAction: {},
};

Page1.propTypes = {
    todo: PropTypes.object,
    todoAction: PropTypes.object,
};

const mapStateToProps = state => ({
    todo: state.todo,
});

const mapDispatchToProps = dispatch => ({
    todoAction: bindActionCreators(todoActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Page1);
