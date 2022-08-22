import React, { useEffect, useState } from 'react'
import Article from './components/Article';
import data from './data'

function App() {
  // FUnction to Get the App Theme-State from the LocalStorage
  function getLocalStorageTheme() {
    let theme = 'light-theme'

    if (localStorage.getItem('theme')) {
      theme = localStorage.getItem('theme')
    }
    return theme
  }

  // Setting Theme-State for the App
  const [theme, setTheme] = useState(getLocalStorageTheme())

  // UseEffect to Change the App Theme once the theme-state changes
  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  // Function To Change theme
  function themeHandler() {
    if (theme === 'light-theme') {
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
