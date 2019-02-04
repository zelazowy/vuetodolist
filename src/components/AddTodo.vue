<template>
    <div>
        <form @submit="addTodo">
            <input type="text" name="title" placeholder="Add Todo..." v-model="title">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>

<script>

export default {
    name: "AddTodo",
    methods: {
        addTodo(e) {
            e.preventDefault();
            const newTodo = {
                title: this.title,
                completed: false
            }
            //Send to parent
            this.$emit('add-todo', newTodo);
            this.title = '';
        }
    },
    data() {
        return {
            title: ''
        }
    }
}
</script>

<style scoped>
    form {
        display: flex;
    }

    input[type="text"] {
        flex: 10px;
        padding: 5px;
    }

    input[type="submit"] {
        flex: 2px;
    }
</style>

