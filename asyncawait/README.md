# async-await

## Data

- employees: axios.get() 메서드로 검색된 자원을 저장할 객체
- employee: {id: 0, name: '', email: ''}, POST메서드로 새로운 데이터를 JSON 서버에 저장하기 위해 employee 추가
- isUpdate: POST, PUT 요청시 데이터 추가인지, 기존 데이터 업데이트인지 구분하기 위해 정의
- show: 추가, 수정 버튼을 클릭할 경우 추가할 데이터나 기존 데이터 수정에 필요한 HTML 태그가 나타나도록 정의, v-show를 이용 DOM에 가지고 있음 
- send: 실제로 서버로 데이터 추가, 수정을 하기 위해 정의


```javascript
data() {
  return {      
    employees: [],
    employee: {id: 0, name: '', email: ''},
    isUpdate: false, 
    show: false,
    send: false,
  }
},
```