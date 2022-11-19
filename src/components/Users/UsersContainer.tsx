import React, { useState } from 'react'
import { useAppSelector } from '../../store/hooks'
import { Users } from './Users'

export const UsersContainer = () => {
    const users = useAppSelector(state => state.users.users)
    const [maxLength, setMaxLength] = useState(3)
    return (
        <Users maxLength={maxLength} users={users} setMaxLength={setMaxLength} />
    )
}
