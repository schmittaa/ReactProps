import './App.css';
import Profile from './Profile/Profile';
import Elon from './Images/Elon.jpeg';
import Jeff from './Images/Jeff.jpg';
import Bernard from './Images/Bernard.jpg'
function App() {
  return (
    <section className="App">

          <section className='Profile'>
          <div className='PP'>
             <Profile 
                      children={<img src={Elon} />} 
                      FullName="Elon Musk" 
                      Bio="He is the founder, CEO, and Chief Engineer at SpaceX; early-stage investor, CEO, and Product Architect of Tesla, Inc.; founder of The Boring Company; and co-founder of Neuralink and OpenAI. " 
                      Profession="Entrepreneur and business magnate." />
          </div>
          </section>
          <section className='Profile'>
          <div className='PP'>
              <Profile
                      children={<img src={Jeff} />} 
                      FullName="Jeff Bezos " 
                      Bio="He is the founder and executive chairman of Amazon, where he previously served as the president and CEO. With a net worth of around US$177 billion as of March 2022, Bezos is the second-wealthiest person in the world according to Bloomberg's Billionaires Index and Forbes." 
                      Profession="American entrepreneur, media proprietor, investor, computer engineer, and commercial astron" 
                       />
          </div>
          </section>
          <section className='Profile'>
          <div className='PP'>
          <Profile  
                      children={<img src={Bernard} />} 
                      Picture="" 
                      FullName="Bernard Arnault" 
                      Bio="He is the chairman and chief executive of LVMH Moët Hennessy – Louis Vuitton SE, the world's largest luxury goods company." 
                      Profession="French businessman, investor, and art collector." />
          </div> 
          </section>
          
    </section>
  );
}

export default App;
