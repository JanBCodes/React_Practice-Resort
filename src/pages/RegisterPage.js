import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const RegisterPage = () => {
    return (
        <>
        <div className="grid grid-row-3" id="main-container">
            <Header/>
            <main>
                <section id="register-section">
                    <div class= "container">
                        <h1>Register</h1>

                        <form action="">

                            <div class="form-control">
                                <label for="firstName">First Name</label>
                                <input type="text" id="firstName" />
                            </div>

                            <div class="form-control">
                                <label for="lastName">Last Name</label>
                                <input type="text" id="lastName" />
                            </div>

                            <div class="form-control">
                                <label for="email">Email</label>
                                <input type="text" id="email" />
                            </div>

                            <div class="form-control">
                                <label for="password">Password</label>
                                <input type="text" id="password" />
                            </div>

                            <div class="form-control">
                                <label for="cpassword">Confirm Password</label>
                                <input type="text" id="password" />
                            </div>

                            <div class="form-control">
                                <button class="btn" type="submit">Create Account</button>
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

export default RegisterPage
