var app = new Vue({
  el: '#app',
  data: {
    books:[],
    mySearch:'',
    orderCol:'id',
    orderInverse:1,
    pagination:{
      maxPage:5,
      current:1,
      totalItems:0,
      totalPages:0,
      listNumbers:[],
      listPagination:[]
    }
  },
  methods: {
    filterOrderBy:function(e,col) {
      e.preventDefault();
      this.orderCol = col;
      this.orderInverse = this.orderInverse * -1;
      console.log(this.orderInverse);
    },
    previous:function(e) {
      e.preventDefault();

      if(this.pagination.current === 1) {
        return false;
      }
      this.pagination.current = this.pagination.current - 1;
      this.books = this.pagination.listPagination[this.pagination.current - 1];

      console.log('previous');
      console.log('maxPage: ' + this.pagination.maxPage);
      console.log('current: ' + this.pagination.current);
      console.log('totalItems: ' + this.pagination.totalItems);
      console.log('totalPages: ' + this.pagination.totalPages);
      console.log('listNumbers: ' + this.pagination.listNumbers);
      console.log('listPagination: ' + this.pagination.listPagination);
    },
    next:function(e) {
      e.preventDefault();

      if(this.pagination.current === this.pagination.totalPages) {
        return false;
      }
      this.pagination.current = this.pagination.current + 1;
      this.books = this.pagination.listPagination[this.pagination.current - 1];

      console.log('next');
      console.log('maxPage: ' + this.pagination.maxPage);
      console.log('current: ' + this.pagination.current);
      console.log('totalItems: ' + this.pagination.totalItems);
      console.log('totalPages: ' + this.pagination.totalPages);
      console.log('listNumbers: ' + this.pagination.listNumbers);
      console.log('listPagination: ' + this.pagination.listPagination);
    },
    pagePagination:function(e,current){
      e.preventDefault();

      this.pagination.current = current + 1;
      this.books = this.pagination.listPagination[current];

      console.log('pagePagination: ' + current);
      console.log('maxPage: ' + this.pagination.maxPage);
      console.log('current: ' + this.pagination.current);
      console.log('totalItems: ' + this.pagination.totalItems);
      console.log('totalPages: ' + this.pagination.totalPages);
      console.log('listNumbers: ' + this.pagination.listNumbers);
      console.log('listPagination: ' + this.pagination.listPagination);
    }
  },
  ready: function() {
    var self = this;
    self.$http.get('dataServer.json').then(function(response) {
      console.log(response);
      self.pagination.totalItems = response.data.length;
      self.pagination.totalPages = Math.ceil(response.data.length / self.pagination.maxPage);

      var aux = [];
      for(var k in response.data) {
        aux.push(response.data[k]);
        if(aux.length === self.pagination.maxPage) {
          self.pagination.listPagination.push(aux);
          aux = [];
        }
      }
      if(aux.length > 0) {
        self.pagination.listPagination.push(aux);
      }
      console.log(self.pagination.listPagination);

      // self.books = response.data;
      self.books = self.pagination.listPagination[0];
    });
  }
})
