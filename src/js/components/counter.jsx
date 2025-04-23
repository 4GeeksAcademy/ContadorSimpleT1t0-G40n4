function SimpleCounter(props){
  return (
    <div className='bigBox'>
      <div className='digit'><i className="fa-regular fa-clock"></i></div>
      <div className='six'>{props.digitsix % 10}</div>
      <div className='five'>{props.digitfive % 10}</div>
      <div className='four'>{props.digitfour % 10}</div>
      <div className='three'>{props.digitthree % 10}</div>
      <div className='two'>{props.digittwo % 10}</div>
      <div className='one'>{props.digitone % 10}</div>
      
      
    </div>
  )
}
export default SimpleCounter; 