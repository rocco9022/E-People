import React, { useEffect, useState } from 'react'

import './App.css';
import swal from 'sweetalert' ;
import ReactHTMLTableToExcel from 'react-html-table-to-excel';


 function App(){

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [count, setCount] = useState([]);
  const [image, setImage] = useState('');
 
  const [person, setPerson]= useState(
    {
name: '',
age: '',
location: '',
timezone: '',
user: '',
emial: '',
contact: '',
dni: '',
url: '',
  }
  ) ;

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )  
  }, [count])

  
  function handleConsult(){

    let gender= items.results[0].gender.toUpperCase() ;
    let age= items.results[0].dob.age ;
    let name= items.results[0].name.title + ' ' + items.results[0].name.first + ' ' + items.results[0].name.last ;
    let location= items.results[0].location.street.name + ' ' + items.results[0].location.street.number + ', ' + items.results[0].location.city + ', ' + items.results[0].location.state + '(' + items.results[0].location.postcode + ')' ;
    let timezone=  items.results[0].location.timezone.description + ' | Timezone | ' + items.results[0].location.timezone.offset ;
    let user= 'Username: ' + items.results[0].login.username + ' | Registered: ' + items.results[0].registered.date.split('', 10).join('');
    let email= items.results[0].email ;
    let contact= 'CALLS TO: ' + items.results[0].phone + ' | ' + items.results[0].cell;
    let dni= items.results[0].id.name + ': ' + items.results[0].id.value 
    let dniFinal= items.results[0].id.value !== null ? dni : 'Without more information'
    let url= items.results[0].picture.large
   
setPerson({
name: name,
age: age,
location: location,
timezone: timezone,
user: user,
emial: email,
contact: contact,
dni: dniFinal,
url: url,

})
setImage('')
    swal({ 
        title: name, 
        text: gender + ' ' + age + ' Years old',
        icon: "info",
        padding: "0.75rem",
        buttons: ["CANCEL", "MORE"]
            }).then(respuesta =>{
              if(respuesta){
                swal({
                  title: location,
                  text: timezone,
                  buttons: ["CANCEL", "USER"]
                }).then(respuesta =>{
                  if(respuesta){
                    swal({
                  title: email,
                  text: user , 
                  buttons: ["CANCEL", "CONTACT"]
                    }).then(respuesta =>{
                      if(respuesta){
                        swal({
                      title: contact,
                      text: dniFinal, 
                      buttons: ["CANCEL", "PICTURE"]
                        }).then(respuesta =>{
                          if(respuesta){
                        setImage(url)
                          }
                        })
                        
                      }
                    })
                    
                  }
                })
                
              }
            })
            setCount(prevState => prevState + 1)
        
      }

      function ShowImage(){
        setImage(person.url)
      }
  
  
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      
      <div className='content'>
        <div className='contentButton-53'>
        <button className="button-53"  onClick={handleConsult}>FIND PEOPLE</button>
        </div>
     
<div className='image'>
  { image? 
      <img src={image} classname='image'></img>
:
<button className='button-38' onClick={ShowImage}>
Show picture
</button>
}
</div>
<div className='content'>
<article>
      <h1> {person.name} {person.age}</h1>
      </article>
      </div>

      <table id="table-to-xls" className='table'>
              <tr>
                <th >NAME</th>
                <th>AGE</th>
                <th >LOCATION</th>
                <th >TIMEZONE</th>
                <th >USER</th>
                <th >EMAIL</th>
                <th >CONTACT</th>
                <th >IDENTIFICATION DOCUMENT</th>
              </tr>
              <tr>
                <th>{person.name}</th>
                <th>{person.age}</th>
                <th>{person.location}</th>
                <th>{person.timezone}</th>
                <th>{person.user}</th>
                <th>{person.email}</th>
                <th>{person.contact}</th>
                <th>{person.dniFinal}</th>
              </tr>
              </table>
  
      <ReactHTMLTableToExcel
                id="test-table-xls-button"
                className="button-55"
                table="table-to-xls"
                filename={person.name}
                sheet="shirtsxls"
                buttonText ="Download as XLS"
            />
      </div>
    );
  }
}

export default App;

