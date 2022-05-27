import React from 'react'
import { useParams } from 'react-router-dom'

import CommonScreen from '../ui/CommonScreen'

import DetailMateria from './DetailMateria'


const DetailMateriaScreen = () => {

    const { id } = useParams()

    return (
        <CommonScreen>
            <DetailMateria materia_id={id} />
        </CommonScreen>
    )

}

export default DetailMateriaScreen
