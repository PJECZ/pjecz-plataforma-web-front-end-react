import React from 'react'
import { useParams } from 'react-router-dom'

import ContainerLoggedScreen from '../ui/ContainerLoggedScreen'

import DetailMateria from './DetailMateria'


const DetailMateriaScreen = () => {

    const { id } = useParams()

    return (
        <ContainerLoggedScreen>
            <DetailMateria materia_id={id} />
        </ContainerLoggedScreen>
    )

}

export default DetailMateriaScreen
