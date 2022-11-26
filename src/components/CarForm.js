import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeName, changeCost, addCar } from '../store'


const CarForm = () => {

    const dispatch = useDispatch()
    const { name, cost } = useSelector(state => state.form)

    const handleNameChange = (e) => {
        dispatch(changeName(e.target.value))
    }

    const handleCostChange = (e) => {
        dispatch(changeCost(parseInt(e.target.value || 0)))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addCar({ name, cost }))
    }

    return (
        <div className='car-form panel'>
            <h4 className="subtitle is-3"> Add Car</h4>
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Name</label>
                        <input
                            className="input is-expanded"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div className="field">
                        <label className="label">Cost</label>
                        <input
                            className="input is-expanded"
                            type="number"
                            value={cost || ''}
                            onChange={handleCostChange}
                        />
                    </div>
                </div>
                <div className="field">
                    <button className="button is-link" type="submit">Add Car</button>
                </div>
            </form>
        </div>
    )
}

export default CarForm