
var vm = new Vue ({
    el: '#app',

    data: {
                items:[],
            temp:[{name:"abcd",description:"1234"},{name:"abcd",description:"1234"},{name:"abcd",description:"1234"}],
            messages:"hello"
              
            
   
    },

    mounted: function() {
        axios.get('/index')
        .then((response) => {
            this.items = response.data;
            console.log(this.items)
            
           
        })
        .catch((error) => {
            console.log(error);
        })
    }
  
})