import React, { useState } from "react";
import Card from "../Card/Card";


const SearchBox = () => {
  const [searchInput, setSearchInput] = useState("")
  const [profile, setProfile] = useState<any>({})
  const [repoList, setRepoList] = useState([])

  const _handleinput= (e:any) => {
    setSearchInput(e.target.value)
    console.log(e.target.value)
  }

  const _handleinputchange= async () =>{
    const url = `https://api.github.com/users/${searchInput}`
    const response = await fetch(url)
    const data = await response.json();
    console.log(data)
    setProfile(data)
    console.log(profile.avatar_url);
    
    // .then((response) => response.json())
    // .then((json) => {
    //   console.log(json);
      
    //   // setName(json)
    // });

    
  }
  return (
    <div>
      
      <div style={{textAlign:"center", marginTop:"10px"}}>
      <input type= "text"style={{padding: '12px 20px',borderRadius:'4px',border:'2px solid grey', width:'12%'}} onChange={_handleinput} placeholder="Enter your repo"/>
      <button type = "submit" style={{padding: '5px 10px',borderRadius:'2px',background:"blue", marginLeft:"5px", color:"white"}} onClick={_handleinputchange} >submit</button>
      <Card id={profile.id} avatar={profile.avatar_url} link={profile.repos_url} name={profile.name} login={profile.login}/> 

      </div>
      
      
      <div>
      
      </div>
      
    </div>
  );
};

export default SearchBox;
