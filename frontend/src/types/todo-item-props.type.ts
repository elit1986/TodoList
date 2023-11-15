export type Todo = {
  _id: string;
  title: string;
};

export type TodoItemProps = {
  todo: Todo;
  onDelete: (id: string) => void;
};

export type TodosListProps = {
  todos: Todo[];
  onDelete: (id: string) => void;
};

export type AddTodoProps = {
  onAdd: (title: string) => void;
};
