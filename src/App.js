import logo from './logo.svg';
import './App.css';
import Customer from 'components/Customer/Customer';

const customer = [{
  'id': 1,
  'image': 'https://previews.123rf.com/images/yupiramos/yupiramos1611/yupiramos161105788/65538583-%EA%B7%80%EC%97%AC%EC%9A%B4-%ED%86%A0%EB%81%BC-%EC%BA%90%EB%A6%AD%ED%84%B0-%EA%B2%A9%EB%A6%AC-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%94%94%EC%9E%90%EC%9D%B8.jpg',
  'name': '박철규',
  'birthday': '941029',
  'sex': '남자',
  'job': '백수'
},
{
  'id': 2,
  'image': 'https://previews.123rf.com/images/yupiramos/yupiramos1611/yupiramos161105788/65538583-%EA%B7%80%EC%97%AC%EC%9A%B4-%ED%86%A0%EB%81%BC-%EC%BA%90%EB%A6%AD%ED%84%B0-%EA%B2%A9%EB%A6%AC-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%94%94%EC%9E%90%EC%9D%B8.jpg',
  'name': '박철규2',
  'birthday': '941029',
  'sex': '남자',
  'job': '백수'
},
{
  'id': 3,
  'image': 'https://previews.123rf.com/images/yupiramos/yupiramos1611/yupiramos161105788/65538583-%EA%B7%80%EC%97%AC%EC%9A%B4-%ED%86%A0%EB%81%BC-%EC%BA%90%EB%A6%AD%ED%84%B0-%EA%B2%A9%EB%A6%AC-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%94%94%EC%9E%90%EC%9D%B8.jpg',
  'name': '박철규3',
  'birthday': '941029',
  'sex': '남자',
  'job': '백수'
}]

function App() {
  return (
    <div>
      {
        customer.map(c => {
          return (
            <Customer
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            sex={c.sex}
            job={c.job}
            />
          )
        })
      }
    </div>
  );
}

export default App;
