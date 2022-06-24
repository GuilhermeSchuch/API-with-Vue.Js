const app = new Vue({
    el: '#app',
    data(){
        return{
            user: {
                firstName: "John",
                lastName: "Silva",
                email: "john.silva@example.com",
                avatar: "https://randomuser.me/api/portraits/men/24.jpg",
                gender: "male"
            }
        }
    },
    methods: {
        async changeUser(){
            const response = await fetch("https://randomuser.me/api/");
            const{ results } = await response.json();
            
            const userToUpdate = results[0];

            this.user = {
                firstName: userToUpdate.name.first,
                lastName: userToUpdate.name.last,
                email: userToUpdate.email,
                avatar: userToUpdate.picture.large,
                gender: userToUpdate.gender
            }
        }
    },
    computed: {
        fullName(){
            return this.user.firstName + ' ' + this.user.lastName;
        }
    }
});

