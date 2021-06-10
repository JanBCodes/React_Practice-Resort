import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const LoginPage = () => {
    return (
        <>
        <div className="grid grid-row-3" id="main-container">
            <Header/>
            <main>            
                <section id="login-section">

                    <div className= "container">
                    
                        <h1>Login</h1>

                        <form action="">
                            <div className="form-control">
                                <label for="email">Email</label>
                                <input type="text" id="email" />
                            </div>

                            <div className="form-control">
                                <label for="password">Password</label>
                                <input type="text" id="password" />
                            </div>

                            <div className="form-control">
                                <button className="btn" type="submit">Login</button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
        </>
    )
}

export default LoginPage
