

import Button from "./Button"


function Banner() {


  return (
    <div className="banner">
        <div className="bannerdata">
        <h1>Connect with Your Community</h1>
        <p>At Social Skills Co., we believe that building strong social connections 
            is the key to a fulfilling life. Our community-building programs and 
            workshops are designed to help you develop the skills you need to 
            connect with others and create lasting relationships.</p>
        <Button type="secondary" text="Secondary"  />
        <Button type="primary" text="Primary"  />
        </div>
    </div>
  )
}

export default Banner