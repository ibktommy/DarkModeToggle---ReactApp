import React, { useEffect, useState } from 'react'
import Article from './components/Article';
import data from './data'

function App() {
  // Setting Theme-State for the App
  const [theme, setTheme] = useState('light-theme')

  // UseEffect to Change the App Theme once the theme-state changes
  useEffect(() => {
    document.documentElement.className = theme
  }, [theme])

  // Function To Change theme
  function themeHandler() {
    let pageTheme = document.documentElement

    if (pageTheme.className === 'light-theme') {
      setTheme('dark-theme')
    } else {
      setTheme('light-theme')
    }
  }

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>Dark Mode Toggle</h1>
          <button className="btn" onClick={themeHandler}>Toggle</button>
        </div>
      </nav>

      <section className="articles">
        {data.map((item) => {
          return <Article key={item.id} {...item} />
        })}
      </section>
    </main>
  );
}

export default App;
