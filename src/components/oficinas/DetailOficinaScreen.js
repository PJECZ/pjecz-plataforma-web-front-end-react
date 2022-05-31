import React from 'react'
import { useParams } from 'react-router-dom'

import DetailOficina from './DetailOficina'
import ContainerLoggedScreen from '../ui/ContainerLoggedScreen'


const DetailOficinaScreen = () => {

    const { id } = useParams()

    return (
        <ContainerLoggedScreen>
            <DetailOficina oficina_id={id} />
        </ContainerLoggedScreen>
    )

}

export default DetailOficinaScreen
