import React from 'react'
import { useParams } from 'react-router-dom'

import ContainerLoggedScreen from '../ui/ContainerLoggedScreen'

import DetailAutoridad from './DetailAutoridad'


const DetailAutoridadScreen = () => {

    const { id } = useParams()

    return (
        <ContainerLoggedScreen>
            <DetailAutoridad autoridad_id={id} />
        </ContainerLoggedScreen>
    )
}

export default DetailAutoridadScreen
