import React from 'react'
import { useParams } from 'react-router-dom'

import CommonScreen from '../ui/CommonScreen'

import DetailAutoridad from './DetailAutoridad'


const DetailAutoridadScreen = () => {

    const { id } = useParams()

    return (
        <CommonScreen>
            <DetailAutoridad autoridad_id={id} />
        </CommonScreen>
    )
}

export default DetailAutoridadScreen
