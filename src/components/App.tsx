import React from 'react';
import { Todo, fetchTodos } from '../actions';
import { StoreState } from '../reducers';
import { connect } from 'react-redux';

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

export class _App extends React.Component<AppProps> {
  componentDidMount() {
    const { fetchTodos } = this.props;

    fetchTodos();
  }

  render() {
    return <div>Hi there!</div>;
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { 
    todos 
  }
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);
