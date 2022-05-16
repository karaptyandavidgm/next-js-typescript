import { FC } from 'react';
import { usersType } from '../types';
import Heading from './Heading'


type userProps = {
    user: usersType
}

const UserInfo: FC<userProps> = ({ user }) => {
    const { id, name, address, phone, email } = user || {};
    if (!user)
        return <Heading tag="h3" text="Empty contact" />
    return (
        <>
            <Heading tag="h3" text={name} />
            <div><strong>Email: </strong> {email}</div>
            <div><strong>Name: </strong> {name}</div>
            <div><strong>Phone: </strong> {phone}</div>
            <div>
                <strong>Address: </strong>
                {` ${address.street} ${address.suite} ${address.city} ${address.zipcode} `}
            </div>
        </>
    )

}
export default UserInfo