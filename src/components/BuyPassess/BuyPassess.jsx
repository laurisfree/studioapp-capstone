import './BuyPassess.scss';

export default function BuyPassess() {
  return (
    <>
      <form className='buy-p'>

        <div className='buy-p__wrpr'>
          <p className='buy-p__label'>PURCHASE CLASS PASSESS</p>
          <div className='buy-p__btns-wrpr'>
            <div className='buy-p__selector-item'>
              <input type="radio" id="radio1" name="selector" className='buy-p__selector-item-radio' checked />
              <label for="radio1" className='buy-p__selector-item-label'>5 Passess <br />1.5 hour class <br />$100</label>
            </div>
            <div className='buy-p__selecotr-item'>
              <input type="radio" id="radio2" name="selector" className='buy-p__selector-item-radio' />
              <label for="radio2" className='buy-p__selector-item-label'>10 Passess <br /> 1.5 hour class <br />$200</label>
            </div>
          </div>
        </div>

      </form>
    </>
  );
}