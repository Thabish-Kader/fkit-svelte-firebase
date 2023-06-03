<script lang="ts">
	let todoList = ['Do the groceries'];
	let currTodo: string;
	let error = false;

	const addTodo = () => {
		error = false;
		if (!currTodo) {
			error = true;
		}

		todoList = [...todoList, currTodo];
	};
	const editTodo = (index: number) => {
		let newTodoList = todoList.filter((val, i) => {
			return i !== index;
		});
		currTodo = todoList[index];
		todoList = newTodoList;
	};
	const removeTodo = (index: number) => {
		let newTodoList = [...todoList].filter((val, i) => {
			console.log(i, index, i !== index);
			return i != index;
		});
		todoList = newTodoList;
	};
</script>

<div>
	<div>
		<h1>Todo List</h1>

		<div>
			<button>
				<i class="fa-solid fa-floppy-disk" />

				Save</button
			>
			<button> Logout</button>
		</div>
	</div>

	<main>
		{#each todoList as todo, index}
			<div>
				<p>
					{index + 1} . {todo}
				</p>
				<div>
					<i
						on:click={() => editTodo(index)}
						on:keydown={() => {}}
						class="fa-solid fa-pen-to-square"
					/>
					<i on:click={() => removeTodo(index)} on:keydown={() => {}} class="fa-solid fa-trash" />
				</div>
			</div>
		{/each}
	</main>
	<div>
		<input bind:value={currTodo} type="text" placeholder="Add to do" />
		<button on:click={addTodo}>Add</button>
	</div>
</div>
