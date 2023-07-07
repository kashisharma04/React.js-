import React, {useState} from 'react'
import './App.css';
function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDOB] = useState('');
  const [contact, setContact] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setName(e.target.elements.name.value)   
    setEmail(e.target.elements.email.value)
    setDOB(e.target.elements.dob.value)
    setContact(e.target.elements.contact.value)
  }
  return (
    <div className='contanier'>
      <form className="data" onSubmit={handleSubmit}> 
          <input type="text" className="name"   name="name" placeholder="Name" required />
          <br></br><br></br>
          <input type="email" className="name" name="email" placeholder="Email Id" required/>
          <br></br><br></br>
          <input type="text" className="name" name="dob" placeholder="DOB" required/>
          <br></br><br></br>
          <input type="phone" className="name" name="contact"  placeholder="Contact Information" required/>
          <br></br><br></br>
        <button className="btn">Submit</button>
        <br></br>
        <br></br>
      <table className="table">
        <thead>
          <tr>
            <th>Name </th>
            <th>Email </th>
            <th>DOB </th>
            <th>Contact </th>
          </tr>
        </thead>
        <tbody>
      {/* // {students.map(( index) => ( */}
            <tr>
              <td>{name}</td>
              <td>{email}</td>
              <td>{dob}</td>
              <td>{contact}</td>
            </tr>
        </tbody>
      </table>
      </form>
     
    </div>

  );
}

export default App;
