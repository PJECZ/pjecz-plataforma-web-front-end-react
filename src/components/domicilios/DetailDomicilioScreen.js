import React from 'react'
import { useParams } from 'react-router-dom'

import CommonScreen from '../ui/CommonScreen'

import DetailDomicilio from './DetailDomicilio'
import ListOficinas from '../oficinas/ListOficinas'


const DetailDomicilioScreen = () => {

    const { id } = useParams()

    return (
        <CommonScreen>
            <DetailDomicilio domicilio_id={id} />
            <ListOficinas domicilio_id={id} />
        </CommonScreen>
    )

}

export default DetailDomicilioScreen
