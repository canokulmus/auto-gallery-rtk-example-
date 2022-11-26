import React from 'react'
import { useSelector } from 'react-redux'

const CarValue = () => {

    const carsTotal = useSelector(({ cars: { data, searchTerm } }) => {
        let searchContent = searchTerm ? searchTerm.toLowerCase() : "";
        let cars = data.filter(car => car.name.toLowerCase().includes(searchContent))
        return cars.reduce((total, car) => total + car.cost, 0)
    })

    return (
        <div className='car-value'>
            Total Cost: ${carsTotal}
        </div>
    )
}

export default CarValue