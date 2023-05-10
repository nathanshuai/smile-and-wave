import { Component } from 'react'


// creating a component using the class syntax
// 'component'is the base classs for class components



class Header extends Component {
    
  render() {
    const { title } = this.props;
    const { navigation } = this.props;
    return (
        <header>
            <div className='container flexbox'>
                <h1>{title}</h1>
                <p>{navigation}</p>
            </div>
        </header>
    )
  }
}

export default Header;