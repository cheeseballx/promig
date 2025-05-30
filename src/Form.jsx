function Form({ addProject }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    addProject({
      id: self.crypto.randomUUID(),
      title: event.target.todo.value,
      is_completed: false,
    });

    event.target.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" name="todo" id="todo" placeholder="Add a Project"/>
      <button className="text_large">+</button>
    </form>
  );
}

export default Form;