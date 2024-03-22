import React from 'react'
import { useSelector } from 'react-redux'
import { selectCurrent } from '../../features/user/UserSlice'
import { Card, CardBody, CardHeader, Image } from '@nextui-org/react';
import { BASE_URL } from '../../constans';
import { Link } from 'react-router-dom';
import { MdAlternateEmail } from 'react-icons/md';

const Profile = () => {
    const current = useSelector(selectCurrent);
    if(!current) {
        return null
    }
    const { name, email, avatarUrl, id} = current
  return (
    <Card className='py-4'>
      <CardHeader className="justify-between items-center bg-transparent">
        <Image
        alt='Card profile'
        className='object-cover rounded-xl'
        src={`${BASE_URL}${avatarUrl}`}
        width={370}
        />
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Link to={`/users/${id}`}>
          <h4 className="font-bold text-large mb-2">{name}</h4>
        </Link>
        <p className="text-default-500 flex items-center gap-2">
            <MdAlternateEmail/>
          {email}
        </p>
      </CardBody>
    </Card>
  )
}

export default Profile
