import React, { useContext ,useEffect , useState} from "react";
import { Redirect } from "react-router-dom";
import Styled from "styled-components";
import { AuthContext } from "./App";

export default function Home() {
  const { state, dispatch } = useContext(AuthContext);
  const [repolist, setRepoList ] = useState({});
  const [activitylist, setActivityList ] = useState([]);
  
  useEffect(() => {  
  if(state.repolist && state.actvlist){
    setActivityList(state.actvlist);
    setRepoList(state.repolist);
  }
  }, [state]);

  if (!state.isLoggedIn) {
    return <Redirect to="/login" />;
  }

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT"
    });
  } 

  return (
    <Wrapper>
      <div className="container">
        <button onClick={()=> handleLogout()}>Logout</button>
        <div>
          <h3>Activity List</h3>
          <div className="activity-content">
          {activitylist && activitylist.length && activitylist.map((item, i) => {
                return (
                    <div className="activity-cont">
                        Event {i + 1}
                             <div className="table-cont">
                                <table>
  <tr>
    <th>ID</th>
    <th>Type</th>
    <th>Public</th>
    <th>Created At</th>
  </tr>
  <tr>
    <td>{item.id}</td>
    <td>{item.type}</td>
    <td>{item.public}</td>
    <td>{item.created_at}</td>
  </tr>
</table>
                                </div>
                            </div>
                )
            })}
          </div>
          <h3>Repository ListInfo</h3>
          <div className="repo-content">
          {repolist && 
                    <div className="activity-cont">
                        Repository List Info
                             <div className="table-cont">
                                <table>
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Full Name</th>
    <th>html_url</th>
  </tr>
  <tr>
    <td>{repolist.id}</td>
    <td>{repolist.name}</td>
    <td>{repolist.full_name}</td>
    <td>{repolist.html_url}</td>
  </tr>
</table>
                                </div>
                            </div>
}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = Styled.section`
.container{
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: Arial;
  button{
    all: unset;
    width: 100px;
    height: 35px;
    margin: 10px 10px 0 0;
    align-self: flex-end;
    background-color: #0041C2;
    color: #fff;
    text-align: center;
    border-radius: 3px;
    border: 1px solid #0041C2;
    &:hover{
      background-color: #fff;
      color: #0041C2;
    }
  }
  >div{
    height: 50%;
    width: 50%;
    display: flex;
    flex-direction: row;
    font-size: 18px;
    .activity-content{
      display: flex;
      flex-direction: column;
      padding: 20px 100px;    
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
      width: 100%;
      height: 100vh;
      justify-content: left;
    align-items: left;
    .table-cont{
      border:1px solid black;
    }
    }
    .repo-content{
      display: flex;
      flex-direction: column;
      padding: 20px 100px;    
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
      width: 100%;
      height: 100vh;
      justify-content: right;
    align-items: right;
  margin-top:100px
  .table-cont{
    border:1px solid black;
  }
 
    }
  }
}
`;


