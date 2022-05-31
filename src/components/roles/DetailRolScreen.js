import React from 'react'
import { useParams } from 'react-router-dom'

import ContainerLoggedScreen from '../ui/ContainerLoggedScreen'

import DetailRol from './DetailRol'


const DetailRolScreen = () => {

    const { id } = useParams()

    return (
        <ContainerLoggedScreen>
            <DetailRol rol_id={id} />
        </ContainerLoggedScreen>
    )

}

export default DetailRolScreen
