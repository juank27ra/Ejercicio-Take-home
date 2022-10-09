import React, { useEffect }  from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {getInfo} from '../redux/actions'
import {Link}  from 'react-router-dom';
import style from './Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import DataTable from 'react-data-table-component'

export default function Home() {

    const dispatch = useDispatch()
    const info = useSelector((state) => state.data)
    console.log(info)

    useEffect(() => {
        dispatch(getInfo())
    }, [dispatch])

    const columnas = [
      {name: 'Id',
      selector: 'Id', 
      sortable: true
      },
      {name: 'Sku',
      selector: 'Sku', 
      sortable: true
      },
      {name: 'Cantidad',
      selector: 'Cantidad', 
      sortable: true
      },
    ]
    
  return (
    <div class="table table-striped">
      <h1> Información de Productos</h1>
        <p className={style.Buttonpost}>
          <Link to = {'/create'}>
            <button>Crear Info</button>
          </Link>
        </p>
    {
        <div className={style.conten}>        
          <DataTable
            columns={columnas}
            data = {info}
            title="Ecommerce"
            fixedHeader
            fixedHeaderScrollHeight='600px'
          />
        </div>
    }
    </div>
  )
}
