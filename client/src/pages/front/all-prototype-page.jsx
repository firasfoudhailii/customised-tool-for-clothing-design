import React, { useContext } from 'react';
import Layout from '../../components/shared/layout'
import FeaturedPrototype from '../../components/shared/featured-prototype'
import { PrototypesContext } from '../../context/Prototypes-context'
import './all-prototype-page.styles.scss'



const AllPrototypes = () => {
    const { prototypes } = useContext(PrototypesContext);
    const allprototypes = prototypes.map(prototype => (
        <FeaturedPrototype { ...prototype } key={prototype.id} />
    ));
    
    return(
        <Layout>
       <div className='prototype-list-container'>
           <h2 className='prototype-list-title'>Prototypes</h2>
            <div className='prototype-list'>
                {
                    allprototypes
                }
            </div>
       </div>
       </Layout>

    );
}

export default AllPrototypes;
