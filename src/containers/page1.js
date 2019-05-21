import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as todoActions from '../redux/actions/todo';
import '../App.css';

class Page1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
        };
    }

    componentDidMount() {}

    handleInput = e => {
        this.setState({
            todo: e.target.value,
        });
    };

    addTodosubmit = () => {
        const { todo } = this.state;
        if (todo === '') {
            return;
        }

        const { todoAction } = this.props;

        todoAction.addTodo(todo);

        this.setState({
            todo: '',
        });
    };

    deletTodoSubmit = index => {
        console.log('index:', index);
        const { todoAction } = this.props;
        todoAction.deleteTodo(index);
    };

    renderTodoList() {
        const { todo } = this.props;
        const { list } = todo;
        if (list.length > 0) {
            const todoList = list.map((o, index) => (
                <div key={index} className="wrapper-row list">
                    <h5>
                        {index + 1}. {o}
                    </h5>
                    <div className="delete" onClick={() => this.deletTodoSubmit(o)} role="presentation">
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
                <h1>TodoList</h1>
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
