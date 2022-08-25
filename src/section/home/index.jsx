
import fundo from '../../assets/fundo.png';
import './home.css'

export default function Home() {

  return (
    <div id='home' className='home'>
      <div className="imgHome"
        style={{
          backgroundImage: `url(${fundo})`,
          boxSizing: 'border-box',
          display: 'block',
          width: '100vw',
          height: '100vh',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',  
        }}
      >
      <div className='title'>
        <h1>Bem Vindo</h1>
      </div>

      </div>
    </div>
  )
}