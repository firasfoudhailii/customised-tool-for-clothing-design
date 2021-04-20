import React, { useContext } from 'react';
import FeaturedItem from '../../../shared/featured-item' 
import { ItemsContext } from '../../../../context/items-context'
import '../../../../pages/front/all-prototype-page.styles.scss'
import '../../../items/item'
import PersistentDrawerLeft from '../../MainView/Nav/Nav'
import Footer from '../../MainView/Footer/Footer'


function ViewItem() {
    const { items } = useContext(ItemsContext);
    const allitems = items.map(item => (
        <FeaturedItem { ...item } key={item.id} />
    ));
    
    return (
        
        <main class="page-content" >
          <PersistentDrawerLeft/>
          <div className='prototype-list-container'>
           <h2 className='prototype-list-title'>Prototypes</h2>
            <div className='prototype-list'>
                {
                    allitems
                }
                
            </div>
       
       </div>
       <Footer/>

            
        </main>

    )
}

export default ViewItem;
