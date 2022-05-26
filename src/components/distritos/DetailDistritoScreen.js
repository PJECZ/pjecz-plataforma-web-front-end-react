import React from 'react'
import { useParams } from 'react-router-dom'

import CommonScreen from '../ui/CommonScreen'

import DetailDistrito from './DetailDistrito'
import ListOficinas from '../oficinas/ListOficinas'


const DetailDistritoScreen = () => {

    const { id } = useParams()

    return (
        <CommonScreen>
            <DetailDistrito distrito_id={id} />
            <ListOficinas distrito_id={id} />
        </CommonScreen>
    )

}

export default DetailDistritoScreen
