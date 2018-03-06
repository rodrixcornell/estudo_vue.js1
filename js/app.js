var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    peoples: [
      {name:'Maria'},
      {name:'Pedro'},
      {name:'Gustavo'},
      {name:'Ana'},
      {name:'Gabriel'}
    ],
    newElement:'',
    elements: [],
    objectA: {
      'font-size':'30px',
      fontSize:'30px'
    },
    objectB: {
      color:'red'
    },
    myListForm: [],
    myForm: {
      name:'',
      email:''
    }
  },
  methods: {
    addElement: function (e) {
      // console.log(e);
      // e.preventDefault();

      var title = this.newElement.trim();
      if (title) {
        this.elements.push({title:title});
        this.newElement = '';
      }
    },

    removeElement: function (e,index) {
      e.preventDefault();
      console.log(e);
      console.log(index);
      this.elements.splice(index,1);
    },

    myClick: function () {
      alert('click');
    },

    myKeyUp: function () {
      alert('myKeyUp');
    },

    addForm: function () {
      this.myListForm.push({
        name:this.myForm.name,
        email:this.myForm.email
      });
      this.myForm.name = '';
      this.myForm.email = '';
    }
  }
})