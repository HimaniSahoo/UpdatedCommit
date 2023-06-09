import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './home.css';

function Home(){

    const [commitData, setCommitData] = useState([]);
    const [tokenVal, setTokenVal] = useState('');
    const [showData, setShowData] = useState(false);

    // useEffect(()=>{
    //     axios.get("https://api.github.com/repos/HimaniSahoo/UpdatedCommit/commits",{
    //         headers:{
    //             // Authorization: `Bearer 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`,
    //             Authorization: `Bearer ${tokenVal}`,
    //         }
    //     })
    //     .then((response)=>{
    //         setCommitData(response.data);
    //         setShowData(true);
    //     }).catch((error)=>{
    //         console.log(error);
    //     })
    // },[tokenVal])

    const submitToken = () => {
        axios
          .get('https://api.github.com/repos/HimaniSahoo/UpdatedCommit/commits', {
            headers: {
              Authorization: `Bearer ${tokenVal}`,
            },
          })
          .then((response) => {
            setCommitData(response.data);
            setShowData(true);
          })
          .catch((error) => {
            console.log(error);
          });
      };

   
    
    return(
       
        <div>

            <header className='header d-flex justify-content-between'>
                <h2>PROJECT</h2>
                <p>Assignment</p>
            </header>
            <div className="container-fluid">
           <div className='d-flex justify-content-center m-4'>
                <div className="form-group mx-sm-3 mb-2">
                        <input type="text" className="form-control" onChange={(e)=>setTokenVal(e.target.value)} id="inputtext" placeholder="Token"/>
                </div>
                <button type="submit" className="btn btn-primary mb-2 subbtn " onClick={submitToken}>Submit</button>
           </div>
            {showData && (
            <div>
                {commitData.map((data)=>{
                    return(

                        <div key={data.id} className='userCommitDivs'>
                            <p>{data.commit.message}</p>
                            <p> Committed by {data.commit.author.name} on {data.commit.author.date}</p>

                        </div>
                    )
                })}
                </div>
                )
            }
            </div>
        </div>
    )
}

export default Home;


