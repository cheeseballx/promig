function ProjectsCounter({ todos_completed, total_todos }) {
  return (
    <>
        <h1>Header and Hello world</h1>
        <section className="counter">
        <div>
            <p className="text_large">Task Done</p>
            <p className="text_small">Keep it up</p>
        </div>
        <div>
            {todos_completed}/{total_todos}
        </div>
        </section>
    </>
  );
}

export default ProjectsCounter;