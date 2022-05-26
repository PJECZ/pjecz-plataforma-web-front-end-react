import React from 'react'

import CommonScreen from '../ui/CommonScreen'

import DetailDistrito from './DetailDistrito'
import ListOficinas from '../oficinas/ListOficinas'


const DetailDistritoScreen = () => {

    return (
        <CommonScreen>
            <DetailDistrito />
            <ListOficinas distrito_id={1} />
        </CommonScreen>
    )

}

export default DetailDistritoScreen
