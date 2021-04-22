import React from 'react';
import PersistentDrawerLeft from '../../MainView/Nav/Nav'
import Footer from '../../MainView/Footer/Footer'
import FeaturedPrototype from '../../../shared/featured-prototype'
import { PrototypesContext } from '../../../../context/Prototypes-context'
import '../../../../pages/front/all-prototype-page.styles.scss'
import { useContext } from 'react';
import { render } from '@testing-library/react';

function Viewprototypes() {

  const { prototypes } = useContext(PrototypesContext);
  const allprototypes = prototypes.map(prototype => (
  <FeaturedPrototype { ...prototype } key={prototype.id} />
  ));

    return (

        <main class="page-content" >
          <PersistentDrawerLeft/>
          <div className='prototype-list-container'>
           <h2 className='prototype-list-title'>Prototypes</h2>
            <div className='prototype-list'>
                {
                    allprototypes
                }
                
            </div>
       
       </div>
       <Footer/>

            
        </main>
    )
}

export default Viewprototypes;