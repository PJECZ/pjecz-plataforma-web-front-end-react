import React from 'react'
import { useParams } from 'react-router-dom'

import DetailOficina from './DetailOficina'
import CommonScreen from '../ui/CommonScreen'


const DetailOficinaScreen = () => {

    const { id } = useParams()

    return (
        <CommonScreen>
            <DetailOficina oficina_id={id} />
        </CommonScreen>
    )

}

export default DetailOficinaScreen
