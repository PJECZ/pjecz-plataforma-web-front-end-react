import React from 'react'
import { useParams } from 'react-router-dom'

import ContainerLoggedScreen from '../ui/ContainerLoggedScreen'

import DetailDomicilio from './DetailDomicilio'
import ListOficinas from '../oficinas/ListOficinas'


const DetailDomicilioScreen = () => {

    const { id } = useParams()

    return (
        <ContainerLoggedScreen>
            <DetailDomicilio domicilio_id={id} />
            <ListOficinas domicilio_id={id} />
        </ContainerLoggedScreen>
    )

}

export default DetailDomicilioScreen
