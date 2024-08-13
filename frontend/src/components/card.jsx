import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

function Card({workout}) {

  const handleClick = async () => {
    const res = await fetch ('/api/workouts/'+ workout._id, {
      method: 'DELETE'
    })

    const json = await res.json()

    if (res.ok) {

    }

  }
  return(
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>Load (lbs): {workout.load}</p>
      <p>Reps: {workout.reps}</p>
      <p>{workout.createdAt}</p>
      <span onClick={handleClick}>Delete</span>
    </div>

  )
}

export default Card