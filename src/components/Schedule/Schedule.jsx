import './Schedule.scss';

export default function Schedule() {
  return (
    <>
      <div className='schedule'>
        {/* <div>When would you be dancing</div> */}
        <div className='schedule__day-wrpr'>
          <div>THURSDAY 01 DEC</div>
        </div>
        <div className='schedule__info-wrpr'>
          <div >10:00 PST</div>
          <div>ADV. BALLET</div>
          <div>MARY SHELLBY</div>
          <button className='schedule__btn'>+</button>
          <button className='schedule__btn'>BOOK</button>
        </div>
      </div>
    </>
  );
}

