
import './style/index.css'
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import Gallery from './components/Gallery';

function App() {

   let title = 'Smile N Wave';
   let navigation = ' About us   '
   
   const imgs = [ 
    {
    id:1001,
    url: "https://github.com/nathanshuai/cdn/blob/main/img/ben-collins-6CFmQSQlTz4-unsplash.jpg?raw=true"
    }, 
    {
    id:1002,
    url: "https://github.com/nathanshuai/cdn/blob/main/img/engin-akyurt-PH45jIf08OA-unsplash.jpg?raw=true"
    }, 
    {
    id:1003,
    url:"https://github.com/nathanshuai/cdn/blob/main/img/hamid-tajik-SSrV93gHS64-unsplash.jpg?raw=true"
    }, 
    {
    id:1004,
    url:"https://github.com/nathanshuai/cdn/blob/main/img/quinn-nguyen-jeMjOWouRHQ-unsplash.jpg?raw=true"
    }, 
]; 

return (
    <>
    <Header title={title} navigation={navigation}/>
    <main>
      <Banner />
      <div className="container">
        <Gallery imgs={imgs}/>
      </div>
    </main>
    <Footer />
    </>
  );
}

export default App;
