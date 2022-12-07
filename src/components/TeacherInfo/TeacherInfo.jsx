import './TeacherInfo.scss';
import imgclass1 from '../../assets/'


export default function TeacherInfo() {
  return (
    <>
        <div className='class-info'>
          <div className='class-info__main-wrpr'>
            <p>ADV. BALLET</p>
          </div>
          <div>
            <p>CHALLENGING CLASS FOR PEOPLE YOU HAVE BEEN PRACTISING BALLET FOR MORE THAN 3 YEARS. 
            BARRE, CENTER. LIVE PIANO WHEN AVAILABLE.</p>
          </div>
          <div>
            <img src={class1img} alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        {/* Info of the teacher */}
        <div className='teacher-info'>
          <div className='teacher-info__main-wrpr'>
            <p>MARY SHELLBY</p>
          </div>
          <div>
            <p>MARY STARTED HER CARRER IN 1990 SHE DANCED FOR THE ROYAL PARIS OPERA FOR 10 YEARES, 
              SHE HAS COLABORATED WITH HIG COREOGRAPHES IN THE INDUSTY</p>
          </div>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        
    </>
  );
}
