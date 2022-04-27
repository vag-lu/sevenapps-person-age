import './index.css'

const Person = ({data}) => {
    return (
        <div className='person'>
            <div>
                {data.name}
            </div>
            <div>
                {data.age}
            </div>
        </div>
    )
}

export default Person;