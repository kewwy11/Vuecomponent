const app = Vue.createApp({
    data(){
        return{
            // detailsVisible: true,
            friends:[
                {
                    id: 'Favorite',
                    Name: 'Favorite Nwanzi',
                    Number: '070 4762 1107 ',
                    Email: 'favournwanzi@gmail.com'
                },
                {
                    id: 'Noma',
                    Name: 'Noma Osasuyi',
                    Number: '090 3334 4824',
                    Email: 'nomaosasuyi@gmail.com'
                }
            ]
        }
    },
    // methods:{
    //     toggleDetails(){
    //         this.detailsVisible = !this.detailsVisible
    //     }
    // },
});

app.component('friend-contact', {
    template: `
    <li>
        <h2>{{ friend.Name }}</h2>
        <button @click="toggleDetails">{{ detailsVisible ? 'Hide' : 'Show'}} Details</button>
        <ul v-if="detailsVisible">
            <li><strong>Phone:</strong> {{ friend.Number }}</li>
            <li><strong>Email:</strong> {{ friend.Email }}</li>
        </ul>
    </li>
            `,
    data(){
        return{
            detailsVisible: true,
            friend:{
                id: 'Favorite',
                Name: 'Favorite Nwanzi',
                Number: '070 4762 1107 ',
                Email: 'favournwanzi@gmail.com'  
            }
        }
    },
    methods:{
        toggleDetails(){
            this.detailsVisible = !this.detailsVisible
        }
    }
})

app.mount('#app');