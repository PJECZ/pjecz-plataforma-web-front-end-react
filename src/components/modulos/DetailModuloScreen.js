import React from 'react'
import { useParams } from 'react-router-dom'

import CommonScreen from '../ui/CommonScreen'

import DetailModulo from '../modulos/DetailModulo'


const DetailModuloScreen = () => {

    const { id } = useParams()

    return (
        <CommonScreen>
            <DetailModulo modulo_id={id} />
        </CommonScreen>
    )

}

export default DetailModuloScreen
