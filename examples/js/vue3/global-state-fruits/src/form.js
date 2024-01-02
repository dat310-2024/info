let fruitFormC = {
    template: `
    <form action="">
        <fieldset>
        <legend>Add fruit</legend>
            <label for="name">New Fruit</label>
            <input type="text" 
                id="name"
                v-model="name">
            <br>
            <input type="checkbox" 
                id="favorite" 
                v-model="favorite">
            <label for="favorite">
                favorite
            </label>
        <input type="button" v-on:click="add" value="Add">
        </fieldset>
    </form>
    `,
    data: function(){
        return {
            name: '',
            favorite: false
        }
    },
    methods: {  
        add: function(){
            store.addFruit(this.name, this.favorite);
        }
    }
}