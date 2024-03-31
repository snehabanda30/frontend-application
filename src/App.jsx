import blueprintLogo from './assets/blueprint.png'
import member from './assets/member.png'
import profile from './assets/profile.png'
import './App.css'
import {useState} from 'react'
import contentData from '../src/assets/data/content.json';
 
function App() {
  //useState hook defines a state variable and a state update function
  const  [inputValue, setInputValue] =  useState('');
  const [email, setEmail] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const [tableData, setTableData] = useState([]);
  //handle chang function updates the inputValue state with the new value of the input element and updated valye is reflected in the state and displayed on the screen
	const  handleChange = (event) => {
		setInputValue(event.target.value);
	};
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleGraduationYearChange = (event) => {
    setGraduationYear(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission from reloading the page

    // Update table data with the new form submission
    setTableData([
      ...tableData,
      {
        name: inputValue,
        email: email,
        graduationYear: graduationYear
      }
    ]);

    // Reset form fields after submission
    setInputValue('');
    setEmail('');
    setGraduationYear('');
  }
  
  return (
 
<body>
  <form onSubmit={handleSubmit}>
      <div className='rectangle'> 
      <h1 className="heading"> Stevens Blueprint </h1>
      <h1 className="heading">Frontend Assessment S2024</h1>
      <div classname = "logo">
        <img src={blueprintLogo} className="logo" alt="Vite logo" />
      </div>
      <h2 className="headings">[Name]'s Custom Form</h2>
      <p className= "headings"> Please submit your information in the form, so that it can be displayed below!</p>
      <hr/> 
      <div class ="input">
      <input type="text" id="Name" placeholder="Enter your full name" value={inputValue} onChange={handleChange} />
      <input type="email" id="Email" placeholder="Enter your Stevens email" value={email} onChange={handleEmailChange}/>
      </div>
      <p class="graduationchoice">Graduation Year</p>
     <div class="graduationchoiceinputs">
      <div class="space">
        <input type="radio" id="year1" name="year" value="2023" onChange={handleGraduationYearChange}/>
        <label htmlFor="year1">2023</label>
      </div>
      <div class="space">
        <input type="radio" id="year2" name="year" value="2024" onChange={handleGraduationYearChange}/>
        <label htmlFor="year2">2024</label>
      </div>
      <div class="space">
        <input type="radio" id="year3" name="year" value="2025" onChange={handleGraduationYearChange}/>
        <label htmlFor="year3">2025</label> 
      </div>
      <div class="space">
        <input type="radio" id="year4" name="year" value="2026" onChange={handleGraduationYearChange}/>
        <label htmlFor="year4">2026</label> 
      </div>   
     </div>
      
      <button type = "submit" class = "button">Sign Up</button>
      <hr/> 
      <div className="container">
      <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Graduation Year</th>
      </tr>
    </thead>
    <tbody>
    {tableData.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.graduationYear}</td>
                </tr>
              ))}
        </tbody>
      </div>
   </div>
  </form>
  <div className = "bigrectangle">
  <img src={member} className="members" alt="Vite logo" />
  <div className="smallrectangless" id="anectdote">
        <img src={profile} className="profile" alt="Vite logo" />
        <h3 className="quote">{contentData.anectdote.quote}</h3>
        <p className="quote">{contentData.anectdote.author}</p>
  </div>
  <div className="smallrectangle" id="content">
        <h3 className="text">{contentData.content.header}</h3>
        <p className="text">{contentData.content.body}</p>
  </div>
  <div className = "smallrectangles"> 
  <img src={member} className="smallrectangles" alt="Vite logo"/> 
  </div>
  <div className="whiterectangle">
    <div className = "iloverectangle"> 
    <h1 className="words">Blueprint is cool!</h1>

    </div>
  
</div>
</div>

</body>  
  
  )
}

export default App
