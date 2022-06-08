import React from 'react'
import { useParams } from 'react-router-dom'

import DetailRedam from './DetailRedam'
import ContainerLoggedScreen from '../ui/ContainerLoggedScreen'


const DetailRedamScreen = () => {

    const { id } = useParams()

    return (
        <ContainerLoggedScreen>
            <DetailRedam oficina_id={id} />
        </ContainerLoggedScreen>
    )

}

export default DetailRedamScreen
