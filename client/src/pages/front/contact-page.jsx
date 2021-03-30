import React from 'react'
import Layout from '../../components/shared/layout'

const Contactpage = () => {
    return (
        <Layout>
            <div className='sign-up'>
            <div class="container has-background-light">
                <h2 class="title is-2 is-capitalized">Contact Us</h2>
                <form action="" method="post">
                    <div class="field">
                        <label for="name" class="label is-size-4 has-text-weight-light">Name:</label>
                        <div class="control has-icons-left">
                            <input type="text" name="name" id="name" class="input" placeholder="Name" autofocus/>
                                <span class="icon is-left">
                                    <i class="fa fa-user"></i>
                                </span>
					    </div>
                    </div>
                        <div class="field">
                            <label for="email" class="label is-size-4 has-text-weight-light">Email:</label>
                            <div class="control has-icons-left">
                                <input type="email" name="email" id="email" class="input" placeholder="Email"/>
                                    <span class="icon is-left">
                                        <i class="fa fa-envelope"></i>
                                    </span>
					        </div>
                        </div>
                            <div class="field">
                                <label for="message" class="label is-size-4 has-text-weight-light">Message:</label>
                                <textarea name="message" id="message" rows="5" class="textarea is-medium" placeholder="Message"></textarea>
                            </div>
                            <button type="submit" class="button is-success is-size-5">Submit</button>
			    </form>
            </div>   
            </div>
    </Layout>
      )
}
export default Contactpage;
