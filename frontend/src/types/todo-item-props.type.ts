export type Todo = {
  id: string;
  title: string;
};

export type TodoItemProps = {
  todo: Todo;
  onSelect: (id: string, isChecked: boolean) => void;
};

export type TodosListProps = {
  todos: Todo[];
  onUpdate: (id: string, title: string) => void;
  onDelete: (id: string) => void;
};

export type AddTodoProps = {
  onAdd: (title: string) => void;
};
