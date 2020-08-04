import React from 'react';

import wppIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'


const TeacherItem: React.FC = (props) => {
  return(
    <article className="teacher-item">
          <header>
            <img src="https://avatars0.githubusercontent.com/u/59455454?s=460&u=1809d05e5a39b50c2c87650048aec2e56be6feda&v=4" 
              alt="João Marcos"/>
            <div>
              <strong>João Marcos Lopes Pinto</strong>
              <span>Física</span>
            </div>
          </header>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             <br/><br/>
             Aliquam eu elit fringilla, mollis mi ac, sollicitudin nunc. Fusce ut turpis vitae nunc iaculis fermentum eu sed velit. Sed bibendum, libero eu consectetur feugiat, sapien ipsum ultricies urna, vel venenatis mi dolor maximus ex. Integer et leo enim.
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$80,00</strong>
            </p>
            <button type="button">
              <img src={wppIcon} alt="whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
  )
}

export default TeacherItem