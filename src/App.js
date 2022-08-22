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
  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>Dark Mode Toggle</h1>
          <button className="btn">Toggle</button>
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
