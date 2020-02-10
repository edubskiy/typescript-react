import React from 'react';
import { Todo, fetchTodos } from '../actions';
import { StoreState } from '../reducers';
import { connect } from 'react-redux';

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

export class _App extends React.Component<AppProps> {
  constructor(props: AppProps) {
    super(props);

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    this.props.fetchTodos();
  }

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return <div key={todo.id}>{todo.title}</div>
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch todos</button>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { 
    todos 
  }
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);
