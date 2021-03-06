import React from "react";
import ChaptercardThree from '../../globalComponents/ChapterCardThree'
import BookSlider from '../../localComponents/BookSlider'

import sliderImg from '../../assests/BookLong/Shareerasthana-1.png'
import '../../App.css';

const Book4 = () => {

    return (
        <div>
            <BookSlider img={sliderImg} />
            <ChaptercardThree text1="1. कतिधापुरुषीयशारीरम् अध्याय" path1="/shareerasthana/chapter1" text2="2. अतुल्यगोत्रीयशारीरम् अध्याय" path2="/shareerasthana/chapter2" text3="3. खुड्डिकागर्भावक्रान्तिशारीरम् अध्याय" path3="/shareerasthana/chapter3"/>
            <ChaptercardThree text1="4. महतीगर्भावक्रान्तिशारीरम् अध्याय" path1="/shareerasthana/chapter4" text2="5. पुरुषविचयशारीरम् अध्याय" path2="/shareerasthana/chapter5" text3="6. शरीरविचयशारीरम् अध्याय" path3="/shareerasthana/chapter6"/>
            <ChaptercardThree text1="7. शरीरसङ्ख्याशारीरम् अध्याय" path1="/shareerasthana/chapter7" text2="8. जातिसूत्रीयशारीरम् अध्याय" path2="/shareerasthana/chapter8" text3="" path3="/"/>
        </div>
    )
    
}

export default Book4
