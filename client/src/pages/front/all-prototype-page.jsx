import React, { useContext } from 'react';
import {useEffect} from 'react';
import Layout from '../../components/shared/layout'
import FeaturedPrototype from '../../components/shared/featured-prototype'
import { PrototypesContext } from '../../context/Prototypes-context'
import './all-prototype-page.styles.scss'
import {useDispatch} from 'react-redux'
import {getPrototypes} from '../../actions/prototypes'
import prototype from '../../components/prototype/prototype'
import {useSelector} from 'react-redux';
import { grid } from '@chakra-ui/styled-system';
import Prototype from '../../components/prototype/prototype';
import { Grid, CircularProgress } from '@material-ui/core';







const AllPrototypes = () => {
    // const { prototypes } = useContext(PrototypesContext);
    // const allprototypes = prototypes.map(prototype => (
    //     <FeaturedPrototype { ...prototype } key={prototype.id} />
    // ));
    const prototypes = useSelector((state) => state.prototypes)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPrototypes());
    }, [dispatch])
    console.log(prototypes);
    return(
        <Layout>
       {/* <div className='prototype-list-container'>
           <h2 className='prototype-list-title'>Prototypes</h2>
            <div className='prototype-list'>
                
                    {prototype}
            </div>
       </div> */}

       <Grid>
           {
               prototypes.map((prototype) => (
                   <Grid key={prototype.id} item>
                           <Prototype Prototype={prototype}/>
                   </Grid>
               ))
           }
       </Grid>
       </Layout>

    );
}

export default AllPrototypes;
