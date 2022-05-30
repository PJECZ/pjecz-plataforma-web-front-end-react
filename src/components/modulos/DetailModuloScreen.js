import React from 'react'
import { useParams } from 'react-router-dom'

import ContainerLoggedScreen from '../ui/ContainerLoggedScreen'

import DetailModulo from '../modulos/DetailModulo'


const DetailModuloScreen = () => {

    const { id } = useParams()

    return (
        <ContainerLoggedScreen>
            <DetailModulo modulo_id={id} />
        </ContainerLoggedScreen>
    )

}

export default DetailModuloScreen
