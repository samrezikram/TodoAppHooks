interface Todo {
  id: number;
  text: string;
  state: string;
}

export interface AppState {
  id: number;
  todos: Todo[];
}