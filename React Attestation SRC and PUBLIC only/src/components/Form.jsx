import React from 'react'
import { useForm } from "react-hook-form";
import 'leaflet/dist/leaflet.css'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Tooltip,
  CircleMarker,
  Polygon 
} from 'react-leaflet'

const colorOptions = {color:'deeppink'}
const centerPolygon = [
  [
    [55.795820, 37.821802],
    [55.778156, 37.830681],
    [55.740014, 37.666968],
    [55.762566, 37.613173]
  ]
]
const center = [55.786828, 37.818200]


const Form = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); 
  return (
    <div>
    
        <form id='form' onSubmit={handleSubmit(onSubmit)}>
            <h1>Заполните заявку на обратную связь</h1>

        <div className='input-group mb-3'>
          <input
             {...register('lastName',{
                 required:true,
                 maxLength:50,
                 pattern: /^[А-Яа-я]+$/i
             })}
             type="text"
             className='form-control'
             placeholder='Фамилия'/>
        </div>
           {errors?.lastName?.type === 'required'&&(
            <p>Поле обязательно для заполнения</p>
           )}

           {errors?.lastName?.type === 'maxLength'&&(
            <p>Поле не может содержать более 50 символов</p>
           )}

           {errors?.lastName?.type === 'pattern'&&(
            <p>Поле заполнено некорректно</p>
           )}
          <input className='btn btn-outline-primary' type="submit" />
      </form>
  <br/>
        <MapContainer
         center={center}
         zoom={10}
         style={{
         width:'100vw',
         height:'500px'

         }}
        
        >
          <TileLayer
            url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=HTnlhlgcQY71OtigNLam'
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          />

          <CircleMarker
           center={center}
           pathOptions={{color:'black'}}
           radius={6}
          />

          <Marker position={center}>
            <Popup>
              Мы находимся тут
            </Popup>
            <Tooltip>
              При наведении
            </Tooltip>
          </Marker>
          <Polygon positions={centerPolygon} pathOptions={colorOptions}/>
        </MapContainer>
    </div>
  )
}

export default Form