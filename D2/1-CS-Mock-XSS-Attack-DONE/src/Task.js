

const Task = ({ text, image, index }) => {
  return (
    <div>
      <h3>
      {index + 1}. {text}{' '}
      </h3>
      <img style={{ maxWidth: 200 }} src={image} alt={text} />
    </div>
  )
}

export default Task