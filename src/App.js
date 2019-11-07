import React, {useState} from 'react';
import './App.css';
//import register from './serviceWorker';
import MemberForm from "./Form";
import Members from "./Members";

function App() {
    const [members, setMembers] = useState([
        {
            id: 1,
            name: "john doe",
            email: "jd@gmail.com",
            role: "engineer"
        }
    ]);

    const addNewMember = member => {
        const newMember = setMembers([...members,member]);
    };

    return (
        <div className="App">
            <h1>Members</h1>
            <MemberForm addNewMember={addNewMember} />
            <Members members={members}/>
        </div>
    );
}

export default App;
