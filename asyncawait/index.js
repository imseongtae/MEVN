
new Vue({
  el: '#app',
  data() {
    return {      
      employees: [], //axios.get() 메서드로 검색된 자원을 저장할 객체      
      employee: {id: 0, name: '', email: ''},
      isUpdate: false, // POST, PUT 요청시 데이터 추가인지, 업데이트인지 구분 위해
      show: false, // v-show를 이용 DOM에 가지고 있음
      send: false,
    }
  },
  created() {
    this.render()    
  },
  methods: {
    // render() {
    //   axios.get('http://localhost:3000/employees')
    //     .then(res => {
    //       const {data} = res; 
    //       this.employees = data;
    //       console.log(this.employees)
    //     })
    //     .catch(err => {
    //       console.error(err)
    //     })        
    // },
    async render() {
      try {
        const {data} = await axios.get('http://localhost:3000/employees');      
        this.employees = data;        
      } catch (error) {
        console.error(error.response.data);        
      }

    },
    showForm(emp) {
      this.show = true;
      if (emp !== undefined) {
        this.employee.id = emp.id
        this.employee.name = emp.name
        this.employee.email = emp.email
        this.isUpdate = true;        
      }
    },
    btnOk() {
      this.send = true;
      // isUpdate의 상태값에 따라서 실행하는 함수 분기
      this.isUpdate == false ? this.addEmployee() : this.updateEmployee(this.employee.id)
    },
    btnCancel() {
      this.show = false;
      this.send = false;
    },    
    addEmployee() {
      if(this.send == true) {
        // 쓰기의 v-model과 연결
        const temp = {
          id: this.employee.id,
          name: this.employee.name,
          email: this.employee.email,
        }
        axios.post('http://localhost:3000/employees', temp)
        .then((res) => console.log(res))
        .catch((err) => console.error(err))
        this.show = false; //data 추가 후 상태 변경
        this.send = false; 
      }
    },
    updateEmployee(id) {
      const temp = {
        id: this.employee.id,
        name: this.employee.name,
        email: this.employee.email,
      }
      axios.put('http://localhost:3000/employees/'+ id, temp)
      .then(res => {
        console.log(res);
        this.isUpdate = false;
      })
      .catch(err => {
        console.error(err)
      })
    },
    deleteEmployee(id) {
      axios.delete('http://localhost:3000/employees/' + id)
      .then(res => this.employee.splice(id, 1))
      .catch(err => console.error(err))
    }
  }
})