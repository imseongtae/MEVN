
new Vue({
  el: '#app',
  data() {
    return {      
      employees: [],
      employee: {id: 0, name: '', email: ''},
      isUpdate: false,
      show: false,
      send: false,
    }
  },
  created() {
    this.render()    
  },
  methods: {
    render() {
      axios.get('http://localhost:3000/employees')
        .then(res => {
          const {data} = res;
          this.employees = data;          
          console.log(this.employees)
        })
        .catch(err => {
          console.error(err)
        })        
    },
    showForm(emp) {
      this.show = true;
    },
    btnOk() {
      this.send = true;
      if(this.isUpdate == false) this.addEmployee()
    },
    btnCancel() {
      this.show = false;
      this.send = false;
    },    
    addEmployee() {
      if(this.send == true) {
        const temp = {
          id: this.employee.id,
          name: this.employee.name,
          email: this.employee.email,
        }
        axios.post('http://localhost:3000/employees', temp)
        .then((res) => console.log(res))
        .catch((err) => console.error(err))
        this.show = false;
        this.send = false;

      }
    }

  }
})