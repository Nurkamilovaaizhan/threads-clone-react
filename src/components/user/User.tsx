import React from 'react'
import { BASE_URL } from '../../constans'
import { User as NextUiUser } from "@nextui-org/react"

type Props = {
    name: string
    avatarUrl: string
    description?: string
    className?: string
  }

  export const User: React.FC<Props> = ({
    name = "",
    description = "",
    avatarUrl = "",
    className = "",
  }) => {
    return (
      <NextUiUser
        name={name}
        className={className}
        description={description}
        avatarProps={{
          src: `${BASE_URL}${avatarUrl}`,
        }}
      />
    )
  }

