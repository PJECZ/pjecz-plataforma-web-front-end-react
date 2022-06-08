import React from 'react'
import { useParams } from 'react-router-dom'

import ContainerLoggedScreen from '../ui/ContainerLoggedScreen'

import DetailDistrito from './DetailDistrito'
import ListOficinas from '../oficinas/ListOficinas'
import ListRedams from '../redams/ListRedams'

const DetailDistritoScreen = () => {

    const { id } = useParams()

    return (
        <ContainerLoggedScreen>
            <DetailDistrito distrito_id={id} />
            <ListOficinas distrito_id={id} />
            <ListRedams distrito_id={id} />
        </ContainerLoggedScreen>
    )

}

export default DetailDistritoScreen
