import React, { useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { User as UserType } from "../../store/reducers/users.slice";
// import userPhoto from "../../assets/images/one.jpg";
import { User } from "../User/User";


interface UsersProps {
    users: UserType[]
    maxLength: number
    setMaxLength: (length: number) => void
}

export const Users: React.FC<UsersProps> = ({ maxLength, setMaxLength, users }) => {


    return (
        <div className="users" data-testid="users">
            <div className="users__items">
                {
                    users.map((user, i) => {
                        if (i > maxLength - 1) { return }
                        // @ts-ignore
                        return <User id={user.id} name={user.name} nickName={user.nickname}
                            key={user.id}
                        />
                    })
                }
                {/* <User /> */}
            </div>
            <div onClick={() => setMaxLength(maxLength + maxLength)} data-testid="view" className="users__all">View all</div>
        </div>
    );
};
