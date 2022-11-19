import React, { useEffect, useState } from "react";
import userPhoto from "../../assets/images/1.jpg";
import { Link, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../store/hooks";
import { useParams } from "react-router-dom";
import { User as UserType } from "../../store/reducers/users.slice";


interface Props {
    name: string
    nickName: string
    id: number
}

export const User: React.FC<Props> = ({ id, name, nickName }) => {
    return (
        <div data-testid="user" className="users__item">
            <div className="users__information">
                <div className="users__image">
                    <img src={`/images/${id}.jpg`} alt="" />
                </div>
                <div className="users__name"> {name}</div>
                <div className="users__nickname ">{nickName}</div>
            </div>
            <Link to={`/user/${id}`}>
                <div className="users__view">View</div>
            </Link>
        </div>
    );
};
