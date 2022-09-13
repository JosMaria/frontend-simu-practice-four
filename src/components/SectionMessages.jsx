import '../stylesheets/SectionMessages.css';

export const SectionMessages = ({ messages = []}) => {
  return (
    <div className='section-messages-container'>
      <h2 className='title-section-messages'>Mensajes del resultado</h2>
      <div className='section-messages'>
      {
        messages.length === 0 ?
        <h3 className='nothing-messages'>NO HAY MENSAJES</h3> : 
        <ul className='messages'>
        {
          messages.map((message, index) => <li key={index}>{message}</li>)
        }
        </ul>
      }
      </div>
    </div>
  )
}