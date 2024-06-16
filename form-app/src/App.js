import React, { useState, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';
import logo from './LztDQu9MkiiN.png';
import pic from './default.png';
import pic1 from './default1.png';
import axios from 'axios';

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(''); // State for phone number
  const [selectedCountryCode, setSelectedCountryCode] = useState(''); // State for country code
  const [countries, setCountries] = useState([]); // State to store countries
  const [selectedLanguages, setSelectedLanguages] = useState([]); // State for selected languages
  const [codingExperience, setCodingExperience] = useState(''); // New state for coding experience
  const [annualCompensation, setAnnualCompensation] = useState('');
  const [certification, setCertification] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setCountries(response.data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  const handleClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentPage < 8) {
      setCurrentPage(currentPage + 1);
    } else if (currentPage === 8 && certification) {
      setCurrentPage(currentPage + 1);
    } else {
      setErrorMessage('Oops! Please make a selection');
    }
  };

  const languageOptions = [
    'Solidity', 'Rust', 'Node.js', 'Typescript', 'Javascript',
    'C', 'C++', 'C#', 'SQL', 'Python', 'Assembly Language',
    'Haskell', 'R', '.NET', 'Other'
  ];

  const handleLanguageChange = (option) => {
    if (selectedLanguages.includes(option)) {
      setSelectedLanguages(selectedLanguages.filter(lang => lang !== option));
    } else {
      setSelectedLanguages([...selectedLanguages, option]);
    }
  };


  const column1 = languageOptions.slice(0, Math.ceil(languageOptions.length / 3));
  const column2 = languageOptions.slice(Math.ceil(languageOptions.length / 3), Math.ceil(2 * languageOptions.length / 3));
  const column3 = languageOptions.slice(Math.ceil(2 * languageOptions.length / 3));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <TransitionGroup>
        {!showForm && (
          <CSSTransition timeout={300} classNames="slide">
            <div className="content-container">
              <div className="content">
                <div className="head_1">
                  <h1>Launch your Data Career in</h1>
                  <h1>Weeks, not Years</h1>
                </div>
                <div className="what_to">
                  <p>What to expect:</p>
                </div>
                <div className="list">
                  <p>- Short-answer questions & No cover letter</p>
                  <p>- Takes 4 mins on average</p>
                </div>
                <button onClick={handleClick} className="big-button">
                  Start Your Journey
                </button>
                {/* <p>74 people have filled this out</p> */}
              </div>
              <img src={pic} className="pic" alt="pic" />
            </div>
          </CSSTransition>
        )}

        {showForm && currentPage === 1 && (
          <CSSTransition timeout={300} classNames="slide">
            <div className="form-container">
              <h2>
                <span style={{ color: '#d59ee2' }}>1 ➝ </span> Before we start, what is your name?
              </h2>
              <form onSubmit={handleSubmit}>
                <label>
                  <div className="fname">First name</div>
                  <input
                    type="text"
                    className="line-input"
                    placeholder="Jane"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    style={{ color: '#d59ee2' }}
                  />
                </label>
                <label>
                  <div className="lname">Last name</div>
                  <input
                    type="text"
                    className="line-input"
                    placeholder="Smith"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    style={{ color: '#d59ee2' }}
                  />
                </label>
                <button type="submit" className="big-button1">
                  OK
                </button>
                <span
                  className="press-enter"
                  style={{ marginLeft: '430px', fontSize: '10px', marginTop: '-40px' }}
                >
                  Press Enter ↲
                </span>
              </form>
            </div>
          </CSSTransition>
        )}

        {showForm && currentPage === 2 && (
          <CSSTransition timeout={300} classNames="slide">
            <div className="form-container">
              <h2>
                <span style={{ color: '#d59ee2' }}>2 ➝ </span> What is your email address?
                <p className="email-contact"><span className='email-contact' style={{ color: 'gray', marginLeft:'50px' }}>This is how we'll contact you.</span></p>
              </h2>
              <form onSubmit={handleSubmit}>
                <label>
                  <input
                    type="email"
                    className="line-input"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ color: '#d59ee2' }}
                  />
                </label>
                <button type="submit" className="big-button1">
                  OK
                </button>
                <span
                  className="press-enter"
                  style={{ marginLeft: '430px', fontSize: '10px', marginTop: '-40px' }}
                >
                  Press Enter ↲
                </span>
              </form>
            </div>
          </CSSTransition>
        )}

        {showForm && currentPage === 3 && (
          <CSSTransition timeout={300} classNames="slide">
            <div className="form-container">
              <h2>
                <span style={{ color: '#d59ee2' }}>3 ➝ </span> Which country are you from? 🏡🏡🏡
              </h2>
              <form onSubmit={handleSubmit}>
                <label>
                  <select
                    className="line-input"  value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    style={{ color: '#d59ee2' }}>
                    <option value="" disabled>
                      Type or select an option
                    </option>
                    {countries.map((country) => (
                      <option key={country.name.common} value={country.name.common}>
                        {country.name.common}
                      </option>
                    ))}
                  </select>
                </label>
                <button type="submit" className="big-button1">
                  OK
                </button>
                <span
                  className="press-enter"
                  style={{ marginLeft: '430px', fontSize: '10px', marginTop: '-40px' }}
                >
                  Press Enter ↲
                </span>
              </form>
            </div>
          </CSSTransition>
        )}

        {showForm && currentPage === 4 && (
          <CSSTransition timeout={300} classNames="slide">
            <div className="form-container">
              <h2>
                <span style={{ color: '#d59ee2' }}>4 ➝ </span> Enter your phone number
              </h2>
              <form onSubmit={handleSubmit}>
                <label>
                  <select
                    className="line-input"  value={selectedCountryCode}
                    onChange={(e) => setSelectedCountryCode(e.target.value)}
                    style={{ color: '#d59ee2' }}>
                    <option value="" disabled>
                      Select country code
                    </option>
                    {countries.map((country) => (
                      <option key={country.cca2} value={country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : '')}>
                        {country.name.common} ({country.idd.root}{country.idd.suffixes ? country.idd.suffixes[0] : ''})
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  <input
                    type="text"  className="line-input"  placeholder="070 123 4567" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}  style={{ color: '#d59ee2' }}/>
                </label>
                <button type="submit" className="big-button1">
                  OK
                </button>
                <span
                  className="press-enter"
                  style={{ marginLeft: '430px', fontSize: '10px', marginTop: '-40px' }}
                >
                  Press Enter ↲
                </span>
              </form>
            </div>
          </CSSTransition>
        )}


      {showForm && currentPage === 5 && (
        <CSSTransition timeout={300} classNames="slide">
          <div className="form-container">
            <h2>
              <span style={{ color: '#d59ee2' }}>5 ➝ </span> What languages and frameworks are you familiar with?
            </h2>
            <form onSubmit={handleSubmit}>
                      <table className="checkbox-table">
            <tbody>
              {column1.map((option, index) => (
                <tr key={index}>
                  <td>
                    <label className="checkbox-label">
                      {option}
                      <input
                        type="checkbox"
                        value={option}
                        checked={selectedLanguages.includes(option)}
                        onChange={() => handleLanguageChange(option)}
                        className="checkbox-input"
                      />
                      <span className="checkbox-custom"></span>
                    </label>
                  </td>
                  <td>
                    {column2[index] && (
                      <label className="checkbox-label">
                        {column2[index]}
                        <input
                          type="checkbox"
                          value={column2[index]}
                          checked={selectedLanguages.includes(column2[index])}
                          onChange={() => handleLanguageChange(column2[index])}
                          className="checkbox-input"
                        />
                        <span className="checkbox-custom"></span>
                      </label>
                    )}
                  </td>
                  <td>
                    {column3[index] && (
                      <label className="checkbox-label">
                        {column3[index]}
                        <input
                          type="checkbox"
                          value={column3[index]}
                          checked={selectedLanguages.includes(column3[index])}
                          onChange={() => handleLanguageChange(column3[index])}
                          className="checkbox-input"
                        />
                        <span className="checkbox-custom"></span>
                      </label>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>


              <button type="submit" className="ok-button">
                OK
              </button>
            </form>
          </div>
        </CSSTransition>
      )}

      {showForm && currentPage === 6 && (
        <CSSTransition timeout={300} classNames="slide">
          <div className="form-container">
            <h2>
              <span style={{ color: '#d59ee2' }}>6 ➝ </span> How would you describe your current level of coding experience?
            </h2>
            <form onSubmit={handleSubmit}>
              <label className="radio-label">
                <input
                  type="radio"
                  value="A"
                  checked={codingExperience === 'A'}
                  onChange={() => setCodingExperience('A')}
                  className="radio-input"
                />
                <span className="radio-custom"></span>
                <span className="radio-label-text">No experience (I have never programmed before.)</span>
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  value="B"
                  checked={codingExperience === 'B'}
                  onChange={() => setCodingExperience('B')}
                  className="radio-input"
                />
                <span className="radio-custom"></span>
                <span className="radio-label-text">Beginner (I have played with some introductory coding lessons and tutorials.)</span>
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  value="C"
                  checked={codingExperience === 'C'}
                  onChange={() => setCodingExperience('C')}
                  className="radio-input"
                />
                <span className="radio-custom"></span>
                <span className="radio-label-text">Intermediate (I can write simple programs and scripts.)</span>
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  value="D"
                  checked={codingExperience === 'D'}
                  onChange={() => setCodingExperience('D')}
                  className="radio-input"
                />
                <span className="radio-custom"></span>
                <span className="radio-label-text">Advanced (I have experience developing complex applications.)</span>
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  value="E"
                  checked={codingExperience === 'E'}
                  onChange={() => setCodingExperience('E')}
                  className="radio-input"
                />
                <span className="radio-custom"></span><span className="radio-label-text">Expert (I am highly proficient and experienced in coding.)</span>
              </label>

              <button type="submit" className="big-button1" style={{ marginLeft: '350px', marginRight: '430px'}}>
                OK
              </button>
            </form>
          </div>
        </CSSTransition>
      )}

{showForm && currentPage === 7 && (
        <CSSTransition timeout={300} classNames="slide">
          <div className="form-container">
            <h2>
              <span style={{ color: '#d59ee2' }}>7 ➝ </span> What is your annual compensation? (Optional)
              <p style={{ marginRight: '400px' }}>
                Disclaimer: The information provided regarding salary will be kept confidential and will not be used as a determining factor for acceptance into the bootcamp. It will be used exclusively for career advancement guidance.
              </p>
            </h2>
            <div className="form-content">
              <form onSubmit={handleSubmit}>
                <label>
                  <input
                    type="radio"
                    value="A"
                    checked={annualCompensation === 'A'}
                    onChange={() => setAnnualCompensation('A')}
                    className="radio-input"
                  />
                  <span className="radio-custom-c"></span>
                  <span className="radio-label-text-c">&lt;$30,000</span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="B"
                    checked={annualCompensation === 'B'}
                    onChange={() => setAnnualCompensation('B')}
                    className="radio-input"
                  />
                  <span className="radio-custom-c"></span>
                  <span className="radio-label-text-c">$30,000 - $50,000</span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="C"
                    checked={annualCompensation === 'C'}
                    onChange={() => setAnnualCompensation('C')}
                    className="radio-input"
                  />
                  <span className="radio-custom-c"></span>
                  <span className="radio-label-text-c">$50,000 - $80,000</span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="D"
                    checked={annualCompensation === 'D'}
                    onChange={() => setAnnualCompensation('D')}
                    className="radio-input"
                  />
                  <span className="radio-custom-c"></span>
                  <span className="radio-label-text-c">$80,000 - $120,000</span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="E"
                    checked={annualCompensation === 'E'}
                    onChange={() => setAnnualCompensation('E')}
                    className="radio-input"
                  />
                  <span className="radio-custom-c"></span>
                  <span className="radio-label-text-c">$120,000 - $250,000</span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="F"
                    checked={annualCompensation === 'F'}
                    onChange={() => setAnnualCompensation('F')}
                    className="radio-input"
                  />
                  <span className="radio-custom-c"></span>
                  <span className="radio-label-text-c" >$250,000 or more</span>
                </label>
                <button type="submit" className="big-button1"  style={{ marginLeft: '350px', marginRight: '1000px'}}>
                  OK
                </button>

              </form>
              <img src={pic1} className="pic1" alt="pic1" />
            </div>
          </div>
        </CSSTransition>
      )}

  {showForm && currentPage === 8 && (
    <CSSTransition timeout={300} classNames="slide">
      <div className="form-container">
        <h2>
          <span style={{ color: '#d59ee2' }}>8 ➝ </span> Certifying Statement*
          <p style={{marginRight:'550px', fontSize:'18px'}}>I hereby acknowledge that this application form was completed by me (the individual seeking to enroll in Metana) and I did not receive help from any external sources. The responses submitted are entirely my own and based on my own reasoning. Also, I opt in to receive communication messages from Metana about my application.</p>
        </h2>
        <div className="form-content">
          <form onSubmit={handleSubmit}>
            <label>
              <input
                type="radio"
                value="accept"
                checked={certification === 'accept'}
                onChange={() => setCertification('accept')}
                className="radio-input"
              />
              <span className="radio-custom-c"></span>
              <span className="radio-label-text-c">A. I accept</span>
            </label>
            <label>
              <input
                type="radio"
                value="dont_accept"
                checked={certification === 'dont_accept'}
                onChange={() => setCertification('dont_accept')}
                className="radio-input"
              />
              <span className="radio-custom-c"></span>
              <span className="radio-label-text-c">B. I don’t accept</span>
            </label>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button type="submit" className="big-button1" style={{ marginLeft: '350px', marginRight: '950px' }}>
              FINISH
            </button>

          </form>
        </div>
      </div>
    </CSSTransition>
  )}

      </TransitionGroup>
    </div>
  );
};

export default App;
