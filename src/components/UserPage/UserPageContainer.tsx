import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { User as UserType } from "../../store/reducers/users.slice";
import { UserPage } from './UserPage';

export const UserPageContainer = () => {

    const [currentUser, setCurrentUser] = useState<UserType | undefined>(undefined);
    const users = useAppSelector((state) => state.users.users);
    let { id } = useParams();

    useEffect(() => {
        const user = users.find((user) => String(user.id) === id);
        setCurrentUser(user);
    }, []);
    return (
        <UserPage currentUser={currentUser} />
    )
}
