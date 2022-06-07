import React from 'react'

import { Readms } from '../../actions/RedamsActions'


const ListRedams = () => {

    // Consultar REDAM
    const [redams, setRedams] = useState([])
    const [consultado, setConsultado] = useState(false)
    useEffect(() => {
        async function fetchData() {
            const response = await Redams(props)
            if (response.status === 200) {
                setRedams(response.data.items)
                setConsultado(true)
            }
        }
        fetchData()
    }, [props])

    return (
        <div>ListRedams</div>
    )

}

export default ListRedams
