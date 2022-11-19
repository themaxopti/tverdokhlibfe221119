import React, { useState, useEffect } from "react";
import hideImg from "../../assets/images/close.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../store/hooks";
import { useParams } from "react-router-dom";
import { User, User as UserType } from "../../store/reducers/users.slice";


interface UserPageProps {
    currentUser: User | undefined
}

export const UserPage: React.FC<UserPageProps> = ({ currentUser }) => {


    return (
        <div data-testid="userPage" className="user-page">
            <div className="user-page__hide">
                <Link to={"/"}>
                    <img src={hideImg} alt="" />
                </Link>
            </div>
            <div className="user-page__content">
                <div className="user-page__about">
                    <div className="user-page__photo">
                        {currentUser && <img src={`/images/${currentUser.id}.jpg`} alt="" />}
                    </div>
                    <div className="user-page__surname">{currentUser?.name}</div>
                    <div className="user-page__position">{currentUser?.position}</div>
                </div>
                <div className="user-page__contacts">
                    <div className="user-page__contact">
                        <div className="user-page__title">Phone</div>
                        <div>{currentUser?.phone}</div>
                    </div>
                    <div className="user-page__contact">
                        <div className="user-page__title">NickName</div>
                        <div>{currentUser?.nickname}</div>
                    </div>
                    <div className="user-page__contact">
                        <div className="user-page__title">Email</div>
                        <div>{currentUser?.email}</div>
                    </div>
                </div>
                <div className="user-page__send">Send Message</div>
            </div>
        </div>
    );
};
