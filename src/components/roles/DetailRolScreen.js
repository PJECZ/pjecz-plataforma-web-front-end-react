import React from 'react'
import { useParams } from 'react-router-dom'

import CommonScreen from '../ui/CommonScreen'

import DetailRol from './DetailRol'


const DetailRolScreen = () => {

    const { id } = useParams()

    return (
        <CommonScreen>
            <DetailRol rol_id={id} />
        </CommonScreen>
    )

}

export default DetailRolScreen
