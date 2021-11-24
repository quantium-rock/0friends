import { NavLink } from "react-router-dom";

import NewListedItem from './NewListedItem'
import ITag from '../ITag';
import data from '../../data/data-components/data-SecNewListed.js';

function SecNewListed(){
  return(
      <div className="container-fluid">
        <div className="col-12 py-4">
          <div className="card">
            
            <div className="card-body p-3">
              <div className="row">

                {data && data.map((item , i) => (

                    <NewListedItem
                        key={i}
                        path1={item.path1}
                        path2={item.path2}
                        path3={item.path3}
                        path4={item.path4}
                        path5={item.path5}
                        path6={item.path6}
                        path7={item.path7}
                        path8={item.path8}
                        img1={item.img1}
                        img2={item.img2}
                        img3={item.img3}
                        img4={item.img4}
                        img5={item.img5}
                        img6={item.img6}
                        text1={item.text1}
                        text2={item.text2}
                        price={item.price}
                    />

                ))}

                <div className="col-md-12 text-center">
                  <NavLink className="btn bg-gradient-dark mb-0" to="/"><ITag ClassName="fas fa-plus mr-10" />Load More</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SecNewListed