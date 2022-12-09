// @ts-ignore
import React, {useMemo, useState} from 'react';

export default {
    title: 'Memo',
};


const UsersSecret = (props: { users: Array<string> }) => {
    console.log('UsersSecret');
    return <div>
        {
            props.users.map((u, i) => <div key={i}>{u}</div>)
        }
    </div>;
};


const Users = React.memo(UsersSecret);


export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo');
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['1111111', '2222222', '3333333', 'Vadim']);

    const newArray = useMemo(() => {
        const newArray= users.filter(item => !item.toLowerCase().includes('2') );
        return newArray
    }, [users]);

    const addUser = ()=>{
        setUsers([...users, 'Petro' + new  Date().getTime()])
    }


    return <>
    <button onClick={()=>setCounter(counter+1)}>+</button>
    <button onClick={()=>addUser()}>Add user</button>
        {counter}
        <Users users={newArray}/>
    </>;
};
