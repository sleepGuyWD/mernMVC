import { useEffect , useState} from "react"
import Card from "../components/card"
import WorkoutForm from "../components/workoutform"

function Home() {

  const [workouts, setWorkouts] = useState(null)

  useEffect(() => {
    const fetchWorkouts = async() => {
      const response = await fetch('/api/workouts')
      const json = await response.json()

      if (response.ok) {
        setWorkouts(json)
      }
    }

    fetchWorkouts()
  }, [])

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((workout) => (
          <Card key={workout._id} workout={workout}/>
        ))}
      </div>
      <WorkoutForm/>
    </div>
  )
}

export default Home